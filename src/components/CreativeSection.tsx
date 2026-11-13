import { useState } from 'react';
import { Play, Pause, Volume2, Mic2 } from 'lucide-react';
import { MUSIC_TRACKS, AUDIO_GEAR } from '../data/portfolioData';
import type { MusicTrack } from '../types/portfolio';

export const CreativeSection: React.FC = () => {
  const [currentTrack, setCurrentTrack] = useState<MusicTrack>(MUSIC_TRACKS[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const togglePlayback = (track: MusicTrack) => {
    if (currentTrack.id === track.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
    }
  };

  return (
    <section id="beyond-code" className="py-24 bg-[#15180F] border-t border-[rgba(245,240,229,0.08)]">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-16">
          <span className="text-[11px] font-mono tracking-[0.2em] text-[#D99A19] uppercase block mb-2 font-semibold">
            BEYOND CODE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F0E5] mb-4">
            Music & Audio Production
          </h2>
          <p className="font-mono text-xs sm:text-sm text-[#AAA595] leading-relaxed max-w-xl">
            Exploring vocal arrangements, acoustic fingerstyle guitar, and multitrack audio engineering in Steinberg Cubase Pro.
          </p>
        </div>

        {/* Selected Audio Productions Showcase */}
        <div className="p-6 sm:p-10 rounded-xl bg-[#1B1F14]/80 border border-[rgba(245,240,229,0.08)] mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Track Details */}
            <div className="lg:col-span-5 space-y-4 text-left">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#D99A19] block font-medium">
                {currentTrack.type} · {currentTrack.genre}
              </span>
              <h3 className="font-sans text-2xl font-bold text-[#F5F0E5]">
                {currentTrack.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#AAA595] leading-relaxed">
                {currentTrack.subtitle}
              </p>
              <p className="font-sans text-xs text-[#AAA595]/85 leading-relaxed pt-2">
                {currentTrack.description}
              </p>

              <div className="pt-3 flex flex-wrap gap-1.5">
                {currentTrack.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded bg-[#15180F] border border-[rgba(245,240,229,0.1)] text-[10px] font-mono text-[#AAA595]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Waveform Preview & Track Switching */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              {/* Waveform Player */}
              <div className="p-4 rounded-lg bg-[#15180F] border border-[rgba(245,240,229,0.08)] space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#AAA595]">
                  <span>DAW: {currentTrack.daw}</span>
                  <span className="text-[#D99A19]">{currentTrack.duration}</span>
                </div>

                {/* Waveform Visualization */}
                <div
                  className="flex items-end justify-between h-14 px-1 gap-1 cursor-pointer"
                  onClick={() => setIsPlaying(!isPlaying)}
                  title="Click to toggle preview playback"
                >
                  {currentTrack.waveformPoints.map((pt, idx) => {
                    const isMid = idx < currentTrack.waveformPoints.length * 0.45;
                    return (
                      <div
                        key={idx}
                        className={`flex-1 rounded-sm transition-all duration-150 ${
                          isMid
                            ? 'bg-[#D99A19]'
                            : 'bg-[rgba(245,240,229,0.15)]'
                        }`}
                        style={{ height: `${Math.max(12, pt)}%` }}
                      />
                    );
                  })}
                </div>

                {/* Player Bar */}
                <div className="flex items-center justify-between pt-1">
                  <button
                    onClick={() => togglePlayback(currentTrack)}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-[rgba(245,240,229,0.1)] hover:bg-[#D99A19] hover:text-[#15180F] text-xs font-mono text-[#F5F0E5] transition-all cursor-pointer border-0"
                  >
                    {isPlaying ? <Pause size={12} /> : <Play size={12} />}
                    <span>{isPlaying ? 'Pause' : 'Play Track'}</span>
                  </button>

                  <div className="flex items-center gap-2 text-xs font-mono text-[#AAA595]">
                    <Volume2 size={13} />
                    <span>24-bit / 48kHz WAV</span>
                  </div>
                </div>
              </div>

              {/* Track Playlist Selector */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#AAA595] block text-left">
                  Production Catalog
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {MUSIC_TRACKS.map((trk) => {
                    const isSelected = trk.id === currentTrack.id;
                    return (
                      <button
                        key={trk.id}
                        onClick={() => {
                          setCurrentTrack(trk);
                          setIsPlaying(true);
                        }}
                        className={`p-3 rounded text-left transition-all cursor-pointer border ${
                          isSelected
                            ? 'bg-[#15180F] border-[#D99A19]'
                            : 'bg-[#1B1F14]/60 border-[rgba(245,240,229,0.06)] hover:border-[rgba(245,240,229,0.2)]'
                        }`}
                      >
                        <span className="text-[10px] font-mono text-[#D99A19] block mb-0.5">
                          {trk.duration}
                        </span>
                        <span className="text-xs font-sans font-semibold text-[#F5F0E5] block truncate">
                          {trk.title}
                        </span>
                        <span className="text-[10px] text-[#AAA595] block truncate">
                          {trk.genre}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Equipment Specification */}
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-[rgba(245,240,229,0.08)] mb-6 text-left">
            <h3 className="font-sans text-base sm:text-lg font-bold text-[#F5F0E5] flex items-center gap-2">
              <Mic2 size={15} className="text-[#D99A19]" />
              <span>Studio Hardware & Signal Chain</span>
            </h3>
            <span className="text-xs font-mono text-[#AAA595]">
              Acoustic monitoring & capture
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {AUDIO_GEAR.map((gear) => (
              <div
                key={gear.name}
                className="p-4 rounded-lg bg-[#1B1F14]/60 border border-[rgba(245,240,229,0.07)]"
              >
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#69733D] block mb-1">
                  {gear.category}
                </span>
                <h4 className="font-sans text-sm font-semibold text-[#F5F0E5] mb-1">
                  {gear.name}
                </h4>
                <p className="text-xs font-sans text-[#AAA595] leading-relaxed">
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
