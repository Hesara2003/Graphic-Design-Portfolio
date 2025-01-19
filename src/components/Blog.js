import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock, User, Tag, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BlogSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [gridLayout, setGridLayout] = useState('grid');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "The Evolution of Modern UI Design Trends",
      excerpt: "Exploring the latest developments in UI design and how they're shaping the future of digital experiences.",
      category: "UI Design",
      author: "Alex Morgan",
      date: "Mar 15, 2024",
      readTime: "5 min read",
      image: "/api/placeholder/800/600",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: 2,
      title: "Mastering Color Theory in Digital Design",
      excerpt: "A deep dive into how color psychology affects user perception and brand identity in the digital space.",
      category: "Design Theory",
      author: "Sarah Chen",
      date: "Mar 12, 2024",
      readTime: "8 min read",
      image: "/api/placeholder/800/600",
      content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id: 3,
      title: "The Art of Brand Identity Design",
      excerpt: "Understanding the key elements that make a brand identity memorable and impactful in today's market.",
      category: "Branding",
      author: "James Wilson",
      date: "Mar 10, 2024",
      readTime: "6 min read",
      image: "/api/placeholder/800/600",
      content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    }
  ];

  const Modal = ({ post, onClose }) => (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="relative w-full max-w-4xl bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/80 hover:text-white z-10"
        >
          <X size={24} />
        </button>

        <div className="h-64 relative">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        </div>

        <div className="p-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-500/10 text-indigo-400 mb-4">
            <Tag className="w-4 h-4 mr-2" />
            {post.category}
          </div>

          <h2 className="text-3xl font-bold text-white mb-4">{post.title}</h2>

          <div className="flex items-center gap-6 text-gray-400 mb-6">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {post.readTime}
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed">{post.content}</p>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ 
          rotate: [360, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
            Latest Insights & Articles
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Discover the latest trends, techniques, and insights in the world of graphic design
          </p>
        </motion.div>

        {/* Layout Toggle */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setGridLayout('grid')}
            className={`px-4 py-2 rounded-lg transition-colors ${gridLayout === 'grid' ? 'bg-indigo-500 text-white' : 'bg-gray-800 text-gray-400'}`}
          >
            Grid
          </button>
          <button
            onClick={() => setGridLayout('masonry')}
            className={`px-4 py-2 rounded-lg transition-colors ${gridLayout === 'masonry' ? 'bg-indigo-500 text-white' : 'bg-gray-800 text-gray-400'}`}
          >
            Masonry
          </button>
        </div>

        {/* Blog Grid */}
        <motion.div 
          layout
          className={`grid gap-8 ${
            gridLayout === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto'
          }`}
        >
          {blogPosts.map((post, index) => (
            <motion.article 
              key={post.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`group cursor-pointer ${
                gridLayout === 'masonry' && index % 3 === 1 ? 'md:translate-y-12' : ''
              }`}
              onClick={() => setSelectedPost(post)}
              onMouseEnter={() => setHoveredCard(post.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:bg-gray-800/80 hover:scale-105 hover:shadow-2xl">
                <div className="relative h-48 overflow-hidden">
                  <motion.img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                </div>

                <div className="p-6">
                  <motion.div 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-500/10 text-indigo-400 mb-4"
                  >
                    <Tag className="w-4 h-4 mr-2" />
                    {post.category}
                  </motion.div>

                  <motion.h3 
                    className="text-xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-indigo-400"
                  >
                    {post.title}
                  </motion.h3>

                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {post.readTime}
                    </div>
                  </div>
                </div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCard === post.id ? 1 : 0 }}
                  className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent"
                />
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25">
            <span className="flex items-center gap-2">
              View All Articles
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </span>
          </button>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedPost && (
          <Modal post={selectedPost} onClose={() => setSelectedPost(null)} />
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default BlogSection;