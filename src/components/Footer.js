import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Github, Linkedin, Instagram, ArrowUp, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import { personalData, contactData, navLinks } from '../data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gray-100 dark:border-slate-800 transition-colors duration-300 overflow-hidden mt-8">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 text-center md:text-left">
            <Link to="home" smooth={true} duration={300} className="text-3xl font-bold text-slate-900 dark:text-white cursor-pointer inline-block mb-4">
              {personalData.name} <span className="p-0.5 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">K</span>
            </Link>
            <p className="text-slate-600 dark:text-gray-400 mb-8 max-w-sm mx-auto md:mx-0 leading-relaxed text-sm">
              {personalData.description}
            </p>
            <div className="flex justify-center md:justify-start gap-3">
              <a href={contactData.github} className="w-10 h-10 rounded-full bg-background dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-gray-400 hover:bg-primary hover:text-white dark:hover:bg-primary transition-all border border-gray-100 dark:border-slate-700">
                <Github size={18} />
              </a>
              <a href={contactData.linkedin} className="w-10 h-10 rounded-full bg-background dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-gray-400 hover:bg-primary hover:text-white dark:hover:bg-primary transition-all border border-gray-100 dark:border-slate-700">
                <Linkedin size={18} />
              </a>
              <a href={contactData.instagram} className="w-10 h-10 rounded-full bg-background dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-gray-400 hover:bg-primary hover:text-white dark:hover:bg-primary transition-all border border-gray-100 dark:border-slate-700">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <h4 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    to={link.to} 
                    smooth={true} 
                    duration={300} 
                    offset={-70}
                    className="text-slate-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <h4 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-600 dark:text-gray-400">
              <li>
                <a href={`mailto:${contactData.email}`} className="flex items-center gap-2.5 hover:text-primary transition-colors">
                  <Mail size={14} className="text-primary flex-shrink-0" /> <span className="truncate">{contactData.email}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${contactData.phone.replace(/\s/g, '')}`} className="flex items-center gap-2.5 hover:text-secondary transition-colors">
                  <Phone size={14} className="text-secondary flex-shrink-0" /> <span>{contactData.phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-tertiary flex-shrink-0 mt-0.5" /> <span>{contactData.location}</span>
              </li>
            </ul>
          </div>

        </div>
        
        {/* Bottom Menu & Copyright Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-medium text-slate-500 dark:text-gray-500 text-center">
            &copy; {currentYear} {personalData.name}. Designed & Built with ❤️.
          </p>
          
          <Link 
            to="home" 
            smooth={true} 
            duration={300}
            className="w-12 h-12 rounded-full flex bg-background dark:bg-slate-800 border fill-primary border-gray-200 dark:border-slate-700 items-center justify-center text-slate-700 dark:text-gray-300 hover:bg-primary hover:text-white hover:border-primary dark:hover:bg-primary dark:hover:text-white dark:hover:border-primary cursor-pointer shadow-sm transition-all animate-bounce"
            title="Back to Top"
          >
            <ArrowUp size={20} strokeWidth={2.5} />
          </Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
