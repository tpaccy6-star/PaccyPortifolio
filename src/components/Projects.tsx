import { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { ProjectCard } from './ProjectCard';
import { projects } from '../data/projects';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = ["All", "Education", "Web", "Mobile", "Desktop", "AI", "Data"];

export const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category.includes(filter as any));

  return (
    <section id="projects" className="section-container relative overflow-hidden">
      {/* Dynamic Background Blobs to match Hero */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30 dark:opacity-20 pointer-events-none">
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-96 h-96 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-60"
        ></motion.div>
        <motion.div 
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-60"
        ></motion.div>
      </div>

      <div className="absolute inset-0 bg-slate-50/70 dark:bg-slate-900/70 -skew-y-2 -z-20 origin-bottom-right transform-gpu"></div>
      
      <div className="relative z-10">
        <SectionHeader 
          title="Selected Projects" 
          subtitle="Software systems and applications built to solve real-world problems."
        />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-3 mb-12 justify-center"
      >
        {CATEGORIES.map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              filter === category 
                ? 'bg-gradient-to-r from-primary-600 to-purple-600 text-white shadow-lg shadow-primary-500/25 scale-105' 
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-700 hover:text-primary-600'
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        <AnimatePresence>
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
      
      {filteredProjects.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20 text-slate-500 font-medium"
        >
          No projects found in this category yet.
        </motion.div>
      )}
      </div>
    </section>
  );
};
