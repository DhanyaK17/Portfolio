import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Code } from 'lucide-react';
import { personalData, aboutData } from '../data';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="about" className="py-20 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            About <span className="text-primary">Me</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-6"
          >
            {aboutData.paragraphs.map((para, index) => {
              // Highlight the name on the first paragraph
              if (index === 0) {
                const parts = para.split(personalData.name);
                return (
                  <motion.p key={index} variants={itemVariants} className="text-lg text-slate-700 dark:text-gray-300 leading-relaxed font-light">
                    {parts[0]}<span className="font-semibold text-primary">{personalData.name}</span>{parts[1]}
                  </motion.p>
                )
              }
              return (
                <motion.p key={index} variants={itemVariants} className="text-lg text-slate-700 dark:text-gray-300 leading-relaxed font-light">
                  {para}
                </motion.p>
              )
            })}
          </motion.div>

          {/* Cards section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <motion.div variants={itemVariants} className="bg-white dark:bg-slate-700 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-slate-600">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{aboutData.education.title}</h3>
              <p className="text-slate-600 dark:text-gray-300 text-sm">{aboutData.education.subtitle}</p>
              <p className="text-slate-500 text-xs mt-1">{aboutData.education.percentage}</p>
              <p className="text-slate-500 text-xs mt-1">{aboutData.education.period}</p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white dark:bg-slate-700 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-slate-600">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{aboutData.continuousLearning.title}</h3>
              <p className="text-slate-600 dark:text-gray-300 text-sm">{aboutData.continuousLearning.subtitle}</p>
              <p className="text-slate-500 text-xs mt-1">{aboutData.continuousLearning.percentage}</p>
              <p className="text-slate-500 text-xs mt-1">{aboutData.continuousLearning.period}</p>

            </motion.div>

            <motion.div variants={itemVariants} className="bg-white dark:bg-slate-700 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-slate-600 sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <Code className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{aboutData.development.title}</h3>
              <p className="text-slate-600 dark:text-gray-300 text-sm">{aboutData.development.subtitle}</p>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
