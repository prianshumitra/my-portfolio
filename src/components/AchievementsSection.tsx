import { ACHIEVEMENTS } from '../data/portfolioData';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-24 bg-[#15180F] border-t border-[rgba(245,240,229,0.08)]">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-16">
          <span className="text-[11px] font-mono tracking-[0.2em] text-[#D99A19] uppercase block mb-2 font-semibold">
            HONORS & ACCOLADES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F0E5] mb-4">
            Competitive & Academic Distinctions
          </h2>
          <p className="font-mono text-xs sm:text-sm text-[#AAA595] leading-relaxed max-w-xl">
            Verified recognition across international hackathons, enterprise engineering challenges, and national examinations.
          </p>
        </div>

        {/* Editorial Table / Rows */}
        <div className="divide-y divide-[rgba(245,240,229,0.08)] border-t border-b border-[rgba(245,240,229,0.08)]">
          {ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline hover:bg-[rgba(245,240,229,0.02)] transition-colors px-2 -mx-2 rounded"
            >
              {/* Year & Category */}
              <div className="md:col-span-2 text-left">
                <span className="text-xs font-mono text-[#AAA595] block">
                  {item.year}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#69733D] font-medium">
                  {item.type}
                </span>
              </div>

              {/* Title & Organization */}
              <div className="md:col-span-5 text-left">
                <h3 className="font-sans text-base font-semibold text-[#F5F0E5]">
                  {item.title}
                </h3>
                <span className="text-xs font-sans text-[#AAA595]">
                  {item.organization}
                </span>
              </div>

              {/* Award / Distinction */}
              <div className="md:col-span-3 text-left">
                <span className="text-xs font-mono font-medium text-[#D99A19]">
                  {item.award}
                </span>
                <div className="text-[11px] text-[#AAA595] font-sans">
                  {item.stats}
                </div>
              </div>

              {/* Badge */}
              <div className="md:col-span-2 text-left md:text-right">
                <span className="inline-block px-2.5 py-1 rounded bg-[#1B1F14] border border-[rgba(245,240,229,0.1)] text-[10px] font-mono text-[#AAA595]">
                  {item.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
