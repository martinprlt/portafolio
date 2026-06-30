import { AnimatedBackground } from './components/AnimatedBackground';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { CurrentlyBuilding } from './components/sections/CurrentlyBuilding';
import { Projects } from './components/sections/Projects';
import { HowIWork } from './components/sections/HowIWork';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Contact } from './components/sections/Contact';
import { AIAssistant } from './components/AIAssistant';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <CurrentlyBuilding />
        <Projects />
        <HowIWork />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <AIAssistant />
      <WhatsAppButton />
    </>
  );
}
