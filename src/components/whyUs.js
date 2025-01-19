import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, Globe, Star } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-purple-400" />,
      title: "Security",
      description: "We prioritize security, using the latest technologies to protect your data."
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: "Teamwork",
      description: "Our dedicated team collaborates seamlessly to deliver the best results."
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-400" />,
      title: "Global Reach",
      description: "We are connected worldwide, making it easier to work with clients across the globe."
    },
    {
      icon: <Star className="w-8 h-8 text-purple-400" />,
      title: "Quality",
      description: "We ensure the highest standards and deliver only the best outcomes."
    }
  ];

  return (
    <section id='whyUs'className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text mb-4">
            Why Choose Us?
          </h2>
          <p className="text-gray-400 text-lg">
            Discover the values that set us apart and why we're the best choice for your needs.
          </p>
        </motion.div>

        {/* Features Section */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/30 relative group"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(245, 101, 219, 0.5)"
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.7 }}
            >
              {/* Icon Animation */}
              <motion.div
                className="text-purple-400 mb-4"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.3,
                  duration: 0.7
                }}
              >
                {feature.icon}
              </motion.div>

              {/* Title Animation */}
              <motion.h3
                className="text-xl font-semibold text-white mb-2"
                whileHover={{
                  color: "#F56565",
                  scale: 1.1
                }}
                transition={{ duration: 0.3 }}
              >
                {feature.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                className="text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 0.5,
                  duration: 0.6
                }}
              >
                {feature.description}
              </motion.p>

              {/* Hover Effect - Icon glow */}
              <motion.div
                className="absolute inset-0 bg-purple-500/20 opacity-0 group-hover:opacity-100 rounded-2xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.1, 0.3, 0.1],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
