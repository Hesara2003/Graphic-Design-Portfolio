import React, { useState, useEffect } from 'react';
import { Code, Palette, Zap, Users, ArrowRight, Star, Sparkles } from 'lucide-react';
import Team from '../img/Team.jfif';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStats, setActiveStats] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => setActiveStats(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '80+', label: 'Happy Clients' },
    { number: '10+', label: 'Years Experience' },
    { number: '40+', label: 'Design Awards' }
  ];

  const services = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Brand Identity",
      description: "Creating unique and memorable brand identities that resonate with your target audience."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "Crafting intuitive and engaging user experiences for web and mobile applications."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Creative Direction",
      description: "Guiding projects from concept to completion with innovative creative solutions."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Motion Design",
      description: "Bringing designs to life with captivating animations and transitions."
    }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 -left-48 -top-48 bg-purple-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute w-96 h-96 -right-48 -bottom-48 bg-blue-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute w-96 h-96 left-1/2 top-1/2 bg-cyan-500/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Image and Stats */}
          <div className="relative group">
            {/* Profile/Team Image Container */}
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src= {Team}
                alt="Creative Team"
                className="w-full rounded-2xl transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
              
              {/* Floating Elements */}
              <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md rounded-full p-4 animate-float">
                <Star className="w-6 h-6 text-yellow-400 animate-pulse" />
              </div>
              
              {/* Animated corners */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-700 transform -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-cyan-500 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="relative group/stat bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 text-center transform transition-all duration-500 hover:scale-105 hover:bg-gray-800/80"
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 mt-1 transition-all duration-300 group-hover/stat:text-white">
                    {stat.label}
                  </div>
                  {hoverIndex === index && (
                    <Sparkles className="absolute -top-2 -right-2 w-4 h-4 text-purple-400 animate-spin-slow" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-8">
            <h2 className="relative text-4xl md:text-5xl font-bold">
              <span className="absolute -left-8 top-0 text-6xl text-purple-500/20 font-bold animate-pulse">/</span>
              <span className="relative bg-gradient-to-r from-indigo-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                Crafting Digital Excellence
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed animate-fade-in-up">
              We're a passionate team of creative professionals dedicated to transforming ideas into compelling visual experiences. With a blend of artistry and strategic thinking, we bring brands to life in the digital space.
            </p>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="group relative p-6 rounded-xl bg-gray-800/30 backdrop-blur-sm transition-all duration-500 hover:bg-gray-800/50 hover:transform hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="text-indigo-400 group-hover:text-purple-400 transition-colors duration-300 transform group-hover:scale-110">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mt-4 mb-2 group-hover:text-purple-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-full text-white font-semibold text-lg transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105">
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-full animate-gradient-xy opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative flex items-center gap-2">
                Learn More About Us
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }

        @keyframes gradient-xy {
          0% { background-position: 0% 0% }
          50% { background-position: 100% 100% }
          100% { background-position: 0% 0% }
        }

        @keyframes blob {
          0% { transform: translate(0, 0) scale(1) }
          33% { transform: translate(30px, -50px) scale(1.1) }
          66% { transform: translate(-20px, 20px) scale(0.9) }
          100% { transform: translate(0, 0) scale(1) }
        }

        @keyframes spin-slow {
          0% { transform: rotate(0deg) }
          100% { transform: rotate(360deg) }
        }

        .animate-gradient-x {
          animation: gradient-x 15s ease infinite;
          background-size: 200% 100%;
        }

        .animate-gradient-xy {
          animation: gradient-xy 15s ease infinite;
          background-size: 200% 200%;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;