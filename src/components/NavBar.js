import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#Services' },
    { name: 'Services', href: '#services' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Why Choose Us', href: '#whyUs' },
    { name: 'Testimonials', href: '#Testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/10 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0"
          >
            <a 
              href="#home" 
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
            >
              Portfolio
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex space-x-8"
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative text-white hover:text-purple-300 transition-colors px-3 py-2 text-lg font-medium group"
                >
                  {item.name}
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-400 transform origin-left scale-x-0 transition-transform group-hover:scale-x-100"
                    initial={false}
                    animate={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                  />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.div 
            className="md:hidden"
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-purple-300 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/10 backdrop-blur-md"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-white hover:text-purple-300 transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;