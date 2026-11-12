import { useState } from 'react';
import { Terminal, Code2, Server, Database, Wrench } from 'lucide-react';
import { TECHNOLOGIES } from '../data/portfolioData';

export const TechnologiesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'Core Languages', label: 'Languages' },
    { id: 'Frontend Development', label: 'Frontend' },
    { id: 'Backend Architecture', label: 'Backend' },
    { id: 'Databases & ORM', label: 'Databases' },
    { id: 'Engineering & DevOps', label: 'DevOps & Tooling' }
  ];

  const filteredCategories = activeCategory === 'all'
    ? TECHNOLOGIES
    : TECHNOLOGIES.filter(cat => cat.name === activeCategory);

  const getCategoryIcon = (name: string) => {
    switch (name) {
      case 'Core Languages': return <Terminal size={15} className="text-[#F5B94F]" />;
      case 'Frontend Development': return <Code2 size={15} className="text-[#D99A35]" />;
      case 'Backend Architecture': return <Server size={15} className="text-[#526B39]" />;
      case 'Databases & ORM': return <Database size={15} className="text-[#F5B94F]" />;
      default: return <Wrench size={15} className="text-[#D99A35]" />;
    }
  };

  return (
    <section id="technologies" className="py-24 relative overflow-hidden bg-transparent">
      <div className="portfolio-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono text-[#D99A35] uppercase tracking-widest block mb-2">
            Technical Stack
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F0E8D8] tracking-tight mb-4">
            Technologies & Frameworks
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#b8b09f] max-w-xl mx-auto leading-relaxed">
            Strong foundations across systems programming, asynchronous backend architectures, scalable database schemas, and modern web interfaces.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs font-mono tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#D99A35] text-[#090A08] font-bold shadow-md shadow-[#D99A35]/20'
                  : 'bg-[#141611]/80 text-[#b8b09f] border border-white/10 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="space-y-12">
          {filteredCategories.map((cat) => (
            <div key={cat.name} className="space-y-4">
              <div className="flex items-center gap-3 pb-2 border-b border-white/10">
                <div className="w-7 h-7 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center">
                  {getCategoryIcon(cat.name)}
                </div>
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#F0E8D8]">
                    {cat.name}
                  </h3>
                </div>
              </div>

              {/* Skill Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="editorial-card rounded-xl p-4.5 border border-white/10 hover:border-[#D99A35]/40 transition-all duration-200"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-display text-base font-bold text-[#F0E8D8]">
                          {skill.name}
                        </h4>
                        <span className="text-[11px] font-mono text-[#D99A35]">
                          {skill.tag}
                        </span>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-white/5 text-[#F5B94F] border border-white/10">
                        {skill.level}
                      </span>
                    </div>

                    <p className="text-xs text-[#b8b09f] leading-relaxed font-sans">
                      {skill.details}
                    </p>
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
