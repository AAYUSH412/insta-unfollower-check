import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Enhanced service worker registration with error handling and updates
// Only register service worker in production to avoid caching issues during development
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('✅ Service Worker registered successfully:', registration.scope);
        
        // Check for updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                console.log('🔄 New content available, please refresh.');
                // You could show a notification to the user here
              }
            });
          }
        });
      })
      .catch(error => {
        console.error('❌ Service Worker registration failed:', error);
      });
  });
} else if ('serviceWorker' in navigator && import.meta.env.DEV) {
  // In development, unregister any existing service workers
  window.addEventListener('load', () => {
    navigator.serviceWorker.getRegistrations().then(registrations => {
      registrations.forEach(registration => {
        registration.unregister();
        console.log('🧹 Service Worker unregistered for development');
      });
    });
  });
}

// Performance monitoring
if (typeof window !== 'undefined') {
  // Monitor Core Web Vitals
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      console.log(`📊 ${entry.name}:`, entry.value);
    }
  });
  
  try {
    observer.observe({ entryTypes: ['measure', 'navigation'] });
  } catch (error) {
    // Fallback for browsers that don't support all entry types
    console.log('Performance observer not fully supported:', error.message);
  }
  
  // Error boundary for unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
    event.preventDefault();
  });
  
  // Global error handler
  window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
  });
}

// Root element with error boundary
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
