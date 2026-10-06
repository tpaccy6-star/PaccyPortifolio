import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TerminalSection } from './components/TerminalSection';
import { About } from './components/About';
import { Teaching } from './components/Teaching';
import { Projects } from './components/Projects';
import { ProblemsMatrix } from './components/ProblemsMatrix';
import { ResearchInnovation } from './components/ResearchInnovation';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { LeadershipService } from './components/LeadershipService';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-primary-500/30 selection:text-primary-200">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <TerminalSection />
        <About />
        <Teaching />
        <Projects />
        <ProblemsMatrix />
        <ResearchInnovation />
        <Experience />
        <Skills />
        <LeadershipService />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
