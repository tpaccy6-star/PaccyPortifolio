import React from 'react';
import type { Project } from '../data/types';
import { ExternalLink, Github, Eye, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { TiltCard } from './TiltCard';

interface ProjectCardProps {
  project: Project;
  onSelectProject?: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelectProject }) => {
  return (
    <TiltCard className="h-full">
      <motion.div 
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="glass-panel rounded-2xl overflow-hidden group flex flex-col h-full hover:border-primary-400 dark:hover:border-primary-500 hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-500"
      >
        {/* Banner with status and category */}
        <div className="relative aspect-video overflow-hidden bg-slate-900 cursor-pointer" onClick={() => onSelectProject?.(project)}>
          <img 
            src={project.image} 
            alt={`Screenshot of ${project.name} - Software project by TUYIRINGIRE Pacifique`} 
            loading="lazy"
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
          
          {/* Top badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            <span className="px-2.5 py-0.5 bg-slate-900/90 backdrop-blur-md text-primary-300 text-xs font-bold rounded-full border border-primary-500/30">
              {project.status}
            </span>
            {project.tier === "featured" && (
              <span className="px-2 py-0.5 bg-purple-900/80 backdrop-blur-md text-purple-200 text-xs font-semibold rounded-full border border-purple-500/30 flex items-center gap-1">
                <Sparkles size={11} /> Featured
              </span>
            )}
          </div>

          <div className="absolute top-3 right-3 flex flex-wrap gap-1">
            {project.category.slice(0, 2).map(cat => (
              <span key={cat} className="px-2.5 py-0.5 bg-slate-900/90 backdrop-blur-md text-slate-300 text-xs font-medium rounded-full">
                {cat}
              </span>
            ))}
          </div>

          {/* Quick view hover icon */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary-600/90 text-white text-xs font-bold shadow-lg backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <Eye size={14} /> View Case Study
            </span>
          </div>
        </div>
        
        {/* Card Body */}
        <div className="p-6 flex flex-col flex-grow relative z-10">
          <div className="mb-2">
            <h3 
              onClick={() => onSelectProject?.(project)}
              className="text-xl sm:text-2xl font-bold font-serif text-white group-hover:text-primary-400 transition-colors cursor-pointer"
            >
              {project.name}
            </h3>
            {project.tagline && (
              <p className="text-xs text-primary-400 font-medium mt-1 line-clamp-1">
                {project.tagline}
              </p>
            )}
          </div>
          
          <div className="my-3 text-xs text-slate-300 space-y-2 flex-grow">
            <div>
              <span className="font-bold text-slate-400 uppercase tracking-wider block text-[10px]">Problem</span>
              <p className="text-slate-300 line-clamp-2 mt-0.5">{project.problem}</p>
            </div>
            <div>
              <span className="font-bold text-slate-400 uppercase tracking-wider block text-[10px]">Solution</span>
              <p className="text-slate-300 line-clamp-2 mt-0.5">{project.solution}</p>
            </div>
          </div>

          {/* Tech stack tags */}
          <div className="mt-auto pt-4 border-t border-slate-800/80">
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.techStack.slice(0, 4).map(tech => (
                <span key={tech} className="text-[11px] font-semibold text-slate-300 bg-slate-800/90 px-2 py-0.5 rounded border border-slate-700/60">
                  {tech}
                </span>
              ))}
              {project.techStack.length > 4 && (
                <span className="text-[11px] text-slate-400 px-1 py-0.5">
                  +{project.techStack.length - 4} more
                </span>
              )}
            </div>
            
            <div className="flex items-center justify-between text-xs font-semibold pt-1">
              <button 
                onClick={() => onSelectProject?.(project)}
                className="text-primary-400 hover:text-primary-300 transition-colors inline-flex items-center"
              >
                Deep Dive Details &rarr;
              </button>

              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-primary-400 transition-colors p-1"
                    title="View Source Code"
                  >
                    <Github size={16} />
                  </a>
                )}
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-primary-400 transition-colors p-1"
                    title="Live Demo"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </TiltCard>
  );
};
