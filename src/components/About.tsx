import { SectionHeader } from './SectionHeader';
import { personalValues } from '../data/leadership';
import { BookOpen, Code2, LineChart, Users, Compass, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const CORE_PILLARS = [
  {
    icon: BookOpen,
    title: "Teach",
    subtitle: "Computer Science Education",
    desc: "Delivering practical, interactive, and learner-centered instruction under the Competency-Based Curriculum (CBC) and 5E model, adapting to resource-limited classrooms."
  },
  {
    icon: Code2,
    title: "Build",
    subtitle: "Software Engineering",
    desc: "Developing web, mobile, desktop, and large-scale information systems (React, React Native, C# WPF, PostgreSQL) designed to solve real operational bottlenecks."
  },
  {
    icon: LineChart,
    title: "Research",
    subtitle: "Evidence-Based Analysis",
    desc: "Leveraging empirical public datasets (e.g. Rwanda Agricultural Survey 2020) to extract insights, test hypotheses, and inform policy interventions."
  },
  {
    icon: Users,
    title: "Lead",
    subtitle: "Service & Community",
    desc: "Guiding university choirs, spearheading community and high-school outreach, and practicing servant leadership grounded in Christian ethics and responsibility."
  }
];

const CAREER_VISION = [
  {
    timeframe: "Short-Term",
    goal: "Develop deep professional mastery in software engineering, Computer Science pedagogy, and instructional technology design."
  },
  {
    timeframe: "Medium-Term",
    goal: "Build and deploy practical, scalable software solutions for schools, SMEs, and community development across Rwanda and East Africa."
  },
  {
    timeframe: "Long-Term",
    goal: "Become a professional Computer Science educator and software developer who creates technology-driven solutions that transform learning and expand educational access."
  }
];

export const About = () => {
  return (
    <section id="about" className="section-container relative">
      <div className="relative z-10">
        <SectionHeader 
          title="About Paccy" 
          subtitle="At the intersection of Computer Science, classroom pedagogy, and software engineering in Rwanda."
          align="center"
        />

        {/* Narrative & Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center max-w-6xl mx-auto mb-12">
          {/* Portrait Photo Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-4 flex justify-center"
          >
            <figure className="relative w-full max-w-[280px] aspect-[3/4] rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl group">
              <img
                src="/tuyiringire-pacifique-formal-blue-suit.jpg"
                alt="TUYIRINGIRE Pacifique formal portrait in blue suit"
                width="480"
                height="640"
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/95 via-slate-900/80 to-transparent p-3 text-[11px] text-slate-200 text-center font-medium">
                <span className="font-bold text-primary-300">TUYIRINGIRE Pacifique</span>
                <span className="block text-[10px] text-slate-400">Educator • Developer • Rwandan Youth Leader</span>
              </figcaption>
            </figure>
          </motion.div>

          {/* Narrative Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            <p>
              I am <span className="text-white font-bold">TUYIRINGIRE Pacifique</span>, a Computer Science with Education student in the Department of Mathematics and Computer Science Education at the <span className="text-primary-300 font-semibold">University of Rwanda – College of Education</span>.
            </p>
            <p>
              My academic and professional journey sits at the vital intersection of <span className="text-white font-semibold">education and technology</span>. I am fascinated by using software, artificial intelligence, digital learning platforms, and innovative teaching approaches to improve how students learn Computer Science and other disciplines.
            </p>
            <p className="text-sm text-slate-400">
              Beyond the lecture hall, I actively build full-stack web and mobile applications, conduct empirical data research, facilitate classroom teaching practice, and participate in social entrepreneurship incubators.
            </p>
          </motion.div>
        </div>

        {/* Interactive Code Window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700/60 bg-[#0c1017] font-mono text-xs sm:text-sm max-w-4xl mx-auto mb-20"
        >
          <div className="flex items-center px-4 py-3 bg-[#151b23] border-b border-slate-800">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="flex-1 text-center text-xs text-slate-400">tuyiringire_pacifique.ts</div>
          </div>
          <div className="p-5 sm:p-6 text-slate-300 overflow-x-auto leading-relaxed">
            <pre><code>
<span className="text-purple-400">interface</span> <span className="text-yellow-300">EducatorDeveloper</span> {'{'}
<br/>  name: <span className="text-green-400">"TUYIRINGIRE Pacifique (Paccy)"</span>;
<br/>  institution: <span className="text-green-400">"University of Rwanda"</span>;
<br/>  mission: <span className="text-green-400">"Transforming Learning Through Passion & Tech"</span>;
<br/>  pillars: [<span className="text-green-400">"Teach"</span>, <span className="text-green-400">"Build"</span>, <span className="text-green-400">"Research"</span>, <span className="text-green-400">"Lead"</span>];
<br/>{'}'}
<br/>
<br/><span className="text-purple-400">const</span> <span className="text-blue-400">paccy</span>: <span className="text-yellow-300">EducatorDeveloper</span> = {'{'}
<br/>  name: <span className="text-green-400">"TUYIRINGIRE Pacifique (Paccy)"</span>,
<br/>  institution: <span className="text-green-400">"University of Rwanda"</span>,
<br/>  mission: <span className="text-green-400">"Transforming Learning Through Passion & Tech"</span>,
<br/>  pillars: [<span className="text-green-400">"Teach"</span>, <span className="text-green-400">"Build"</span>, <span className="text-green-400">"Research"</span>, <span className="text-green-400">"Lead"</span>],
<br/>  <span className="text-blue-400">approach</span>: () =&gt; <span className="text-green-400">"Observe → Understand → Design → Build → Impact"</span>
<br/>{'}'};
            </code></pre>
          </div>
        </motion.div>

        {/* The "Why" Banner */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-primary-500/30 max-w-5xl mx-auto mb-20 relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/20 text-primary-300 text-xs font-bold uppercase tracking-wider mb-4 border border-primary-500/30">
            <Sparkles size={12} /> The Driving Motivation
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-serif mb-4">
            Why Technology and Education?
          </h3>
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-4">
            Because I have experienced both sides: <span className="text-primary-300 font-bold">learning Computer Science and teaching it</span>.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            I have seen how technology can make learning more practical and engaging, but I have also seen the profound challenges schools face when hardware resources and electricity are scarce. This motivates me to build technology that is not only technically impressive, but also <span className="text-white font-semibold">practical, accessible, and deeply useful to teachers and learners</span>.
          </p>
        </div>

        {/* Four Core Pillars (Teach, Build, Research, Lead) */}
        <div className="mb-20">
          <h3 className="text-xl sm:text-2xl font-bold font-serif text-white text-center mb-8">
            What I Do: The Four Pillars
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {CORE_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-primary-500/40 transition-colors flex flex-col justify-between group">
                  <div>
                    <div className="p-3 rounded-xl bg-primary-500/10 text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300 inline-block mb-4">
                      <Icon size={24} />
                    </div>
                    <h4 className="text-xl font-bold text-white font-serif mb-1">{pillar.title}</h4>
                    <p className="text-xs font-semibold text-primary-400 mb-3">{pillar.subtitle}</p>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Personal Values Grid */}
        <div className="mb-20">
          <h3 className="text-xl sm:text-2xl font-bold font-serif text-white text-center mb-8">
            Personal Values
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {personalValues.map((val, idx) => (
              <div key={idx} className="glass-panel p-5 rounded-2xl border border-slate-800">
                <span className="text-xs font-mono font-bold text-primary-400 uppercase tracking-widest block mb-1">
                  0{idx + 1}
                </span>
                <h4 className="text-base font-bold text-white font-serif mb-1">{val.title}</h4>
                <p className="text-xs text-primary-300 font-medium mb-2">{val.tagline}</p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Career Vision (Short, Medium, Long term) */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800 max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6 text-primary-400">
            <Compass size={24} />
            <h4 className="text-2xl font-bold font-serif text-white">Career Vision & Horizon</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CAREER_VISION.map((vision, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/60 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-primary-400 uppercase tracking-wider block mb-2">
                    {vision.timeframe}
                  </span>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {vision.goal}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
