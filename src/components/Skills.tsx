import { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { skillsList, currentlyLearning, currentlyBuilding, workspaceEnvironment } from '../data/skills';
import { CheckCircle2, Monitor, Sparkles, Flame } from 'lucide-react';
import { motion } from 'framer-motion';

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Programming", "Frameworks & Mobile", "Backend & Databases", "CS Foundations", "Dev Tools & Systems", "EdTech & Pedagogy"];

  const filteredSkills = selectedCategory === "All"
    ? skillsList
    : skillsList.filter(s => s.category === selectedCategory);

  return (
    <section id="skills" className="section-container relative">
      <div className="relative z-10">
        <SectionHeader 
          title="Skills, Foundations & Workspace" 
          subtitle="A solid synthesis of Computer Science theory, modern full-stack mobile/web engineering, and instructional technology."
          align="center"
        />

        {/* Live Status Indicators: Currently Building & Currently Learning */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto mb-16">
          
          {/* Currently Building */}
          <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-primary-500/30">
            <div className="flex items-center gap-2.5 text-primary-400 mb-4 font-bold text-sm">
              <Flame size={18} className="text-amber-400 animate-pulse" />
              <span>CURRENTLY BUILDING</span>
            </div>
            <div className="space-y-3">
              {currentlyBuilding.map((item, idx) => (
                <div key={idx} className="p-3 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
                  <div>
                    <h5 className="text-sm font-bold text-white">{item.name}</h5>
                    <p className="text-xs text-slate-400">{item.desc}</p>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary-500/20 text-primary-300 border border-primary-500/30">
                    {item.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Currently Learning */}
          <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-purple-500/30">
            <div className="flex items-center gap-2.5 text-purple-400 mb-4 font-bold text-sm">
              <Sparkles size={18} />
              <span>CURRENTLY LEARNING & EXPANDING</span>
            </div>
            <p className="text-xs text-slate-400 mb-4">
              "I'm not finished—and that's intentional." Actively strengthening next-generation capabilities:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {currentlyLearning.map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs font-medium text-slate-200 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Filter Pills */}
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

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto mb-16">
          {filteredSkills.map(skill => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-4 rounded-2xl glass-panel border border-slate-800 hover:border-primary-500/40 transition-colors flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 
                  size={16} 
                  className={skill.level === "Primary" ? "text-primary-400" : "text-slate-500"} 
                />
                <span className="text-sm font-semibold text-slate-200 group-hover:text-primary-300 transition-colors">
                  {skill.name}
                </span>
              </div>
              <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                skill.level === "Primary" 
                  ? "bg-primary-500/10 text-primary-300 border border-primary-500/30"
                  : "bg-slate-800 text-slate-400 border border-slate-700"
              }`}>
                {skill.level}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Development Environment / Systems Section */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800 max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6 text-primary-400">
            <Monitor size={24} />
            <h4 className="text-2xl font-bold font-serif text-white">Development Environment & Toolchain</h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {workspaceEnvironment.map((env, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60">
                <span className="text-xs uppercase font-bold text-primary-400 block mb-1">
                  {env.label}
                </span>
                <span className="text-sm font-medium text-slate-200">
                  {env.value}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
