import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const SoundAmbiance: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);

  const startAmbiance = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.05, ctx.currentTime + 3);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Warm ambient chord: D3 (146.83 Hz), A3 (220 Hz), D4 (293.66 Hz), F#4 (369.99 Hz)
      const frequencies = [146.83, 220.0, 293.66, 369.99];
      const oscs: OscillatorNode[] = [];

      frequencies.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Low-pass warmth
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(450, ctx.currentTime);

        oscGain.gain.setValueAtTime(0.25 / frequencies.length, ctx.currentTime);

        osc.connect(filter);
        filter.connect(oscGain);
        oscGain.connect(masterGain);

        osc.start();
        oscs.push(osc);
      });

      oscillatorsRef.current = oscs;
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const stopAmbiance = () => {
    if (audioCtxRef.current && gainNodeRef.current) {
      const ctx = audioCtxRef.current;
      gainNodeRef.current.gain.setValueAtTime(gainNodeRef.current.gain.value, ctx.currentTime);
      gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);

      setTimeout(() => {
        oscillatorsRef.current.forEach(osc => {
          try { osc.stop(); osc.disconnect(); } catch { /* ignore */ }
        });
        oscillatorsRef.current = [];
        ctx.close();
        audioCtxRef.current = null;
        setIsPlaying(false);
      }, 1200);
    } else {
      setIsPlaying(false);
    }
  };

  const toggleAmbiance = () => {
    if (isPlaying) {
      stopAmbiance();
    } else {
      startAmbiance();
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <button
      onClick={toggleAmbiance}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-300"
      style={{
        background: isPlaying ? 'rgba(217, 154, 53, 0.2)' : 'rgba(23, 25, 20, 0.6)',
        border: isPlaying ? '1px solid #D99A35' : '1px solid rgba(217, 154, 53, 0.2)',
        color: isPlaying ? '#F5B94F' : '#b8b09f'
      }}
      title={isPlaying ? "Mute Studio Ambiance" : "Listen to Studio Ambiance (D Major Ambient)"}
    >
      {isPlaying ? (
        <>
          <Volume2 size={14} className="text-[#F5B94F] animate-pulse" />
          <span className="hidden sm:inline">Studio Ambiance</span>
          <span className="flex gap-0.5 items-end h-3">
            <span className="w-0.5 h-2 bg-[#F5B94F] animate-pulse" />
            <span className="w-0.5 h-3 bg-[#D99A35] animate-pulse delay-75" />
            <span className="w-0.5 h-1.5 bg-[#F5B94F] animate-pulse delay-150" />
          </span>
        </>
      ) : (
        <>
          <VolumeX size={14} />
          <span className="hidden sm:inline">Sound: Off</span>
        </>
      )}
    </button>
  );
};
