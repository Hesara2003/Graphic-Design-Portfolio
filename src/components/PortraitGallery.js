import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Plus, ArrowUpRight } from 'lucide-react';
import Poster1 from '../img/Poster 1.jpeg';
import Poster2 from '../img/Poster 2.jpeg';
import Poster3 from '../img/Poster 3.jpeg';

const PortfolioSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      title: "Mobile App Design",
      category: "UI/UX",
      image: Poster1,
      description: "Modern mobile application interface design",
      color: "rgb(168, 85, 247)" // Purple
    },
    {
      id: 2,
      title: "Event Poster",
      category: "Poster",
      image: Poster2,
      description: "Creative event promotional poster",
      color: "rgb(59, 130, 246)" // Blue
    },
    {
      id: 3,
      title: "Banking App Interface",
      category: "UI/UX",
      image: Poster3,
      description: "Digital banking experience design",
      color: "rgb(236, 72, 153)" // Pink
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: 45 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.610, 0.355, 1.000],
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0, scale: 0.9, backdropFilter: 'blur(0px)' },
    visible: {
      opacity: 1,
      scale: 1,
      backdropFilter: 'blur(20px)',
      transition: {
        duration: 0.4,
        ease: [0.215, 0.610, 0.355, 1.000]
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      backdropFilter: 'blur(0px)',
      transition: {
        duration: 0.3
      }
    }
  };

  const FloatingArrow = ({ isHovered }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ 
        opacity: isHovered ? 1 : 0,
        scale: isHovered ? 1 : 0.5,
        x: isHovered ? 10 : 0,
        y: isHovered ? -10 : 0,
      }}
      transition={{ duration: 0.3 }}
      className="absolute top-4 right-4"
    >
      <ArrowUpRight className="text-white" size={24} />
    </motion.div>
  );

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20 px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
     
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Showcasing my latest UI/UX designs and poster artwork
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ 
                y: -15,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="relative group"
              onHoverStart={() => setHoveredId(item.id)}
              onHoverEnd={() => setHoveredId(null)}
            >
              <motion.div 
                className="relative overflow-hidden rounded-xl aspect-[3/4] bg-gray-800/50 backdrop-blur-sm border border-gray-700"
                animate={{
                  boxShadow: hoveredId === item.id 
                    ? `0 20px 40px ${item.color}20, 0 0 20px ${item.color}10`
                    : '0 0 0 rgba(0,0,0,0)'
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-6"
                >
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-300 mb-4">{item.description}</p>
                  <motion.button
                    onClick={() => setSelectedImage(item)}
                    className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full hover:bg-white/30 transition-colors w-fit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Plus size={20} />
                    <span>View Details</span>
                  </motion.button>
                </motion.div>
                <FloatingArrow isHovered={hoveredId === item.id} />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={overlayVariants}
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={{ 
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.5,
                  ease: [0.215, 0.610, 0.355, 1.000]
                }
              }}
              exit={{ 
                opacity: 0,
                y: 100,
                scale: 0.8,
                transition: {
                  duration: 0.3
                }
              }}
              className="bg-gray-800/90 p-6 rounded-2xl max-w-2xl w-full border border-gray-700"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-lg">
                <motion.img
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
                <p className="text-gray-400 mb-4">{selectedImage.description}</p>
                <div className="flex justify-between items-center">
                  <motion.span 
                    className="text-purple-400"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    {selectedImage.category}
                  </motion.span>
                  <motion.button
                    className="flex items-center space-x-2 text-white hover:text-purple-400 transition-colors"
                    onClick={() => setSelectedImage(null)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={20} />
                    <span>Close</span>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioSection;