import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
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
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-4 py-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Your Brand</h3>
            <p className="text-gray-400 mb-6">
              Crafting digital experiences through innovative design solutions. 
              Let's bring your vision to life with creative excellence.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: '#9333ea' }}
                className="text-gray-400 hover:text-purple-500 transition-colors"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: '#9333ea' }}
                className="text-gray-400 hover:text-purple-500 transition-colors"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: '#9333ea' }}
                className="text-gray-400 hover:text-purple-500 transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: '#9333ea' }}
                className="text-gray-400 hover:text-purple-500 transition-colors"
              >
                <Github size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="col-span-1">
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Home</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">About</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Services</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Contact</a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="col-span-1">
            <h4 className="text-lg font-bold text-white mb-4">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-purple-500" />
                <span className="text-gray-400">hello@yourbrand.com</span>
              </div>
              <div>
                <p className="text-gray-400">123 Design Street</p>
                <p className="text-gray-400">New York, NY 10001</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          variants={itemVariants}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} Your Brand. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-purple-500 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-500 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;