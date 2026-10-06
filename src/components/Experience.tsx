import { SectionHeader } from './SectionHeader';
import { experience, learningTimeline } from '../data/experience';
import { education } from '../data/education';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Clock, CheckCircle2 } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="section-container relative">
      <div className="relative z-10">
        <SectionHeader 
          title="Experience & Education" 
          subtitle="A progressive trajectory connecting classroom pedagogy, rapid innovation bootcamps, and rigorous software development."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          
          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-2xl bg-primary-500/10 text-primary-400">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-bold font-serif text-white">Practicum & Professional Experience</h3>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary-500 before:via-purple-500 before:to-transparent">
              {experience.map((exp, index) => (
                <motion.div 
                  key={exp.id} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-10"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-2.5 top-1.5 w-3.5 h-3.5 rounded-full bg-primary-500 border-4 border-slate-900 shadow-sm" />

                  <div className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-primary-500/40 transition-colors">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <span className="text-xs font-mono font-bold text-primary-400 uppercase tracking-wider">
                        {exp.period}
                      </span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                        {exp.type}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold font-serif text-white">{exp.role}</h4>
                    <p className="text-sm font-semibold text-primary-300 mb-4">{exp.organization}</p>

                    <ul className="space-y-2 text-xs text-slate-300 mb-4">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 size={13} className="text-primary-400 mt-0.5 flex-shrink-0" />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    {exp.highlights && (
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800">
                        {exp.highlights.map(h => (
                          <span key={h} className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700">
                            {h}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Learning Journey Column */}
          <div className="space-y-12">
            
            {/* Education Box */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-2xl font-bold font-serif text-white">Academic Qualifications</h3>
              </div>

              {education.map(edu => (
                <div key={edu.id} className="glass-panel p-8 rounded-3xl border border-purple-500/30">
                  <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider block mb-1">
                    Undergraduate Degree
                  </span>
                  <h4 className="text-xl font-bold font-serif text-white mb-2">{edu.degree}</h4>
                  <p className="text-base text-primary-300 font-semibold mb-1">{edu.institution}</p>
                  <p className="text-xs text-slate-400 mb-6 font-mono">{edu.department}</p>
                  
                  <span className="text-xs uppercase tracking-widest font-bold text-slate-300 block mb-3">
                    Academic Focus Areas & Specializations
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.focusAreas.map((area: string) => (
                      <span key={area} className="text-xs px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-200 border border-slate-700/80 font-medium">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Learning Progression Timeline */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-primary-500/10 text-primary-400">
                  <Clock size={24} />
                </div>
                <h3 className="text-xl font-bold font-serif text-white">Learning Journey Progression</h3>
              </div>

              <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-4">
                {learningTimeline.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-3 rounded-2xl bg-slate-800/40 border border-slate-700/40">
                    <span className="text-xs font-mono font-bold text-primary-400 bg-primary-950/60 px-2 py-1 rounded border border-primary-800/50 flex-shrink-0">
                      {item.year}
                    </span>
                    <div>
                      <h5 className="text-sm font-bold text-white">{item.title}</h5>
                      <p className="text-xs text-slate-400 mt-0.5">{item.summary}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
