import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, Download } from 'lucide-react';
import { personalData } from '../data';
import ResumeViewer from './ResumeViewer';

const Hero = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Hero Content */}

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <h2 className="text-xl md:text-2xl font-medium text-primary mb-2">Hello, I'm</h2>
          <h1 className="text-5xl md:text-7xl font-bold font-sans text-slate-900 dark:text-white mb-4 leading-tight">
            {personalData.name} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">K</span>
          </h1>
          <h3 className="text-2xl md:text-3xl font-semibold text-slate-700 dark:text-gray-300 mb-6">
            {personalData.role}
          </h3>
          <p className="text-lg text-slate-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
            {personalData.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link
              to="contact"
              smooth={true}
              duration={300}
              offset={-70}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold flex items-center gap-2 hover:shadow-lg hover:scale-105 transition-all cursor-pointer"
            >
              Hire Me <ArrowRight size={20} />
            </Link>
            <button
              onClick={() => setIsResumeOpen(true)}
              className="px-8 py-3 rounded-full border-2 border-primary text-primary dark:text-secondary font-semibold flex items-center gap-2 hover:bg-primary hover:text-white transition-all cursor-pointer"
            >
              View Resume <Download size={20} />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto flex justify-center lg:translate-x-10"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <img
              src={personalData.profileImage}
              alt={`${personalData.name} Profile`}
              className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-xl z-20"
            />
          </div>
        </motion.div>
      </div>
      
      {/* Resume Modal */}
      <ResumeViewer 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />
    </section>
  );
};

export default Hero;
