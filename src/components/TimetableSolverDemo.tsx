import { useState } from 'react';
import { AlertTriangle, CheckCircle2, RefreshCw, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const TimetableSolverDemo = () => {
  const [isSolving, setIsSolving] = useState(false);
  const [isResolved, setIsResolved] = useState(false);

  const handleSolve = () => {
    setIsSolving(true);
    setTimeout(() => {
      setIsSolving(false);
      setIsResolved(true);
    }, 700);
  };

  const handleReset = () => {
    setIsResolved(false);
  };

  return (
    <div className="glass-panel p-4 sm:p-8 rounded-3xl border border-cyan-500/30 text-slate-100">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div>
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-1">
            Algorithmic Engine Interactive Sandbox
          </span>
          <h4 className="text-xl sm:text-2xl font-bold font-serif text-white">
            HLI Timetable Conflict-Resolution Engine
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            Simulate how the constraint-satisfaction engine eliminates lecturer and lecture hall collisions at the University of Rwanda.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {!isResolved ? (
            <button
              onClick={handleSolve}
              disabled={isSolving}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-xs font-bold text-white shadow-lg shadow-cyan-600/25 transition-all"
            >
              <Zap size={14} className={isSolving ? "animate-bounce" : ""} />
              {isSolving ? "Running Heuristic Solver..." : "Run Constraint Solver"}
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-300 transition-colors"
            >
              <RefreshCw size={13} /> Reset Conflict Scenario
            </button>
          )}
        </div>
      </div>

      {/* Status Banner */}
      <div className={`p-4 rounded-2xl mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 transition-colors ${
        isResolved 
          ? 'bg-emerald-950/50 border border-emerald-500/50 text-emerald-300' 
          : 'bg-red-950/50 border border-red-500/50 text-red-300'
      }`}>
        <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold">
          {isResolved ? (
            <>
              <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0" />
              <span>OPTIMAL SCHEDULE GENERATED: 0 Conflicts • 100% Constraints Met (Solved in 14ms)</span>
            </>
          ) : (
            <>
              <AlertTriangle size={18} className="text-red-400 flex-shrink-0" />
              <span>COLLISION DETECTED: Room 102 & Lecturer overlapping at 09:00 AM (2 Cohorts blocked)</span>
            </>
          )}
        </div>
        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300">
          {isResolved ? "Valid State" : "NP-Hard Constraint"}
        </span>
      </div>

      {/* Visual Schedule Slots Matrix */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        {/* Slot 1: Monday 09:00 AM */}
        <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
          <div className="flex justify-between items-center text-xs font-mono text-slate-400 mb-2">
            <span className="font-bold text-primary-400">Monday 09:00 - 11:00</span>
            <span>Lecture Hall 102</span>
          </div>

          <AnimatePresence mode="wait">
            {isResolved ? (
              <motion.div
                key="resolved-slot1"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-3 rounded-xl bg-slate-900 border border-emerald-500/40 text-xs"
              >
                <div className="font-bold text-emerald-300">CS 301: Operating Systems</div>
                <div className="text-slate-400 text-[11px]">Instructor: Prof. Mugisha • Cohort: Year 3 CS</div>
                <div className="mt-1 inline-block text-[10px] text-emerald-400 font-mono">Status: Collision-Free</div>
              </motion.div>
            ) : (
              <motion.div
                key="collision-slot1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-2"
              >
                <div className="p-2.5 rounded-xl bg-red-950/40 border border-red-500/60 text-xs">
                  <span className="text-red-400 font-bold block">COLLISION #1: CS 301 (Prof. Mugisha)</span>
                  <span className="text-[11px] text-slate-400">Room 102 requested for Year 3 CS</span>
                </div>
                <div className="p-2.5 rounded-xl bg-red-950/40 border border-red-500/60 text-xs">
                  <span className="text-red-400 font-bold block">COLLISION #2: MATH 204 (Dr. Kalisa)</span>
                  <span className="text-[11px] text-slate-400">Room 102 concurrently claimed for Year 2 Edu</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Slot 2: Monday 11:30 AM */}
        <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
          <div className="flex justify-between items-center text-xs font-mono text-slate-400 mb-2">
            <span className="font-bold text-primary-400">Monday 11:30 - 13:30</span>
            <span>Lecture Hall 104 (Optimal Re-route)</span>
          </div>

          <AnimatePresence mode="wait">
            {isResolved ? (
              <motion.div
                key="resolved-slot2"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-3 rounded-xl bg-slate-900 border border-emerald-500/40 text-xs"
              >
                <div className="font-bold text-emerald-300">MATH 204: Discrete Structures</div>
                <div className="text-slate-400 text-[11px]">Instructor: Dr. Kalisa • Cohort: Year 2 Edu</div>
                <div className="mt-1 inline-block text-[10px] text-emerald-400 font-mono">Status: Successfully Reallocated</div>
              </motion.div>
            ) : (
              <div className="p-6 rounded-xl bg-slate-900/50 border border-dashed border-slate-800 text-center text-xs text-slate-500">
                Awaiting algorithmic solver redistribution...
              </div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};
