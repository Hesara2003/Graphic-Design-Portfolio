import React from 'react';
import { motion } from 'framer-motion';
import { Eye, ExternalLink, BookOpen } from 'lucide-react';

const BentoGallery = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'Brand Identity',
      category: 'Branding',
      description: 'Complete visual identity for modern tech startup',
      size: 'large',
      color: 'bg-indigo-900'
    },
    {
      id: 2,
      title: 'Editorial Design',
      category: 'Print',
      description: 'Magazine layout and typography',
      size: 'medium',
      color: 'bg-purple-900'
    },
    {
      id: 3,
      title: 'Social Media',
      category: 'Digital',
      description: 'Campaign visuals for Instagram',
      size: 'small',
      color: 'bg-fuchsia-900'
    }
  ];

  const getSizeClasses = (size) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2';
      case 'medium':
        return 'md:col-span-2 md:row-span-1';
      default:
        return 'md:col-span-1 md:row-span-1';
    }
  };

  return (
    <section className="w-screen min-h-screen bg-gradient-to-b from-black to-gray-900">
      <div className="w-full px-4 md:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent top-4 bg-clip-text">
            Featured Work
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transforming ideas into compelling visual narratives through innovative design solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px]">
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group ${getSizeClasses(item.size)} ${item.color}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/60 transition-opacity duration-300">
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-white backdrop-blur-sm">
                      {item.category}
                    </span>
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      className="flex gap-2"
                    >
                      <button className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
                        <Eye size={16} className="text-white" />
                      </button>
                      <button className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
                        <ExternalLink size={16} className="text-white" />
                      </button>
                    </motion.div>
                  </div>
                  
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGallery;
