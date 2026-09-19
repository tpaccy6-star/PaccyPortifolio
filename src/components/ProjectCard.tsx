import type { Project } from '../data/types';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { TiltCard } from './TiltCard';

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <TiltCard className="h-full">
      <motion.div 
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="glass-panel rounded-2xl overflow-hidden group flex flex-col h-full hover:border-primary-400 dark:hover:border-primary-600 hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-500"
      >
        <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-900">
          <img 
            src={project.image} 
            alt={`Screenshot of ${project.name} - Software project by TUYIRINGIRE Pacifique`} 
            loading="lazy"
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute top-4 right-4 flex gap-2">
            {project.category.map(cat => (
              <span key={cat} className="px-3 py-1 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md text-slate-900 dark:text-slate-100 text-xs font-bold rounded-full shadow-md">
                {cat}
              </span>
            ))}
          </div>
        </div>
        
        <div className="p-6 flex flex-col flex-grow relative z-10">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold font-serif text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {project.name}
            </h3>
            <span className="px-2 py-1 bg-primary-100/80 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-md font-medium whitespace-nowrap ml-4">
              {project.status}
            </span>
          </div>
          
          <div className="mb-4">
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Problem:</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">{project.problem}</p>
          </div>
          
          <div className="mb-4">
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Solution:</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">{project.solution}</p>
          </div>

          <div className="mt-auto pt-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map(tech => (
                <span key={tech} className="text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-200/50 dark:border-slate-700/50">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex items-center gap-4 text-sm font-semibold">
              {project.githubUrl && (
                <a href={project.githubUrl} className="flex items-center text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 transition-colors interactive">
                  <Github size={18} className="mr-1.5" /> Code
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} className="flex items-center text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 transition-colors interactive">
                  <ExternalLink size={18} className="mr-1.5" /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </TiltCard>
  );
};
