import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projectsData } from '../data';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="projects" className="py-20 transition-colors duration-300 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Featured <span className="text-primary">Projects</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of the practical projects I've built during my academics and personal learning journey.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`grid grid-cols-1 ${projectsData.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' : 'md:grid-cols-2 lg:grid-cols-3'} gap-6`}
        >
          {projectsData.map((project) => (
            <motion.div 
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-slate-700/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-slate-600 group"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-semibold px-2 py-1 bg-white dark:bg-slate-800 text-primary dark:text-secondary rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-slate-600">
                  <a 
                    href={project.githubLink}
                    className="flex items-center gap-2 text-slate-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium"
                  >
                    <Github size={18} /> Code
                  </a>
                  <a 
                    href={project.liveLink}
                    className="flex items-center gap-1 text-white bg-primary hover:bg-secondary transition-colors px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    Live Demo <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
