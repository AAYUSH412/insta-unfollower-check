import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Optimized service worker registration
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        if (import.meta.env.DEV) {
          console.log('✅ Service Worker registered:', registration.scope);
        }
        
        // Check for updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // Show update notification without console log in production
                if (import.meta.env.DEV) {
                  console.log('🔄 New content available');
                }
              }
            });
          }
        });
      })
      .catch(error => {
        if (import.meta.env.DEV) {
          console.error('❌ Service Worker registration failed:', error);
        }
      });
  });
}

// Minimal performance monitoring for production
if (typeof window !== 'undefined' && import.meta.env.DEV) {
  // Only monitor in development to reduce production bundle size
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      console.log(`📊 ${entry.name}:`, entry.value);
    }
  });
  
  try {
    observer.observe({ entryTypes: ['measure', 'navigation'] });
  } catch (error) {
    console.log('Performance observer not supported:', error.message);
  }
}

// Production-optimized error handling
if (typeof window !== 'undefined') {
  const handleError = (error, context) => {
    if (import.meta.env.DEV) {
      console.error(`${context}:`, error);
    }
    // In production, you might want to send to error tracking service
  };

  window.addEventListener('unhandledrejection', (event) => {
    handleError(event.reason, 'Unhandled promise rejection');
    event.preventDefault();
  });

  window.addEventListener('error', (event) => {
    handleError(event.error, 'Global error');
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
