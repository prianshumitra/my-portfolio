import { X, Printer, GraduationCap, Award, Briefcase, Code, MapPin, Mail } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, ACHIEVEMENTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#0e100c] border border-[#D99A35]/30 rounded-3xl shadow-2xl overflow-hidden">
        {/* Modal Top Control Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#141611]/80 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D99A35] animate-pulse" />
            <span className="text-xs font-mono text-[#F5B94F] uppercase tracking-wider font-semibold">
              Curriculum Vitae · Prianshu Mitra
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-[#b8b09f] hover:text-[#F0E8D8] transition-colors cursor-pointer"
              title="Print Resume"
            >
              <Printer size={13} />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-red-500/20 text-[#b8b09f] hover:text-red-400 transition-colors cursor-pointer"
              aria-label="Close Resume Modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Body / Resume Document */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 font-sans text-stone-300">
          {/* Resume Header */}
          <div className="border-b border-[#D99A35]/20 pb-6 text-center sm:text-left flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-[#F0E8D8] tracking-wide">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-xs font-mono font-semibold text-[#D99A35] uppercase tracking-wider mt-1">
                {PERSONAL_INFO.title}
              </p>
              <p className="text-xs text-[#b8b09f] mt-1 max-w-lg">
                {PERSONAL_INFO.tagline}
              </p>
            </div>

            <div className="text-xs font-mono text-[#b8b09f] space-y-1 sm:text-right">
              <div className="flex items-center sm:justify-end gap-1.5 text-stone-300">
                <MapPin size={12} className="text-[#D99A35]" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5 text-[#F5B94F]">
                <Mail size={12} />
                <span>{PERSONAL_INFO.email}</span>
              </div>
              <div className="text-[11px] text-[#787266]">
                CGPA 9.03 · Top 5% B.Tech CSE
              </div>
            </div>
          </div>

          {/* Education & Academic Rigor */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 pb-1.5 border-b border-white/10 text-xs font-mono uppercase tracking-wider text-[#D99A35]">
              <GraduationCap size={15} />
              <span>Education</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div>
                <h3 className="font-display text-base font-bold text-[#F0E8D8]">
                  {PERSONAL_INFO.education.institution}
                </h3>
                <p className="text-xs text-[#b8b09f]">
                  {PERSONAL_INFO.education.degree} ({PERSONAL_INFO.education.year})
                </p>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-xs font-mono font-bold text-[#F5B94F]">
                  CGPA: {PERSONAL_INFO.education.cgpa}
                </span>
                <div className="text-[11px] font-mono text-[#526B39]">
                  {PERSONAL_INFO.education.target}
                </div>
              </div>
            </div>
          </div>

          {/* Key Achievements & Honors */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 pb-1.5 border-b border-white/10 text-xs font-mono uppercase tracking-wider text-[#D99A35]">
              <Award size={15} />
              <span>Honors & Competitive Distinctions</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ACHIEVEMENTS.map((ach) => (
                <div key={ach.id} className="p-3 rounded-xl bg-[#141611] border border-white/5 space-y-1">
                  <div className="flex items-center justify-between text-xs font-bold text-[#F0E8D8]">
                    <span>{ach.title}</span>
                    <span className="text-[#F5B94F] text-[10px] font-mono">{ach.year}</span>
                  </div>
                  <div className="text-[11px] font-mono text-[#D99A35] font-semibold">
                    {ach.award}
                  </div>
                  <p className="text-[11px] text-[#b8b09f] leading-snug">
                    {ach.stats} — {ach.organization}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Products & Experience */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-1.5 border-b border-white/10 text-xs font-mono uppercase tracking-wider text-[#D99A35]">
              <Briefcase size={15} />
              <span>Selected Products & Engineering Systems</span>
            </div>
            {PROJECTS.map((proj) => (
              <div key={proj.id} className="space-y-2 p-3.5 rounded-xl bg-[#141611] border border-white/5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h4 className="font-display text-base font-bold text-[#F0E8D8]">
                    {proj.title} — <span className="text-xs font-sans font-normal text-[#D99A35]">{proj.tagline}</span>
                  </h4>
                  <span className="text-[11px] font-mono text-[#787266]">{proj.period}</span>
                </div>
                <div className="text-[11px] font-mono text-[#F5B94F]">
                  Role: {proj.role} · {proj.category}
                </div>
                <p className="text-xs text-[#b8b09f] leading-relaxed">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {proj.technologies.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-[#F0E8D8]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Technical Toolkit */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 pb-1.5 border-b border-white/10 text-xs font-mono uppercase tracking-wider text-[#D99A35]">
              <Code size={15} />
              <span>Technical Skills</span>
            </div>
            <div className="space-y-2 text-xs">
              <p>
                <strong className="text-[#F0E8D8] font-mono">Languages:</strong>{' '}
                <span className="text-[#b8b09f]">Java (94% NPTEL Gold), Python, C, JavaScript, TypeScript</span>
              </p>
              <p>
                <strong className="text-[#F0E8D8] font-mono">Frontend:</strong>{' '}
                <span className="text-[#b8b09f]">React 19, HTML5, CSS3, Tailwind CSS, Vite</span>
              </p>
              <p>
                <strong className="text-[#F0E8D8] font-mono">Backend & APIs:</strong>{' '}
                <span className="text-[#b8b09f]">FastAPI, Node.js, Express, RESTful Protocols</span>
              </p>
              <p>
                <strong className="text-[#F0E8D8] font-mono">Databases & ORM:</strong>{' '}
                <span className="text-[#b8b09f]">PostgreSQL, MongoDB, SQLAlchemy, Alembic</span>
              </p>
              <p>
                <strong className="text-[#F0E8D8] font-mono">DevOps & Tools:</strong>{' '}
                <span className="text-[#b8b09f]">Docker, Git & GitHub, Linux, Bash Scripting, Postman</span>
              </p>
              <p>
                <strong className="text-[#F0E8D8] font-mono">Creative Audio:</strong>{' '}
                <span className="text-[#b8b09f]">Steinberg Cubase Pro, Acoustic Cutaway Guitar, Vocal Production</span>
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#141611]/90 flex items-center justify-between text-xs font-mono text-[#b8b09f]">
          <span>© {new Date().getFullYear()} Prianshu Mitra</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#D99A35] text-[#090A08] font-bold text-xs uppercase tracking-wider hover:bg-[#F5B94F] transition-colors cursor-pointer"
          >
            Close View
          </button>
        </div>
      </div>
    </div>
  );
};
