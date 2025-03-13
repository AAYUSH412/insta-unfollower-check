import { Home, Instagram, HelpCircle, BarChart2 } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Header = () => {
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`fixed w-full z-50 glass-effect transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Instagram className="w-8 h-8 text-purple-400" aria-hidden="true" />
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                Insta Tracker
              </span>
              <span className="ml-2" aria-hidden="true">👥</span>
            </Link>
          </div>

          <nav className="flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('features')}
              className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
              aria-label="View Features"
            >
              <BarChart2 className="w-5 h-5" />
              <span className="hidden sm:inline">Features</span>
            </button>
            
            <button 
              onClick={() => scrollToSection('guide')}
              className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
              aria-label="View Guide"
            >
              <HelpCircle className="w-5 h-5" />
              <span>Guide</span>
            </button>
            
            <button 
              onClick={() => scrollToSection('upload')}
              className="flex items-center space-x-1 px-3 py-1.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white hover:from-purple-700 hover:to-pink-700 transition-colors"
              aria-label="Upload Instagram Data"
            >
              <Home className="w-5 h-5" />
              <span>Upload</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header