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
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'creations', 'technologies', 'beyond-code', 'achievements', 'journey', 'contact'];
      const scrollY = window.scrollY;
      const offset = 220;

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
    <div className="min-h-screen bg-[#15180F] text-[#F5F0E5] selection:bg-[#D99A19]/35">
      {/* Editorial Navigation */}
      <Navigation
        activeSection={activeSection}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Section 0: Unconventional Split Hero — Editorial Paper & Developer Studio */}
        <HeroWorkspace />

        {/* Section 1: Selected Case Studies (Debi-Dorshon, Rentify, Quizreto) */}
        <CreationsSection />

        {/* Section 2: Technical Competence & Stack */}
        <TechnologiesSection />

        {/* Section 3: Beyond Code (Music Production & Audio Engineering) */}
        <CreativeSection />

        {/* Section 4: Verified Honors & Accolades */}
        <AchievementsSection />

        {/* Section 5: Academic & Professional Trajectory */}
        <JourneySection />

        {/* Section 6: Inquiries & Contact */}
        <ContactSection onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}

export default App;
