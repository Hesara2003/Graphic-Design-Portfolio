import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Sandil from '../img/Sandil.jpg';
import Sandali from '../img/Sandali.jpg';
import Malindu from '../img/Malindu.jpg';
import Uvin from '../img/Uvin.jpg';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sandil Perera",
      role: "Computer Science Student",
      company: "SLIIT.",
      image: Sandil,
      text: "He is one of my all time team member for uni projects and competitions, with an exceptional leadership ability and full of creativity he has unique passionate personality",
    },
    {
      id: 2,
      name: "Sandali Sandagomi",
      role: "Computer Science Student",
      company: "SLIIT.",
      image: Sandali,
      text: "The level of professionalism and creativity exceeded our expectations. They didn't just design our website; they created an experience that our users love.",
    },
    {
      id: 3,
      name: "Malindu Yasanjith",
      role: "Computer Science Student",
      company: "SLIIT.",
      image: Malindu,
      text: "I've worked with many designers, but few have shown such dedication to understanding and elevating our brand. The results speak for themselves.",
    },
    {
      id: 4,
      name: "Uvin Perera",
      role: "Software Engineer",
      company: "Pagero",
      image:  Uvin,
      text: "Their ability to translate complex ideas into beautiful, functional designs is remarkable. They're not just a designer; they're a strategic partner.",
    },

    {
      id: 5,
      name: "Hesara Perera",
      role: "Product Manager",
      company: "SaaS Platform",
      image: "/api/placeholder/100/100",
      text: "Their ability to translate complex ideas into beautiful, functional designs is remarkable. They're not just a designer; they're a strategic partner.",
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <section id='Testimonials'className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text mb-4">
            Client Testimonials
          </h2>
          <p className="text-gray-400 text-lg">
            Don't just take my word for it - here's what my clients say
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative overflow-hidden">
          <div className="relative h-[400px] max-w-4xl mx-auto">
            <AnimatePresence initial={false} custom={currentIndex}>
              <motion.div
                key={currentIndex}
                custom={currentIndex}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    nextTestimonial();
                  } else if (swipe > swipeConfidenceThreshold) {
                    prevTestimonial();
                  }
                }}
                className="absolute w-full"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12">
                  <div className="flex flex-col items-center text-center">
                    <Quote size={48} className="text-purple-400 mb-6" />
                    <p className="text-white text-lg md:text-xl leading-relaxed mb-8">
                      "{testimonials[currentIndex].text}"
                    </p>
                    <div className="flex items-center space-x-4">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-purple-400"
                      />
                      <div className="text-left">
                        <h4 className="text-white font-semibold">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-gray-400">
                          {testimonials[currentIndex].role}
                        </p>
                        <p className="text-purple-400 text-sm">
                          {testimonials[currentIndex].company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-gray-800/50 backdrop-blur-sm text-white pointer-events-auto hover:bg-gray-700/50 transition-colors"
              >
                <ChevronLeft size={24} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-gray-800/50 backdrop-blur-sm text-white pointer-events-auto hover:bg-gray-700/50 transition-colors"
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                className={`w-2 h-2 rounded-full ${
                  currentIndex === index ? "bg-purple-400 w-4" : "bg-gray-600"
                } transition-all duration-300`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;