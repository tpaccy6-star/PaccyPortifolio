import { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { teachingPhilosophy, teachingPracticumCaseStudy } from '../data/teaching';
import { LaptopFleetVisualizer } from './LaptopFleetVisualizer';
import { BookOpen, Laptop, Users, Presentation, Lightbulb, CheckCircle2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { playKeyClick } from '../utils/audio';

export const Teaching = () => {
  const [activeTab, setActiveTab] = useState<"case-study" | "philosophy" | "lessons">("case-study");

  return (
    <section id="teaching" className="section-container relative">
      <div className="relative z-10">
        <SectionHeader 
          title="Teaching Practice & Pedagogy" 
          subtitle="Empowering African learners through competency-based Computer Science instruction, resource-resilient pedagogy, and instructional technology."
          align="center"
        />

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-10 sm:mb-12">
          <button
            onClick={() => {
              playKeyClick();
              setActiveTab("case-study");
            }}
            className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all w-full sm:w-auto ${
              activeTab === "case-study"
                ? "bg-gradient-to-r from-primary-600 to-purple-600 text-white shadow-lg shadow-primary-500/25 scale-[1.02] sm:scale-105"
                : "bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-slate-700"
            }`}
          >
            <Laptop size={16} />
            GS MUHORORO Practicum Case Study
          </button>
          <button
            onClick={() => {
              playKeyClick();
              setActiveTab("philosophy");
            }}
            className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all w-full sm:w-auto ${
              activeTab === "philosophy"
                ? "bg-gradient-to-r from-primary-600 to-purple-600 text-white shadow-lg shadow-primary-500/25 scale-[1.02] sm:scale-105"
                : "bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-slate-700"
            }`}
          >
            <BookOpen size={16} />
            Teaching Philosophy & CBC Model
          </button>
          <button
            onClick={() => {
              playKeyClick();
              setActiveTab("lessons");
            }}
            className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all w-full sm:w-auto ${
              activeTab === "lessons"
                ? "bg-gradient-to-r from-primary-600 to-purple-600 text-white shadow-lg shadow-primary-500/25 scale-[1.02] sm:scale-105"
                : "bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-slate-700"
            }`}
          >
            <Presentation size={16} />
            Classroom Lessons & Microteaching
          </button>
        </div>

        {/* TAB 1: CASE STUDY */}
        <AnimatePresence mode="wait">
          {activeTab === "case-study" && (
            <motion.div
              key="case-study"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              {/* Hero Banner for Case Study */}
              <div className="glass-panel p-5 sm:p-8 md:p-10 rounded-3xl border border-primary-500/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-6">
                  <div className="lg:col-span-8">
                    <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-primary-500/20 text-primary-300 border border-primary-500/30 inline-flex items-center gap-1.5 mb-4">
                      <Sparkles size={12} /> Featured Practicum Case Study
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-serif mb-3">
                      Teaching Computer Science with Limited Hardware
                    </h3>
                    <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4">
                      During my teaching internship at <span className="text-white font-bold">{teachingPracticumCaseStudy.school}</span> in {teachingPracticumCaseStudy.location}, I navigated the real-world operational challenges facing ICT integration in a school of <span className="text-white font-semibold">{teachingPracticumCaseStudy.studentBody}</span>.
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Bridging the gap between conceptual algorithms and practical syntax required agile whiteboard scaffolding, rotating student stations, and offline-first problem solving.
                    </p>
                  </div>
                  <div className="lg:col-span-4">
                    <figure className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl group max-w-sm mx-auto">
                      <img
                        src="/tuyiringire-pacifique-classroom-educator-whiteboard.jpg"
                        alt="TUYIRINGIRE Pacifique teaching Computer Science at GS MUHORORO whiteboard"
                        width="600"
                        height="800"
                        loading="lazy"
                        className="w-full h-64 sm:h-72 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/95 via-slate-900/80 to-transparent p-3 text-[11px] text-slate-200 font-medium">
                        <span className="font-bold text-primary-300">Practicum in Action:</span> TUYIRINGIRE Pacifique teaching at whiteboard • GS MUHORORO
                      </figcaption>
                    </figure>
                  </div>
                </div>

                {/* The Laptop Reality Infographic */}
                <div className="mt-6 pt-6 border-t border-slate-800">
                  <h4 className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-4">
                    The Positivo BGH Laptop Fleet Breakdown
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                    <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-center">
                      <span className="block text-2xl font-extrabold text-slate-200">105</span>
                      <span className="text-[11px] text-slate-400 font-medium">Initially Received</span>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-800/80 border border-red-500/30 text-center">
                      <span className="block text-2xl font-extrabold text-red-400">27</span>
                      <span className="text-[11px] text-slate-400 font-medium">Scrapped / Broken</span>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-center">
                      <span className="block text-2xl font-extrabold text-amber-300">~78</span>
                      <span className="text-[11px] text-slate-400 font-medium">Remaining in Stock</span>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-center">
                      <span className="block text-2xl font-extrabold text-blue-300">~38</span>
                      <span className="text-[11px] text-slate-400 font-medium">Powering On</span>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-800/80 border border-amber-500/30 text-center">
                      <span className="block text-2xl font-extrabold text-amber-400">~10</span>
                      <span className="text-[11px] text-slate-400 font-medium">Dead Batteries</span>
                    </div>
                    <div className="p-4 rounded-xl bg-primary-950/60 border border-primary-500/60 text-center shadow-lg shadow-primary-900/30">
                      <span className="block text-2xl font-extrabold text-primary-400">5 – 6</span>
                      <span className="text-[11px] text-primary-200 font-bold">Active for Practicals</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Fleet & Classroom Ratio Simulator */}
              <LaptopFleetVisualizer />

              {/* Pedagogy Strategy Matrix */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800">
                  <div className="flex items-center gap-3 mb-4 text-primary-400">
                    <Lightbulb size={24} />
                    <h4 className="text-xl font-bold font-serif text-white">How Practical Lessons Succeeded</h4>
                  </div>
                  <ul className="space-y-3.5 text-sm text-slate-300">
                    {teachingPracticumCaseStudy.strategy.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-primary-400 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4 text-purple-400">
                      <Users size={24} />
                      <h4 className="text-xl font-bold font-serif text-white">Core Insight as an Educator</h4>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed italic mb-4">
                      "True pedagogical competence is not measured by having 40 laptops in a sterile air-conditioned lab. It is proved when a teacher can engage 68 energetic learners, make algorithms intuitive on a blackboard, and rotate 18 students through 5 working laptops so that every single child leaves having written and run real code."
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 text-xs text-slate-400 font-mono">
                    <span className="text-primary-300 font-bold">Takeaway:</span> Resource resilience inspires software design: lightweight offline architectures (like QuizMaster & ImbutoBooks) born directly from classroom observation.
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: PHILOSOPHY */}
          {activeTab === "philosophy" && (
            <motion.div
              key="philosophy"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              {/* Quote Banner */}
              <div className="glass-panel p-5 sm:p-8 md:p-10 rounded-3xl border border-purple-500/30 text-center max-w-4xl mx-auto">
                <blockquote className="text-xl sm:text-3xl font-extrabold text-white font-serif mb-4 leading-snug">
                  "{teachingPhilosophy.quote}"
                </blockquote>
                <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                  {teachingPhilosophy.vision}
                </p>
              </div>

              {/* Approaches Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {teachingPhilosophy.approaches.map((app, idx) => (
                  <div key={idx} className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-primary-500/40 transition-colors">
                    <span className="text-xs font-mono font-bold text-primary-400 uppercase tracking-widest block mb-2">
                      0{idx + 1} Framework
                    </span>
                    <h4 className="text-lg font-bold text-white mb-2 font-serif">{app.name}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {app.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* GS KAMPANGA Teaching Appointment Callout */}
              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-6">
                <div className="p-4 rounded-2xl bg-primary-500/20 text-primary-400 flex-shrink-0">
                  <BookOpen size={32} />
                </div>
                <div>
                  <span className="text-xs font-bold text-primary-400 uppercase tracking-wider">Academic Excellence & Immediate Appointment • 2023–2024</span>
                  <h4 className="text-xl font-bold text-white font-serif mt-1">Secondary School Teacher — GS KAMPANGA (Kinigi, Musanze)</h4>
                  <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                    Having graduated secondary education at <span className="text-white font-bold">GS KAMPANGA</span> in Kinigi, Musanze District, with <span className="text-primary-300 font-bold">Full NESA Aggregates</span> (highest possible national mark), I was immediately hired by the school administration to step in and replace my former teacher who was on maternity leave. This formative role gave me direct mastery over lesson structuring, classroom management, and secondary student assessment.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: LESSONS */}
          {activeTab === "lessons" && (
            <motion.div
              key="lessons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              {/* Classroom Lessons */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {teachingPracticumCaseStudy.lessons.map((lesson, idx) => (
                  <div key={idx} className="glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-3">
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary-500/20 text-primary-300 border border-primary-500/30">
                          {lesson.class}
                        </span>
                        <span className="text-xs text-slate-400 font-semibold">{lesson.students} Learners</span>
                      </div>
                      <h4 className="text-lg font-bold text-white font-serif mb-2">{lesson.topic}</h4>
                      <div className="p-3 rounded-xl bg-slate-800/60 text-xs text-slate-300 mb-4 border border-slate-700/50">
                        <span className="font-bold text-slate-400 block mb-0.5">Setup:</span>
                        {lesson.setup}
                      </div>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {lesson.notes}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Microteaching Feature Box */}
              <div className="glass-panel p-5 sm:p-8 md:p-10 rounded-3xl border border-primary-500/30 max-w-4xl mx-auto">
                <div className="flex items-center gap-3 text-primary-400 mb-3">
                  <Sparkles size={24} />
                  <span className="text-xs uppercase font-bold tracking-widest text-primary-300">
                    Pedagogical Demonstration Case
                  </span>
                </div>
                <h4 className="text-2xl font-bold font-serif text-white mb-2">
                  Microteaching: Introducing Algorithms via the 5E Model
                </h4>
                <div className="flex flex-wrap gap-4 text-xs text-slate-400 font-medium mb-4">
                  <span>⏱ Duration: {teachingPracticumCaseStudy.microteaching.duration}</span>
                  <span>👥 Class: {teachingPracticumCaseStudy.microteaching.students} Learners</span>
                  <span>📐 Framework: {teachingPracticumCaseStudy.microteaching.model}</span>
                </div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {teachingPracticumCaseStudy.microteaching.summary}
                </p>
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs">
                  <div className="p-2 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 font-medium">1. Engage</div>
                  <div className="p-2 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 font-medium">2. Explore</div>
                  <div className="p-2 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 font-medium">3. Explain</div>
                  <div className="p-2 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 font-medium">4. Elaborate</div>
                  <div className="p-2 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 font-medium">5. Evaluate</div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
