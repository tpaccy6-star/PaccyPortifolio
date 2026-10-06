import { SectionHeader } from './SectionHeader';
import { researchProjects, innovationPrograms } from '../data/research';
import { Database, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const ResearchInnovation = () => {
  return (
    <section id="research" className="section-container relative">
      <div className="relative z-10">
        <SectionHeader 
          title="Research & Innovation" 
          subtitle="Grounding technological development in empirical evidence, national survey data, and social-impact entrepreneurship."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* RESEARCH COLUMN */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-primary-500/10 text-primary-400">
                <Database size={24} />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-primary-400 uppercase tracking-widest">
                  Empirical Inquiry
                </span>
                <h3 className="text-2xl font-bold font-serif text-white">Applied Data Research</h3>
              </div>
            </div>

            {researchProjects.map(research => (
              <motion.div
                key={research.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6"
              >
                <div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary-500/20 text-primary-300 border border-primary-500/30">
                    National Survey Dataset
                  </span>
                  <h4 className="text-xl font-bold font-serif text-white mt-3 mb-2">
                    {research.title}
                  </h4>
                  <p className="text-xs font-mono text-slate-400 mb-4">
                    📊 Dataset: {research.dataset}
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {research.focus}
                  </p>
                </div>

                {/* Methodology steps */}
                <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                  <span className="text-xs uppercase tracking-wider font-bold text-slate-300 block mb-2">
                    Methodological Workflow
                  </span>
                  <ul className="space-y-2 text-xs text-slate-400">
                    {research.methods.map((method, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-primary-400 mt-0.5 flex-shrink-0" />
                        <span>{method}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pipeline Flow Banner */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-primary-950/40 to-purple-950/40 border border-primary-800/40 text-center">
                  <span className="text-xs uppercase tracking-widest font-bold text-primary-400 block mb-2">
                    Evidence-Based Synthesis
                  </span>
                  <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs font-mono font-bold text-slate-200">
                    <span className="text-primary-300">Data</span>
                    <ArrowRight size={12} className="text-slate-500" />
                    <span className="text-purple-300">Analysis</span>
                    <ArrowRight size={12} className="text-slate-500" />
                    <span className="text-emerald-300">Evidence</span>
                    <ArrowRight size={12} className="text-slate-500" />
                    <span className="text-amber-300">Decision-Making</span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 italic">
                  {research.impact}
                </p>
              </motion.div>
            ))}
          </div>

          {/* INNOVATION COLUMN */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400">
                <Rocket size={24} />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest">
                  Venture Incubation
                </span>
                <h3 className="text-2xl font-bold font-serif text-white">Innovation & Hackathons</h3>
              </div>
            </div>

            <div className="space-y-6">
              {innovationPrograms.map((prog, idx) => (
                <motion.div
                  key={prog.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-panel p-6 sm:p-7 rounded-3xl border border-slate-800 hover:border-purple-500/40 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-mono font-bold text-purple-400">
                      {prog.dates}
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">
                      📍 {prog.location}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-bold font-serif text-white mb-2">
                    {prog.title}
                  </h4>
                  
                  <div className="mb-3 text-xs font-semibold text-primary-300">
                    Focus: {prog.focus}
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {prog.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                    {prog.themes.map(t => (
                      <span key={t} className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
