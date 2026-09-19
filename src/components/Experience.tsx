import { SectionHeader } from './SectionHeader';
import { experience } from '../data/experience';
import { education } from '../data/education';
import { motion } from 'framer-motion';

export const Experience = () => {
  return (
    <section id="experience" className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Experience Column */}
        <div>
          <SectionHeader title="Experience" />
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-700 before:to-transparent">
            {experience.map((exp, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                key={exp.id} 
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-surface-light dark:border-surface-dark bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-500 group-hover:scale-125 group-hover:bg-primary-500 group-hover:text-white">
                  <div className="w-2 h-2 rounded-full bg-current"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-6 rounded-2xl group-hover:border-primary-300 dark:group-hover:border-primary-700 group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className="flex flex-col mb-2">
                    <span className="text-sm font-bold text-primary-600 dark:text-primary-400 tracking-wider uppercase mb-1">{exp.period}</span>
                    <h4 className="text-xl font-bold font-serif text-slate-900 dark:text-white mt-1">{exp.role}</h4>
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400">{exp.company}</span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-primary-400 mt-1.5">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div id="education">
          <SectionHeader title="Education" />
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                key={edu.id} 
                className="glass-panel p-8 rounded-3xl group hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border-l-4 border-l-transparent hover:border-l-primary-500"
              >
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 font-serif">{edu.degree}</h4>
                <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold mb-1">{edu.institution}</p>
                <p className="text-slate-600 dark:text-slate-400 mb-6 font-medium">{edu.department}</p>
                
                <h5 className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-widest">Focus Areas</h5>
                <div className="flex flex-wrap gap-2">
                  {edu.focusAreas.map(area => (
                    <span key={area} className="px-3 py-1.5 bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50 rounded-lg text-sm text-slate-700 dark:text-slate-300 font-medium hover:bg-primary-50 dark:hover:bg-slate-700 transition-colors cursor-default">
                      {area}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
