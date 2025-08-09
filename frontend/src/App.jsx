import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SpeedInsights } from '@vercel/speed-insights/react';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import NotFound from './components/NotFound'

const App = () => {
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