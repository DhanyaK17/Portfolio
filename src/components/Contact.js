import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react';
import { contactData } from '../data';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "3d93ab8e-36a0-4f89-b0b5-3f1942653ff5", // Public access key - recommend user gets their own
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // Automatically hide success message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfoList = [
    {
      icon: <Mail className="text-primary" size={20} />,
      title: 'Email',
      content: contactData.email,
      link: `mailto:${contactData.email}`
    },
    {
      icon: <Phone className="text-secondary" size={20} />,
      title: 'Phone',
      content: contactData.phone,
      link: `tel:${contactData.phone.replace(/\s/g, '')}`
    },
    {
      icon: <MapPin className="text-tertiary" size={20} />,
      title: 'Location',
      content: contactData.location,
      link: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactData.location)}`
    }
  ];

  const socialLinksParams = [
    { icon: <Github size={18} />, href: contactData.github },
    { icon: <Linkedin size={18} />, href: contactData.linkedin },
    { icon: <Instagram size={18} />, href: contactData.instagram }
  ];

  return (
    <section id="contact" className="py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Get In <span className="text-primary">Touch</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            {contactData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">Contact Information</h3>
            
            <div className="space-y-4">
              {contactInfoList.map((info, idx) => (
                <a 
                  key={idx} 
                  href={info.link}
                  className="flex items-start gap-4 p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-slate-700 group"
                >
                  <div className="w-10 h-10 bg-background dark:bg-slate-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-slate-900 dark:text-white mb-0.5">{info.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-gray-400">{info.content}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-slate-700"
          >
            <h3 className="text-xl font-semibold mb-5 text-slate-900 dark:text-white">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-1.5">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 text-sm bg-background dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all dark:text-white placeholder-slate-400 dark:placeholder-slate-400"
                  placeholder="Full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-1.5">Your Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 text-sm bg-background dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all dark:text-white placeholder-slate-400 dark:placeholder-slate-400"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-1.5">Your Message</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2.5 text-sm bg-background dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none dark:text-white placeholder-slate-400 dark:placeholder-slate-400"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              
              {submitStatus === 'success' && (
                <div className="p-3 mb-4 text-sm text-green-700 bg-green-100 rounded-xl dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-3 mb-4 text-sm text-red-700 bg-red-100 rounded-xl dark:bg-red-900/30 dark:text-red-400 border border-red-200 dark:border-red-800">
                  Oops! Something went wrong. Please try again later.
                </div>
              )}
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:scale-[1.02] transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
