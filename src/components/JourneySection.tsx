import { Compass, Calendar, GraduationCap, Target } from 'lucide-react';
import { JOURNEY_MILESTONES, PERSONAL_INFO } from '../data/portfolioData';

export const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="py-24 relative overflow-hidden bg-[#090A08]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#D99A35]/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="portfolio-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171914] border border-[#D99A35]/30 text-xs font-mono text-[#F5B94F] mb-4">
            <Compass size={13} />
            <span>TRAJECTORY & MILESTONES</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#F0E8D8] tracking-wide mb-4">
            The Engineering Journey
          </h2>
          <p className="font-serif italic text-lg sm:text-xl text-[#b8b09f] leading-relaxed">
            From undergraduate computer science foundations and founding Debi-Dorshon in Kolkata to preparing for GATE 2027 and building resilient full-stack systems.
          </p>
        </div>

        {/* Current Academic Standing Quick Highlight Banner */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-[#D99A35]/25 mb-16 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center text-center md:text-left">
            <div className="md:col-span-1 flex items-center justify-center md:justify-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#D99A35]/15 border border-[#D99A35]/30 flex items-center justify-center text-[#F5B94F]">
                <GraduationCap size={28} />
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-[#F5B94F]">9.03</div>
                <div className="text-[10px] font-mono text-[#b8b09f] uppercase">CGPA (4 Semesters)</div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-1">
              <h3 className="font-display text-lg font-bold text-[#F0E8D8]">
                {PERSONAL_INFO.education.institution}
              </h3>
              <p className="text-xs text-[#b8b09f]">
                {PERSONAL_INFO.education.degree} · {PERSONAL_INFO.education.year}
              </p>
              <p className="text-xs text-[#D99A35] font-mono">
                Departmental Top Rank · Mastery in OS, DBMS, Algorithms, OOP
              </p>
            </div>

            <div className="md:col-span-1 flex justify-center md:justify-end">
              <div className="px-4 py-2 rounded-xl bg-[#171914] border border-[#526B39]/50 flex items-center gap-2">
                <Target size={15} className="text-[#526B39]" />
                <span className="text-xs font-mono font-semibold text-[#F0E8D8]">
                  Target: GATE 2027 CSE
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Path */}
        <div className="relative border-l border-[#D99A35]/25 ml-4 sm:ml-32 space-y-12">
          {JOURNEY_MILESTONES.map((mile, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-10 group">
              {/* Year Marker on Left (Desktop) */}
              <div className="hidden sm:block absolute -left-28 top-0.5 text-right w-20">
                <span className="font-display text-base font-bold text-[#F5B94F]">
                  {mile.year}
                </span>
                <div className="text-[10px] font-mono text-[#787266]">
                  {mile.period}
                </div>
              </div>

              {/* Glowing Node on Timeline Axis */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#090A08] border-2 border-[#D99A35] group-hover:bg-[#F5B94F] group-hover:border-[#F5B94F] group-hover:scale-125 transition-all duration-300 shadow-md">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D99A35] m-auto mt-[3px] group-hover:bg-[#090A08]" />
              </div>

              {/* Milestone Card */}
              <div className="glass-panel rounded-2xl p-6 border border-white/5 hover:border-[#D99A35]/40 transition-all duration-300 shadow-xl">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 sm:hidden text-xs font-mono text-[#F5B94F]">
                    <Calendar size={12} />
                    <span>{mile.period}</span>
                  </div>

                  {mile.badge && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-[#D99A35]/15 text-[#F5B94F] border border-[#D99A35]/30">
                      {mile.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F0E8D8] mb-1 group-hover:text-[#F5B94F] transition-colors">
                  {mile.title}
                </h3>
                <span className="text-xs font-mono text-[#D99A35] block mb-3">
                  {mile.institution}
                </span>

                <p className="text-xs sm:text-sm text-[#b8b09f] leading-relaxed mb-4">
                  {mile.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                  {mile.tags.map((t) => (
                    <span key={t} className="tag-badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
