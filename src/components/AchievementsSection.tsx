import { Trophy, Award, Medal, Sparkles, CheckCircle2 } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export const AchievementsSection: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'Hackathon': return <Trophy size={20} className="text-[#D99A35]" />;
      case 'National Exam': return <Medal size={20} className="text-[#526B39]" />;
      case 'Competition': return <Sparkles size={20} className="text-[#F5B94F]" />;
      default: return <Award size={20} className="text-[#F0E8D8]" />;
    }
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-[#0c0e0b]">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#D99A35]/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="portfolio-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171914] border border-[#D99A35]/30 text-xs font-mono text-[#F5B94F] mb-4">
            <Trophy size={13} />
            <span>HONORS, AWARDS & RECOGNITION</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#F0E8D8] tracking-wide mb-4">
            Competitive & Academic Honors
          </h2>
          <p className="font-serif italic text-lg sm:text-xl text-[#b8b09f] leading-relaxed">
            Tested through competitive hackathons, national technical examinations, enterprise innovation challenges, and departmental standing.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              className="glass-panel rounded-3xl p-6 border border-white/5 hover:border-[#D99A35]/40 transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between shadow-xl relative overflow-hidden"
            >
              {/* Corner Ambient Glow */}
              <div
                className="absolute -top-10 -right-10 w-28 h-28 rounded-full filter blur-2xl opacity-20 pointer-events-none transition-opacity group-hover:opacity-40"
                style={{ backgroundColor: item.accent }}
              />

              <div>
                {/* Header: Icon + Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#171914] border border-white/10 flex items-center justify-center shadow-md">
                    {getIcon(item.type)}
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-[#171914] border border-[#D99A35]/30 text-[#F5B94F]">
                    {item.badge}
                  </span>
                </div>

                {/* Award Title */}
                <span className="text-xs font-mono text-[#D99A35] font-semibold">
                  {item.organization} · {item.year}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F0E8D8] mt-1 mb-2 group-hover:text-[#F5B94F] transition-colors">
                  {item.title}
                </h3>
                <div className="inline-block px-2.5 py-0.5 rounded bg-white/5 text-xs font-semibold text-[#F5B94F] mb-3">
                  {item.award}
                </div>

                {/* Description */}
                <p className="text-xs text-[#b8b09f] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Footer Stat / Verification */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#787266]">
                <span className="text-[#F0E8D8] font-medium">
                  {item.stats}
                </span>
                <CheckCircle2 size={13} className="text-[#526B39]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
