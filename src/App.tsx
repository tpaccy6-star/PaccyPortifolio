import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TerminalSection } from './components/TerminalSection';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

function App() {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <TerminalSection />
        <About />
        {/* Placeholder for Teaching section, merged into About / Experience for now based on components built */}
        <Projects />
        <Skills />
        <Experience />
        {/* Placeholder for Research / Insights */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
