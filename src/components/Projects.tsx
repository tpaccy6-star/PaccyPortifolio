import { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailModal } from './ProjectDetailModal';
import { projects } from '../data/projects';
import type { Project } from '../data/types';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Layers, Smartphone } from 'lucide-react';
import { playKeyClick } from '../utils/audio';

const TABS = [
  { id: "featured", label: "Featured Systems", icon: Sparkles },
  { id: "all", label: "All Engineering Projects", icon: Layers },
  { id: "mobile-series", label: "React Native Mobile Series", icon: Smartphone }
];

const CATEGORIES = ["All", "Education", "Web", "Mobile", "Desktop", "AI", "FinTech", "Systems"];

export const Projects = () => {
  const [activeTab, setActiveTab] = useState<"featured" | "all" | "mobile-series">("featured");
  const [filterCategory, setFilterCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter(project => {
    // Tab filtering
    if (activeTab === "featured" && project.tier !== "featured") return false;
    if (activeTab === "mobile-series" && project.tier !== "mobile-series") return false;
    
    // Category filtering
    if (filterCategory !== "All" && !project.category.includes(filterCategory as any)) {
      return false;
    }
    
    return true;
  });

  return (
    <section id="projects" className="section-container relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30 pointer-events-none">
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-96 h-96 bg-primary-500/20 rounded-full filter blur-3xl"
        />
        <motion.div 
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl"
        />
      </div>

      <div className="relative z-10">
        <SectionHeader 
          title="Software Systems & Engineering" 
          subtitle="Honest, problem-driven software built for learning, institutional automation, and community impact."
          align="center"
        />

        {/* Tier Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {TABS.map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  playKeyClick();
                  setActiveTab(tab.id as any);
                  setFilterCategory("All");
                }}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 ${
                  isActive 
                    ? 'bg-gradient-to-r from-primary-600 to-purple-600 text-white shadow-lg shadow-primary-500/25 scale-105' 
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-slate-700 hover:border-primary-500/50'
                }`}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Sub-Category Filters (for 'all' or 'featured') */}
        {activeTab !== "mobile-series" && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-2 mb-12 justify-center"
          >
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => {
                  playKeyClick();
                  setFilterCategory(category);
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  filterCategory === category
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'bg-slate-800/50 text-slate-400 hover:text-slate-200 border border-slate-700/50 hover:bg-slate-800'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        )}

        {/* Tab Intro Banner */}
        {activeTab === "featured" && (
          <div className="max-w-3xl mx-auto text-center mb-10 p-4 rounded-2xl bg-slate-800/40 border border-slate-700/60 text-slate-300 text-sm">
            <span className="font-bold text-primary-400">Featured Tier:</span> Architectural blueprints and active implementations solving large-scale challenges across education, scheduling, and scholarship lifecycles.
          </div>
        )}
        {activeTab === "mobile-series" && (
          <div className="max-w-3xl mx-auto text-center mb-10 p-4 rounded-2xl bg-slate-800/40 border border-slate-700/60 text-slate-300 text-sm">
            <span className="font-bold text-primary-400">Practical Mobile Journey:</span> Hands-on mobile applications developed with React Native, Android Studio, Hermes, and Gradle to demonstrate step-by-step mobile software fundamentals.
          </div>
        )}

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          <AnimatePresence>
            {filteredProjects.map(project => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onSelectProject={(p) => setSelectedProject(p)} 
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-slate-500 font-medium">
            No projects found matching the selected filter.
          </div>
        )}
      </div>

      {/* Project Deep Dive Modal */}
      <ProjectDetailModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};
