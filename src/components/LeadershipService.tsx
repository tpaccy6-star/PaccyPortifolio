import { SectionHeader } from './SectionHeader';
import { leadershipExperiences, faithAndService, communicationSkills } from '../data/leadership';
import { Heart, Mic, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const LeadershipService = () => {
  return (
    <section id="leadership" className="section-container relative">
      <div className="relative z-10">
        <SectionHeader 
          title="Leadership, Community & Faith" 
          subtitle="Education and software engineering are most impactful when anchored in servant leadership, ethical stewardship, and community impact."
          align="center"
        />

        {/* Leadership Roles Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {leadershipExperiences.map((lead, idx) => (
            <motion.div
              key={lead.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-6 sm:p-7 rounded-3xl border border-slate-800 flex flex-col justify-between hover:border-primary-500/30 transition-colors"
            >
              <div>
                <span className="text-xs font-mono font-bold text-primary-400 uppercase tracking-widest block mb-2">
                  {lead.category}
                </span>
                <h4 className="text-xl font-bold font-serif text-white mb-1">{lead.role}</h4>
                <p className="text-sm font-semibold text-slate-300 mb-4">{lead.organization}</p>

                <div className="space-y-2 mb-6">
                  {lead.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start text-xs text-slate-400">
                      <CheckCircle2 size={13} className="text-primary-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-800/60 border border-slate-700/60 text-xs text-slate-300 italic">
                <span className="font-bold text-white not-italic block mb-0.5">Impact:</span>
                "{lead.impact}"
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leadership in Action Feature Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 max-w-6xl mx-auto mb-16 flex flex-col md:flex-row items-center gap-6 sm:gap-8 overflow-hidden"
        >
          <figure className="relative w-full md:w-56 h-64 sm:h-72 rounded-2xl overflow-hidden border border-slate-700/80 flex-shrink-0 shadow-2xl group max-w-xs mx-auto md:mx-0">
            <img
              src="/tuyiringire-pacifique-leadership-handover-portrait.png"
              alt="TUYIRINGIRE Pacifique leadership handover portrait in Rwanda"
              width="450"
              height="600"
              loading="lazy"
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/95 via-slate-900/80 to-transparent p-2 text-[10px] text-slate-300 text-center font-mono">
              Handover Ceremony • Student Union
            </figcaption>
          </figure>
          <div className="flex-1 text-left">
            <span className="text-xs font-mono font-bold text-primary-400 uppercase tracking-widest block mb-2">
              Stewardship & Governance
            </span>
            <h4 className="text-2xl font-bold font-serif text-white mb-2">
              Leading with Integrity, Vision & Service
            </h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
              From student governance representing academic peers at the University of Rwanda to leading youth biblical education at Christian Life Assembly (CLA) Remera, every leadership mandate is focused on mentorship, ethical accountability, and empowering others to thrive.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-400">
              <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300">University of Rwanda Student Union</span>
              <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300">CLA Remera Youth Leadership</span>
              <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300">Mentorship & Public Speaking</span>
            </div>
          </div>
        </motion.div>

        {/* Faith & Service Banner & Communication */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Faith & Service Box */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-3xl border border-purple-500/30 relative overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4 text-purple-400">
                <Heart size={24} />
                <h4 className="text-2xl font-bold font-serif text-white">Faith & Core Values</h4>
              </div>
              <blockquote className="text-base sm:text-lg text-slate-200 font-serif italic mb-6 leading-relaxed">
                "{faithAndService.quote}"
              </blockquote>
              <ul className="space-y-3 text-sm text-slate-300 mb-6">
                {faithAndService.pillars.map((pillar, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <ShieldCheck size={16} className="text-purple-400 mt-0.5 flex-shrink-0" />
                    <span>{pillar}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-xs text-slate-400 font-mono pt-4 border-t border-slate-800">
              Christian Faith • Servant Leadership • Integrity • Stewardship
            </div>
          </motion.div>

          {/* Communication & Public Speaking Box */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-3xl border border-primary-500/30 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4 text-primary-400">
                <Mic size={24} />
                <h4 className="text-2xl font-bold font-serif text-white">Public Speaking & Communication</h4>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Technical ability becomes truly transformative when coupled with the capacity to communicate complex logic clearly across classrooms, conference halls, and faith communities.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {communicationSkills.map((skill, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs font-semibold text-slate-200 flex items-center gap-2">
                    <Sparkles size={14} className="text-primary-400 flex-shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-xs text-slate-400 font-mono pt-4 border-t border-slate-800">
              Facilitation • Sermons • Classroom Pedagogy • Technical Scaffolding
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
