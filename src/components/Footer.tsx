import { Github, Mail, MessageCircle, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 relative z-10 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-800/80">
          
          {/* Identity & Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/tuyiringire-pacifique-computer-science-educator-logo.png" 
                alt="Paccy Logo" 
                className="h-9 w-auto"
              />
              <span className="text-xl font-bold font-serif text-white tracking-tight">
                TUYIRINGIRE Pacifique (Paccy)
              </span>
            </div>
            <p className="text-sm font-semibold text-primary-400 font-serif">
              Computer Science Educator • Software Developer • EdTech Builder
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Passionate about combining education, software engineering, and emerging technologies to solve real classroom, institutional, and community challenges in Rwanda.
            </p>
            <p className="text-xs italic text-slate-500">
              "Transforming Learning Through Passion and Technology"
            </p>
          </div>

          {/* Quick Links Column 1 */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-200 uppercase tracking-widest">
              Core Showcase
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-primary-400 transition-colors">About & Four Pillars</a>
              </li>
              <li>
                <a href="#teaching" className="hover:text-primary-400 transition-colors">Teaching Practicum (GS Muhororo)</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary-400 transition-colors">Software Engineering Projects</a>
              </li>
              <li>
                <a href="#problems" className="hover:text-primary-400 transition-colors">Problems I Want to Solve</a>
              </li>
              <li>
                <a href="#research" className="hover:text-primary-400 transition-colors">Research & Innovation</a>
              </li>
            </ul>
          </div>

          {/* Quick Links Column 2 */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-200 uppercase tracking-widest">
              Connect & Outreach
            </h4>
            <div className="space-y-2 text-xs">
              <p className="flex items-center gap-2">
                <Mail size={14} className="text-primary-400" />
                <a href="mailto:tpaccy6@gmail.com" className="hover:text-primary-400 transition-colors">
                  tpaccy6@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle size={14} className="text-emerald-400" />
                <a href="https://wa.me/250781343621" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                  +250 781 343 621 (WhatsApp)
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Github size={14} className="text-slate-300" />
                <a href="https://github.com/tpaccy6-star" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
                  github.com/tpaccy6-star
                </a>
              </p>
            </div>
            <div className="pt-2">
              <a 
                href="#contact" 
                className="inline-flex items-center text-xs font-bold text-primary-400 hover:text-primary-300"
              >
                Send a direct message &rarr;
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div>
            © 2026 <span className="text-slate-300 font-medium">TUYIRINGIRE Pacifique (Paccy)</span>. Built with React, TypeScript & Tailwind CSS.
          </div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors border border-slate-800"
          >
            <ArrowUp size={13} /> Back to top
          </button>
        </div>
      </div>
    </footer>
  );
};
