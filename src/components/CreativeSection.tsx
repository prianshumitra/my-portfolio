import { useState } from 'react';
import { Play, Pause, Disc, Mic2, Radio, Sliders, Volume2 } from 'lucide-react';
import { MUSIC_TRACKS, AUDIO_GEAR } from '../data/portfolioData';
import type { MusicTrack } from '../types/portfolio';

export const CreativeSection: React.FC = () => {
  const [currentTrack, setCurrentTrack] = useState<MusicTrack>(MUSIC_TRACKS[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [trackProgress, setTrackProgress] = useState<number>(35);

  const togglePlayback = (track: MusicTrack) => {
    if (currentTrack.id === track.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
      setTrackProgress(15);
    }
  };

  return (
    <section id="beyond-code" className="py-24 relative overflow-hidden bg-[#090A08]">
      {/* Background warm acoustic lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#D99A35]/6 rounded-full filter blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#526B39]/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="portfolio-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171914] border border-[#D99A35]/30 text-xs font-mono text-[#F5B94F] mb-4">
            <Radio size={13} />
            <span>BEYOND CODE · ACOUSTIC & VOCAL PRODUCTION</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#F0E8D8] tracking-wide mb-4">
            Music, Voice & Soundscapes
          </h2>
          <p className="font-serif italic text-lg sm:text-xl text-[#b8b09f] leading-relaxed">
            Crafting soul-stirring vocal covers, fingerstyle acoustic arrangements, and audio productions inside Steinberg Cubase Pro. Where code meets acoustic frequency.
          </p>
        </div>

        {/* Studio Showcase Container */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-[#D99A35]/20 shadow-2xl mb-16 relative overflow-hidden">
          {/* Subtle Top Warm Amber Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D99A35] to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Interactive Spinning Vinyl & Album Art */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 mb-6">
                {/* Vinyl Record Shadow / Glow */}
                <div className="absolute inset-0 rounded-full bg-[#D99A35]/15 filter blur-xl" />

                {/* Spinning Vinyl Record Body */}
                <div
                  className={`w-full h-full rounded-full bg-gradient-to-tr from-[#161715] via-[#20221c] to-[#121310] border-4 border-[#2c2f25] flex items-center justify-center shadow-2xl relative ${
                    isPlaying ? 'anim-spin-slow' : ''
                  }`}
                  style={{
                    boxShadow: '0 0 40px rgba(0,0,0,0.9), inset 0 0 40px rgba(0,0,0,0.8)'
                  }}
                >
                  {/* Concentric Vinyl Grooves */}
                  <div className="absolute inset-4 rounded-full border border-white/5 pointer-events-none" />
                  <div className="absolute inset-8 rounded-full border border-white/5 pointer-events-none" />
                  <div className="absolute inset-12 rounded-full border border-white/5 pointer-events-none" />
                  <div className="absolute inset-16 rounded-full border border-white/5 pointer-events-none" />
                  <div className="absolute inset-20 rounded-full border border-white/5 pointer-events-none" />

                  {/* Golden Center Label */}
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#D99A35] via-[#b57a22] to-[#8c5a14] border-2 border-[#F5B94F] flex flex-col items-center justify-center p-2 shadow-inner text-center">
                    <span className="font-display font-bold text-[9px] text-[#090A08] uppercase tracking-wider">
                      PRIANSHU
                    </span>
                    <span className="text-[7px] font-mono text-[#090A08]/80 uppercase">
                      STUDIO SESSIONS
                    </span>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#090A08] mt-1 border border-white/40" />
                  </div>
                </div>

                {/* Tonearm Simulation */}
                <div
                  className={`absolute -top-4 -right-2 w-28 h-28 pointer-events-none transition-transform duration-700 origin-top-right ${
                    isPlaying ? 'rotate-12' : '-rotate-6'
                  }`}
                >
                  <div className="w-1.5 h-24 bg-gradient-to-b from-[#787266] to-[#403e38] rounded-full mx-auto shadow-md" />
                  <div className="w-4 h-6 bg-[#D99A35] rounded-sm mx-auto shadow-sm" />
                </div>
              </div>

              {/* Current Track Context */}
              <div className="space-y-1">
                <span className="text-xs font-mono text-[#D99A35] uppercase tracking-widest">
                  Now Playing · {currentTrack.type}
                </span>
                <h3 className="font-display text-2xl font-bold text-[#F0E8D8]">
                  {currentTrack.title}
                </h3>
                <p className="font-serif italic text-sm text-[#b8b09f]">
                  {currentTrack.subtitle}
                </p>
              </div>
            </div>

            {/* Right: Audio Player Controls & DAW Waveform Engine */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              {/* Track Description */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#b8b09f] pb-2 border-b border-white/10">
                  <span className="flex items-center gap-1.5 text-[#F5B94F]">
                    <Sliders size={13} />
                    DAW: {currentTrack.daw}
                  </span>
                  <span>{currentTrack.genre}</span>
                </div>

                <p className="text-sm text-[#b8b09f] leading-relaxed">
                  {currentTrack.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {currentTrack.tags.map((t) => (
                    <span key={t} className="tag-badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dynamic Waveform Visualizer */}
              <div className="p-4 rounded-2xl bg-[#11120F]/90 border border-[#D99A35]/20 space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#b8b09f]">
                  <span>Track Timeline</span>
                  <span className="text-[#F5B94F]">
                    {isPlaying ? '01:24' : '00:00'} / {currentTrack.duration}
                  </span>
                </div>

                {/* Animated Waveform Bars */}
                <div
                  className="flex items-end justify-between h-16 px-2 gap-1 cursor-pointer"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {currentTrack.waveformPoints.map((pt, idx) => {
                    const isPassed = (idx / currentTrack.waveformPoints.length) * 100 <= trackProgress;
                    return (
                      <div
                        key={idx}
                        className={`flex-1 rounded-sm transition-all duration-150 ${
                          isPassed
                            ? 'bg-gradient-to-t from-[#D99A35] to-[#F5B94F]'
                            : 'bg-white/10'
                        } ${isPlaying ? 'audio-bar playing' : ''}`}
                        style={{
                          height: `${Math.max(15, pt)}%`,
                          animationDelay: `${idx * 40}ms`
                        }}
                      />
                    );
                  })}
                </div>

                {/* Player Controls Bar */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => togglePlayback(currentTrack)}
                    className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#D99A35] text-[#090A08] font-bold text-xs font-mono uppercase tracking-wider hover:bg-[#F5B94F] transition-all shadow-md cursor-pointer"
                  >
                    {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                    <span>{isPlaying ? 'Pause Track' : 'Play Session'}</span>
                  </button>

                  <div className="flex items-center gap-2 text-xs font-mono text-[#b8b09f]">
                    <Volume2 size={14} className="text-[#D99A35]" />
                    <span className="hidden sm:inline">Cubase Master 24-bit</span>
                  </div>
                </div>
              </div>

              {/* Track Playlist Selector */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-[#b8b09f] uppercase tracking-wider">
                  Select Production Session:
                </span>
                <div className="space-y-2">
                  {MUSIC_TRACKS.map((t) => {
                    const isSelected = currentTrack.id === t.id;
                    return (
                      <button
                        key={t.id}
                        onClick={() => togglePlayback(t)}
                        className={`w-full flex items-center justify-between p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? 'bg-[#171914] border-[#D99A35] text-[#F0E8D8]'
                            : 'bg-[#11120F]/60 border-white/5 text-[#b8b09f] hover:border-[#D99A35]/40 hover:text-[#F0E8D8]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isSelected ? 'bg-[#D99A35] text-[#090A08]' : 'bg-white/5 text-[#b8b09f]'}`}>
                            {isSelected && isPlaying ? <Disc size={16} className="animate-spin" /> : <Play size={14} />}
                          </div>
                          <div>
                            <div className="text-xs font-bold font-display text-[#F0E8D8]">{t.title}</div>
                            <div className="text-[10px] font-mono text-[#D99A35]">{t.type} · {t.genre}</div>
                          </div>
                        </div>
                        <span className="text-[11px] font-mono text-[#787266]">{t.duration}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Equipment & Setup Grid */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 pb-2 border-b border-white/10">
            <Mic2 size={18} className="text-[#D99A35]" />
            <h3 className="font-display text-xl font-bold text-[#F0E8D8]">
              Home Studio & Audio Engineering Setup
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {AUDIO_GEAR.map((gear) => (
              <div
                key={gear.name}
                className="glass-panel rounded-2xl p-4 border border-white/5 hover:border-[#D99A35]/30 transition-all duration-300 shadow-md"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-display text-sm font-bold text-[#F0E8D8]">
                    {gear.name}
                  </h4>
                  <span className="text-[10px] font-mono text-[#D99A35] px-2 py-0.5 rounded bg-[#D99A35]/10">
                    {gear.category}
                  </span>
                </div>
                <p className="text-xs text-[#b8b09f]">
                  {gear.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
