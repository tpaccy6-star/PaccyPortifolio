import { SectionHeader } from './SectionHeader';
import { Send, Mail, MapPin, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact = () => {
  return (
    <section id="contact" className="section-container relative">
      <SectionHeader 
        title="Let's Build Something Meaningful." 
        align="center"
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto mb-16 text-center"
      >
        <p className="text-lg text-slate-700 dark:text-slate-300 font-medium">
          I'm interested in opportunities involving Computer Science education, software development, educational technology, research, and digital innovation.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
        
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-1 space-y-8"
        >
          <div className="flex items-start group">
            <div className="bg-primary-50 dark:bg-slate-800/80 p-4 rounded-2xl mr-4 group-hover:bg-primary-100 dark:group-hover:bg-slate-700 group-hover:-translate-y-1 transition-all duration-300 shadow-sm">
              <Mail className="text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform" size={24} />
            </div>
            <div className="mt-1">
              <h4 className="font-bold text-slate-900 dark:text-white mb-1">Email</h4>
              <p className="text-slate-600 dark:text-slate-400 font-medium">
                <a href="mailto:tpaccy6@gmail.com" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors interactive">
                  tpaccy6@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="flex items-start group">
            <div className="bg-primary-50 dark:bg-slate-800/80 p-4 rounded-2xl mr-4 group-hover:bg-primary-100 dark:group-hover:bg-slate-700 group-hover:-translate-y-1 transition-all duration-300 shadow-sm">
              <MapPin className="text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform" size={24} />
            </div>
            <div className="mt-1">
              <h4 className="font-bold text-slate-900 dark:text-white mb-1">Location</h4>
              <p className="text-slate-600 dark:text-slate-400 font-medium">Kigali, Rwanda</p>
            </div>
          </div>
          <div className="flex items-start group">
            <div className="bg-primary-50 dark:bg-slate-800/80 p-4 rounded-2xl mr-4 group-hover:bg-primary-100 dark:group-hover:bg-slate-700 group-hover:-translate-y-1 transition-all duration-300 shadow-sm">
              <MessageCircle className="text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform" size={24} />
            </div>
            <div className="mt-1">
              <h4 className="font-bold text-slate-900 dark:text-white mb-1">WhatsApp</h4>
              <p className="text-slate-600 dark:text-slate-400 font-medium">
                <a href="https://wa.me/250781343621" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors interactive">
                  +250781343621
                </a>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-purple-600 rounded-3xl blur opacity-20 dark:opacity-40"></div>
          <form className="glass-panel p-8 rounded-2xl relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="group relative">
                <label htmlFor="name" className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all shadow-inner interactive"
                  placeholder="Your Name"
                />
              </div>
              <div className="group relative">
                <label htmlFor="email" className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all shadow-inner interactive"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            
            <div className="mb-6 relative">
              <label htmlFor="subject" className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">Subject</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all shadow-inner interactive"
                placeholder="What is this regarding?"
              />
            </div>
            
            <div className="mb-8 relative">
              <label htmlFor="message" className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">Message</label>
              <textarea 
                id="message" 
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all resize-none shadow-inner interactive"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            {/* Honeypot field for basic spam protection */}
            <input type="text" name="_gotcha" style={{ display: 'none' }} />
            
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button" 
              className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-base font-bold rounded-xl text-white bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-500 hover:to-purple-500 shadow-lg shadow-primary-500/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all interactive"
            >
              <Send className="mr-2" size={18} />
              Send Message
            </motion.button>
            <p className="mt-4 text-xs font-medium text-slate-500 dark:text-slate-400 text-center sm:text-left">
              * Note: Form delivery requires backend setup (e.g., Formspree).
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
