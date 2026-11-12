import { useState } from 'react';
import { ExternalLink, Users, MapPin, Layers, CheckCircle2, Cpu } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../types/portfolio';
import { GithubIcon } from './Icons';

export const CreationsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project>(PROJECTS[0]);
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'highlights'>('overview');

  return (
    <section id="creations" className="py-24 relative overflow-hidden bg-transparent">
      <div className="portfolio-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-[#D99A35] uppercase tracking-widest block mb-2">
            Selected Work
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F0E8D8] tracking-tight mb-4">
            Engineered Systems & Products
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#b8b09f] max-w-xl mx-auto leading-relaxed">
            From hyper-local festival navigation serving hundreds of live citizens in Kolkata to scalable rental commerce engines and low-latency assessment platforms.
          </p>
        </div>

        {/* Project Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {PROJECTS.map((proj) => {
            const isSelected = selectedProject.id === proj.id;
            return (
              <button
                key={proj.id}
                onClick={() => {
                  setSelectedProject(proj);
                  setActiveTab('overview');
                }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#D99A35] text-[#090A08] font-bold shadow-lg shadow-[#D99A35]/20'
                    : 'bg-[#141611]/80 text-[#b8b09f] border border-white/10 hover:border-white/20 hover:text-white'
                }`}
              >
                <span>{proj.title}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded ${isSelected ? 'bg-black/20 text-[#090A08]' : 'bg-white/5 text-[#D99A35]'}`}>
                  {proj.category}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Product Showcase Card */}
        <div className="editorial-card rounded-2xl p-6 sm:p-10 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Context, Tabs, Details & Links */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono font-bold text-[#F5B94F]">
                    {selectedProject.role}
                  </span>
                  <span className="text-white/20">•</span>
                  <span className="text-xs font-mono text-[#787266]">
                    {selectedProject.period}
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F0E8D8] tracking-tight mb-2">
                  {selectedProject.title}
                </h3>
                <p className="font-sans text-sm text-[#D99A35] font-medium mb-6">
                  {selectedProject.tagline}
                </p>

                {/* Sub-tab Navigation */}
                <div className="flex items-center gap-2 border-b border-white/10 pb-3 mb-6">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`px-3 py-1.5 rounded-md text-xs font-mono transition-colors cursor-pointer ${
                      activeTab === 'overview'
                        ? 'bg-white/10 text-[#F5B94F] font-bold'
                        : 'text-[#b8b09f] hover:text-white'
                    }`}
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => setActiveTab('architecture')}
                    className={`px-3 py-1.5 rounded-md text-xs font-mono transition-colors cursor-pointer ${
                      activeTab === 'architecture'
                        ? 'bg-white/10 text-[#F5B94F] font-bold'
                        : 'text-[#b8b09f] hover:text-white'
                    }`}
                  >
                    Architecture
                  </button>
                  <button
                    onClick={() => setActiveTab('highlights')}
                    className={`px-3 py-1.5 rounded-md text-xs font-mono transition-colors cursor-pointer ${
                      activeTab === 'highlights'
                        ? 'bg-white/10 text-[#F5B94F] font-bold'
                        : 'text-[#b8b09f] hover:text-white'
                    }`}
                  >
                    Key Highlights
                  </button>
                </div>

                {/* Tab Content Display */}
                {activeTab === 'overview' && (
                  <div className="space-y-3.5 text-xs sm:text-sm text-[#b8b09f] leading-relaxed mb-6 font-sans">
                    {selectedProject.longDescription.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                )}

                {activeTab === 'architecture' && (
                  <div className="space-y-2.5 mb-6">
                    {selectedProject.architecture.map((arch, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-black/40 border border-white/5">
                        <Cpu size={15} className="text-[#D99A35] mt-0.5 shrink-0" />
                        <span className="text-xs font-mono text-[#F0E8D8]">{arch}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'highlights' && (
                  <div className="space-y-2.5 mb-6">
                    {selectedProject.highlights.map((hl, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-black/40 border border-white/5">
                        <CheckCircle2 size={15} className="text-[#526B39] mt-0.5 shrink-0" />
                        <span className="text-xs text-[#F0E8D8] font-sans">{hl}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                  {selectedProject.metrics.map((metric, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-black/30 border border-white/5 flex items-center gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#D99A35]/10 flex items-center justify-center shrink-0">
                        {i === 0 && <Users size={14} className="text-[#F5B94F]" />}
                        {i === 1 && <MapPin size={14} className="text-[#F5B94F]" />}
                        {i === 2 && <Layers size={14} className="text-[#F5B94F]" />}
                      </div>
                      <span className="text-xs font-medium text-[#F0E8D8] leading-snug">
                        {metric}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies & Actions */}
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="spec-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={selectedProject.liveUrl}
                    className="btn-primary-action"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={14} />
                  </a>

                  <a
                    href={selectedProject.githubUrl}
                    className="btn-secondary-action"
                  >
                    <GithubIcon size={14} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Architectural Canvas View */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="relative rounded-xl bg-[#11130e] border border-white/10 p-6 overflow-hidden min-h-[380px] flex flex-col justify-between shadow-2xl">
                {/* Visual Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <span className="ml-2 text-xs font-mono text-[#b8b09f]">
                      {selectedProject.id}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#D99A35] uppercase">
                    Architecture
                  </span>
                </div>

                {/* Architecture Visual Preview */}
                <div className="my-auto py-6">
                  {selectedProject.id === 'debi-dorshon' && (
                    <div className="space-y-4">
                      <div className="p-4 rounded-lg bg-black/50 border border-[#D99A35]/30">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-mono text-[#F5B94F]">Kolkata Pandal Mesh</span>
                          <span className="text-[10px] text-emerald-400 font-mono">100+ Live</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-[#F0E8D8]">
                          <MapPin size={14} className="text-[#D99A35]" />
                          <span>North & South Kolkata Heritage Pandals</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-center">
                        <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                          <div className="text-2xl font-bold font-display text-[#F5B94F]">150+</div>
                          <div className="text-[10px] font-mono text-[#b8b09f]">Mapped Pandals</div>
                        </div>
                        <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                          <div className="text-2xl font-bold font-display text-emerald-400">Offline</div>
                          <div className="text-[10px] font-mono text-[#b8b09f]">Cache First PWA</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedProject.id === 'rentify' && (
                    <div className="space-y-4">
                      <div className="p-4 rounded-lg bg-black/50 border border-[#526B39]/40">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-mono text-[#526B39]">Lifecycle State Machine</span>
                          <span className="text-[10px] text-amber-400 font-mono">Escrow Managed</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-[#F0E8D8]">
                          <Layers size={14} className="text-[#526B39]" />
                          <span>Check-in &rarr; Inspection &rarr; Settlement</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-center">
                        <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                          <div className="text-2xl font-bold font-display text-[#526B39]">Zero</div>
                          <div className="text-[10px] font-mono text-[#b8b09f]">Dispute Margin</div>
                        </div>
                        <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                          <div className="text-2xl font-bold font-display text-[#F5B94F]">Dynamic</div>
                          <div className="text-[10px] font-mono text-[#b8b09f]">Slot Scheduler</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedProject.id === 'quizreto' && (
                    <div className="space-y-4">
                      <div className="p-4 rounded-lg bg-black/50 border border-[#F5B94F]/30">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-mono text-[#F5B94F]">Low-Latency Evaluation</span>
                          <span className="text-[10px] text-emerald-400 font-mono">&lt; 50ms</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-[#F0E8D8]">
                          <Cpu size={14} className="text-[#F5B94F]" />
                          <span>Anti-Tab Proctoring & Shuffled Items</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-center">
                        <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                          <div className="text-2xl font-bold font-display text-[#F5B94F]">&lt; 50ms</div>
                          <div className="text-[10px] font-mono text-[#b8b09f]">Sync Score Latency</div>
                        </div>
                        <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                          <div className="text-2xl font-bold font-display text-emerald-400">Strict</div>
                          <div className="text-[10px] font-mono text-[#b8b09f]">Proctoring Guard</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer status */}
                <div className="flex items-center justify-between pt-3 border-t border-white/10 text-[10px] font-mono text-[#787266]">
                  <span className="text-emerald-400">● Deployed Production</span>
                  <span>Full-Stack Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
