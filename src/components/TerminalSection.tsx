import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon } from 'lucide-react';

interface CommandOutput {
  command: string;
  output: React.ReactNode;
}

export const TerminalSection = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'help',
      output: (
        <div className="text-slate-300">
          <p>Available commands:</p>
          <ul className="list-none pl-4 mt-2 space-y-1">
            <li><span className="text-primary-400 font-bold">about</span>    - Who is TUYIRINGIRE Pacifique?</li>
            <li><span className="text-primary-400 font-bold">skills</span>   - List my technical skills</li>
            <li><span className="text-primary-400 font-bold">contact</span>  - How to reach me</li>
            <li><span className="text-primary-400 font-bold">clear</span>    - Clear the terminal</li>
          </ul>
        </div>
      ),
    },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    
    if (!cmd) return;

    let output: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        output = (
          <div className="text-slate-300">
            <p>Available commands:</p>
            <ul className="list-none pl-4 mt-2 space-y-1">
              <li><span className="text-primary-400 font-bold">about</span>    - Who is TUYIRINGIRE Pacifique?</li>
              <li><span className="text-primary-400 font-bold">skills</span>   - List my technical skills</li>
              <li><span className="text-primary-400 font-bold">contact</span>  - How to reach me</li>
              <li><span className="text-primary-400 font-bold">clear</span>    - Clear the terminal</li>
            </ul>
          </div>
        );
        break;
      case 'about':
        output = <p className="text-slate-300">I am a Computer Science Educator & Software Developer passionate about building scalable solutions and teaching the next generation of engineers.</p>;
        break;
      case 'skills':
        output = (
          <div className="text-slate-300">
            <p className="text-primary-400 mb-2">Technical Arsenal:</p>
            <p>&gt; Frontend: React, TypeScript, Tailwind CSS, Vite</p>
            <p>&gt; Backend: Python, RESTful APIs, SQL/NoSQL</p>
            <p>&gt; Tools: Git, GitHub, Linux</p>
          </div>
        );
        break;
      case 'contact':
        output = <p className="text-slate-300">Email: <a href="mailto:tpaccy6@gmail.com" className="text-primary-400 hover:underline">tpaccy6@gmail.com</a> | GitHub: <a href="https://github.com/tpaccy6-star" target="_blank" className="text-primary-400 hover:underline">tpaccy6-star</a> | WhatsApp: <a href="https://wa.me/250781343621" target="_blank" className="text-primary-400 hover:underline">+250781343621</a></p>;
        break;
      case 'sudo hire --pacifique':
      case 'sudo':
        output = <p className="text-red-400">Permission denied (you must be logged in as recruiter).</p>;
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      default:
        output = <p className="text-red-400">Command not found: {cmd}. Type 'help' for available commands.</p>;
    }

    setHistory([...history, { command: cmd, output }]);
    setInput('');
  };

  return (
    <section className="section-container pt-0 mt-8 relative z-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-700/50 bg-[#0a0a0a]">
          {/* Terminal Header */}
          <div className="flex items-center px-4 py-3 bg-slate-900 border-b border-slate-800">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="flex-1 text-center flex items-center justify-center text-xs font-mono text-slate-400">
              <TerminalIcon size={14} className="mr-2" />
              pacifique@portfolio:~
            </div>
          </div>
          
          {/* Terminal Body */}
          <div className="p-4 sm:p-6 font-mono text-sm sm:text-base h-[350px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
            <div className="text-slate-400 mb-4">
              Welcome to pacifique-os v1.0.0 <br/>
              Type 'help' to see available commands.
            </div>
            
            {history.map((item, index) => (
              <div key={index} className="mb-4">
                <div className="flex items-center text-primary-400 mb-1">
                  <span className="text-green-400 mr-2">pacifique@portfolio:~$</span>
                  <span>{item.command}</span>
                </div>
                {item.output}
              </div>
            ))}
            
            <form onSubmit={handleCommand} className="flex items-center text-primary-400">
              <span className="text-green-400 mr-2">pacifique@portfolio:~$</span>
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-slate-100 shadow-none focus:ring-0"
                autoFocus
                spellCheck="false"
                autoComplete="off"
              />
            </form>
            <div ref={bottomRef} />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
