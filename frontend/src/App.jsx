import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SpeedInsights } from '@vercel/speed-insights/react';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import NotFound from './components/NotFound'

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <SpeedInsights />
        <div className="min-h-screen bg-gray-900">
          <Header />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App