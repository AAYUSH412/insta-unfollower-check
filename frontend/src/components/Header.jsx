import { Home, Instagram, HelpCircle, BarChart2, Menu, X } from 'lucide-react'
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
      if (mobileMenuOpen && !e.target.closest('.mobile-menu-container')) {
        setMobileMenuOpen(false)
      }
    }
    
    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      document.addEventListener('click', handleClickOutside)
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
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled 
          ? 'glass-effect shadow-xl border-b border-white/10' 
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <Instagram 
                className="w-7 h-7 sm:w-8 sm:h-8 text-blue-400 transition-all duration-300 group-hover:text-blue-300 group-hover:scale-110" 
                aria-hidden="true" 
              />
              <div className="absolute -inset-1 bg-blue-400/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <Link 
              to="/" 
              className="flex items-center focus-ring rounded-lg px-2 py-1 -ml-2"
              aria-label="Instagram Tracker - Home"
            >
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-400 bg-size-200 bg-pos-0 hover:bg-pos-100 text-transparent bg-clip-text transition-all duration-700">
                Insta Tracker
              </span>
              <span className="ml-2 text-xl transition-transform duration-300 group-hover:scale-110" aria-hidden="true">👥</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2" role="navigation" aria-label="Main navigation">
            <button 
              onClick={() => scrollToSection('features')}
              className="flex items-center space-x-2 px-4 py-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 focus-ring group"
              aria-label="View Features section"
            >
              <BarChart2 className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              <span className="font-medium">Features</span>
            </button>
            
            <button 
              onClick={() => scrollToSection('guide')}
              className="flex items-center space-x-2 px-4 py-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 focus-ring group"
              aria-label="View Guide section"
            >
              <HelpCircle className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              <span className="font-medium">Guide</span>
            </button>
            
            <button 
              onClick={() => scrollToSection('upload')}
              className="flex items-center space-x-2 px-4 py-2 ml-2 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus-ring group"
              aria-label="Upload Instagram Data"
            >
              <Home className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              <span>Upload</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-300 focus-ring"
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
        className={`md:hidden mobile-menu-container transition-all duration-300 ease-in-out ${
          mobileMenuOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
        id="mobile-menu"
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="glass-effect border-t border-white/10 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-2">
            <button
              onClick={() => scrollToSection('features')}
              className="flex items-center space-x-3 w-full py-3 px-4 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 focus-ring group"
              aria-label="View Features section"
            >
              <BarChart2 className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              <span className="font-medium">Features</span>
            </button>
            <button
              onClick={() => scrollToSection('guide')}
              className="flex items-center space-x-3 w-full py-3 px-4 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 focus-ring group"
              aria-label="View Guide section"
            >
              <HelpCircle className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              <span className="font-medium">Guide</span>
            </button>
            <button
              onClick={() => scrollToSection('upload')}
              className="flex items-center justify-center space-x-3 w-full py-3 px-4 mt-3 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 focus-ring group"
              aria-label="Upload Instagram Data"
            >
              <Home className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              <span>Upload Instagram Data</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;