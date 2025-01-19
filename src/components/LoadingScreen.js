import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 800);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Background animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-ping"></div>
      </div>

      {/* Main loading animation */}
      <div className="relative w-32 h-32 mb-8">
        {/* Outer rotating squares */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 border-2 border-blue-500/50 rounded-lg"
            style={{
              animation: `spin ${2 + i * 0.5}s linear infinite`,
              transform: `rotate(${i * 45}deg) scale(${1 + i * 0.2})`,
            }}
          ></div>
        ))}

        {/* Inner animated circle */}
        <div className="absolute inset-4 border-4 border-purple-500/50 rounded-full animate-spin">
          <div className="absolute inset-2 border-4 border-cyan-500/50 rounded-full animate-spin-slow"></div>
        </div>

        {/* Center dot */}
        <div className="absolute inset-0 m-auto w-4 h-4 bg-white rounded-full animate-pulse"></div>
      </div>

      {/* Progress text with glowing effect */}
      <div className="relative text-blue-500 font-bold text-3xl mb-6">
        <span className="absolute inset-0 animate-pulse blur-md">
          {Math.min(100, Math.round(progress))}%
        </span>
        <span className="relative">
          {Math.min(100, Math.round(progress))}%
        </span>
      </div>

      {/* Progress bar */}
      <div className="relative w-64 h-2 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
        </div>
      </div>

      {/* Loading text with typewriter effect */}
      <div className="mt-6 text-lg">
        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 animate-pulse">
          Loading Portfolio
        </span>
        <span className="inline-block animate-bounce">...</span>
      </div>
    </div>
  );
};

// Add custom keyframes for shimmer animation
const style = document.createElement('style');
style.textContent = `
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  @keyframes spin-slow {
    to { transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);

export default LoadingScreen;