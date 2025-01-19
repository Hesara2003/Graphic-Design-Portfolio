import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Project One',
      category: 'Web Design',
      description: 'A detailed description of Project One, showcasing modern design principles and clean code.',
      image: '/api/placeholder/600/400',
      detailedDescription: 'This is a more detailed description of Project One. It explains the project in greater depth, including the technology stack, features, and challenges faced during development.',
      technologies: ['React', 'Tailwind CSS', 'Node.js'],
      links: {
        live: '#',
        github: '#'
      }
    },
    {
      title: 'Project Two',
      category: 'Full Stack',
      description: 'This project focuses on performance and scalability with cutting-edge technology.',
      image: '/api/placeholder/600/400',
      detailedDescription: 'A deeper look into Project Two. It explores scalability, performance optimizations, and challenges during deployment.',
      technologies: ['Next.js', 'PostgreSQL', 'GraphQL'],
      links: {
        live: '#',
        github: '#'
      }
    },
    {
      title: 'Project Three',
      category: 'AI/ML',
      description: 'An innovative project that integrates AI and machine learning for automated processes.',
      image: '/api/placeholder/600/400',
      detailedDescription: 'Project Three uses AI and ML to automate processes, increasing efficiency and productivity. Learn more about its components and implementation here.',
      technologies: ['Python', 'TensorFlow', 'Flask'],
      links: {
        live: '#',
        github: '#'
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const modalVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-gray-900 to-black text-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* New Layout for Projects above Featured Products */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg"
          >
            Explore my latest work and creative endeavors
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              whileHover={{ y: -10 }}
              className="bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm shadow-xl w-full"
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedProject(project)}
                    className="bg-purple-500/80 text-white px-6 py-2 rounded-full backdrop-blur-sm flex items-center space-x-2"
                  >
                    <Eye size={20} />
                    <span>View Details</span>
                  </motion.button>
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-purple-400">{project.category}</span>
                <h3 className="mt-2 text-xl font-bold text-white">{project.title}</h3>
                <p className="mt-2 text-gray-400">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-gray-700/50 rounded-full text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Modal for Project Details */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={e => e.stopPropagation()}
              className="bg-gray-900 rounded-xl w-full max-w-3xl overflow-hidden shadow-2xl"
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-72 object-cover"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white backdrop-blur-sm"
                >
                  <X size={20} />
                </motion.button>
              </div>

              <div className="p-6">
                <span className="text-purple-400 text-sm font-medium">{selectedProject.category}</span>
                <h3 className="text-2xl font-bold text-white mt-2">{selectedProject.title}</h3>
                <p className="mt-4 text-gray-400 leading-relaxed">
                  {selectedProject.detailedDescription}
                </p>

                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-gray-800 rounded-full text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={selectedProject.links.live}
                    className="flex items-center space-x-2 bg-purple-500 text-white px-6 py-2 rounded-full"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={selectedProject.links.github}
                    className="flex items-center space-x-2 bg-gray-700 text-white px-6 py-2 rounded-full"
                  >
                    <Github size={20} />
                    <span>Source Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
