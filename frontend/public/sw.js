const CACHE_NAME = 'insta-unfollower-cache-v2'; // Bump version to clear old cache
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/instagram.png',
  '/instagram-192.png',
  '/instagram-512.png',
  '/og-image.png'
];

// Check if we're in development mode
const isDevelopment = self.location.hostname === 'localhost' || self.location.hostname === '127.0.0.1';

// Install service worker and cache initial assets
self.addEventListener('install', (event) => {
  // Skip waiting in development for faster updates
  if (isDevelopment) {
    self.skipWaiting();
  }
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Clean up old caches when a new service worker activates
self.addEventListener('activate', (event) => {
  // Take control immediately in development
  if (isDevelopment) {
    self.clients.claim();
  }
  
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Serve cached content when offline
self.addEventListener('fetch', (event) => {
  // In development, use network-first strategy for better development experience
  if (isDevelopment) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // If network request succeeds, clone and cache the response
          if (response && response.status === 200 && response.type === 'basic') {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                if (!event.request.url.includes('/api/')) {
                  cache.put(event.request, responseToCache);
                }
              });
          }
          return response;
        })
        .catch(() => {
          // If network fails, try to serve from cache
          return caches.match(event.request);
        })
    );
  } else {
    // In production, use cache-first strategy
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request).then(
            (response) => {
              // Check if we received a valid response
              if(!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }

              // Clone the response as it's going to be consumed by the browser
              // and we also want to cache it
              const responseToCache = response.clone();

              caches.open(CACHE_NAME)
                .then((cache) => {
                  // Don't cache API requests or other dynamic content
                  if (!event.request.url.includes('/api/')) {
                    cache.put(event.request, responseToCache);
                  }
                });

              return response;
            }
          );
        })
    );
  }
});
