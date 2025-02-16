import { Home, Instagram, HelpCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="fixed w-full z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Instagram className="w-8 h-8 text-purple-400" />
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                Insta Tracker
              </span>
              <span className="ml-2">👥</span>
            </Link>
          </div>

          <nav className="flex items-center space-x-6">
            <a href="#guide" className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
              <HelpCircle className="w-5 h-5" />
              <span>Guide</span>
            </a>
            <a href="#upload" className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
              <Home className="w-5 h-5" />
              <span>Upload</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header