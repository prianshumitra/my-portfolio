import { ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { GithubIcon, DurgaEyeIcon } from './Icons';

export const CreationsSection: React.FC = () => {
  const getProjectBadge = (id: string) => {
    if (id === 'debi-dorshon') {
      return (
        <div className="w-10 h-10 rounded-[6px] bg-[#581616] border border-[#7a2020] flex items-center justify-center shrink-0 shadow-md">
          <DurgaEyeIcon className="w-6 h-4 text-white" />
        </div>
      );
    }
    if (id === 'rentify') {
      return (
        <div className="w-10 h-10 rounded-[6px] bg-[#3d4529] border border-[#525d37] flex items-center justify-center shrink-0 shadow-md font-serif text-lg font-bold text-[#F5F0E5]">
          R
        </div>
      );
    }
    return (
      <div className="w-10 h-10 rounded-[6px] bg-[#ded7c5] border border-[#eee7d5] flex items-center justify-center shrink-0 shadow-md font-sans text-base font-bold text-[#15180F]">
        Q
      </div>
    );
  };

  return (
    <section id="creations" className="py-24 bg-[#15180F] border-t border-[rgba(245,240,229,0.08)]">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-16">
          <span className="text-[11px] font-mono tracking-[0.2em] text-[#D99A19] uppercase block mb-2 font-semibold">
            SELECTED CREATIONS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F0E5] mb-4">
            Engineered products & platforms
          </h2>
          <p className="font-mono text-xs sm:text-sm text-[#AAA595] leading-relaxed max-w-xl">
            Detailed case studies of software systems designed, engineered, and shipped to solve verifiable real-world challenges.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="space-y-12">
          {PROJECTS.map((proj, idx) => (
            <article
              key={proj.id}
              className="p-6 sm:p-10 rounded-xl bg-[#1B1F14]/80 border border-[rgba(245,240,229,0.09)] hover:border-[#D99A19]/40 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left: Project Header & Identity */}
                <div className="lg:col-span-4 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[rgba(245,240,229,0.08)] pb-6 lg:pb-0 lg:pr-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      {getProjectBadge(proj.id)}
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[#D99A19]">
                            0{idx + 1}
                          </span>
                          <span className="text-[10px] text-[#AAA595]">•</span>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[#69733D]">
                            {proj.category}
                          </span>
                        </div>
                        <h3 className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-[#F5F0E5]">
                          {proj.title}
                        </h3>
                      </div>
                    </div>

                    <p className="font-sans text-xs sm:text-sm text-[#AAA595] leading-relaxed mb-6">
                      {proj.tagline}
                    </p>

                    <div className="text-xs font-mono text-[#F5F0E5] mb-1">
                      Role: <span className="text-[#D99A19]">{proj.role}</span>
                    </div>
                    <div className="text-xs font-mono text-[#AAA595]">
                      Timeline: {proj.period}
                    </div>
                  </div>

                  <div className="pt-6 flex items-center gap-4">
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#F5F0E5] hover:text-[#D99A19] transition-colors"
                    >
                      <span>Live Platform</span>
                      <ExternalLink size={12} className="text-[#D99A19]" />
                    </a>
                    <span className="text-[#AAA595]/40">•</span>
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#AAA595] hover:text-[#F5F0E5] transition-colors"
                    >
                      <GithubIcon size={13} />
                      <span>Repository</span>
                    </a>
                  </div>
                </div>

                {/* Right: Problem, Architecture & Outcomes */}
                <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
                  {/* Detailed Description */}
                  <div className="space-y-4 text-xs sm:text-sm text-[#AAA595] leading-relaxed">
                    <div>
                      <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#F5F0E5] mb-1.5 font-semibold">
                        The Problem
                      </h4>
                      <p className="font-sans">{proj.longDescription[0]}</p>
                    </div>

                    <div>
                      <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#F5F0E5] mb-1.5 font-semibold">
                        What I Built & Contribution
                      </h4>
                      <p className="font-sans">{proj.longDescription[1]}</p>
                    </div>

                    {proj.longDescription[2] && (
                      <div>
                        <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#D99A19] mb-1.5 font-semibold">
                          Verified Outcomes & Reliability
                        </h4>
                        <p className="font-sans text-[#F5F0E5]/90">{proj.longDescription[2]}</p>
                      </div>
                    )}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-4 border-t border-[rgba(245,240,229,0.08)] flex flex-wrap gap-2">
                    {proj.technologies.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded bg-[#15180F] border border-[rgba(245,240,229,0.12)] text-[10px] font-mono text-[#AAA595]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
