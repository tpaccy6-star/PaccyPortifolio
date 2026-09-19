import { Github, Mail, Instagram, Twitter, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden pt-20 pb-12">
      {/* Infinite Marquee */}
      <div className="absolute top-0 left-0 w-full overflow-hidden border-y border-slate-800 bg-slate-900/50 py-3">
        <motion.div 
          className="flex whitespace-nowrap text-3xl font-bold font-serif opacity-20"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        >
          <span className="mx-4">LET'S WORK TOGETHER • LET'S WORK TOGETHER • LET'S WORK TOGETHER • LET'S WORK TOGETHER • </span>
          <span className="mx-4">LET'S WORK TOGETHER • LET'S WORK TOGETHER • LET'S WORK TOGETHER • LET'S WORK TOGETHER • </span>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center mt-12 relative z-10">
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <h3 className="font-serif text-3xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">TUYIRINGIRE Pacifique</h3>
          <p className="text-slate-400 text-sm font-medium tracking-wide uppercase">Computer Science Educator & Software Developer</p>
          <p className="text-primary-400 text-sm mt-2 font-medium">Transforming Learning Through Passion and Technology.</p>
        </div>
        
        <div className="flex space-x-6 mb-8 md:mb-0">
          <a href="https://github.com/tpaccy6-star" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-primary-600 transition-all duration-300 interactive shadow-inner">
            <Github size={22} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://x.com/Tuyipaccy" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-black transition-all duration-300 interactive shadow-inner" title="X (Twitter)">
            <Twitter size={22} />
            <span className="sr-only">X (Twitter)</span>
          </a>
          <a href="https://www.instagram.com/tr_pacifique" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-pink-600 transition-all duration-300 interactive shadow-inner" title="Instagram">
            <Instagram size={22} />
            <span className="sr-only">Instagram</span>
          </a>
          <a href="https://wa.me/250781343621" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-green-600 transition-all duration-300 interactive shadow-inner" title="WhatsApp">
            <MessageCircle size={22} />
            <span className="sr-only">WhatsApp</span>
          </a>
          <a href="mailto:tpaccy6@gmail.com" className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-purple-600 transition-all duration-300 interactive shadow-inner" title="Email me">
            <Mail size={22} />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800/50 text-center flex flex-col md:flex-row justify-between items-center">
        <div className="text-slate-500 text-sm font-medium mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} TUYIRINGIRE Pacifique. All rights reserved.
        </div>
        <div className="text-slate-600 text-sm font-medium">
          Built with <span className="text-primary-500">React</span> & <span className="text-purple-500">Framer Motion</span>
        </div>
      </div>
    </footer>
  );
};
