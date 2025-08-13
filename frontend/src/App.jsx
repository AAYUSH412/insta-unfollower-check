import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SpeedInsights } from '@vercel/speed-insights/react';
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import NotFound from './components/NotFound'

const App = () => {
  useEffect(() => {
    // Register service worker for better caching and offline support
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('SW registered: ', registration);
          })
          .catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }

    // Performance monitoring
    if ('web-vital' in window) {
      // Monitor Core Web Vitals
      const vitals = ['FCP', 'LCP', 'FID', 'CLS'];
      vitals.forEach((vital) => {
        new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            console.log(`${vital}:`, entry.value);
          });
        }).observe({ type: vital.toLowerCase(), buffered: true });
      });
    }

    // Error boundary for better error tracking
    window.addEventListener('unhandledrejection', (event) => {
      console.error('Unhandled promise rejection:', event.reason);
    });

    window.addEventListener('error', (event) => {
      console.error('Global error:', event.error);
    });
  }, []);

  return (
    <BrowserRouter>
      <SpeedInsights />
      <div className="min-h-screen bg-white dark:bg-slate-900 relative overflow-x-hidden">
        {/* Main content */}
        <div className="relative z-10">
          <Header />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App