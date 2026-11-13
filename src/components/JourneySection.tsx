import { JOURNEY_MILESTONES, PERSONAL_INFO } from '../data/portfolioData';

export const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="py-24 bg-[#15180F] border-t border-[rgba(245,240,229,0.08)]">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-16">
          <span className="text-[11px] font-mono tracking-[0.2em] text-[#D99A19] uppercase block mb-2 font-semibold">
            CHRONOLOGY & EDUCATION
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F0E5] mb-4">
            Academic & Engineering Trajectory
          </h2>
          <p className="font-mono text-xs sm:text-sm text-[#AAA595] leading-relaxed max-w-xl">
            Progression from foundational computer science theory to live product deployments and forward preparation for GATE 2027.
          </p>
        </div>

        {/* Current Academic Standing Card */}
        <div className="p-6 sm:p-8 rounded-xl bg-[#1B1F14]/80 border border-[rgba(245,240,229,0.08)] mb-16 text-left">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
            <div className="md:col-span-3">
              <span className="text-3xl font-bold font-serif text-[#F5F0E5]">
                9.03
              </span>
              <span className="text-xs font-mono text-[#AAA595] block mt-0.5">
                Cumulative GPA (4 Semesters)
              </span>
            </div>

            <div className="md:col-span-6 space-y-1">
              <h3 className="font-sans text-base font-semibold text-[#F5F0E5]">
                {PERSONAL_INFO.education.institution}
              </h3>
              <p className="text-xs text-[#AAA595]">
                {PERSONAL_INFO.education.degree} ({PERSONAL_INFO.education.year})
              </p>
              <p className="text-xs text-[#D99A19] font-mono">
                Departmental standing · Operating systems, database architecture & algorithms
              </p>
            </div>

            <div className="md:col-span-3 md:text-right">
              <span className="inline-block px-2.5 py-1 rounded bg-[#15180F] border border-[rgba(245,240,229,0.1)] text-[10px] font-mono text-[#69733D]">
                {PERSONAL_INFO.education.target}
              </span>
            </div>
          </div>
        </div>

        {/* Timeline List */}
        <div className="space-y-10 border-l border-[rgba(245,240,229,0.12)] pl-6 sm:pl-8 ml-2 text-left">
          {JOURNEY_MILESTONES.map((mile, idx) => (
            <div key={idx} className="relative group">
              {/* Bullet node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#15180F] border border-[#D99A19] group-hover:bg-[#D99A19] transition-colors" />

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-semibold text-[#D99A19]">
                    {mile.year}
                  </span>
                  <span className="text-xs text-[#AAA595]">•</span>
                  <span className="text-xs font-mono text-[#AAA595]">
                    {mile.period}
                  </span>
                </div>
                {mile.badge && (
                  <span className="text-[10px] font-mono text-[#69733D]">
                    {mile.badge}
                  </span>
                )}
              </div>

              <h4 className="font-sans text-base sm:text-lg font-semibold text-[#F5F0E5] mb-1">
                {mile.title}
              </h4>
              <span className="text-xs font-mono text-[#AAA595] block mb-2">
                {mile.institution}
              </span>
              <p className="text-xs sm:text-sm text-[#AAA595] leading-relaxed max-w-2xl font-sans">
                {mile.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
