import React from 'react';
import { X, ExternalLink } from 'lucide-react';
import { personalData } from '../data';

const ResumeViewer = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-md"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-5xl h-full max-h-[90vh] bg-white dark:bg-gray-900 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col border border-gray-100 dark:border-gray-800">
        
        {/* Modal Header */}
        <div className="px-6 py-4 flex items-center justify-between border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-sm">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
               <ExternalLink size={16}/>
             </div>
             <div>
               <h3 className="text-sm font-black uppercase tracking-widest text-gray-900 dark:text-white">Full Resume</h3>
               <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tight">Viewing: {personalData.name}.pdf</p>
             </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all hover:rotate-90"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body (PDF Iframe) */}
        <div className="flex-grow bg-gray-200 dark:bg-gray-950/50 relative">
          <iframe 
            src={personalData.resumeLink}
            title="Resume Viewer"
            className="w-full h-full border-none"
            loading="lazy"
          />
        </div>

        {/* Modal Footer (Hidden on mobile if needed) */}
        <div className="px-6 py-3 border-t border-gray-100 dark:border-gray-800 flex justify-end gap-3 bg-white dark:bg-gray-900">
           <a 
            href={personalData.resumeLink} 
            download
            className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all hover:bg-gray-200 dark:hover:bg-gray-700"
           >
             Download PDF
           </a>
           <button 
            onClick={onClose}
            className="px-4 py-2 bg-primary text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all hover:opacity-90 shadow-md shadow-primary/20"
           >
             Close Viewer
           </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeViewer;
