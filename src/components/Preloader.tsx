import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [bootText, setBootText] = useState('INITIALIZING PACIFIQUE-OS...');

  useEffect(() => {
    // Lock body scroll while preloading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isLoading]);

  useEffect(() => {
    const sequence = [
      { text: 'LOADING KERNEL MODULES...', delay: 800 },
      { text: 'MOUNTING FILE SYSTEMS...', delay: 1500 },
      { text: 'STARTING UI SERVICES...', delay: 2200 },
      { text: 'SYSTEM READY.', delay: 2900 }
    ];

    sequence.forEach(({ text, delay }) => {
      setTimeout(() => setBootText(text), delay);
    });
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          exit={{ 
            opacity: 0, 
            y: "-100%", 
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0F172A] border-b border-primary-500/30 shadow-[0_20px_50px_rgba(6,182,212,0.1)]"
        >
          {/* Animated Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

          <motion.div 
            initial={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative z-10 w-full max-w-md mx-auto px-4"
          >
            <video 
              src="/Logo_Animation.mp4" 
              autoPlay 
              muted 
              playsInline
              onEnded={() => {
                setTimeout(() => setIsLoading(false), 500);
              }}
              className="w-full h-auto mix-blend-screen drop-shadow-[0_0_30px_rgba(6,182,212,0.3)] object-contain"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-12 font-mono text-xs sm:text-sm text-primary-400 tracking-widest uppercase flex items-center space-x-3"
          >
            <span className="w-2 h-2 bg-primary-400 rounded-full animate-ping"></span>
            <span>{bootText}</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
