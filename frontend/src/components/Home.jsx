import { ArrowUpTrayIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import Guide from './Guide'
import Unfollowers from './Unfollowers'
import { useEffect } from 'react'

const Home = () => {
  // Set page title and meta description dynamically
  useEffect(() => {
    document.title = 'Instagram Unfollower Checker - Find Who Unfollowed You | Free Tool'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Free Instagram unfollower checker tool. Find out who unfollowed you on Instagram, see non-followers, and analyze your follower stats instantly. No login required!')
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            Instagram Unfollower Checker | Who Unfollowed Me?
          </h1>
          <h2 className="text-lg md:text-xl text-gray-300 mb-8">
            Free Instagram Analytics Tool - Find Non-Followers, Track Unfollowers & Analyze Your Instagram Stats Instantly
          </h2>
          <p className="text-base md:text-lg text-gray-400 mb-6">
            100% Free • No Login Required • Secure & Private • Instant Results
          </p>
          <a
            href="#upload"
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg"
            aria-label="Get started with Instagram Unfollower Checker"
          >
            <ArrowUpTrayIcon className="w-5 h-5 mr-2" aria-hidden="true" />
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 bg-gray-900/50">
        <h2 className="text-3xl font-bold text-center text-purple-400 mb-12">Why Choose Our Instagram Follower Analyzer?</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-effect p-6 rounded-xl hover:shadow-purple-500/10 hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Privacy First</h3>
            <p className="text-gray-300">100% secure local processing - your data never leaves your device. We prioritize your privacy and security.</p>
          </div>
          <div className="glass-effect p-6 rounded-xl hover:shadow-purple-500/10 hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Easy to Use</h3>
            <p className="text-gray-300">Simply upload your Instagram data files and get instant results. No technical knowledge required.</p>
          </div>
          <div className="glass-effect p-6 rounded-xl hover:shadow-purple-500/10 hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Detailed Analytics</h3>
            <p className="text-gray-300">Get comprehensive analysis of your followers, including non-followers, mutual connections, and follower ratio.</p>
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section id="upload" className="py-16 px-4">
        <Unfollowers />
      </section>

      {/* Guide Section */}
      <section id="guide" className="py-16 px-4 bg-gray-900/50">
        <Guide />
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-purple-300">Is this tool safe to use?</h3>
              <p className="text-gray-300">Yes, all data processing happens locally in your browser. Your Instagram data never leaves your device.</p>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-purple-300">Do I need to log in with my Instagram account?</h3>
              <p className="text-gray-300">No, you only need to download your Instagram data and upload specific JSON files.</p>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-purple-300">Is this affiliated with Instagram/Meta?</h3>
              <p className="text-gray-300">No, this is an independent tool and is not affiliated with Instagram or Meta.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home