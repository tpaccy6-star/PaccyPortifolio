import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, Volume2, VolumeX, Sparkles, CornerDownLeft } from 'lucide-react';
import { playKeyClick, playSuccessChime, toggleAudioMute, getAudioMuteState } from '../utils/audio';

interface CommandOutput {
  command: string;
  output: React.ReactNode;
}

const QUICK_COMMANDS = ['cv', 'about', 'teaching', 'projects', 'fluentedge', 'problems', 'research', 'skills', 'leadership', 'matrix', 'clear'];

export const TerminalSection = () => {
  const [input, setInput] = useState('');
  const [isMuted, setIsMuted] = useState(getAudioMuteState());
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [isMatrixMode, setIsMatrixMode] = useState(false);

  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'help',
      output: (
        <div className="text-slate-300 text-xs sm:text-sm">
          <p className="text-primary-400 font-bold mb-2">Available Terminal Commands:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
            <div><span className="text-emerald-400 font-bold font-mono">cv</span>          - Quick Download CV / Resume</div>
            <div><span className="text-emerald-400 font-bold font-mono">about</span>       - Bio & Core Identities</div>
            <div><span className="text-emerald-400 font-bold font-mono">teaching</span>    - Practicum & GS Muhororo Case</div>
            <div><span className="text-emerald-400 font-bold font-mono">projects</span>    - Selected Software Systems</div>
            <div><span className="text-emerald-400 font-bold font-mono">fluentedge</span>  - Learning Hub & CEFR Cert</div>
            <div><span className="text-emerald-400 font-bold font-mono">problems</span>    - Problems I Want to Solve</div>
            <div><span className="text-emerald-400 font-bold font-mono">research</span>    - Agricultural Welfare Study</div>
            <div><span className="text-emerald-400 font-bold font-mono">skills</span>      - CS & Full-Stack Toolchain</div>
            <div><span className="text-emerald-400 font-bold font-mono">leadership</span>  - Choir, Faith & Community</div>
            <div><span className="text-emerald-400 font-bold font-mono">matrix</span>      - Interactive Matrix Effect</div>
            <div><span className="text-emerald-400 font-bold font-mono">contact</span>     - Direct Reach Channels</div>
            <div><span className="text-emerald-400 font-bold font-mono">clear</span>       - Clear terminal screen</div>
          </div>
        </div>
      ),
    },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmdText: string) => {
    const cmd = cmdText.trim().toLowerCase();
    if (!cmd) return;

    playSuccessChime();
    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);

    let output: React.ReactNode = null;

    switch (cmd) {
      case 'cv':
      case 'resume':
      case 'download':
        output = (
          <div className="text-slate-300 text-xs sm:text-sm space-y-2">
            <p className="text-emerald-400 font-bold">Curriculum Vitae — TUYIRINGIRE Pacifique (Paccy)</p>
            <p className="text-slate-300">Computer Science Educator & Software Developer • University of Rwanda</p>
            <div className="pt-1">
              <a 
                href="/TUYIRINGIRE_Pacifique_Curriculum_Vitae.pdf" 
                download="TUYIRINGIRE_Pacifique_Curriculum_Vitae.pdf"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-md shadow-emerald-600/25"
              >
                📥 Download Official CV (PDF)
              </a>
            </div>
          </div>
        );
        break;
      case 'help':
        output = (
          <div className="text-slate-300 text-xs sm:text-sm">
            <p className="text-primary-400 font-bold mb-2">Available Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
              <div><span className="text-emerald-400 font-bold font-mono">cv</span>          - Quick Download CV / Resume</div>
              <div><span className="text-emerald-400 font-bold font-mono">about</span>       - Bio & Core Identities</div>
              <div><span className="text-emerald-400 font-bold font-mono">teaching</span>    - Practicum & GS Muhororo Case</div>
              <div><span className="text-emerald-400 font-bold font-mono">projects</span>    - Selected Software Systems</div>
              <div><span className="text-emerald-400 font-bold font-mono">fluentedge</span>  - Learning Hub & CEFR Cert</div>
              <div><span className="text-emerald-400 font-bold font-mono">problems</span>    - Problems I Want to Solve</div>
              <div><span className="text-emerald-400 font-bold font-mono">research</span>    - Agricultural Welfare Study</div>
              <div><span className="text-emerald-400 font-bold font-mono">skills</span>      - CS & Full-Stack Toolchain</div>
              <div><span className="text-emerald-400 font-bold font-mono">leadership</span>  - Choir, Faith & Community</div>
              <div><span className="text-emerald-400 font-bold font-mono">matrix</span>      - Easter egg mode</div>
              <div><span className="text-emerald-400 font-bold font-mono">contact</span>     - Direct Contact Channels</div>
              <div><span className="text-emerald-400 font-bold font-mono">clear</span>       - Clear terminal screen</div>
            </div>
          </div>
        );
        break;
      case 'about':
        output = (
          <div className="text-slate-300 text-xs sm:text-sm space-y-1">
            <p><span className="text-white font-bold">TUYIRINGIRE Pacifique (Paccy)</span></p>
            <p>Computer Science Educator & Software Developer</p>
            <p className="text-primary-300">University of Rwanda – Department of Mathematics & Computer Science Education</p>
            <p className="text-slate-400 italic">"Transforming Learning Through Passion and Technology"</p>
          </div>
        );
        break;
      case 'teaching':
        output = (
          <div className="text-slate-300 text-xs sm:text-sm space-y-1">
            <p className="text-amber-300 font-bold">GS MUHORORO Practicum (Murambi Sector, Rulindo):</p>
            <p>&gt; Challenge: ~2,500 students with 5–6 functional Positivo laptops for practicals.</p>
            <p>&gt; Innovation: Projector live-coding, Driver/Navigator pair coding, whiteboard algorithm dry-runs.</p>
            <p>&gt; Impact: S4 HGL (18 learners in HTML), S3 (68 learners with Special Educational Needs).</p>
          </div>
        );
        break;
      case 'fluentedge':
        output = (
          <div className="text-slate-300 text-xs sm:text-sm space-y-1">
            <p className="text-primary-300 font-bold">FluentEdge Academy (Learning Hub):</p>
            <p>&gt; Architecture: Levels → Courses → Lessons structured progression.</p>
            <p>&gt; Features: Collapsible lesson gating, automated quiz evaluation, dark mode, CEFR certificate generation.</p>
            <p>&gt; Award: Generates verifiable CEFR English Proficiency Awards (Professional English 1 A1).</p>
          </div>
        );
        break;
      case 'projects':
        output = (
          <div className="text-slate-300 text-xs sm:text-sm space-y-1">
            <p className="text-primary-400 font-bold mb-1">Key Software Systems:</p>
            <p>&gt; <span className="text-white font-semibold">FluentEdge Academy:</span> Tiered Learning Hub & Verification</p>
            <p>&gt; <span className="text-white font-semibold">Generation Rise Scholar Portal:</span> Scholarship lifecycle & mentor ecosystem</p>
            <p>&gt; <span className="text-white font-semibold">Smart Attendance (NSAMS):</span> Hierarchical attendance telemetry (MINEDUC to class)</p>
            <p>&gt; <span className="text-white font-semibold">HLI Timetable System:</span> Constraint-satisfaction university scheduler</p>
            <p>&gt; <span className="text-white font-semibold">QuizMaster V2:</span> Offline LAN socket quiz for 60+ users (C# / WPF)</p>
            <p>&gt; <span className="text-white font-semibold">ImbutoBooks:</span> Offline-first Rwandan SME bookkeeping & VAT</p>
          </div>
        );
        break;
      case 'problems':
        output = (
          <div className="text-slate-300 text-xs sm:text-sm space-y-1">
            <p className="text-emerald-400 font-bold mb-1">Problem-Solving Philosophy:</p>
            <p className="italic">"I don't want to build software simply because I can. I want to build software because there is a problem worth solving."</p>
            <p>&gt; Observe → Understand → Design → Build → Test → Improve → Impact</p>
          </div>
        );
        break;
      case 'research':
        output = (
          <div className="text-slate-300 text-xs sm:text-sm space-y-1">
            <p className="text-cyan-300 font-bold">Rwanda Agricultural Household Welfare Study:</p>
            <p>&gt; Dataset: NISR Agricultural Household Survey 2020</p>
            <p>&gt; Methodology: Bivariate cross-tabulations, socio-economic modeling, input access analysis</p>
            <p>&gt; Paradigm: Data → Analysis → Evidence → Decision-making</p>
          </div>
        );
        break;
      case 'leadership':
        output = (
          <div className="text-slate-300 text-xs sm:text-sm space-y-1">
            <p className="text-purple-300 font-bold">Leadership & Service:</p>
            <p>&gt; Secretary: Horeb Family Choir (Administration & Logistics)</p>
            <p>&gt; Choir Leader: University of Rwanda Prayer Choir</p>
            <p>&gt; Community Outreach: Nyagahandagaza Secondary School visits & 50+ evangelism pairs</p>
            <p>&gt; Foundation: Christian faith inspiring integrity, service, and empathy</p>
          </div>
        );
        break;
      case 'skills':
        output = (
          <div className="text-slate-300 text-xs sm:text-sm space-y-1">
            <p>&gt; <span className="text-primary-300 font-semibold">Languages:</span> JavaScript, TypeScript, Python, C#, SQL, HTML, CSS</p>
            <p>&gt; <span className="text-primary-300 font-semibold">Frameworks:</span> React, Next.js, React Native, Vite, Tailwind CSS, WPF</p>
            <p>&gt; <span className="text-primary-300 font-semibold">Databases:</span> PostgreSQL, MariaDB, SQLite</p>
            <p>&gt; <span className="text-primary-300 font-semibold">CS Theory:</span> CPU Scheduling (FCFS/RR), Disk Scheduling (SSTF/SCAN), SRS</p>
          </div>
        );
        break;
      case 'matrix':
        setIsMatrixMode(!isMatrixMode);
        output = (
          <p className="text-emerald-400 font-mono text-xs animate-pulse">
            [MATRIX SYSTEM OVERRIDE]: {isMatrixMode ? "Deactivating Matrix rain." : "Activating green cyber terminal theme..."}
          </p>
        );
        break;
      case 'contact':
        output = (
          <p className="text-slate-300 text-xs sm:text-sm">
            Email: <a href="mailto:tpaccy6@gmail.com" className="text-primary-400 hover:underline">tpaccy6@gmail.com</a> | WhatsApp: <a href="https://wa.me/250781343621" target="_blank" className="text-primary-400 hover:underline">+250781343621</a> | GitHub: <a href="https://github.com/tpaccy6-star" target="_blank" className="text-primary-400 hover:underline">tpaccy6-star</a>
          </p>
        );
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      default:
        output = <p className="text-red-400 text-xs sm:text-sm">Command not recognized: '{cmd}'. Type 'help' for available commands.</p>;
    }

    setHistory(prev => [...prev, { command: cmd, output }]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    playKeyClick();
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIndex);
        setInput(commandHistory[nextIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIndex = historyIndex + 1;
        if (nextIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(nextIndex);
          setInput(commandHistory[nextIndex]);
        }
      }
    }
  };

  const handleToggleMute = () => {
    const newState = toggleAudioMute();
    setIsMuted(newState);
  };

  return (
    <section className="section-container pt-0 pb-16 relative z-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className={`rounded-3xl overflow-hidden shadow-2xl border transition-all duration-500 ${
          isMatrixMode 
            ? 'border-emerald-500/80 bg-[#021307] shadow-emerald-950/50' 
            : 'border-slate-700/60 bg-[#090d13] shadow-cyan-950/20'
        }`}>
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#111620] border-b border-slate-800">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>

            <div className="flex items-center justify-center text-xs font-mono text-slate-400">
              <TerminalIcon size={14} className="mr-2 text-primary-400" />
              paccy@ur-education:~ {isMatrixMode && <span className="text-emerald-400 ml-1.5">[MATRIX]</span>}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleToggleMute}
                title={isMuted ? "Unmute terminal clicks" : "Mute terminal clicks"}
                className="p-1 rounded text-slate-400 hover:text-white transition-colors"
              >
                {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} className="text-primary-400" />}
              </button>
            </div>
          </div>
          
          {/* Terminal Body */}
          <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm h-[340px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
            <div className="text-slate-400 mb-4">
              TUYIRINGIRE Pacifique Interactive Shell [v2.7.0] <br/>
              Type <span className="text-primary-400 font-bold">'help'</span> or click suggestions below:
            </div>
            
            {history.map((item, index) => (
              <div key={index} className="mb-4">
                <div className="flex items-center text-primary-400 mb-1">
                  <span className="text-emerald-400 mr-2">paccy@ur-education:~$</span>
                  <span>{item.command}</span>
                </div>
                {item.output}
              </div>
            ))}
            
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                executeCommand(input);
              }} 
              className="flex items-center text-primary-400"
            >
              <span className="text-emerald-400 mr-2">paccy@ur-education:~$</span>
              <input 
                type="text" 
                value={input}
                onKeyDown={handleKeyDown}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-slate-100 shadow-none focus:ring-0 text-xs sm:text-sm font-mono"
                spellCheck="false"
                autoComplete="off"
                placeholder="Type command or click quick action below..."
              />
              <CornerDownLeft size={14} className="text-slate-600" />
            </form>
            <div ref={bottomRef} />
          </div>

          {/* Quick Command Autocomplete Bar */}
          <div className="px-3 sm:px-4 py-2.5 bg-[#0d121b] border-t border-slate-800/80 flex items-center gap-1.5 overflow-x-auto whitespace-nowrap text-[11px] font-mono touch-pan-x">
            <span className="text-slate-500 mr-1 flex items-center gap-1 text-[10px] flex-shrink-0">
              <Sparkles size={11} className="text-primary-400" /> Quick:
            </span>
            {QUICK_COMMANDS.map(cmd => (
              <button
                key={cmd}
                onClick={() => executeCommand(cmd)}
                className="px-2.5 py-1 rounded-md bg-slate-800/70 text-slate-300 hover:text-white hover:bg-primary-600/60 border border-slate-700/60 transition-colors flex-shrink-0"
              >
                {cmd}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
