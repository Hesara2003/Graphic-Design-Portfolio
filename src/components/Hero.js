import React from 'react';
import HeroImage from '../img/Hero.jpg';
import { Github, Linkedin, ArrowDownCircle } from 'lucide-react';

const Hero = () => {
  const styles = `
    @keyframes fadeIn {
      0% { opacity: 0; transform: translateY(30px); }
      100% { opacity: 1; transform: translateY(0); }
    }

    @keyframes slideIn {
      0% { transform: translateY(50px); opacity: 0; }
      100% { transform: translateY(0); opacity: 1; }
    }

    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
  `;

  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);

  return (
    <section
      className="hero-section h-screen flex flex-col items-center justify-center relative bg-fixed bg-cover bg-center text-center"
      style={{
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent opacity-90 z-0"></div>

      <div className="container mx-auto px-6 lg:px-32 relative z-10">
        {/* Hero Header */}
        <h1
          className="text-5xl lg:text-6xl font-extrabold text-white leading-tight shadow-lg"
          style={{ animation: 'fadeIn 1s ease-out' }}
        >
          Welcome to <span className="text-indigo-400">My Portfolio</span>
        </h1>

        {/* Tagline */}
        <h2 className="text-2xl text-gray-300 mt-2" style={{ animation: 'slideIn 1s ease-out', animationDelay: '0.5s' }}>
          Crafting digital experiences that inspire.
        </h2>

        {/* Subheading */}
        <p
          className="text-lg sm:text-xl lg:text-2xl text-gray-200 mt-6"
          style={{ animation: 'slideIn 1s ease-out', animationDelay: '0.7s' }}
        >
          Discover my latest projects, explore my design philosophy, and see how I bring creative ideas to life with cutting-edge technology.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row sm:space-x-4 sm:space-y-0 space-y-4 justify-center">
          <a
            href="#projects"
            className="bg-indigo-500 text-white py-3 px-8 sm:py-4 sm:px-12 rounded-full text-lg sm:text-xl font-semibold hover:bg-indigo-600 transition-all duration-300 ease-in-out transform hover:scale-110 flex items-center"
            style={{ animation: 'slideIn 1s ease-out', animationDelay: '1s' }}
          >
            <span className="mr-2">📁</span> View My Projects
          </a>

          <a
            href="#contact "
            className="bg-gray-800 text-white py-3 px-8 sm:py-4 sm:px-12 rounded-full text-lg sm:text-xl font-semibold hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-110 flex items-center"
            style={{ animation: 'slideIn 1s ease-out', animationDelay: '1.2s' }}
          >
            <span className="mr-2">✉️</span> Get In Touch
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="mt-12 flex justify-center gap-6 text-gray-200">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <Github size={40} className="hover:text-indigo-400 transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer">
            <Linkedin size={40} className="hover:text-indigo-400 transition duration-300" />
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <a
          href="#about"
          className="text-gray-100 text-lg hover:text-indigo-300 transition duration-300 transform hover:scale-110"
          style={{ animation: 'pulse 2s infinite' }}
        >
          Scroll Down
          <ArrowDownCircle className="w-8 h-8 mx-auto mt-2 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;