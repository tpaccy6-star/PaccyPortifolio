import { useState } from 'react';
import { WifiOff, Play, CheckCircle2, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

export const QuizMasterConsole = () => {
  const [isBroadcasting, setIsBroadcasting] = useState(false);
  const [submittedCount, setSubmittedCount] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const startBroadcast = () => {
    setIsBroadcasting(true);
    setSubmittedCount(0);
    setIsCompleted(false);

    let count = 0;
    const interval = setInterval(() => {
      count += 5;
      if (count >= 60) {
        setSubmittedCount(60);
        setIsBroadcasting(false);
        setIsCompleted(true);
        clearInterval(interval);
      } else {
        setSubmittedCount(count);
      }
    }, 100);
  };

  const handleReset = () => {
    setSubmittedCount(0);
    setIsCompleted(false);
  };

  return (
    <div className="glass-panel p-4 sm:p-8 rounded-3xl border border-primary-500/30 text-slate-100">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div>
          <span className="text-xs font-mono font-bold text-primary-400 uppercase tracking-widest block mb-1">
            Offline LAN Architecture Sandbox
          </span>
          <h4 className="text-xl sm:text-2xl font-bold font-serif text-white">
            QuizMaster V2: 60-Station LAN Broadcast Simulator
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            Simulate offline computer-based testing running on a local Wi-Fi router / C# TCP socket server without internet.
          </p>
        </div>

        <div>
          {!isCompleted && !isBroadcasting ? (
            <button
              onClick={startBroadcast}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-primary-600 to-emerald-600 hover:from-primary-500 hover:to-emerald-500 text-xs font-bold text-white shadow-lg shadow-primary-600/25 transition-all"
            >
              <Play size={14} /> Broadcast Quiz to 60 Stations
            </button>
          ) : isBroadcasting ? (
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary-950 border border-primary-500/50 text-xs font-mono font-bold text-primary-300">
              Receiving LAN Sockets...
            </span>
          ) : (
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-300 transition-colors"
            >
              <RefreshCw size={13} /> Reset Simulation
            </button>
          )}
        </div>
      </div>

      {/* Network Telemetry HUD */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800">
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Network Status</span>
          <span className="text-xs font-bold text-emerald-400 flex items-center gap-1 mt-0.5">
            <WifiOff size={13} /> 100% Offline LAN
          </span>
        </div>

        <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800">
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Socket Server</span>
          <span className="text-xs font-bold font-mono text-white mt-0.5">192.168.1.1:8080</span>
        </div>

        <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800">
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Active Workstations</span>
          <span className="text-xs font-bold text-primary-300 mt-0.5">60 Concurrent Stations</span>
        </div>

        <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800">
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Submissions Received</span>
          <span className="text-xs font-bold font-mono text-emerald-400 mt-0.5">{submittedCount} / 60</span>
        </div>
      </div>

      {/* Progress Bar & Real-Time Stations Stream */}
      <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs text-slate-300 mb-2 font-mono gap-1">
          <span>Question #12: "Which disk scheduling algorithm avoids starvation?"</span>
          <span className="font-bold text-primary-400">{Math.round((submittedCount / 60) * 100)}% Submitted</span>
        </div>

        {/* Bar */}
        <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden mb-4">
          <motion.div 
            className="h-full bg-gradient-to-r from-primary-500 via-cyan-400 to-emerald-400 rounded-full"
            style={{ width: `${(submittedCount / 60) * 100}%` }}
            transition={{ type: 'spring', damping: 20 }}
          />
        </div>

        {/* Grade summary when complete */}
        {isCompleted && (
          <motion.div 
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs"
          >
            <div className="flex items-center gap-2 text-emerald-300 font-semibold">
              <CheckCircle2 size={16} />
              <span>Automated Marking Completed: Mean Score: 88.4% • Instant CSV Gradebook Exported</span>
            </div>
            <span className="text-[11px] font-mono text-slate-400">0 Packet Losses on LAN Socket</span>
          </motion.div>
        )}
      </div>
    </div>
  );
};
