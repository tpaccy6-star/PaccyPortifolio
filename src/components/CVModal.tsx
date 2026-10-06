import React from 'react';
import { X, Printer, Mail, Phone, MapPin, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 overflow-y-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
        />

        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[92vh] bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-y-auto z-10 text-slate-100 p-4 sm:p-8 md:p-10"
        >
          {/* Header Controls */}
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 pb-4 sm:pb-6 border-b border-slate-800 mb-6">
            <span className="text-xs font-mono font-bold text-primary-400 uppercase tracking-widest">
              Curriculum Vitae Preview • TUYIRINGIRE Pacifique
            </span>
            <div className="flex items-center gap-3 self-end sm:self-auto">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary-600 hover:bg-primary-500 text-xs font-bold text-white transition-colors"
              >
                <Printer size={14} /> Print / Save PDF
              </button>
              <button 
                onClick={onClose}
                className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Printable CV Content */}
          <div className="bg-slate-950/60 p-4 sm:p-8 rounded-2xl border border-slate-800 space-y-8 print:bg-white print:text-black">
            
            {/* Header */}
            <div>
              <h1 className="text-3xl font-extrabold text-white font-serif">TUYIRINGIRE Pacifique</h1>
              <p className="text-lg text-primary-400 font-semibold mt-1">Computer Science Educator & Software Developer</p>
              <p className="text-xs text-slate-400 italic mt-0.5">"Transforming Learning Through Passion and Technology"</p>

              <div className="flex flex-wrap gap-4 text-xs text-slate-300 mt-4 pt-4 border-t border-slate-800">
                <span className="flex items-center gap-1.5"><MapPin size={13} className="text-primary-400" /> Kigali / Rulindo, Rwanda</span>
                <span className="flex items-center gap-1.5"><Mail size={13} className="text-primary-400" /> tpaccy6@gmail.com</span>
                <span className="flex items-center gap-1.5"><Phone size={13} className="text-primary-400" /> +250 781 343 621</span>
                <span className="flex items-center gap-1.5"><Github size={13} className="text-primary-400" /> github.com/tpaccy6-star</span>
              </div>
            </div>

            {/* Profile Summary */}
            <div>
              <h2 className="text-xs uppercase tracking-widest font-bold text-primary-400 mb-2">Professional Summary</h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Computer Science with Education student at the University of Rwanda with formal classroom teaching experience, full-stack software development expertise, and passion for educational technology. Experienced in Competency-Based Curriculum (CBC) delivery, resource-resilient pedagogy (teaching with 5–6 laptops per 18+ students), offline systems engineering (C# / WPF, PWA), and multi-role institutional web/mobile systems.
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs uppercase tracking-widest font-bold text-primary-400 mb-2">Education</h2>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="flex justify-between items-start">
                  <h3 className="text-base font-bold text-white">Bachelor of Education – Computer Science with Education</h3>
                  <span className="text-xs font-mono text-slate-400">Current</span>
                </div>
                <p className="text-sm text-primary-300">University of Rwanda – College of Education</p>
                <p className="text-xs text-slate-400 mt-1">Department of Mathematics & Computer Science Education</p>
                <p className="text-xs text-slate-300 mt-2">
                  <span className="font-semibold text-slate-200">Key Coursework:</span> Computer Science Pedagogy, Operating Systems, Algorithm Design, Database Systems, Software Requirements (SRS), CBC Methodology, Educational Data Analytics.
                </p>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-xs uppercase tracking-widest font-bold text-primary-400 mb-3">Teaching & Practicum Experience</h2>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="flex justify-between items-start">
                    <h3 className="text-sm font-bold text-white">Student Teacher & CS Intern — GS MUHORORO</h3>
                    <span className="text-xs font-mono text-slate-400">2026</span>
                  </div>
                  <p className="text-xs text-slate-400 mb-2">Murambi Sector, Rulindo District (School of ~2,500 students)</p>
                  <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                    <li>Conducted practical HTML and presentation lessons utilizing only 5–6 working Positivo BGH laptops via structured projector demos and pair rotations.</li>
                    <li>Taught Senior 4 HGL (18 learners) in practical HTML coding and Senior 3 (68 learners) with inclusive methods for special educational needs (SEN).</li>
                    <li>Executed microteaching introducing algorithmic concepts using the 5E instructional model.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="flex justify-between items-start">
                    <h3 className="text-sm font-bold text-white">Teaching Assistant — IEE (Inspire, Educate and Empower Rwanda)</h3>
                    <span className="text-xs font-mono text-slate-400">2023 – 2024</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    Supported classroom facilitation, digital literacy coaching, and technology-supported learning activities for secondary students.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Software Systems */}
            <div>
              <h2 className="text-xs uppercase tracking-widest font-bold text-primary-400 mb-3">Selected Software Systems</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <h4 className="font-bold text-white">FluentEdge Academy</h4>
                  <p className="text-slate-400 mt-1">Tiered learning platform (Levels → Courses → Lessons) with automated CEFR certificate generation.</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <h4 className="font-bold text-white">Generation Rise Scholar Portal</h4>
                  <p className="text-slate-400 mt-1">Mobile-first scholarship lifecycle portal supporting Scholars, Mentors, Teachers, and Admins.</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <h4 className="font-bold text-white">Smart Attendance (NSAMS)</h4>
                  <p className="text-slate-400 mt-1">MINEDUC hierarchy attendance telemetry mapping Province to Class with early dropout detection.</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <h4 className="font-bold text-white">QuizMaster V2 (C# / WPF)</h4>
                  <p className="text-slate-400 mt-1">Offline LAN socket-based examination platform supporting 60+ simultaneous test stations without internet.</p>
                </div>
              </div>
            </div>

            {/* Skills & Leadership */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <h2 className="text-xs uppercase tracking-widest font-bold text-primary-400 mb-2">Technical Skills</h2>
                <p className="text-slate-300"><span className="text-white font-semibold">Languages:</span> JavaScript, TypeScript, Python, C#, SQL, HTML, CSS</p>
                <p className="text-slate-300 mt-1"><span className="text-white font-semibold">Frameworks:</span> React, Next.js, React Native, Vite, Tailwind CSS, WPF</p>
                <p className="text-slate-300 mt-1"><span className="text-white font-semibold">Backend/DB:</span> Node.js, PostgreSQL, MariaDB, REST APIs, RBAC</p>
                <p className="text-slate-300 mt-1"><span className="text-white font-semibold">Tools:</span> Android Studio, ADB, Git, Gradle, Linux (Ubuntu, Kali, WSL2)</p>
              </div>
              <div>
                <h2 className="text-xs uppercase tracking-widest font-bold text-primary-400 mb-2">Leadership & Service</h2>
                <p className="text-slate-300"><span className="text-white font-semibold">Horeb Family Choir:</span> Secretary (Archival & Logistics)</p>
                <p className="text-slate-300 mt-1"><span className="text-white font-semibold">UR Prayer Choir:</span> Choir Leader</p>
                <p className="text-slate-300 mt-1"><span className="text-white font-semibold">Community Outreach:</span> Nyagahandagaza Secondary School visit leader</p>
                <p className="text-slate-300 mt-1"><span className="text-white font-semibold">Bootcamps:</span> Mastercard Foundation SEF 2.0 / HATANA Fellow</p>
              </div>
            </div>

          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-sm font-semibold text-white transition-colors"
            >
              Close CV Preview
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
