import { useState } from 'react';
import { Laptop, CheckCircle2, Users, Monitor, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type LaptopStatus = 'student-active' | 'assigned-teacher' | 'battery-dead' | 'scrapped';

interface LaptopNode {
  id: number;
  status: LaptopStatus;
  label: string;
}

// Generate the 105 Positivo BGH laptop nodes matching GS Muhororo reality
const generateFleet = (): LaptopNode[] => {
  const nodes: LaptopNode[] = [];
  let id = 1;
  // 6 realistically available for student practicals
  for (let i = 0; i < 6; i++) {
    nodes.push({ id: id++, status: 'student-active', label: `Positivo #${id - 1} - Student Practical Station (Functional)` });
  }
  // 32 functional assigned to teachers/admin
  for (let i = 0; i < 32; i++) {
    nodes.push({ id: id++, status: 'assigned-teacher', label: `Positivo #${id - 1} - Assigned to Teachers / Admin Office` });
  }
  // 40 affected by dead batteries / power faults
  for (let i = 0; i < 40; i++) {
    nodes.push({ id: id++, status: 'battery-dead', label: `Positivo #${id - 1} - Defective Battery / Power Inoperable` });
  }
  // 27 completely scrapped
  for (let i = 0; i < 27; i++) {
    nodes.push({ id: id++, status: 'scrapped', label: `Positivo #${id - 1} - Scrapped / Decommissioned Hardware` });
  }
  return nodes;
};

const fleet = generateFleet();

export const LaptopFleetVisualizer = () => {
  const [selectedNode, setSelectedNode] = useState<LaptopNode | null>(null);
  const [activeScenario, setActiveScenario] = useState<'s4' | 's3'>('s4');

  const activeLearners = activeScenario === 's4' ? 18 : 68;
  const ratio = (activeLearners / 6).toFixed(1);

  return (
    <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-primary-500/40 relative overflow-hidden">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-primary-400 text-xs font-bold font-mono uppercase tracking-widest mb-1">
            <Sparkles size={14} /> Interactive Pedagogical Simulation
          </div>
          <h4 className="text-xl sm:text-2xl font-bold font-serif text-white">
            GS MUHORORO Laptop Fleet & Classroom Ratio Visualizer
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            Click on any laptop node below to inspect hardware telemetry from the 105 Positivo BGH fleet.
          </p>
        </div>

        {/* Classroom scenario switcher */}
        <div className="flex items-center gap-2 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-700">
          <button
            onClick={() => setActiveScenario('s4')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeScenario === 's4'
                ? 'bg-primary-500 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            S4 HGL (18 Learners)
          </button>
          <button
            onClick={() => setActiveScenario('s3')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeScenario === 's3'
                ? 'bg-purple-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            S3 (68 Learners)
          </button>
        </div>
      </div>

      {/* Classroom Rotation Telemetry HUD */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-center gap-3">
          <div className="p-3 rounded-xl bg-primary-500/20 text-primary-400">
            <Users size={20} />
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">Class Roster</span>
            <span className="text-lg font-extrabold text-white">{activeLearners} Students Present</span>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-center gap-3">
          <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400">
            <Laptop size={20} />
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">Functional Student Hardware</span>
            <span className="text-lg font-extrabold text-emerald-300">6 Working Laptops</span>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-800/60 border border-primary-500/40 flex items-center gap-3">
          <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-400">
            <Monitor size={20} />
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold text-primary-400 uppercase tracking-widest block">Rotation Ratio</span>
            <span className="text-lg font-extrabold text-white">
              {ratio} Learners / Machine
            </span>
          </div>
        </div>
      </div>

      {/* Fleet Grid (105 nodes) */}
      <div className="mb-6">
        <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 mb-3">
          <span className="font-bold text-slate-300">105 Positivo BGH Hardware Matrix:</span>
          <div className="flex flex-wrap gap-3 text-[11px]">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" /> 6 Active Student Machines</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-blue-400" /> 32 Teacher / Admin Laptops</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-400" /> 40 Battery/Power Faults</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-400" /> 27 Scrapped Units</span>
          </div>
        </div>

        <div className="grid grid-cols-15 sm:grid-cols-21 gap-1.5 p-4 rounded-2xl bg-slate-950/70 border border-slate-800 max-h-[160px] overflow-y-auto">
          {fleet.map((node) => {
            let color = 'bg-slate-700';
            if (node.status === 'student-active') color = 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)] animate-pulse';
            if (node.status === 'assigned-teacher') color = 'bg-blue-500/80';
            if (node.status === 'battery-dead') color = 'bg-amber-500/70';
            if (node.status === 'scrapped') color = 'bg-red-500/70';

            const isSelected = selectedNode?.id === node.id;

            return (
              <button
                key={node.id}
                onClick={() => setSelectedNode(node)}
                title={node.label}
                className={`w-4 h-4 rounded-sm ${color} transition-all duration-200 hover:scale-150 ${
                  isSelected ? 'ring-2 ring-white scale-125 z-10' : ''
                }`}
              />
            );
          })}
        </div>
      </div>

      {/* Selected Node Details or Strategy Card */}
      <AnimatePresence mode="wait">
        {selectedNode ? (
          <motion.div
            key={selectedNode.id}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center justify-between text-xs"
          >
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-primary-400">Node #{selectedNode.id}:</span>
              <span className="text-slate-200">{selectedNode.label}</span>
            </div>
            <button
              onClick={() => setSelectedNode(null)}
              className="text-[11px] text-slate-400 hover:text-white underline ml-2"
            >
              Dismiss
            </button>
          </motion.div>
        ) : (
          <div className="p-4 rounded-2xl bg-gradient-to-r from-primary-950/40 via-purple-950/30 to-slate-900 border border-primary-500/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 size={16} className="text-primary-400 flex-shrink-0" />
              <span>
                {activeScenario === 's4' 
                  ? "S4 Strategy: 3 students per working machine using Driver/Navigator pair coding while live code is projected on wall."
                  : "S3 Strategy: 11 students per station rotating hands-on practice, reinforced by whiteboard logic dry-runs & SEN peer support."}
              </span>
            </div>
            <span className="text-primary-300 font-bold whitespace-nowrap">
              Resource Resilience in Action
            </span>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
