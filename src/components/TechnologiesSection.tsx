import { TECHNOLOGIES } from '../data/portfolioData';

export const TechnologiesSection: React.FC = () => {
  return (
    <section id="technologies" className="py-24 bg-[#15180F] border-t border-[rgba(245,240,229,0.08)]">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-16">
          <span className="text-[11px] font-mono tracking-[0.2em] text-[#D99A19] uppercase block mb-2 font-semibold">
            TECHNICAL COMPETENCE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F0E5] mb-4">
            Technologies & Engineering Tooling
          </h2>
          <p className="font-mono text-xs sm:text-sm text-[#AAA595] leading-relaxed max-w-xl">
            Core programming languages, application frameworks, database architectures, and distributed systems tooling.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="space-y-12">
          {TECHNOLOGIES.map((cat) => (
            <div key={cat.name} className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-2 border-b border-[rgba(245,240,229,0.08)]">
                <h3 className="font-sans text-base sm:text-lg font-bold text-[#F5F0E5]">
                  {cat.name}
                </h3>
                <span className="text-xs font-mono text-[#AAA595]">
                  {cat.description}
                </span>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-4 rounded-lg bg-[#1B1F14]/70 border border-[rgba(245,240,229,0.08)] hover:border-[#D99A19]/40 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-sans text-sm font-semibold text-[#F5F0E5]">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono text-[#D99A19] font-medium">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-[#AAA595] leading-relaxed font-sans">
                        {skill.details}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-[rgba(245,240,229,0.05)] text-[10px] font-mono text-[#69733D]">
                      {skill.tag}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
