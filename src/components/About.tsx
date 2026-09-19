import { SectionHeader } from './SectionHeader';
import { Code, BookOpen, Laptop, Lightbulb } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { TiltCard } from './TiltCard';

const identityCards = [
  {
    icon: <BookOpen size={32} className="text-primary-600 dark:text-primary-400" />,
    title: "Computer Science",
    subtitle: "Education & Technology",
    description: "Teaching programming, algorithms, and digital literacy with a focus on problem-based learning and computational thinking."
  },
  {
    icon: <Code size={32} className="text-primary-600 dark:text-primary-400" />,
    title: "Software Development",
    subtitle: "Web & Application Development",
    description: "Building production-ready software systems, interactive applications, and scalable web platforms."
  },
  {
    icon: <Laptop size={32} className="text-primary-600 dark:text-primary-400" />,
    title: "Educational Technology",
    subtitle: "Technology for Learning",
    description: "Developing and integrating tools that enhance classroom practice, student engagement, and educational assessment."
  },
  {
    icon: <Lightbulb size={32} className="text-primary-600 dark:text-primary-400" />,
    title: "Innovation",
    subtitle: "Building Practical Solutions",
    description: "Transforming educational challenges into technical solutions through continuous learning and digital transformation."
  }
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export const About = () => {
  return (
    <section id="about" className="section-container relative z-10 perspective-1000">
      <div className="absolute inset-0 bg-slate-50 dark:bg-surface-dark -skew-y-3 -z-10 origin-top-left transform-gpu"></div>
      
      <SectionHeader title="About Me" align="center" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-20">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-medium mb-6">
            I am TUYIRINGIRE Pacifique, a passionate Computer Science Educator and Software Developer based in Rwanda. I am dedicated to building impactful digital solutions and robust systems for educational institutions.
          </p>
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
            My work in Educational Technology bridges the gap between educational theory and technical execution. I believe that technology in education 
            is most effective when built by professionals who understand classroom dynamics and learning outcomes firsthand.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-xl overflow-hidden shadow-2xl border border-slate-700/50 bg-[#0d1117] font-mono text-sm sm:text-base"
        >
          {/* VS Code Header */}
          <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-slate-800">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="flex-1 text-center text-xs text-slate-400">pacifique.ts</div>
          </div>
          <div className="p-4 sm:p-6 text-slate-300 overflow-x-auto">
            <pre><code>
<span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = {'{'}
<br/>  <span className="text-slate-400">name:</span> <span className="text-green-400">'TUYIRINGIRE Pacifique'</span>,
<br/>  <span className="text-slate-400">role:</span> <span className="text-green-400">'Computer Science Educator & Software Developer'</span>,
<br/>  <span className="text-slate-400">skills:</span> [
<br/>    <span className="text-green-400">'React'</span>, <span className="text-green-400">'TypeScript'</span>, <span className="text-green-400">'Python'</span>
<br/>  ],
<br/>  <span className="text-blue-400">solveProblem</span>() {'{'}
<br/>    <span className="text-purple-400">return</span> <span className="text-purple-400">this</span>.<span className="text-slate-300">skills</span>.<span className="text-yellow-200">map</span>(<span className="text-orange-300">tech</span> <span className="text-purple-400">=&gt;</span> {'{'}
<br/>      <span className="text-purple-400">return</span> <span className="text-yellow-200">buildSolution</span>(<span className="text-orange-300">tech</span>);
<br/>    {'}'});
<br/>  {'}'}
<br/>{'}'};
            </code></pre>
          </div>
        </motion.div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {identityCards.map((card, index) => (
          <motion.div key={index} variants={itemVariants}>
            <TiltCard className="h-full">
              <div className="glass-panel p-6 rounded-2xl group h-full shadow-lg border border-slate-200 dark:border-slate-800">
                <div className="mb-6 p-4 bg-primary-50 dark:bg-slate-800 inline-block rounded-xl group-hover:scale-110 group-hover:bg-primary-100 dark:group-hover:bg-slate-700 transition-all duration-300 shadow-sm">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-1 text-slate-900 dark:text-white">{card.title}</h3>
                <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 mb-4">{card.subtitle}</p>
                <p className="text-slate-700 dark:text-slate-400 text-sm leading-relaxed font-medium">
                  {card.description}
                </p>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
