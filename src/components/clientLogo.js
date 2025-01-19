import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const ClientLogos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const backgroundControls = useAnimation();

  const clients = [
    {
      id: 1,
      name: "Apple Inc.",
      description: "Rebranded entire digital identity, resulting in 40% increased engagement",
      industry: "Technology"
    },
    {
      id: 2,
      name: "EcoStyle",
      description: "Created sustainable packaging design across product line",
      industry: "Fashion"
    },
    {
      id: 3,
      name: "FoodFusion",
      description: "Designed award-winning restaurant branding and menu system",
      industry: "Restaurant"
    },
    {
      id: 4,
      name: "BuildWell",
      description: "Developed modern identity for luxury real estate brand",
      industry: "Real Estate"
    },
    {
      id: 5,
      name: "HealthHub",
      description: "Created user-friendly healthcare platform interface",
      industry: "Healthcare"
    },
    {
      id: 6,
      name: "SportFlex",
      description: "Designed dynamic brand identity for sports equipment",
      industry: "Sports"
    }
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => handleNext(), 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % clients.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + clients.length) % clients.length);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const orbVariants = {
    animate: {
      x: mousePosition.x * 0.05,
      y: mousePosition.y * 0.05,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20
      }
    }
  };

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Interactive background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          variants={orbVariants}
          animate="animate"
          className="absolute w-96 h-96 top-0 right-0"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-full h-full bg-indigo-500/10 rounded-full blur-3xl"
          />
        </motion.div>
        <motion.div
          variants={orbVariants}
          animate="animate"
          className="absolute w-96 h-96 bottom-0 left-0"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
              rotate: [360, 180, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
            className="w-full h-full bg-purple-500/10 rounded-full blur-3xl"
          />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Animated header with floating particles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative"
        >
          {/* Floating particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-500/20 rounded-full"
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                scale: [1, 0],
                opacity: [0.5, 0]
              }}
              transition={{
                duration: Math.random() * 2 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}

          <motion.h2
            className="text-5xl font-bold mb-4 relative"
            whileHover={{ scale: 1.02 }}
          >
            <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
              Trusted by Industry Leaders
            </span>
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-lg blur-xl"
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We've had the privilege of working with amazing brands across various industries
          </p>
        </motion.div>

        {/* Enhanced Logos Slider with 3D effect */}
        <div className="relative px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, rotateY: -90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: 90 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20
              }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[...Array(3)].map((_, i) => {
                const clientIndex = (currentIndex + i) % clients.length;
                const client = clients[clientIndex];
                
                return (
                  <motion.div
                    key={client.id}
                    className="relative group perspective"
                    whileHover={{ 
                      rotateX: 5,
                      rotateY: 5,
                      scale: 1.05,
                      z: 50
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl blur-xl"
                      animate={{
                        opacity: [0, 0.5, 0],
                        scale: [0.8, 1.2, 0.8],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    <div className="relative bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 group-hover:border-purple-500/50 transition-all duration-500">
                      <div className="h-16 flex items-center justify-center mb-6">
                        <motion.h3
                          className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
                          whileHover={{ scale: 1.05 }}
                        >
                          {client.name}
                        </motion.h3>
                      </div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                      >
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {client.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-purple-400 text-sm">{client.industry}</span>
                          <Sparkles className="w-4 h-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Enhanced navigation buttons */}
          <motion.button
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 p-3 rounded-full text-white shadow-lg hover:shadow-indigo-500/25"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500 to-indigo-500 p-3 rounded-full text-white shadow-lg hover:shadow-purple-500/25"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Enhanced CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full text-white font-semibold text-lg"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              animate={{
                x: ["0%", "100%"],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <span className="relative flex items-center gap-2">
              Start Your Project
              <motion.span
                animate={{
                  x: [0, 5, 0],
                  opacity: [1, 0.5, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                →
              </motion.span>
            </span>
          </motion.button>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 8s linear infinite;
        }
        .perspective {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default ClientLogos;