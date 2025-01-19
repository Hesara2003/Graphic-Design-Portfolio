import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Palette, Layout, Monitor, Smartphone, Share2, Camera, ArrowRight } from 'lucide-react';

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Brand Identity",
      description: "Create memorable brand identities through thoughtful logo design, color palettes, and visual guidelines.",
      features: ["Logo Design", "Color Systems", "Brand Guidelines", "Typography Selection"]
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Print Design",
      description: "Deliver stunning print materials including business cards, brochures, posters, and marketing collateral.",
      features: ["Business Cards", "Brochures", "Posters", "Marketing Materials"]
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Web Design",
      description: "Design beautiful, responsive websites that engage users and drive conversions.",
      features: ["Custom Websites", "Landing Pages", "Responsive Design", "Interactive Elements"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Create intuitive user interfaces and experiences for mobile apps and digital products.",
      features: ["Mobile Apps", "User Flows", "Wireframes", "Prototypes"]
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Social Media",
      description: "Design engaging social media graphics and templates that boost your brand's online presence.",
      features: ["Content Templates", "Story Graphics", "Campaign Assets", "Profile Design"]
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Photography",
      description: "Professional photo editing and retouching services to enhance your visual content.",
      features: ["Photo Retouching", "Color Grading", "Compositing", "Asset Preparation"]
    }
  ];

  return (
    <section id='services' className="py-24 bg-gradient-to-b from-black to-gray-900">
      <motion.div 
        className="max-w-6xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text mb-4"
            whileInView={{ opacity: [0, 1], y: [20, 0] }}
            transition={{ duration: 0.6 }}
          >
            Services
          </motion.h2>
          <motion.p 
            className="text-gray-200 max-w-2xl mx-auto"
            whileInView={{ opacity: [0, 1], y: [20, 0] }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Elevate your brand with comprehensive design solutions tailored to your unique needs.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative group"
            >
              <motion.div 
                className="h-full bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-gray-700/50 transition-all duration-300 relative z-10 overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                  animate={hoveredIndex === index ? { scale: 1.5, opacity: 0.1 } : { scale: 1, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                />

                <motion.div
                  className="text-purple-400 mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {service.icon}
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-4">
                  {service.description}
                </p>

                <motion.div 
                  className="space-y-2"
                  initial={{ height: 0, opacity: 0 }}
                  animate={hoveredIndex === index ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {service.features.map((feature, fIndex) => (
                    <motion.div 
                      key={fIndex}
                      className="flex items-center text-gray-400"
                      initial={{ x: -10, opacity: 0 }}
                      animate={hoveredIndex === index ? { x: 0, opacity: 1 } : { x: -10, opacity: 0 }}
                      transition={{ delay: fIndex * 0.1 }}
                    >
                      <ArrowRight className="w-4 h-4 mr-2 text-green-500" />
                      {feature}
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div 
                  className="absolute bottom-4 right-4 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ x: 5 }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
