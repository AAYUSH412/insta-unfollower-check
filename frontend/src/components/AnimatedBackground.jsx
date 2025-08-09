import { useEffect, useState } from 'react';

// Premium Animated Mesh Gradient Background Component
const AnimatedMeshBackground = ({ children, variant = 'default' }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getVariantConfig = () => {
    switch (variant) {
      case 'hero':
        return {
          primary: "absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/30 to-purple-500/20 dark:from-blue-400/40 dark:to-purple-400/25 rounded-full blur-3xl animate-pulse",
          secondary: "absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tl from-emerald-500/25 to-cyan-500/20 dark:from-emerald-400/35 dark:to-cyan-400/25 rounded-full blur-3xl animate-bounce-slow",
        };
      case 'features':
        return {
          primary: "absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-indigo-500/20 to-blue-500/15 dark:from-indigo-400/30 dark:to-blue-400/20 rounded-full blur-3xl animate-pulse",
          secondary: "absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tl from-emerald-500/20 to-teal-500/15 dark:from-emerald-400/30 dark:to-teal-400/20 rounded-full blur-3xl animate-bounce-slow",
          floating: "absolute top-1/3 right-1/3 w-48 h-48 bg-gradient-to-r from-purple-500/15 to-pink-500/10 dark:from-purple-400/25 dark:to-pink-400/15 rounded-full blur-2xl animate-float"
        };
      case 'upload':
        return {
          primary: "absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-br from-blue-600/25 to-indigo-600/20 dark:from-blue-500/35 dark:to-indigo-500/25 rounded-full blur-3xl animate-pulse",
          secondary: "absolute -bottom-32 -right-32 w-72 h-72 bg-gradient-to-tl from-emerald-600/20 to-green-600/15 dark:from-emerald-500/30 dark:to-green-500/20 rounded-full blur-3xl animate-bounce-slow",
          floating: "absolute top-2/3 left-1/4 w-56 h-56 bg-gradient-to-r from-violet-600/15 to-purple-600/10 dark:from-violet-500/25 dark:to-purple-500/15 rounded-full blur-2xl animate-float"
        };
      default:
        return {
          primary: "absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/15 dark:from-blue-400/30 dark:to-purple-400/20 rounded-full blur-3xl animate-pulse",
          secondary: "absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tl from-emerald-500/20 to-cyan-500/15 dark:from-emerald-400/30 dark:to-cyan-400/20 rounded-full blur-3xl animate-bounce-slow",
          floating: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-violet-500/15 to-fuchsia-500/10 dark:from-violet-400/25 dark:to-fuchsia-400/15 rounded-full blur-2xl animate-float"
        };
    }
  };

  const config = getVariantConfig();

  return (
    <div className="relative overflow-hidden bg-white dark:bg-slate-900">
      {/* Animated gradient orbs */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {/* Primary orb */}
        <div className={config.primary} />
        
        {/* Secondary orb */}
        <div className={config.secondary} style={{ animationDelay: '1s' }} />
        
        {/* Floating orb */}
        <div className={config.floating} style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

// Simple gradient background for less prominent sections
const SimpleGradientBackground = ({ children, variant = 'light' }) => {
  const bgClass = variant === 'light' 
    ? 'bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900'
    : 'bg-gradient-to-br from-white via-slate-50 to-emerald-50/30 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800';

  return (
    <div className={`relative ${bgClass}`}>
      {/* Subtle radial overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

// Clean background for focused content areas
const CleanBackground = ({ children }) => {
  return (
    <div className="relative bg-white dark:bg-slate-800">
      {children}
    </div>
  );
};

export { AnimatedMeshBackground, SimpleGradientBackground, CleanBackground };
export default AnimatedMeshBackground;
