import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavigationProps {
  onOpenResume: () => void;
  activeSection: string;
}

export const Navigation: React.FC<NavigationProps> = ({
  onOpenResume,
  activeSection
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'creations', label: 'Creations', href: '#creations' },
    { id: 'beyond-code', label: 'Beyond Code', href: '#beyond-code' },
    { id: 'journey', label: 'Journey', href: '#journey' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
        ? 'py-3.5 bg-[#15180F]/95 backdrop-blur-md border-b border-[rgba(238,232,217,0.08)] shadow-lg'
        : 'pt-6 pb-4 bg-transparent'
        }`}
    >
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16 flex items-center justify-between">

        {/* Left: Kolkata Bengali style "আমার পোর্টফোলিও" (My Portfolio) brand mark */}
        <div className="flex items-center gap-5 sm:gap-6 pl-2 sm:pl-4">
          <a
            href="#home"
            className="flex flex-col items-start text-decoration-none group select-none relative"
            title="আমার পোর্টফোলিও — Prianshu Mitra"
          >
            {/* Authentic Bengali Script Typography with Continuous Shirorekha */}
            <div className="flex items-center gap-1.5">
              <span className={`font-bengali text-2xl sm:text-[1.8rem] font-bold tracking-tight leading-none transition-colors ${scrolled ? 'text-[#EEE8D9]' : 'text-[#171710]'
                }`}>
                আমার পোর্টফোলিও
              </span>
              <span className="w-2 h-2 bg-[#D99A19] inline-block transition-transform group-hover:scale-125 rounded-full ml-0.5" />
            </div>

            {/* Subtitle in sleek gold monospace for clarity */}
            <span className="font-mono text-[15px] tracking-[0.24em] uppercase text-[#171710] font-bold pl-0.5 mt-1">
              MY PORTFOLIO
            </span>
          </a>

          {/* Thin horizontal architectural line */}
          <div className={`hidden md:block w-16 lg:w-24 h-[1px] transition-colors ${scrolled ? 'bg-[#EEE8D9]/20' : 'bg-[#39382F]/25'
            }`} />
        </div>

        {/* Center-Left: Navigation Links – shifted towards left */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7 -translate-x-16 lg:-translate-x-28 xl:-translate-x-36">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className="relative py-1 text-[15px] font-sans font-bold transition-colors text-decoration-none"
              >
                <span
                  className={
                    isActive
                      ? scrolled ? 'text-[#EEE8D9] font-bold' : 'text-[#171710] font-bold'
                      : scrolled ? 'text-[#AAA595] hover:text-[#EEE8D9] font-bold' : 'text-[#39382F] hover:text-[#171710] font-bold'
                  }
                >
                  {link.label}
                </span>

                {/* Active ochre underline */}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-11 h-[3px] bg-[#D99A19] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Résumé button — sits over the dark olive area */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={onOpenResume}
            className="btn-resume-nav font-sans font-bold"
            aria-label="View Résumé"
          >
            <span>Résumé</span>
            <ArrowUpRight size={14} className="text-[#D99A19]" />
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded transition-colors bg-transparent border-0 cursor-pointer ${scrolled ? 'text-[#EEE8D9]' : 'text-[#171710]'
              }`}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#15180F]/98 backdrop-blur-xl border-b border-[rgba(238,232,217,0.12)] px-6 py-6 shadow-2xl flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 text-sm font-sans font-bold tracking-wide transition-colors ${isActive ? 'text-[#D99A19]' : 'text-[#AAA595]'
                  }`}
              >
                {link.label}
              </a>
            );
          })}
          <div className="pt-4 border-t border-[rgba(238,232,217,0.1)] flex justify-between items-center">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="btn-resume-nav w-full justify-center"
            >
              <span>Résumé</span>
              <ArrowUpRight size={14} className="text-[#D99A19]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
