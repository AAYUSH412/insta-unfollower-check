import { Instagram, Github, Twitter, Heart, Shield, Zap } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'How it Works', href: '#how-it-works' },
      { name: 'FAQ', href: '#faq' },
      { name: 'Guide', href: '#guide' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Data Protection', href: '/data-protection' }
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Bug Report', href: 'https://github.com/AAYUSH412/insta-unfollower-check/issues' },
      { name: 'Feature Request', href: 'https://github.com/AAYUSH412/insta-unfollower-check/discussions' }
    ]
  }

  const socialLinks = [
    {
      name: 'GitHub Repository',
      href: 'https://github.com/AAYUSH412/insta-unfollower-check',
      icon: Github,
      hoverColor: 'hover:text-gray-300'
    },
    {
      name: 'Developer GitHub',
      href: 'https://github.com/AAYUSH412',
      icon: Github,
      hoverColor: 'hover:text-blue-400'
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      icon: Instagram,
      hoverColor: 'hover:text-pink-400'
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com',
      icon: Twitter,
      hoverColor: 'hover:text-blue-400'
    }
  ]

  const features = [
    {
      icon: Shield,
      text: '100% Privacy Protected'
    },
    {
      icon: Zap,
      text: 'Lightning Fast Analysis'
    },
    {
      icon: Heart,
      text: 'Made with Love'
    }
  ]
  
  return (
    <footer className="bg-slate-900/95 border-t border-slate-800/50 mt-auto">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Instagram className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Insta Tracker
              </h3>
            </div>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Discover who unfollowed you on Instagram with complete privacy. 
              All analysis happens locally in your browser - your data never leaves your device.
            </p>
            
            {/* Feature highlights */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm text-slate-300">
                  <feature.icon className="w-4 h-4 text-emerald-400" />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200 focus-ring"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200 focus-ring"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200 focus-ring"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-slate-800/50">
          
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            
            {/* Copyright & Attribution */}
            <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-sm text-slate-400">
                © {currentYear} Insta Tracker. All rights reserved.
              </p>
              <p className="text-xs text-slate-500 flex items-center space-x-1">
                <span>Built with</span>
                <Heart className="w-3 h-3 text-red-400" />
                <span>by</span>
                <a 
                  href="https://github.com/AAYUSH412" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors focus-ring"
                >
                  AAYUSH412
                </a>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`p-2 text-slate-400 ${social.hoverColor} transition-all duration-200 transform hover:scale-110 focus-ring rounded-lg`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Website URL Display */}
          <div className="mt-6 pt-6 border-t border-slate-800/30">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0">
              <p className="text-xs text-slate-500">
                Live at: 
                <a 
                  href="https://insta-unfollower-check.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 text-blue-400 hover:text-blue-300 transition-colors focus-ring"
                >
                  insta-unfollower-check.vercel.app
                </a>
              </p>
              <p className="text-xs text-slate-500">
                Version 2.0 • Last updated {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Schema.org structured data for better SEO */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ 
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Instagram Unfollower Checker",
            "description": "Privacy-focused tool to discover who unfollowed you on Instagram. All analysis happens locally in your browser.",
            "url": "https://insta-unfollower-check.vercel.app",
            "applicationCategory": "SocialNetworkingApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "author": {
              "@type": "Person",
              "name": "AAYUSH412",
              "url": "https://github.com/AAYUSH412"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Insta Tracker",
              "url": "https://insta-unfollower-check.vercel.app"
            },
            "potentialAction": {
              "@type": "UseAction",
              "target": "https://insta-unfollower-check.vercel.app",
              "object": "Instagram Data Analysis"
            },
            "featureList": [
              "Privacy-focused local processing",
              "Instagram unfollower detection",
              "Mutual followers analysis",
              "No data upload required",
              "Real-time results"
            ]
          })
        }} 
      />
    </footer>
  )
}

export default Footer