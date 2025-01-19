import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div id='contact' className="w-full min-h-screen bg-gray-900relative py-20 md:py-32 bg-gradient-to-b from-black via-gray-800 to-gray-900 overflow-hidden py-16 px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-white mb-4"
          >
            Get in Touch
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Have a project in mind? Let's create something amazing together.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div 
            variants={containerVariants}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-gray-800/50 rounded-xl border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 backdrop-blur-sm"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-gray-800/50 rounded-xl border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 backdrop-blur-sm"
                  />
                </motion.div>
              </div>
              <motion.div variants={itemVariants}>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-gray-800/50 rounded-xl border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 backdrop-blur-sm"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <textarea
                  rows="6"
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-gray-800/50 rounded-xl border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 backdrop-blur-sm resize-none"
                />
              </motion.div>
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-500/80 text-white px-8 py-3 rounded-full backdrop-blur-sm flex items-center space-x-2 hover:bg-purple-600/80 transition-colors"
              >
                <Send size={20} />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div 
              variants={itemVariants}
              className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700"
            >
              <Mail className="text-purple-400 mb-4" size={24} />
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-gray-400">hello@yourdesign.com</p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700"
            >
              <Phone className="text-purple-400 mb-4" size={24} />
              <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700"
            >
              <MapPin className="text-purple-400 mb-4" size={24} />
              <h3 className="text-xl font-bold text-white mb-2">Location</h3>
              <p className="text-gray-400">New York, NY 10001</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactSection;