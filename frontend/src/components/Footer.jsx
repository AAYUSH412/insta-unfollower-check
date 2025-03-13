import { Instagram, Github, Twitter } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="glass-effect">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div>
            <p className="text-sm text-gray-300">© {currentYear} Insta Tracker 👥</p>
            <p className="text-xs mt-1 text-gray-400">Find your Instagram unfollowers easily</p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center md:space-x-8 space-y-3 md:space-y-0">
            <div className="flex space-x-4 items-center">
              <a 
                href="https://github.com/yourusername/insta_unfollower_list" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <div className="text-sm text-gray-400">
              <span className="mr-4">Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
        
        {/* Schema.org data for better SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ 
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Instagram Unfollower Checker",
            "url": "https://insta-unfollower-check.vercel.app",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://insta-unfollower-check.vercel.app/?q={search_term}",
              "query-input": "required name=search_term"
            }
          })
        }} />
      </div>
    </footer>
  )
}

export default Footer