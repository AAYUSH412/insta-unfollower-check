import { ArrowUpTrayIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import Guide from './Guide'
import Unfollowers from './Unfollowers'

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            Instagram Unfollower Checker | Who Unfollowed Me?
          </h1>
          <h2 className="text-xl text-gray-300 mb-8">
            Free Instagram Analytics Tool - Find Non-Followers, Track Unfollowers & Analyze Your Instagram Stats Instantly
          </h2>
          <p className="text-lg text-gray-400 mb-6">
            100% Free • No Login Required • Secure & Private • Instant Results
          </p>
          <a
            href="#upload"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105"
          >
            <ArrowUpTrayIcon className="w-5 h-5 mr-2" />
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-900/50">
        <h2 className="text-3xl font-bold text-center text-purple-400 mb-12">Why Choose Our Instagram Follower Analyzer?</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-effect p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Privacy First</h3>
            <p className="text-gray-300">100% secure local processing - your data never leaves your device</p>
          </div>
          <div className="glass-effect p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Easy to Use</h3>
            <p className="text-gray-300">Simply upload your Instagram data files and get instant results</p>
          </div>
          <div className="glass-effect p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Fast Results</h3>
            <p className="text-gray-300">Get detailed analysis of your Instagram followers in seconds</p>
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
    </div>
  )
}

export default Home