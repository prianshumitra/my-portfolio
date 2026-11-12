import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { HeroWorkspace } from './components/HeroWorkspace';
import { CreationsSection } from './components/CreationsSection';
import { TechnologiesSection } from './components/TechnologiesSection';
import { CreativeSection } from './components/CreativeSection';
import { AchievementsSection } from './components/AchievementsSection';
import { JourneySection } from './components/JourneySection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [lightMode, setLightMode] = useState<'warm' | 'dim' | 'bright'>('warm');
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'creations', 'technologies', 'beyond-code', 'achievements', 'journey', 'contact'];
      const scrollY = window.scrollY;
      const offset = 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i]);
        if (sec && scrollY >= sec.offsetTop - offset) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#090A08] text-[#F0E8D8] selection:bg-[#D99A35]/30">
      {/* Navigation Header */}
      <Navigation
        activeSection={activeSection}
        onOpenResume={() => setResumeOpen(true)}
        lightMode={lightMode}
        setLightMode={setLightMode}
      />

      {/* Main Content Sections */}
      <main>
        {/* Section 0: The Immersive Workspace Hero */}
        <HeroWorkspace
          onOpenResume={() => setResumeOpen(true)}
          lightMode={lightMode}
        />

        {/* Section 1: Selected Creations (Debi-Dorshon, Rentify, Quizreto) */}
        <CreationsSection />

        {/* Section 2: Technologies & Architecture */}
        <TechnologiesSection />

        {/* Section 3: Beyond Code (Music, Vocal Covers & Cubase Production) */}
        <CreativeSection />

        {/* Section 4: Honors & Achievements */}
        <AchievementsSection />

        {/* Section 5: Academic & Professional Journey */}
        <JourneySection />

        {/* Section 6: Contact & Socials */}
        <ContactSection onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* Interactive Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}

export default App;
