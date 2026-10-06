import { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { problemsToSolve } from '../data/problems';
import { 
  Laptop, 
  Users, 
  Calendar, 
  Receipt, 
  GraduationCap, 
  HeartHandshake, 
  BookOpenCheck, 
  Network, 
  CreditCard, 
  Sparkles,
  ArrowRight,
  Target
} from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap: Record<string, any> = {
  Laptop,
  Users,
  Calendar,
  Receipt,
  GraduationCap,
  HeartHandshake,
  BookOpenCheck,
  Network,
  CreditCard,
  Sparkles
};

const PHILOSOPHY_STEPS = [
  "Observe",
  "Understand",
  "Design",
  "Build",
  "Test",
  "Improve",
  "Impact"
];

export const ProblemsMatrix = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(problemsToSolve.map(p => p.category)))];

  const filteredProblems = selectedCategory === "All"
    ? problemsToSolve
    : problemsToSolve.filter(p => p.category === selectedCategory);

  return (
    <section id="problems" className="section-container relative">
      <div className="relative z-10">
        <SectionHeader 
          title="Problems I Want to Solve" 
          subtitle="True engineering begins with empathy and observation, not merely writing lines of code."
          align="center"
        />

        {/* Development Philosophy Banner */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-primary-500/30 text-center max-w-4xl mx-auto mb-12 relative overflow-hidden">
          <div className="inline-flex p-3 rounded-full bg-primary-500/10 text-primary-400 mb-3">
            <Target size={28} />
          </div>
          <blockquote className="text-xl sm:text-2xl font-bold font-serif text-white mb-6">
            "I don't want to build software simply because I can. I want to build software because there is a problem worth solving."
          </blockquote>
          
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold font-mono">
            {PHILOSOPHY_STEPS.map((step, idx) => (
              <div key={step} className="flex items-center">
                <span className="px-3 py-1.5 rounded-xl bg-slate-800 text-primary-300 border border-slate-700">
                  {step}
                </span>
                {idx < PHILOSOPHY_STEPS.length - 1 && (
                  <ArrowRight size={14} className="text-slate-500 mx-1 sm:mx-1.5" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-primary-500 text-white shadow-md shadow-primary-500/30 scale-105"
                  : "bg-slate-800/60 text-slate-400 hover:text-white border border-slate-700/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Problem-Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {filteredProblems.map((item, idx) => {
            const Icon = iconMap[item.iconName] || Sparkles;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800 hover:border-primary-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-primary-500/10 text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                        <Icon size={20} />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>
                    {item.projectRelation && (
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-purple-900/40 text-purple-300 border border-purple-700/40">
                        {item.projectRelation}
                      </span>
                    )}
                  </div>

                  <h4 className="text-lg font-bold text-white font-serif mb-2 group-hover:text-primary-300 transition-colors">
                    {item.problem}
                  </h4>

                  <div className="mb-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-xs font-medium text-emerald-300 flex items-start gap-2">
                    <span className="font-bold text-emerald-400 uppercase tracking-widest text-[10px] block mt-0.5">Direction:</span>
                    <span>{item.technologyDirection}</span>
                  </div>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
