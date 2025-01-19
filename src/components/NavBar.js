import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Circle } from 'lucide-react';
import AnimatedPopup from './AnimatedPop';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [showPopup, setShowPopup] = useState(false); // For popup visibility

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Timeline', href: '#Timeline' },
    { name: 'Projects', href: '#projects' },
    { name: 'Why Us?', href: '#whyUs' },
    { name: 'Testimonials', href: '#Testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  const navVariants = {
    hidden: { y: -100 },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hesarap3@gmail.com').then(() => {
      // Show the popup for a brief period
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 2000); // Hide popup after 2 seconds
    });
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-gray-950/80 backdrop-blur-xl border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover="hover"
            className="relative"
          >
            <motion.a 
              href="#home"
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"
                animate={{
                  rotate: [0, 180, 360],
                  borderRadius: ["20%", "40%", "20%"]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Portfolio
              </span>
            </motion.a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="relative px-4 py-2"
                onHoverStart={() => setHoveredItem(item.name)}
                onHoverEnd={() => setHoveredItem(null)}
                whileHover="hover"
              >
                <motion.span
                  className={`relative z-10 text-lg font-medium transition-all duration-300 ${
                    activeSection === item.href.substring(1)
                      ? 'text-white'
                      : 'text-gray-400'
                  }`}
                >
                  {item.name}
                </motion.span>

                <AnimatePresence>
                  {(hoveredItem === item.name || activeSection === item.href.substring(1)) && (
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </AnimatePresence>

                <motion.div
                  className="absolute -bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: activeSection === item.href.substring(1) ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCopyEmail}
              className="ml-4 px-6 py-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-medium"
            >
              Let's Talk
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6 text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Popup Notification */}
      <AnimatedPopup showPopup={showPopup} />


      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-950/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="p-4 space-y-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between p-3 rounded-xl ${
                    activeSection === item.href.substring(1)
                      ? 'bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20'
                      : 'hover:bg-white/5'
                  } group transition-colors`}
                >
                  <div className="flex items-center space-x-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      className={`w-2 h-2 rounded-full ${
                        activeSection === item.href.substring(1)
                          ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
                          : 'bg-gray-600'
                      }`}
                    />
                    <span className={`text-lg font-medium ${
                      activeSection === item.href.substring(1)
                        ? 'text-white'
                        : 'text-gray-400'
                    }`}>
                      {item.name}
                    </span>
                  </div>
                  <motion.div
                    animate={{
                      x: activeSection === item.href.substring(1) ? 5 : 0
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className={`w-5 h-5 ${
                      activeSection === item.href.substring(1)
                        ? 'text-white'
                        : 'text-gray-600'
                    }`} />
                  </motion.div>
                </motion.a>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                onClick={handleCopyEmail}
                className="w-full mt-4 p-4 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-medium"
              >
                Let's Talk
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;
