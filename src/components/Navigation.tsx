import { useState, useEffect } from 'react';
import { Menu, X, FileText, Sparkles, Sun, Moon } from 'lucide-react';
import { SoundAmbiance } from './SoundAmbiance';

interface NavigationProps {
  onOpenResume: () => void;
  activeSection: string;
  lightMode: 'warm' | 'dim' | 'bright';
  setLightMode: (mode: 'warm' | 'dim' | 'bright') => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  onOpenResume,
  activeSection,
  lightMode,
  setLightMode
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Creations', href: '#creations' },
    { label: 'Technologies', href: '#technologies' },
    { label: 'Beyond Code', href: '#beyond-code' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Journey', href: '#journey' },
    { label: 'Contact', href: '#contact' }
  ];

  const cycleLighting = () => {
    if (lightMode === 'warm') setLightMode('dim');
    else if (lightMode === 'dim') setLightMode('bright');
    else setLightMode('warm');
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 editorial-nav shadow-2xl'
          : 'py-5 bg-gradient-to-b from-[#090A08]/90 via-[#090A08]/40 to-transparent'
      }`}
      style={{
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none'
      }}
    >
      <div className="portfolio-container flex items-center justify-between">
        {/* Monogram Logo */}
        <a
          href="#home"
          className="group flex items-center gap-3 text-decoration-none"
          title="Prianshu Mitra Portfolio"
        >
          <div className="relative w-9 h-9 rounded-lg bg-[#141611] border border-white/10 flex items-center justify-center shadow-md group-hover:border-[#D99A35] transition-all duration-200">
            <span className="font-display font-bold text-sm tracking-wider text-[#F5B94F]">
              PM
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-sm font-bold tracking-tight text-[#F0E8D8] group-hover:text-[#F5B94F] transition-colors">
              PRIANSHU MITRA
            </span>
            <span className="text-[10px] font-mono tracking-wider text-[#D99A35] uppercase">
              Engineer & Musician
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-[#11120F]/70 border border-[#D99A35]/15 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 text-decoration-none ${
                  isActive
                    ? 'bg-[#D99A35]/25 text-[#F5B94F] shadow-sm font-semibold'
                    : 'text-[#b8b09f] hover:text-[#F0E8D8] hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Studio Ambiance Audio */}
          <SoundAmbiance />

          {/* Lighting Mode Quick Toggle */}
          <button
            onClick={cycleLighting}
            className="p-2 rounded-full bg-[#171914] border border-[#D99A35]/20 hover:border-[#D99A35] text-[#F5B94F] transition-all"
            title={`Workspace Light: ${lightMode.toUpperCase()} (Click to change)`}
          >
            {lightMode === 'warm' && <Sparkles size={15} />}
            {lightMode === 'dim' && <Moon size={15} />}
            {lightMode === 'bright' && <Sun size={15} />}
          </button>

          {/* View Resume Button */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-[#D99A35] to-[#c28424] text-[#090A08] hover:from-[#F5B94F] hover:to-[#D99A35] transition-all shadow-md hover:shadow-[#D99A35]/30 hover:-translate-y-0.5 cursor-pointer"
          >
            <FileText size={13} />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <SoundAmbiance />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-[#171914] border border-[#D99A35]/20 text-[#F0E8D8] hover:border-[#D99A35] transition-all"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 px-6 py-5 bg-[#0e0f0c]/95 border-b border-[#D99A35]/20 backdrop-blur-2xl animate-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-lg text-sm tracking-wide text-decoration-none transition-colors ${
                  activeSection === link.href.substring(1)
                    ? 'bg-[#D99A35]/20 text-[#F5B94F] font-semibold border-l-2 border-[#D99A35]'
                    : 'text-[#b8b09f] hover:text-[#F0E8D8] hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3">
              <button
                onClick={cycleLighting}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-mono text-[#b8b09f] bg-[#171914] border border-[#D99A35]/20"
              >
                <Sparkles size={14} className="text-[#F5B94F]" />
                <span>Light: {lightMode}</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#D99A35] text-[#090A08]"
              >
                <FileText size={14} />
                <span>View Resume</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
