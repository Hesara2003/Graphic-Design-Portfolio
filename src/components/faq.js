import React, { useState, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const faqData = [
    {
      question: "What types of graphic design services do you offer?",
      answer: "I specialize in brand identity design, logo creation, marketing materials, social media graphics, UI/UX design, packaging design, and custom illustrations. Each project is tailored to meet your specific needs and business goals."
    },
    {
      question: "What is your design process like?",
      answer: "My design process involves four key stages: 1) Discovery - Understanding your needs and goals, 2) Research & Conceptualization - Exploring ideas and creating initial concepts, 3) Design & Iteration - Developing chosen concepts with your feedback, 4) Refinement & Delivery - Polishing the final design and providing all necessary file formats."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity and scope. A logo design typically takes 2-3 weeks, while a complete brand identity might take 4-6 weeks. I'll provide a detailed timeline during our initial consultation based on your specific project requirements."
    },
    {
      question: "What file formats will I receive?",
      answer: "You'll receive all industry-standard formats suitable for your needs, including AI, EPS, PDF, PNG, and JPG files. For logos and brand assets, I provide both print and web-optimized versions, ensuring you have everything needed for any application."
    },
    {
      question: "Do you offer revisions to your designs?",
      answer: "Yes, all projects include two rounds of revisions to ensure your complete satisfaction. Additional revision rounds can be arranged if needed. I believe in collaborative design and value your feedback throughout the process."
    },
    {
      question: "How do you handle project pricing?",
      answer: "Each project is uniquely priced based on its scope, complexity, and timeline. I offer transparent, flat-rate pricing that we'll agree upon before starting. Contact me with your project details for a custom quote."
    },
    {
      question: "Can you work with clients remotely?",
      answer: "Absolutely! I work with clients worldwide using tools like Zoom, Slack, and email for communication. My process is designed to be effective regardless of location, ensuring smooth collaboration throughout your project."
    }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-black via-gray-800 to-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-64 md:w-96 h-64 md:h-96 top-0 left-0 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute w-64 md:w-96 h-64 md:h-96 bottom-0 right-0 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 transform
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent transition-all duration-300 hover:scale-105">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-400 transition-all duration-300 hover:text-gray-300">
            Everything you need to know about my design services and process
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="group"
              style={{
                animation: `fadeIn 0.5s ease-out ${index * 0.1}s`,
                opacity: 0,
                animationFillMode: 'forwards',
              }}
            >
              <div className="border border-gray-700 rounded-lg overflow-hidden transition-all duration-300 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/80">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 md:p-6 text-left transition-all duration-300"
                >
                  <span className="text-lg font-medium text-gray-200 group-hover:text-indigo-400 transition-colors duration-300">
                    {faq.question}
                  </span>
                  <span className="ml-4 flex-shrink-0 transition-transform duration-300">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-purple-400" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-400 group-hover:text-indigo-400" />
                    )}
                  </span>
                </button>
                
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    openIndex === index 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <p className="p-4 md:p-6 text-gray-300 bg-gray-800/50">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6 text-lg">
            Still have questions? I'm here to help!
          </p>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:from-purple-500 hover:to-indigo-500 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25">
            <span className="flex items-center gap-2">
              <span className="transform group-hover:scale-110 transition-transform duration-300">✉️</span>
              Get in Touch
            </span>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default FAQ;