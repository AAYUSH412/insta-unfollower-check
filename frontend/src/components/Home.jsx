import { ArrowUpTrayIcon, ShieldCheckIcon, ChartBarIcon, UserGroupIcon, SparklesIcon } from '@heroicons/react/24/outline'
import Guide from './Guide'
import Unfollowers from './Unfollowers'
import { AnimatedMeshBackground, SimpleGradientBackground, CleanBackground } from './AnimatedBackground'
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
    <>
      {/* Hero Section with Premium Animated Background */}
      <AnimatedMeshBackground variant="hero">
        <section className="relative py-24 px-4">
          <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-700/25 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-8">
                <SparklesIcon className="w-4 h-4 mr-2" />
                100% Free • Privacy-First • No Login Required
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                Instagram Unfollower Checker
              </h1>
              
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-slate-700 dark:text-slate-200 mb-8 leading-relaxed">
                Find Who Unfollowed You & Analyze Your Instagram Stats Instantly
              </h2>
              
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Advanced Instagram analytics tool that processes your data locally. 
                Get detailed insights about your followers, non-followers, and engagement metrics 
                without compromising your privacy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <a
                  href="#upload"
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
                  aria-label="Get started with Instagram Unfollower Checker"
                >
                  <ArrowUpTrayIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Analyze Your Instagram
                </a>
                <a
                  href="#guide"
                  className="inline-flex items-center px-8 py-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-700 dark:text-slate-200 font-semibold rounded-xl border-2 border-slate-200/50 dark:border-slate-600/50 hover:border-blue-300 dark:hover:border-blue-500 hover:bg-white/90 dark:hover:bg-slate-700/90 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-slate-300 dark:focus:ring-slate-600"
                >
                  View Guide
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">100%</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Private & Secure</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-emerald-600 dark:text-emerald-400">0</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Data Uploads</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400">Instant</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Results</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-amber-600 dark:text-amber-400">Free</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Forever</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedMeshBackground>

      {/* Features Section with Animated Background */}
      <AnimatedMeshBackground variant="features">
        <section id="features" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Why Choose Our Instagram Analytics Tool?
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Advanced features designed for privacy, security, and comprehensive Instagram insights
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Privacy First Feature */}
              <div className="group relative p-8 bg-gradient-to-br from-blue-50/80 to-blue-100/80 dark:from-blue-900/40 dark:to-blue-800/40 backdrop-blur-sm rounded-2xl border border-blue-200/50 dark:border-blue-700/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100/80 dark:bg-blue-900/80 backdrop-blur-sm rounded-xl mb-6">
                    <ShieldCheckIcon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Privacy First</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    100% secure local processing - your Instagram data never leaves your device. 
                    We prioritize your privacy and security with client-side analytics only.
                  </p>
                  <div className="mt-4 inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold">
                    <span>Zero data uploads</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Easy to Use Feature */}
              <div className="group relative p-8 bg-gradient-to-br from-emerald-50/80 to-emerald-100/80 dark:from-emerald-900/40 dark:to-emerald-800/40 backdrop-blur-sm rounded-2xl border border-emerald-200/50 dark:border-emerald-700/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-emerald-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-100/80 dark:bg-emerald-900/80 backdrop-blur-sm rounded-xl mb-6">
                    <ArrowUpTrayIcon className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Easy to Use</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Simply upload your Instagram data files and get instant results. 
                    No technical knowledge required - intuitive interface with step-by-step guidance.
                  </p>
                  <div className="mt-4 inline-flex items-center text-emerald-600 dark:text-emerald-400 font-semibold">
                    <span>3-step process</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Detailed Analytics Feature */}
              <div className="group relative p-8 bg-gradient-to-br from-purple-50/80 to-purple-100/80 dark:from-purple-900/40 dark:to-purple-800/40 backdrop-blur-sm rounded-2xl border border-purple-200/50 dark:border-purple-700/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-purple-100/80 dark:bg-purple-900/80 backdrop-blur-sm rounded-xl mb-6">
                    <ChartBarIcon className="w-7 h-7 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Detailed Analytics</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Get comprehensive analysis of your followers, including non-followers, 
                    mutual connections, follower ratio, and detailed engagement insights.
                  </p>
                  <div className="mt-4 inline-flex items-center text-purple-600 dark:text-purple-400 font-semibold">
                    <span>Advanced metrics</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Additional Features Row */}
              <div className="group relative p-8 bg-gradient-to-br from-amber-50/80 to-amber-100/80 dark:from-amber-900/40 dark:to-amber-800/40 backdrop-blur-sm rounded-2xl border border-amber-200/50 dark:border-amber-700/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-amber-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-amber-100/80 dark:bg-amber-900/80 backdrop-blur-sm rounded-xl mb-6">
                    <UserGroupIcon className="w-7 h-7 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Mutual Followers</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Discover your mutual connections and understand your follower relationships. 
                    See who follows you back and strengthen your community.
                  </p>
                  <div className="mt-4 inline-flex items-center text-amber-600 dark:text-amber-400 font-semibold">
                    <span>Community insights</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="group relative p-8 bg-gradient-to-br from-red-50/80 to-red-100/80 dark:from-red-900/40 dark:to-red-800/40 backdrop-blur-sm rounded-2xl border border-red-200/50 dark:border-red-700/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-red-100/80 dark:bg-red-900/80 backdrop-blur-sm rounded-xl mb-6">
                    <svg className="w-7 h-7 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Instant Results</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Get your unfollower analysis in seconds, not minutes. 
                    Lightning-fast processing with real-time updates and immediate insights.
                  </p>
                  <div className="mt-4 inline-flex items-center text-red-600 dark:text-red-400 font-semibold">
                    <span>Real-time analysis</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="group relative p-8 bg-gradient-to-br from-indigo-50/80 to-indigo-100/80 dark:from-indigo-900/40 dark:to-indigo-800/40 backdrop-blur-sm rounded-2xl border border-indigo-200/50 dark:border-indigo-700/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-indigo-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-indigo-100/80 dark:bg-indigo-900/80 backdrop-blur-sm rounded-xl mb-6">
                    <svg className="w-7 h-7 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">No Registration</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    No account creation, no email signup, no personal information required. 
                    Start analyzing your Instagram data immediately with complete anonymity.
                  </p>
                  <div className="mt-4 inline-flex items-center text-indigo-600 dark:text-indigo-400 font-semibold">
                    <span>Anonymous usage</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedMeshBackground>

      {/* Upload Section with Premium Animated Background */}
      <AnimatedMeshBackground variant="upload">
        <section id="upload" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Analyze Your Instagram Data
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Upload your Instagram data files to get comprehensive insights about your followers and unfollowers
              </p>
            </div>
            <Unfollowers />
          </div>
        </section>
      </AnimatedMeshBackground>

      {/* Guide Section with Simple Background */}
      <CleanBackground>
        <section id="guide" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                How to Get Your Instagram Data
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Follow our step-by-step guide to download your Instagram data and start analyzing
              </p>
            </div>
            <Guide />
          </div>
        </section>
      </CleanBackground>
      
      {/* FAQ Section with Simple Gradient Background */}
      <SimpleGradientBackground variant="light">
        <section id="faq" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300">
                Everything you need to know about our Instagram unfollower checker
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="group p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 dark:border-slate-700/50 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  Is this tool safe to use?
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed ml-6">
                  Yes, absolutely. All data processing happens locally in your browser using advanced client-side technology. 
                  Your Instagram data never leaves your device, never touches our servers, and is never stored anywhere online. 
                  We prioritize your privacy and security above everything else.
                </p>
              </div>
              
              <div className="group p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 dark:border-slate-700/50 hover:border-emerald-300 dark:hover:border-emerald-600 hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-4"></div>
                  Do I need to log in with my Instagram account?
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed ml-6">
                  No, you don&apos;t need to provide your Instagram credentials or log in through any third-party service. 
                  You only need to download your Instagram data export from Instagram&apos;s settings and upload the specific 
                  JSON files (followers_1.json and following.json) to our tool.
                </p>
              </div>
              
              <div className="group p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 dark:border-slate-700/50 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-4"></div>
                  Is this affiliated with Instagram or Meta?
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed ml-6">
                  No, this is an independent tool created by developers who are passionate about privacy and data analytics. 
                  We are not affiliated with Instagram, Meta, Facebook, or any other social media platform. 
                  This tool is completely independent and open-source.
                </p>
              </div>
              
              <div className="group p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 dark:border-slate-700/50 hover:border-amber-300 dark:hover:border-amber-600 hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-4"></div>
                  How accurate are the results?
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed ml-6">
                  The results are 100% accurate based on the data provided by Instagram in your data export. 
                  Our algorithm processes the exact same data that Instagram has about your followers and following lists. 
                  The accuracy depends on how recent your data export is from Instagram.
                </p>
              </div>
              
              <div className="group p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 dark:border-slate-700/50 hover:border-red-300 dark:hover:border-red-600 hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-4"></div>
                  What file formats do you support?
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed ml-6">
                  We support the standard JSON files that Instagram provides in their data export: 
                  &quot;followers_1.json&quot; (contains your followers list) and &quot;following.json&quot; (contains accounts you follow). 
                  These files must be in the exact format provided by Instagram for accurate analysis.
                </p>
              </div>
            </div>
          </div>
        </section>
      </SimpleGradientBackground>
    </>
  )
}

export default Home