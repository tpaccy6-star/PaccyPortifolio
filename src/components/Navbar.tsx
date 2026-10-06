import { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../utils';
import { CVModal } from './CVModal';
import { playKeyClick } from '../utils/audio';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Teaching', href: '#teaching' },
  { name: 'Projects', href: '#projects' },
  { name: 'Problems', href: '#problems' },
  { name: 'Research', href: '#research' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Leadership', href: '#leadership' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 w-full z-50 transition-all duration-500',
          isScrolled 
            ? 'bg-slate-950/85 backdrop-blur-xl shadow-lg py-2.5 border-b border-slate-800/80' 
            : 'bg-transparent py-4 sm:py-5'
        )}
      >
        {/* Reading progress bar */}
        <div 
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary-500 via-cyan-400 to-purple-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo & Preferred Name */}
            <motion.div 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex-shrink-0"
            >
              <a 
                href="#home" 
                onClick={() => playKeyClick()}
                className="flex items-center gap-3 group"
              >
                <div className="relative">
                  <img 
                    src="/tuyiringire-pacifique-computer-science-educator-logo.png" 
                    alt="TUYIRINGIRE Pacifique portfolio logo" 
                    className="h-9 w-auto transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]" 
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-slate-950 animate-pulse" />
                </div>
                <div className="hidden sm:block">
                  <span className="text-base font-bold text-white tracking-tight block leading-tight font-serif">
                    PACCY
                  </span>
                  <span className="text-[10px] text-primary-400 font-mono tracking-widest block uppercase">
                    CS Educator & Dev
                  </span>
                </div>
              </a>
            </motion.div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-5 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => playKeyClick()}
                  className="relative text-xs font-semibold text-slate-300 hover:text-primary-400 transition-colors py-1 group"
                >
                  {link.name}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              
              <button
                onClick={() => {
                  playKeyClick();
                  setIsCVModalOpen(true);
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-primary-300 border border-slate-700 hover:border-primary-500/50 shadow-sm transition-all"
              >
                <FileText size={13} /> CV
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-3">
              <button
                onClick={() => {
                  playKeyClick();
                  setIsCVModalOpen(true);
                }}
                className="px-3 py-1.5 rounded-xl bg-slate-800 text-xs font-bold text-primary-300 border border-slate-700 flex items-center gap-1"
              >
                <FileText size={13} /> CV
              </button>
              <button
                onClick={() => {
                  playKeyClick();
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                }}
                className="text-slate-300 hover:text-primary-400 focus:outline-none p-1.5"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-slate-950/95 backdrop-blur-2xl shadow-2xl overflow-hidden border-b border-slate-800"
            >
              <div className="px-5 py-4 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      playKeyClick();
                      setIsMobileMenuOpen(false);
                    }}
                    className="block px-4 py-2 rounded-xl text-sm font-semibold text-slate-200 hover:text-primary-300 hover:bg-slate-800/60 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* CV Modal */}
      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
    </>
  );
};
