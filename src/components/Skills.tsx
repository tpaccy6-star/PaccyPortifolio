import { SectionHeader } from './SectionHeader';
import { skills } from '../data/skills';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 }
};

export const Skills = () => {
  const categories = Array.from(new Set(skills.map(s => s.category)));

  return (
    <section id="skills" className="section-container relative">
      <SectionHeader 
        title="Skills & Expertise" 
        align="center"
      />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 max-w-5xl mx-auto relative z-10"
      >
        {categories.map(category => (
          <motion.div 
            key={category} 
            variants={cardVariants}
            className="glass-panel rounded-3xl p-8 relative overflow-hidden group hover:border-primary-500/30 transition-colors"
          >
            {/* Decorative gradient orb */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-primary-400/10 to-purple-400/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

            <h3 className="text-2xl font-bold mb-6 font-serif border-b border-slate-200/50 dark:border-slate-700/50 pb-4 relative z-10">{category}</h3>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
            >
              {skills.filter(s => s.category === category).map(skill => (
                <motion.div 
                  key={skill.name} 
                  variants={itemVariants}
                  className="flex items-start group/item"
                >
                  <CheckCircle2 
                    size={18} 
                    className={`mr-2 mt-0.5 flex-shrink-0 transition-transform group-hover/item:scale-110 ${skill.level === 'Primary' ? 'text-primary-600 dark:text-primary-400' : 'text-slate-400'}`} 
                  />
                  <div>
                    <span className="font-medium text-slate-700 dark:text-slate-300 group-hover/item:text-primary-600 dark:group-hover/item:text-primary-400 transition-colors">{skill.name}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
