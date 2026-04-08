import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Wrench, Sparkles } from 'lucide-react';
import { skillsData } from '../data';

const iconMap = [
  <Code size={22} className="text-blue-500" />,
  <Server size={22} className="text-green-500" />,
  <Wrench size={22} className="text-orange-500" />,
  <Sparkles size={22} className="text-indigo-500" />
];

const bgMap = [
  "bg-blue-500/10",
  "bg-green-500/10",
  "bg-orange-500/10",
  "bg-indigo-500/10"
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 px-4 py-1.5 rounded-full mb-4">
            EXPERTISE
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white"
          >
            Technical Skills
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white dark:bg-slate-800/80 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700/50 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors flex flex-col"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${bgMap[index % bgMap.length]}`}>
                {iconMap[index % iconMap.length]}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wider">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 text-xs font-bold tracking-wide text-slate-600 dark:text-gray-300 bg-gray-100 dark:bg-slate-700/80 rounded-lg uppercase"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
