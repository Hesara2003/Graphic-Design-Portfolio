import React from 'react';
import { Circle, CheckCircle, Sparkles } from 'lucide-react';

const AnimatedPopup = ({ showPopup }) => {
  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
      <div className="relative">
        {/* Background blur effect */}
        <div className="absolute inset-0 blur-xl bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-full animate-pulse" />
        
        {/* Main popup container */}
        <div className="relative bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 rounded-2xl shadow-2xl overflow-hidden animate-slideUp">
          {/* Shimmering overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 animate-shimmer" />
          
          {/* Content container */}
          <div className="relative px-8 py-4 flex items-center gap-4">
            {/* Animated icon container */}
            <div className="relative">
              {/* Rotating outer ring */}
              <div className="absolute inset-0 border-4 border-white/30 rounded-full animate-spin-slow" />
              
              {/* Icon background */}
              <div className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center animate-bounce">
                <CheckCircle className="w-6 h-6 text-emerald-600 animate-pulse" />
                
                {/* Sparkle effects */}
                <div className="absolute -top-1 -right-1">
                  <Sparkles className="w-4 h-4 text-yellow-300 animate-ping" />
                </div>
              </div>
            </div>

            {/* Text content */}
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg tracking-wide animate-fadeIn">
                Email Copied!
              </span>
              <span className="text-emerald-100 text-sm animate-slideLeft">
                Ready to paste
              </span>
            </div>
          </div>

          {/* Bottom border animation */}
          <div className="h-1 bg-gradient-to-r from-emerald-300 to-teal-300 animate-progressBar" />
        </div>

        {/* Particle effects */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full animate-float"
            style={{
              left: `${30 * i}%`,
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Add custom keyframes
const style = document.createElement('style');
style.textContent = `
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  @keyframes spin-slow {
    to { transform: rotate(360deg); }
  }
  
  @keyframes slideUp {
    0% { transform: translateY(100%); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  }
  
  @keyframes slideLeft {
    0% { transform: translateX(-10px); opacity: 0; }
    100% { transform: translateX(0); opacity: 1; }
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes progressBar {
    0% { width: 0%; }
    100% { width: 100%; }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0; }
    50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
  }
`;
document.head.appendChild(style);

export default AnimatedPopup;