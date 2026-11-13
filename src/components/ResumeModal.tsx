import { X, Printer, MapPin, Mail } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#15180F]/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-[#1B1F14] border border-[rgba(245,240,229,0.12)] rounded-xl shadow-2xl overflow-hidden text-left">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[rgba(245,240,229,0.08)] bg-[#15180F]">
          <span className="text-xs font-mono text-[#AAA595] uppercase tracking-wider">
            Curriculum Vitae — Prianshu Mitra
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono text-[#AAA595] hover:text-[#F5F0E5] bg-white/5 hover:bg-white/10 transition-colors cursor-pointer border-0"
              title="Print résumé"
            >
              <Printer size={13} />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded text-[#AAA595] hover:text-[#F5F0E5] transition-colors cursor-pointer bg-transparent border-0"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Document Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-7 text-[#AAA595] font-sans">
          {/* Header */}
          <div className="border-b border-[rgba(245,240,229,0.08)] pb-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
            <div>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F0E5]">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-xs font-mono text-[#D99A19] uppercase tracking-wider mt-1">
                {PERSONAL_INFO.title}
              </p>
            </div>

            <div className="text-xs font-mono space-y-1 sm:text-right">
              <div className="flex items-center sm:justify-end gap-1.5 text-[#F5F0E5]">
                <MapPin size={11} className="text-[#D99A19]" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5 text-[#D99A19]">
                <Mail size={11} />
                <span>{PERSONAL_INFO.email}</span>
              </div>
              <div className="text-[11px] text-[#AAA595]">
                CGPA 9.03 · Top Departmental Standing
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#D99A19] font-semibold">
              Education
            </h4>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
              <div>
                <span className="font-sans text-sm font-semibold text-[#F5F0E5]">
                  {PERSONAL_INFO.education.institution}
                </span>
                <p className="text-xs text-[#AAA595]">
                  {PERSONAL_INFO.education.degree} ({PERSONAL_INFO.education.year})
                </p>
              </div>
              <span className="text-xs font-mono text-[#F5F0E5]">
                CGPA: {PERSONAL_INFO.education.cgpa} ({PERSONAL_INFO.education.target})
              </span>
            </div>
          </div>

          {/* Honors */}
          <div className="space-y-2.5">
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#D99A19] font-semibold">
              Honors & Competitive Distinctions
            </h4>
            <div className="space-y-2">
              {ACHIEVEMENTS.map((ach) => (
                <div key={ach.id} className="text-xs">
                  <div className="flex items-baseline justify-between">
                    <span className="font-medium text-[#F5F0E5]">
                      {ach.title} — {ach.award}
                    </span>
                    <span className="font-mono text-[11px] text-[#AAA595]">
                      {ach.year}
                    </span>
                  </div>
                  <span className="text-[11px] text-[#AAA595]/80">
                    {ach.organization} · {ach.stats}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Engineering Projects */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#D99A19] font-semibold">
              Selected Software Projects
            </h4>
            <div className="space-y-3">
              {PROJECTS.map((p) => (
                <div key={p.id} className="text-xs space-y-0.5">
                  <div className="flex items-baseline justify-between">
                    <span className="font-semibold text-[#F5F0E5]">
                      {p.title}
                    </span>
                    <span className="font-mono text-[10px] text-[#D99A19]">
                      {p.role} · {p.period}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#AAA595] leading-relaxed">
                    {p.tagline}
                  </p>
                  <p className="text-[10px] font-mono text-[#69733D]">
                    {p.technologies.join(' · ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Competencies */}
          <div className="space-y-2 pt-2 border-t border-[rgba(245,240,229,0.08)]">
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#D99A19] font-semibold">
              Technical Competencies
            </h4>
            <p className="text-xs font-mono text-[#AAA595] leading-relaxed">
              <strong className="text-[#F5F0E5]">Languages:</strong> C, C++, Java, Python, TypeScript, JavaScript, SQL (PostgreSQL)<br />
              <strong className="text-[#F5F0E5]">Frontend & Frameworks:</strong> React, Next.js, Node.js, Express, Tailwind CSS<br />
              <strong className="text-[#F5F0E5]">Systems & Infrastructure:</strong> Docker, Git, Linux, Supabase, Vercel, Render
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
