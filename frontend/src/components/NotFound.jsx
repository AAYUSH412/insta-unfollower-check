import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, ArrowLeftIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { AnimatedMeshBackground } from './AnimatedBackground';

const NotFound = () => {
  // Update page title and meta description for 404 page
  useEffect(() => {
    document.title = 'Page Not Found - 404 | Instagram Unfollower Checker';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Page not found. Return to Instagram Unfollower Checker to analyze your followers and find who unfollowed you.');
    }
    
    // Restore original title when component unmounts
    return () => {
      document.title = 'Instagram Unfollower Checker - Find Who Unfollowed You | Free Tool';
      if (metaDescription) {
        metaDescription.setAttribute('content', 'Free Instagram unfollower checker tool. Find out who unfollowed you on Instagram, see non-followers, and analyze your follower stats instantly. No login required!');
      }
    };
  }, []);

  return (
    <AnimatedMeshBackground variant="default">
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-16">
        {/* Content Container */}
        <div className="relative max-w-lg mx-auto text-center">
          {/* Error Icon */}
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto bg-red-100/80 dark:bg-red-900/50 backdrop-blur-sm rounded-full flex items-center justify-center">
              <ExclamationTriangleIcon className="w-10 h-10 text-red-600 dark:text-red-400" aria-hidden="true" />
            </div>
          </div>

          {/* Error Code */}
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-red-100/80 dark:bg-red-900/50 backdrop-blur-sm text-red-700 dark:text-red-300 rounded-full text-sm font-medium">
              Error 404
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-700 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
            Page Not Found
          </h1>

          {/* Description */}
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-2 leading-relaxed">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          
          <p className="text-slate-500 dark:text-slate-400 mb-12">
            The page may have been moved, deleted, or you may have entered an incorrect URL.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/"
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
              aria-label="Return to Instagram Unfollower Checker homepage"
            >
              <HomeIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" aria-hidden="true" />
              Back to Home
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="group inline-flex items-center justify-center px-8 py-4 bg-slate-100/80 hover:bg-slate-200/80 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 backdrop-blur-sm text-slate-700 dark:text-slate-200 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-slate-300 dark:focus:ring-slate-600"
              aria-label="Go back to previous page"
            >
              <ArrowLeftIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" aria-hidden="true" />
              Go Back
            </button>
          </div>

          {/* Help Text */}
          <div className="mt-12 p-6 bg-blue-50/80 dark:bg-blue-900/40 backdrop-blur-sm rounded-xl border border-blue-200/50 dark:border-blue-800/50">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
              Looking for something specific?
            </h3>
            <p className="text-blue-700 dark:text-blue-300 mb-4">
              Visit our homepage to access the Instagram unfollower checker tool and analyze your followers.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Link 
                to="/#upload" 
                className="inline-flex items-center px-4 py-2 bg-blue-100/80 hover:bg-blue-200/80 dark:bg-blue-800/80 dark:hover:bg-blue-700/80 backdrop-blur-sm text-blue-700 dark:text-blue-200 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Upload Files
              </Link>
              <Link 
                to="/#guide" 
                className="inline-flex items-center px-4 py-2 bg-blue-100/80 hover:bg-blue-200/80 dark:bg-blue-800/80 dark:hover:bg-blue-700/80 backdrop-blur-sm text-blue-700 dark:text-blue-200 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                User Guide
              </Link>
              <Link 
                to="/#faq" 
                className="inline-flex items-center px-4 py-2 bg-blue-100/80 hover:bg-blue-200/80 dark:bg-blue-800/80 dark:hover:bg-blue-700/80 backdrop-blur-sm text-blue-700 dark:text-blue-200 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AnimatedMeshBackground>
  );
};

export default NotFound;
