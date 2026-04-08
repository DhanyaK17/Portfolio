import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalData, navLinks } from '../data';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-slate-900 dark:text-white cursor-pointer"
          >
            {personalData.name} <span className="p-0.5 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">K</span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={300}
                className="cursor-pointer font-medium hover:text-primary transition-colors text-slate-800 dark:text-gray-200"
                activeClass="text-primary font-bold dark:text-primary"
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-tertiary/20 dark:hover:bg-slate-800 transition-colors text-slate-800 dark:text-yellow-400"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleDarkMode}
              className="p-2 mr-2 rounded-full hover:bg-tertiary/20 dark:hover:bg-slate-800 transition-colors text-slate-800 dark:text-yellow-400"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-800 dark:text-gray-200">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-white dark:bg-slate-900 shadow-xl border-t dark:border-slate-800"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={300}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md font-medium text-center w-full hover:bg-tertiary/20 dark:hover:bg-slate-800 hover:text-primary transition-colors text-slate-800 dark:text-gray-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
