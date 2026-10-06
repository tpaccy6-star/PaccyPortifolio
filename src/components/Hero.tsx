import { useState, useEffect } from 'react';
import { ArrowRight, Download, Github, Mail, Laptop, MessageCircle } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { CVModal } from './CVModal';

const CORE_IDENTITIES = [
  "Teacher",
  "Developer",
  "Problem Solver",
  "Technology Enthusiast",
  "Learner"
];

export const Hero = () => {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 400 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const blob1X = useTransform(smoothX, [0, 1000], [0, 40]);
  const blob1Y = useTransform(smoothY, [0, 1000], [0, 40]);
  const blob2X = useTransform(smoothX, [0, 1000], [0, -40]);
  const blob2Y = useTransform(smoothY, [0, 1000], [0, -40]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="home" className="pt-28 pb-20 lg:pt-40 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Dynamic Background Blobs */}
      <div className="absolute top-0 right-0 w-full h-full -z-10 opacity-30 pointer-events-none overflow-hidden">
        <motion.div 
          style={{ x: blob1X, y: blob1Y }}
          className="absolute top-0 right-10 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-60"
        />
        <motion.div 
          style={{ x: blob2X, y: blob2Y }}
          className="absolute top-0 right-60 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-60"
        />
        <motion.div 
          style={{ x: blob1X, y: blob2Y }}
          className="absolute -bottom-8 right-40 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column (Content) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 relative z-20"
        >
          {/* Logo Animation Integration */}
          <div className="w-44 h-auto mb-4 -ml-3">
            <video 
              src="/Logo_Animation.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-contain mix-blend-screen drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]"
            />
          </div>

          {/* Subtitle / Brand Header */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>University of Rwanda • Department of Math & CS Education</span>
          </div>

          {/* Main Name & Titles */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 tracking-tight">
            <span className="block text-white font-serif">
              TUYIRINGIRE Pacifique
            </span>
            <span className="block text-xl sm:text-2xl text-slate-400 font-mono font-medium mt-1">
              (Preferred: <span className="text-primary-400 font-bold">Paccy</span>)
            </span>
            <span className="block text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-cyan-300 to-purple-400 mt-2 font-serif font-bold">
              Computer Science Educator & Software Developer
            </span>
          </h1>

          {/* Alternative Tagline */}
          <blockquote className="text-base sm:text-lg font-serif italic text-primary-300/90 mb-6 border-l-2 border-primary-500 pl-4 py-0.5">
            "Transforming Learning Through Passion and Technology"
          </blockquote>

          {/* Core Identity Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {CORE_IDENTITIES.map(id => (
              <span 
                key={id}
                className="px-3 py-1 rounded-full text-xs font-bold bg-slate-800/80 text-slate-200 border border-slate-700/80 hover:border-primary-500/50 hover:text-primary-300 transition-colors"
              >
                {id}.
              </span>
            ))}
          </div>

          {/* Short Introduction */}
          <p className="text-sm sm:text-base text-slate-300 mb-8 max-w-2xl leading-relaxed font-normal">
            I am a Computer Science with Education student at the University of Rwanda, passionate about combining education, software development, and emerging technologies to create meaningful learning experiences. My goal is to become a professional Computer Science teacher and software developer who uses technology to solve real educational and community challenges.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-8">
            <a 
              href="#projects" 
              className="group inline-flex items-center px-6 sm:px-7 py-3.5 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-primary-600 to-cyan-600 hover:from-primary-500 hover:to-cyan-500 shadow-lg shadow-primary-500/25 transition-all hover:-translate-y-0.5"
            >
              Explore Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </a>
            <a 
              href="#teaching" 
              className="inline-flex items-center px-6 sm:px-7 py-3.5 rounded-2xl text-sm font-bold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-primary-500/40 transition-all hover:-translate-y-0.5"
            >
              <Laptop size={16} className="mr-2 text-primary-400" />
              Teaching Practicum
            </a>
            <button 
              onClick={() => setIsCVModalOpen(true)}
              className="inline-flex items-center px-5 sm:px-6 py-3.5 rounded-2xl text-sm font-bold text-slate-300 bg-slate-900/60 hover:bg-slate-800/80 border border-slate-700 hover:text-white transition-all hover:-translate-y-0.5"
            >
              <Download size={16} className="mr-2" />
              Download CV
            </button>
          </div>

          {/* Quick Contact & Social Handles */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400 font-medium">
            <a 
              href="https://github.com/tpaccy6-star" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center hover:text-primary-400 transition-colors"
            >
              <Github size={16} className="mr-1.5" />
              tpaccy6-star
            </a>
            <a 
              href="mailto:tpaccy6@gmail.com" 
              className="flex items-center hover:text-primary-400 transition-colors"
            >
              <Mail size={16} className="mr-1.5" />
              tpaccy6@gmail.com
            </a>
            <a 
              href="https://wa.me/250781343621" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center hover:text-emerald-400 transition-colors"
            >
              <MessageCircle size={16} className="mr-1.5 text-emerald-400" />
              +250 781 343 621
            </a>
          </div>
        </motion.div>
        
        {/* Right Column (Portrait Card & Status) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] max-w-sm sm:max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-700/60 group">
            <img 
              src="/tuyiringire-pacifique-software-developer-rwanda.jpg" 
              alt="TUYIRINGIRE Pacifique (Paccy) - Computer Science Educator and Software Developer in Rwanda" 
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
            
            {/* Status overlay bottom */}
            <div className="absolute bottom-5 left-5 right-5">
              <div className="p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 shadow-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-white font-bold text-sm">Computer Science & EdTech</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">Available</span>
                  </div>
                </div>
                <p className="text-xs text-slate-300">
                  Open to teaching opportunities, software engineering, EdTech ventures & research.
                </p>
              </div>
            </div>
          </div>

          {/* Decorative blurred backgrounds */}
          <div className="absolute -bottom-8 -left-8 w-44 h-44 bg-primary-500/20 rounded-full blur-3xl -z-10" />
          <div className="absolute -top-8 -right-8 w-44 h-44 bg-purple-500/20 rounded-full blur-3xl -z-10" />
        </motion.div>

      </div>

      {/* Curriculum Vitae Modal */}
      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
    </section>
  );
};
