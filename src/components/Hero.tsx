import { ArrowRight, Download, Github } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

export const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 400 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const blob1X = useTransform(smoothX, [0, 1000], [0, 50]);
  const blob1Y = useTransform(smoothY, [0, 1000], [0, 50]);
  const blob2X = useTransform(smoothX, [0, 1000], [0, -50]);
  const blob2Y = useTransform(smoothY, [0, 1000], [0, -50]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="home" className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Dynamic Background Blobs */}
      <div className="absolute top-0 right-0 w-full h-full -z-10 opacity-40 dark:opacity-20 pointer-events-none overflow-hidden">
        <motion.div 
          style={{ x: blob1X, y: blob1Y }}
          className="absolute top-0 right-10 w-96 h-96 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"
        ></motion.div>
        <motion.div 
          style={{ x: blob2X, y: blob2Y }}
          className="absolute top-0 right-60 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"
        ></motion.div>
        <motion.div 
          style={{ x: blob1X, y: blob2Y }}
          className="absolute -bottom-8 right-40 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"
        ></motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative z-20"
          >
            {/* Animated Logo integrated into Hero */}
            <div className="w-48 h-auto mb-6 -ml-4">
              <video 
                src="/Logo_Animation.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-contain mix-blend-screen drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]"
              />
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
              <span className="block text-slate-900 dark:text-white pb-1">
                TUYIRINGIRE Pacifique
              </span>
              <span className="block text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400 pb-2 mt-2">
                Computer Science Educator & Software Developer
              </span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed font-medium"
          >
            I am a Computer Science Educator and Software Developer based in Rwanda. I combine my passion for teaching with modern web technologies to build scalable software solutions and advance Educational Technology.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="#projects" 
              className="group inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-white bg-primary-600 hover:bg-primary-700 shadow-xl shadow-primary-600/30 transition-all hover:-translate-y-1 interactive"
            >
              View My Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a 
              href="#" 
              className="inline-flex justify-center items-center px-8 py-4 border border-slate-200 dark:border-slate-700 text-base font-bold rounded-full text-slate-700 dark:text-slate-300 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md hover:bg-white dark:hover:bg-slate-800 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 interactive"
            >
              <Download className="mr-2" size={20} />
              Download CV
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-12 flex items-center space-x-6 text-sm text-slate-500 font-medium"
          >
            <a href="https://github.com/tpaccy6-star" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary-600 dark:hover:text-primary-400 transition-colors interactive">
              <Github size={24} className="mr-2" />
              tpaccy6-star
            </a>
            <a href="mailto:tpaccy6@gmail.com" className="flex items-center hover:text-primary-600 dark:hover:text-primary-400 transition-colors interactive">
              tpaccy6@gmail.com
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut", type: "spring", bounce: 0.4 }}
          className="relative lg:ml-auto perspective-1000"
        >
          <motion.div 
            style={{ rotateX: blob2X, rotateY: blob1Y }}
            className="aspect-[4/5] w-full max-w-md mx-auto rounded-[2rem] overflow-hidden relative shadow-2xl ring-1 ring-white/20 dark:ring-white/10 group transform-gpu"
          >
            <img 
              src="/tuyiringire-pacifique-software-developer-rwanda.jpg" 
              alt="TUYIRINGIRE Pacifique - Computer Science Educator and Software Developer in Rwanda" 
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-1000 ease-out"
            />
            {/* Glass overlay at bottom of image */}
            <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6">
              <div className="glass-panel p-4 rounded-xl backdrop-blur-xl border-white/20">
                <p className="text-white font-bold tracking-wide">Available for Work</p>
                <div className="flex items-center mt-1 space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                  <p className="text-slate-300 text-xs font-medium uppercase tracking-wider">Open to opportunities</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Decorative floating elements */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-500/30 rounded-full blur-3xl -z-10"
          ></motion.div>
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-10 -right-10 w-48 h-48 bg-purple-500/30 rounded-full blur-3xl -z-10"
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
};
