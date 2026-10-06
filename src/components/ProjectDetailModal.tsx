import React from 'react';
import type { Project } from '../data/types';
import { X, ExternalLink, Github, Award, CheckCircle2, AlertTriangle, Lightbulb, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const [showCertificate, setShowCertificate] = React.useState(false);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-y-auto z-10 text-slate-100 p-6 sm:p-8"
        >
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {/* Header */}
          <div className="flex flex-wrap items-center gap-3 mb-3 pr-12">
            <span className="px-3 py-1 text-xs font-bold rounded-full bg-primary-500/20 text-primary-300 border border-primary-500/30">
              {project.status}
            </span>
            {project.category.map(cat => (
              <span key={cat} className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-800 text-slate-300">
                {cat}
              </span>
            ))}
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 font-serif">
            {project.name}
          </h2>
          {project.tagline && (
            <p className="text-lg text-primary-400 font-medium mb-6">
              {project.tagline}
            </p>
          )}

          {/* Project Banner Image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 border border-slate-800">
            <img 
              src={project.image} 
              alt={project.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Role</p>
                <p className="text-sm font-semibold text-white">{project.role}</p>
              </div>
              <div className="flex gap-3">
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-sm font-medium text-white border border-slate-700 transition-colors"
                  >
                    <Github size={16} className="mr-2" /> Code
                  </a>
                )}
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-xl bg-primary-600 hover:bg-primary-500 text-sm font-medium text-white transition-colors"
                  >
                    <ExternalLink size={16} className="mr-2" /> Live Demo
                  </a>
                )}
                {project.certificatePreview && (
                  <button
                    onClick={() => setShowCertificate(!showCertificate)}
                    className="inline-flex items-center px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-sm font-medium text-white transition-colors"
                  >
                    <Award size={16} className="mr-2" /> {showCertificate ? "Hide Certificate" : "Certificate Preview"}
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Interactive Certificate Preview for FluentEdge */}
          {showCertificate && project.certificatePreview && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border-4 border-amber-300 text-slate-900 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-3 right-4 text-xs font-mono font-bold text-amber-700 bg-amber-200/60 px-2 py-1 rounded">
                SIMULATED CERTIFICATE
              </div>
              <div className="text-center max-w-xl mx-auto space-y-3">
                <div className="inline-flex p-3 rounded-full bg-amber-100 text-amber-700 mb-1">
                  <Award size={36} />
                </div>
                <h4 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-serif text-slate-900">
                  FluentEdge Academy
                </h4>
                <p className="text-xs tracking-widest font-bold text-amber-800 uppercase">
                  Certificate of Completion • CEFR English Proficiency Award
                </p>
                <div className="py-2 border-y border-amber-200">
                  <p className="text-sm text-slate-600">This certifies that the recipient has successfully completed</p>
                  <p className="text-xl font-bold text-slate-900 mt-1">PROFESSIONAL ENGLISH 1 (A1)</p>
                  <p className="text-sm font-semibold text-emerald-700 mt-1">Final Grade: 100% — Mastered</p>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 pt-2 font-mono">
                  <span>Instructor: TUYIRINGIRE Pacifique</span>
                  <span className="font-bold text-slate-700">Verification Code: FEA-A1-2026-9842</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/60">
              <div className="flex items-center text-amber-400 font-bold mb-2">
                <AlertTriangle size={18} className="mr-2" />
                The Problem
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.problem}
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/60">
              <div className="flex items-center text-emerald-400 font-bold mb-2">
                <Lightbulb size={18} className="mr-2" />
                The Solution
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture Concept */}
          {project.architectureConcept && (
            <div className="mb-8 p-5 rounded-2xl bg-slate-800/40 border border-slate-700">
              <div className="flex items-center text-primary-400 font-bold mb-2">
                <Layers size={18} className="mr-2" />
                System Architecture Concept
              </div>
              <p className="text-slate-300 text-sm leading-relaxed font-mono">
                {project.architectureConcept}
              </p>
            </div>
          )}

          {/* Key Features */}
          <div className="mb-8">
            <h4 className="text-lg font-bold text-white mb-4 font-serif">Key Features & Capabilities</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyFeatures.map((feature, i) => (
                <div key={i} className="flex items-start text-sm text-slate-300 p-3 rounded-xl bg-slate-800/30 border border-slate-800">
                  <CheckCircle2 size={16} className="text-primary-400 mr-2.5 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges & What I Learned */}
          {(project.challenges || project.whatILearned) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {project.challenges && (
                <div>
                  <h5 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2">Technical Challenges</h5>
                  <p className="text-sm text-slate-300 bg-slate-800/30 p-4 rounded-xl border border-slate-800">
                    {project.challenges}
                  </p>
                </div>
              )}
              {project.whatILearned && (
                <div>
                  <h5 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2">What I Learned</h5>
                  <p className="text-sm text-slate-300 bg-slate-800/30 p-4 rounded-xl border border-slate-800">
                    {project.whatILearned}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Tech Stack Footer */}
          <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2">Technologies Used</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map(t => (
                  <span key={t} className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-800 text-primary-300 border border-slate-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-sm font-semibold text-white transition-colors"
            >
              Close Details
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
