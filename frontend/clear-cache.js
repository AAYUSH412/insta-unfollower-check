// Development helper script to clear service worker cache
// Run this in browser console if you still have caching issues

console.log('🧹 Clearing all caches and service workers...');

// Clear all caches
if ('caches' in window) {
  caches.keys().then(cacheNames => {
    cacheNames.forEach(cacheName => {
      caches.delete(cacheName);
      console.log(`✅ Deleted cache: ${cacheName}`);
    });
  });
}

// Unregister all service workers
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(registrations => {
    registrations.forEach(registration => {
      registration.unregister();
      console.log('✅ Service worker unregistered');
    });
  });
}

// Clear localStorage and sessionStorage
localStorage.clear();
sessionStorage.clear();
console.log('✅ Local and session storage cleared');

console.log('🎉 Cache clearing complete! Please refresh the page.');
