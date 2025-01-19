import React, { useState, useEffect } from 'react';
import { Github, Linkedin, ArrowDownCircle } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id='home' className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-800 to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-64 md:w-96 h-64 md:h-96 -top-10 -left-10 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute w-64 md:w-96 h-64 md:h-96 -bottom-10 -right-10 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Content container */}
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 transform text-center
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6 transition-all duration-700 hover:scale-105">
          Building{' '}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent hover:from-purple-400 hover:to-indigo-500 transition-all duration-300">
            Digital Experiences
          </span>
        </h1>

        {/* Tagline */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-4 sm:mb-8 transition-all duration-500 hover:text-gray-100 px-4">
          Transforming ideas into elegant solutions
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-xl sm:max-w-2xl mx-auto mb-8 sm:mb-12 transition-all duration-500 hover:text-gray-200 px-4">
          Passionate about creating intuitive and immersive digital experiences 
          that combine innovative design with cutting-edge technology.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-8 sm:mb-16 px-4">
          <button className="w-full sm:w-auto group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-white font-semibold text-base sm:text-lg transition-all duration-300 hover:from-purple-500 hover:to-indigo-500 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25">
            <span className="flex items-center justify-center gap-2">
              <span className="transform group-hover:scale-110 transition-transform duration-300">💼</span>
              View Projects
            </span>
          </button>
          
          <button className="w-full sm:w-auto group px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm rounded-full text-white font-semibold text-base sm:text-lg transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-lg">
            <span className="flex items-center justify-center gap-2">
              <span className="transform group-hover:scale-110 transition-transform duration-300">✉️</span>
              Contact Me
            </span>
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 sm:gap-8 mb-8">
          <a className="group" href="https://github.com/Hesara2003">
            <Github className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 transition-all duration-300 group-hover:text-white group-hover:scale-110" />
          </a>
          <a className="group" href="https://www.linkedin.com/in/hesaraperera">
            <Linkedin className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 transition-all duration-300 group-hover:text-white group-hover:scale-110" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-300 hover:translate-y-2">
        <button className="group flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-300">
          <span className="text-xs sm:text-sm mb-2">Scroll Down</span>
          <ArrowDownCircle className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce group-hover:animate-none" />
        </button>
      </div>
    </section>
  );
};

export default Hero;