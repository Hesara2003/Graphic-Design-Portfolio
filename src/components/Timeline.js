import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  MessagesSquare, 
  Lightbulb, 
  PenTool, 
  MousePointerClick, 
  Rocket,
  Sparkles,
  ArrowRight
} from 'lucide-react';

const ProcessTimeline = () => {
  const [hoveredStep, setHoveredStep] = useState(null);

  const { scrollYProgress } = useScroll();
  const lineHeight = useTransform(scrollYProgress, [0, 0.9], ["0%", "100%"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const processes = [
    {
      icon: <MessagesSquare className="w-6 h-6" />,
      title: "Discovery",
      description: "Initial consultation to understand your vision, goals, and project requirements in detail.",
      details: ["Project scoping", "Goal setting", "Target audience analysis"]
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Ideation",
      description: "Brainstorming and conceptualization of creative solutions that align with your objectives.",
      details: ["Concept development", "Mood boarding", "Strategy planning"]
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Design",
      description: "Crafting the visual elements and bringing the concept to life with attention to detail.",
      details: ["Visual design", "Iterations", "Refinement"]
    },
    {
      icon: <MousePointerClick className="w-6 h-6" />,
      title: "Review",
      description: "Collaborative feedback and refinement process to perfect every aspect of the design.",
      details: ["Client feedback", "Adjustments", "Final touches"]
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Launch",
      description: "Finalizing and delivering all assets in the required formats for implementation.",
      details: ["File preparation", "Asset delivery", "Implementation support"]
    }
  ];

  return (
    <section id='Timeline'className="bg-gradient-to-b from-gray-900 to-black py-24 overflow-hidden">
      <motion.div 
        className="max-w-6xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div 
          className="text-center mb-16 relative"
          variants={titleVariants}
        >
          <motion.div
            className="absolute -top-20 left-1/2 transform -translate-x-1/2"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Sparkles className="w-32 h-32 text-purple-500/10" />
          </motion.div>
          
          <h2 className="text-4xl font-bold text-white mb-4">Work Process</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A streamlined approach to bringing your vision to life through thoughtful design and collaboration.
          </p>
        </motion.div>

        <motion.div className="relative">
          {/* Animated timeline line */}
          <motion.div 
            className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-purple-500/20"
            style={{
              scaleY: lineHeight,
              transformOrigin: "top"
            }}
          >
            <motion.div 
              className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-purple-500 to-purple-500/20"
              animate={{
                y: ["0%", "100%"]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>

          {processes.map((process, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.5,
                  delay: index * 0.2 
                }
              }}
              viewport={{ once: true }}
            >
              {/* Animated timeline dot */}
              <motion.div 
                className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10"
                whileHover={{ scale: 1.2 }}
                onHoverStart={() => setHoveredStep(index)}
                onHoverEnd={() => setHoveredStep(null)}
              >
                <motion.div 
                  className="w-8 h-8 bg-gray-900 rounded-full border-2 border-purple-500 relative"
                  animate={{
                    boxShadow: hoveredStep === index 
                      ? "0 0 20px rgba(147, 51, 234, 0.5)" 
                      : "0 0 0px rgba(147, 51, 234, 0)"
                  }}
                >
                  <motion.div 
                    className="absolute inset-1 bg-purple-500/20 rounded-full"
                    animate={{
                      scale: hoveredStep === index ? [1, 1.2, 1] : 1
                    }}
                    transition={{
                      duration: 1,
                      repeat: hoveredStep === index ? Infinity : 0
                    }}
                  />
                </motion.div>
              </motion.div>

              {/* Content card */}
              <motion.div 
                className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'} md:w-5/12`}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    delay: index * 0.1
                  }
                }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50 relative overflow-hidden group"
                  whileHover={{
                    borderColor: "rgba(147, 51, 234, 0.5)"
                  }}
                >
                  {/* Background animation */}
                  <motion.div
                    className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 5, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />

                  <motion.div 
                    className="text-purple-500 mb-4 relative"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    animate={{
                      y: [0, -5, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {process.icon}
                  </motion.div>

                  <motion.h3 
                    className="text-xl font-bold text-white mb-2"
                    whileHover={{ x: 5, scale: 1.05 }}
                  >
                    {process.title}
                  </motion.h3>

                  <motion.p 
                    className="text-gray-400 mb-4"
                    initial={{ opacity: 0.5 }}
                    whileHover={{ opacity: 1, scale: 1.05 }}
                  >
                    {process.description}
                  </motion.p>

                  <ul className="space-y-2">
                    {process.details.map((detail, idx) => (
                      <motion.li 
                        key={idx}
                        className="text-gray-500 text-sm flex items-center"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.2 }}
                        whileHover={{ x: 5, color: "#a855f7" }}
                      >
                        <ArrowRight className="w-4 h-4 mr-2 text-purple-500" />
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProcessTimeline;
