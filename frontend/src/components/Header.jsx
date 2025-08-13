import { Home, Instagram, HelpCircle, BarChart2, Menu, X, Github, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show/hide header based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false) // Scrolling down
      } else {
        setIsVisible(true) // Scrolling up
      }
      
      setIsScrolled(currentScrollY > 20)
      setLastScrollY(currentScrollY)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Close mobile menu when clicking outside or on escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }
    
    const handleClickOutside = (e) => {
      if (mobileMenuOpen && !e.target.closest('.mobile-menu-container') && !e.target.closest('[aria-controls="mobile-menu"]')) {
        setMobileMenuOpen(false)
      }
    }
    
    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      // Add a small delay before adding click listener to prevent immediate closure
      setTimeout(() => {
        document.addEventListener('click', handleClickOutside)
      }, 100)
      document.body.style.overflow = 'hidden' // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('click', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const headerHeight = 80 // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerHeight
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      setMobileMenuOpen(false) // Close mobile menu after navigation
    }
  }

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled 
          ? 'bg-white shadow-lg border-b border-gray-200' 
          : 'bg-white/95 backdrop-blur-sm'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <Instagram 
                className="w-8 h-8 sm:w-9 sm:h-9 text-blue-600 transition-all duration-300 group-hover:text-blue-700" 
                aria-hidden="true" 
              />
            </div>
            <Link 
              to="/" 
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg px-2 py-1 -ml-2"
              aria-label="Instagram Tracker - Home"
            >
              <span className="text-xl sm:text-2xl font-bold text-gray-900 transition-colors duration-300 hover:text-blue-600">
                Insta Tracker
              </span>
              <span className="ml-2 text-xl" aria-hidden="true">👥</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" role="navigation" aria-label="Main navigation">
            <button 
              onClick={() => scrollToSection('features')}
              className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium group"
              aria-label="View Features section"
            >
              <BarChart2 className="w-5 h-5 transition-transform duration-200 group-hover:scale-105" />
              <span>Features</span>
            </button>
            
            <button 
              onClick={() => scrollToSection('guide')}
              className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium group"
              aria-label="View Guide section"
            >
              <HelpCircle className="w-5 h-5 transition-transform duration-200 group-hover:scale-105" />
              <span>Guide</span>
            </button>
            
            {/* GitHub Link */}
            <a
              href="https://github.com/AAYUSH412/insta-unfollower-check"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium group"
              aria-label="View project on GitHub"
            >
              <Github className="w-5 h-5 transition-transform duration-200 group-hover:scale-105" />
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
            
            <button 
              onClick={() => scrollToSection('upload')}
              className="flex items-center space-x-2 px-6 py-2.5 ml-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition-all duration-200 transform hover:scale-105 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 group"
              aria-label="Upload Instagram Data"
            >
              <Home className="w-5 h-5 transition-transform duration-200 group-hover:scale-105" />
              <span>Upload Data</span>
            </button>
          </nav>

          {/* Desktop Right Section (Tablet and Up) */}
          <div className="hidden md:flex lg:hidden items-center space-x-2">
            <a
              href="https://github.com/AAYUSH412/insta-unfollower-check"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200"
              aria-label="View project on GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <button
              onClick={(e) => {
                e.stopPropagation()
                setMobileMenuOpen(!mobileMenuOpen)
              }}
              className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
              aria-controls="mobile-menu"
            >
              <div className="relative w-6 h-6">
                <Menu 
                  className={`w-6 h-6 absolute inset-0 transition-all duration-300 ${
                    mobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                  }`} 
                  aria-hidden="true" 
                />
                <X 
                  className={`w-6 h-6 absolute inset-0 transition-all duration-300 ${
                    mobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                  }`} 
                  aria-hidden="true" 
                />
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={(e) => {
                e.stopPropagation()
                setMobileMenuOpen(!mobileMenuOpen)
              }}
              className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
              aria-controls="mobile-menu"
            >
              <div className="relative w-6 h-6">
                <Menu 
                  className={`w-6 h-6 absolute inset-0 transition-all duration-300 ${
                    mobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                  }`} 
                  aria-hidden="true" 
                />
                <X 
                  className={`w-6 h-6 absolute inset-0 transition-all duration-300 ${
                    mobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                  }`} 
                  aria-hidden="true" 
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden mobile-menu-container transition-all duration-300 ease-in-out ${
          mobileMenuOpen 
            ? 'max-h-96 opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible overflow-hidden'
        }`}
        id="mobile-menu"
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-2 max-w-7xl mx-auto">
            <button
              onClick={() => scrollToSection('features')}
              className="flex items-center space-x-3 w-full py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium group"
              aria-label="View Features section"
            >
              <BarChart2 className="w-5 h-5 transition-transform duration-200 group-hover:scale-105" />
              <span>Features</span>
            </button>
            
            <button
              onClick={() => scrollToSection('guide')}
              className="flex items-center space-x-3 w-full py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium group"
              aria-label="View Guide section"
            >
              <HelpCircle className="w-5 h-5 transition-transform duration-200 group-hover:scale-105" />
              <span>Guide</span>
            </button>
            
            <a
              href="https://github.com/AAYUSH412/insta-unfollower-check"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center space-x-3 w-full py-3 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium group"
              aria-label="View project on GitHub"
            >
              <Github className="w-5 h-5 transition-transform duration-200 group-hover:scale-105" />
              <span>GitHub Project</span>
              <ExternalLink className="w-3 h-3 opacity-60 ml-auto" />
            </a>
            
            <a
              href="https://github.com/AAYUSH412"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center space-x-3 w-full py-3 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium group"
              aria-label="View developer profile on GitHub"
            >
              <Github className="w-5 h-5 transition-transform duration-200 group-hover:scale-105" />
              <span>Developer Profile</span>
              <ExternalLink className="w-3 h-3 opacity-60 ml-auto" />
            </a>
            
            <div className="pt-2 border-t border-gray-100">
              <button
                onClick={() => scrollToSection('upload')}
                className="flex items-center justify-center space-x-3 w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-sm group"
                aria-label="Upload Instagram Data"
              >
                <Home className="w-5 h-5 transition-transform duration-200 group-hover:scale-105" />
                <span>Upload Instagram Data</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;