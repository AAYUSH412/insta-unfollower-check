import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  // Update page title for 404 page
  useEffect(() => {
    document.title = 'Page Not Found | Instagram Unfollower Checker';
    return () => {
      document.title = 'Instagram Unfollower Checker - Find Who Unfollowed You | Free Tool';
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <div className="glass-effect p-8 rounded-xl max-w-md">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-gray-800/50 flex items-center justify-center rounded-full mb-6">
            <span className="text-4xl" role="img" aria-label="Not found emoji">
              😕
            </span>
          </div>
          <h1 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            404 - Page Not Found
          </h1>
          <p className="text-gray-300 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <Link 
              to="/"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all"
            >
              <Home className="w-4 h-4" aria-hidden="true" />
              <span>Go to Home</span>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-700/50 text-gray-200 rounded-lg hover:bg-gray-700 transition-all"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Go Back</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
