import { useState, useEffect, useRef } from 'react';
import { ArrowDown, FileText, Eye, EyeOff, Sparkles, MapPin, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroWorkspaceProps {
  onOpenResume: () => void;
  lightMode: 'warm' | 'dim' | 'bright';
}

export const HeroWorkspace: React.FC<HeroWorkspaceProps> = ({
  onOpenResume,
  lightMode
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showWorkspaceUI, setShowWorkspaceUI] = useState(true);
  const [clickedItem, setClickedItem] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse coords (-1 to +1)
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const triggerItem = (name: string) => {
    setClickedItem(name);
    setTimeout(() => {
      setClickedItem((prev) => (prev === name ? null : prev));
    }, 4000);
  };

  // 3D rotation angles for realistic physical tilt
  const rotateX = mousePos.y * -4.5;
  const rotateY = mousePos.x * 6;

  // Parallax offsets
  const px = mousePos.x * 12;
  const py = mousePos.y * 8;

  const lightOverlay = {
    warm: 'radial-gradient(ellipse at 80% 65%, rgba(245, 185, 79, 0.22) 0%, transparent 60%), radial-gradient(ellipse at 15% 75%, rgba(255, 220, 160, 0.18) 0%, transparent 55%)',
    dim: 'radial-gradient(ellipse at 50% 50%, rgba(10, 12, 10, 0.6) 0%, rgba(9, 10, 8, 0.9) 100%)',
    bright: 'radial-gradient(ellipse at 50% 40%, rgba(255, 240, 210, 0.16) 0%, transparent 70%)'
  }[lightMode];

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-full h-screen min-h-[700px] max-h-[1100px] overflow-hidden select-none workspace-perspective-stage bg-[#090A08]"
    >
      {/* =========================================================================
          STAGE CONTAINER WITH TRUE CSS 3D TRANSFORM
          ========================================================================= */}
      <div
        className="workspace-3d-scene absolute inset-0 w-full h-full pointer-events-none"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`
        }}
      >
        {/* =====================================================================
            LAYER 0: DEEP CHARCOAL WALLPAPER (background.png)
            translateZ: -80px
            ===================================================================== */}
        <div className="absolute inset-0 w-full h-full layer-bg pointer-events-none">
          <img
            src="/assets/background.png"
            alt="Atmospheric charcoal studio wall"
            className="w-full h-full object-cover object-center"
          />
          {/* Dynamic Light Cones */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-700"
            style={{ background: lightOverlay }}
          />
        </div>

        {/* =====================================================================
            LAYER 1: WALL ELEMENTS (Kolkata Window, Shelves, Tube Light)
            translateZ: -20px
            ===================================================================== */}
        <div className="absolute inset-0 w-full h-full layer-wall-items pointer-events-none">
          {/* Kolkata Night Window (Right Wall) */}
          <div
            onClick={() => triggerItem('window')}
            className="absolute cursor-pointer pointer-events-auto transition-transform duration-300 hover:scale-[1.02] shadow-shelf"
            style={{
              top: '6%',
              right: '4.5%',
              width: '32vw',
              maxWidth: '530px',
              minWidth: '260px'
            }}
            title="Kolkata at Night: Durga Puja Pandal & Howrah Bridge"
          >
            <img
              src="/assets/element_02.png"
              alt="Kolkata night window with Howrah bridge and illuminated Durga Puja pandal"
              className="w-full h-auto object-contain drop-shadow-[0_12px_40px_rgba(0,0,0,0.85)]"
            />
          </div>

          {/* Floating Wall Shelf 1: Waveform Art & Vinyl Record */}
          <div
            onClick={() => triggerItem('vinyl-shelf')}
            className="hidden md:block absolute cursor-pointer pointer-events-auto transition-transform duration-300 hover:scale-[1.03] shadow-shelf"
            style={{
              top: '19%',
              left: '26%',
              width: '18vw',
              maxWidth: '310px'
            }}
            title="Soundwave Plaque & Vinyl Record"
          >
            <img
              src="/assets/element_05.png"
              alt="Wall shelf with waveform framed art and vinyl record"
              className="w-full h-auto object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.75)]"
            />
          </div>

          {/* Floating Wall Shelf 2: Books & Trailing Foliage */}
          <div
            onClick={() => triggerItem('books-shelf')}
            className="hidden md:block absolute cursor-pointer pointer-events-auto transition-transform duration-300 hover:scale-[1.03] shadow-shelf"
            style={{
              top: '18%',
              left: '46%',
              width: '19vw',
              maxWidth: '330px'
            }}
            title="Curated Engineering Books & Trailing Foliage"
          >
            <img
              src="/assets/element_04.png"
              alt="Wall shelf with books and trailing plant"
              className="w-full h-auto object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.75)]"
            />
          </div>

          {/* Warm Horizontal Tube Lamp */}
          <div
            className="hidden lg:block absolute pointer-events-none"
            style={{
              top: '24%',
              left: '66%',
              width: '12vw',
              maxWidth: '210px'
            }}
          >
            <img
              src="/assets/element_06.png"
              alt="Warm horizontal LED tube light"
              className="w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(245,185,79,0.55)]"
            />
          </div>
        </div>

        {/* =====================================================================
            LAYER 2: TALL BOOKSHELF (Far Left)
            translateZ: +30px
            ===================================================================== */}
        <div
          onClick={() => triggerItem('bookshelf')}
          className="absolute layer-bookshelf cursor-pointer pointer-events-auto transition-transform duration-300 hover:scale-[1.02]"
          style={{
            top: '5%',
            left: '1%',
            width: '24vw',
            maxWidth: '380px',
            minWidth: '180px'
          }}
          title="Bookshelf: Books, Durga Idol, 35mm Camera & Glowing Moon Lamp"
        >
          <img
            src="/assets/element_07.png"
            alt="Tall illuminated bookshelf unit"
            className="w-full h-auto object-contain drop-shadow-[0_15px_45px_rgba(0,0,0,0.9)]"
          />
          {/* Subtle Moon Lamp Glow Effect */}
          <div
            className="absolute rounded-full pointer-events-none anim-moon-glow"
            style={{
              bottom: '12%',
              left: '30%',
              width: '42%',
              height: '24%',
              background: 'radial-gradient(circle, rgba(255, 230, 160, 0.45) 0%, transparent 70%)'
            }}
          />
        </div>

        {/* =====================================================================
            LAYER 3: DESK SURFACE & AMBIENT WARMTH
            translateZ: +45px
            ===================================================================== */}
        <div
          className="absolute bottom-0 left-0 w-full h-[22vh] min-h-[140px] layer-desk-surface pointer-events-none"
          style={{
            background: 'linear-gradient(to top, #090A08 0%, #13100c 35%, #1a140f 70%, #221b14 100%)',
            boxShadow: 'inset 0 2px 10px rgba(245, 185, 79, 0.18)'
          }}
        >
          {/* Desk Highlight Line */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#D99A35]/40 to-transparent" />
        </div>

        {/* =====================================================================
            LAYER 4: DESK MIDGROUND GEAR (MONITOR, SPEAKERS, GUITAR, LAMP)
            translateZ: +75px to +90px
            ===================================================================== */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          {/* KRK Studio Monitor Speaker & Headphones (Left Desk) */}
          <div
            onClick={() => triggerItem('audio')}
            className="absolute layer-monitor cursor-pointer pointer-events-auto transition-transform duration-300 hover:scale-[1.04]"
            style={{
              bottom: '12%',
              left: '17%',
              width: '13vw',
              maxWidth: '190px',
              minWidth: '95px'
            }}
            title="Studio Monitor & Reference Headphones"
          >
            <img
              src="/assets/element_11.png"
              alt="Yellow-cone studio monitor speaker and headphones"
              className="w-full h-auto object-contain drop-shadow-[0_14px_30px_rgba(0,0,0,0.9)]"
            />
          </div>

          {/* Amber Globe Bulb Lamp */}
          <div
            onClick={() => triggerItem('edison')}
            className="absolute layer-monitor cursor-pointer pointer-events-auto anim-edison-glow transition-transform duration-300 hover:scale-[1.08]"
            style={{
              bottom: '9%',
              left: '27%',
              width: '7.5vw',
              maxWidth: '115px',
              minWidth: '55px'
            }}
            title="Vintage Amber Filament Globe Lamp"
          >
            <img
              src="/assets/element_13.png"
              alt="Glowing amber filament globe lamp"
              className="w-full h-auto object-contain drop-shadow-[0_0_35px_rgba(245,185,79,0.7)]"
            />
          </div>

          {/* Ultrawide Curved Monitor (Centerpiece Anchor) */}
          <div
            onClick={() => triggerItem('monitor')}
            className="absolute layer-monitor cursor-pointer pointer-events-auto transition-transform duration-300 hover:scale-[1.02]"
            style={{
              bottom: '14%',
              left: '46%',
              transform: 'translateX(-50%)',
              width: '38vw',
              maxWidth: '610px',
              minWidth: '290px'
            }}
            title="Curved Ultrawide Studio Display"
          >
            <img
              src="/assets/element_10.png"
              alt="Curved ultrawide monitor displaying mountain sunrise"
              className="w-full h-auto object-contain drop-shadow-[0_18px_55px_rgba(0,0,0,0.95)]"
            />
          </div>

          {/* Desk Lamp + Boom Arm Microphone + Plant (Right Desk) */}
          <div
            onClick={() => triggerItem('lamp-mic')}
            className="absolute layer-lamp-guitar cursor-pointer pointer-events-auto transition-transform duration-300 hover:scale-[1.03]"
            style={{
              bottom: '13%',
              right: '18%',
              width: '27vw',
              maxWidth: '440px',
              minWidth: '180px'
            }}
            title="Architect Desk Lamp, Condenser Mic & Desk Foliage"
          >
            <img
              src="/assets/element_08.png"
              alt="Desk lamp with boom arm mic and plant"
              className="w-full h-auto object-contain drop-shadow-[0_14px_40px_rgba(0,0,0,0.9)]"
            />
            {/* Downward Radial Light Cone */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                top: '28%',
                left: '12%',
                width: '65%',
                height: '60%',
                background: 'radial-gradient(ellipse at center, rgba(245, 185, 79, 0.28) 0%, transparent 65%)',
                filter: 'blur(10px)'
              }}
            />
          </div>

          {/* Stack of 3 Books on Desk */}
          <div
            onClick={() => triggerItem('books')}
            className="hidden sm:block absolute layer-lamp-guitar cursor-pointer pointer-events-auto transition-transform duration-300 hover:scale-[1.04]"
            style={{
              bottom: '4%',
              right: '17%',
              width: '12vw',
              maxWidth: '190px',
              minWidth: '85px'
            }}
            title="Stack of Hardcover Technical Classics"
          >
            <img
              src="/assets/element_14.png"
              alt="Stack of 3 antique hardcover books"
              className="w-full h-auto object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.85)]"
            />
          </div>

          {/* Acoustic Cutaway Guitar on Stand (Far Right) */}
          <div
            onClick={() => triggerItem('guitar')}
            className="absolute layer-lamp-guitar cursor-pointer pointer-events-auto transition-transform duration-300 hover:scale-[1.03]"
            style={{
              bottom: '2%',
              right: '2%',
              width: '14vw',
              maxWidth: '220px',
              minWidth: '95px'
            }}
            title="Natural Wood Acoustic Guitar on Stand"
          >
            <img
              src="/assets/element_09.png"
              alt="Acoustic guitar on floor stand"
              className="w-full h-auto object-contain drop-shadow-[0_14px_45px_rgba(0,0,0,0.95)]"
            />
          </div>
        </div>

        {/* =====================================================================
            LAYER 5: FOREGROUND DESK EQUIPMENT (LAPTOP, KEYBOARD, MOUSE, MUG, MIDI)
            translateZ: +105px
            ===================================================================== */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          {/* Mini 25-Key MIDI Keyboard Controller (Far-Left Desk) */}
          <div
            onClick={() => triggerItem('midi')}
            className="absolute layer-laptop-kb cursor-pointer pointer-events-auto transition-transform duration-300 hover:scale-[1.04]"
            style={{
              bottom: '2%',
              left: '2%',
              width: '21vw',
              maxWidth: '300px',
              minWidth: '130px'
            }}
            title="25-Key Mini MIDI Keyboard Controller"
          >
            <img
              src="/assets/element_15.png"
              alt="Mini MIDI keyboard controller"
              className="w-full h-auto object-contain drop-shadow-[0_12px_30px_rgba(0,0,0,0.95)]"
            />
          </div>

          {/* Center Setup: Mechanical Keyboard, Mouse, Laptop on Stand, Coffee Mug */}
          <div
            onClick={() => triggerItem('desk-setup')}
            className="absolute layer-laptop-kb cursor-pointer pointer-events-auto transition-transform duration-300 hover:scale-[1.01]"
            style={{
              bottom: '2%',
              left: '49%',
              transform: 'translateX(-50%)',
              width: '45vw',
              maxWidth: '710px',
              minWidth: '320px'
            }}
            title="Mechanical Keyboard, Mouse, Elevated Laptop & Steaming Durga Coffee Mug"
          >
            <div className="relative w-full">
              <img
                src="/assets/element_12.png"
                alt="Keyboard, mouse on mat, laptop on stand, and Durga puja coffee mug"
                className="w-full h-auto object-contain drop-shadow-[0_16px_40px_rgba(0,0,0,0.95)]"
              />
              {/* Steaming Coffee Particles rising from the Durga Mug */}
              <div
                className="absolute pointer-events-none"
                style={{
                  right: '4.8%',
                  bottom: '18%',
                  width: '40px',
                  height: '50px'
                }}
              >
                <div className="steam-wisp steam-wisp-1" />
                <div className="steam-wisp steam-wisp-2" />
                <div className="steam-wisp steam-wisp-3" />
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================================
            LAYER 6: FOREGROUND CEILING VINES (CAMERA FRAME)
            translateZ: +150px
            ===================================================================== */}
        <div className="absolute top-0 left-0 w-full layer-foreground-vines pointer-events-none flex justify-between">
          <div
            style={{
              width: '33vw',
              maxWidth: '540px',
              transform: `translate3d(${px * 0.4}px, ${py * 0.2}px, 0)`
            }}
          >
            <img
              src="/assets/element_01.png"
              alt="Top-left hanging vines"
              className="w-full h-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.85)]"
            />
          </div>
          <div
            className="hidden sm:block"
            style={{
              width: '40vw',
              maxWidth: '680px',
              transform: `translate3d(${px * 0.2}px, ${py * 0.1}px, 0)`
            }}
          >
            <img
              src="/assets/element_03.png"
              alt="Top-center ceiling hanging pothos vines"
              className="w-full h-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.85)]"
            />
          </div>
        </div>
      </div>

      {/* =========================================================================
          INTERACTIVE CONTEXT TOAST (Clean & Minimal)
          ========================================================================= */}
      {clickedItem && (
        <div className="absolute top-24 left-1/2 -translate-x-1/2 z-50 pointer-events-none animate-in fade-in duration-200">
          <div className="px-5 py-2 rounded-full bg-[#11120F]/90 border border-[#D99A35]/50 text-[#F0E8D8] text-xs font-mono shadow-2xl backdrop-blur-xl flex items-center gap-2">
            <Sparkles size={13} className="text-[#F5B94F]" />
            {clickedItem === 'window' && <span>Kolkata, West Bengal · Howrah Bridge & Durga Puja Pandal Lights</span>}
            {clickedItem === 'guitar' && <span>Acoustic Cutaway · Tracking for &apos;Dil Ki Arzoon&apos; & fingerstyle</span>}
            {clickedItem === 'midi' && <span>25-Key MIDI Controller · Synthesizers & basslines in Cubase Pro</span>}
            {clickedItem === 'monitor' && <span>Ultrawide 34&quot; Curved Reference Workspace</span>}
            {clickedItem === 'edison' && <span>Vintage Amber Filament · Studio workspace atmosphere</span>}
            {clickedItem === 'bookshelf' && <span>Library & Moon Lamp · Durga Pratima, 35mm rangefinder & technical classics</span>}
            {clickedItem === 'desk-setup' && <span>Mechanical Workstation & Steaming Durga Coffee Mug</span>}
            {clickedItem === 'audio' && <span>KRK Studio Monitor & Reference Monitoring Headphones</span>}
            {clickedItem === 'lamp-mic' && <span>Condenser Vocal Mic & Articulated Studio Lamp</span>}
            {clickedItem === 'vinyl-shelf' && <span>Waveform Plaque & Vinyl · Music productions</span>}
            {clickedItem === 'books-shelf' && <span>Literature & Pothos Ivy</span>}
            {clickedItem === 'books' && <span>Operating Systems & Algorithm Classics</span>}
          </div>
        </div>
      )}

      {/* =========================================================================
          VIEWPORT FOCUS TOGGLE (Top-Right)
          ========================================================================= */}
      <div className="absolute top-20 right-6 z-40 hidden sm:block">
        <button
          onClick={() => setShowWorkspaceUI(!showWorkspaceUI)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#11120F]/70 border border-white/10 hover:border-[#D99A35] text-xs font-mono text-stone-300 hover:text-white backdrop-blur-md transition-all shadow-md cursor-pointer"
          title={showWorkspaceUI ? "Hide text overlay to explore workspace" : "Show hero intro overlay"}
        >
          {showWorkspaceUI ? <EyeOff size={13} /> : <Eye size={13} />}
          <span>{showWorkspaceUI ? "Workspace View" : "Show Bio"}</span>
        </button>
      </div>

      {/* =========================================================================
          HERO CONTENT LAYER: MODERN, ARCHITECTURAL, LUXURIOUS
          Clean typography with Syne + Plus Jakarta Sans. No cheesy AI styling.
          ========================================================================= */}
      {showWorkspaceUI && (
        <div className="absolute inset-0 pointer-events-none flex flex-col justify-between pt-24 pb-8 px-4 sm:px-8 z-35">
          {/* Main Hero Card (Upper-Center Wall Space) */}
          <div className="w-full max-w-2xl mx-auto text-center pointer-events-auto mt-4 sm:mt-6">
            {/* Greeting Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#141611]/80 border border-white/10 backdrop-blur-md mb-3 text-xs font-mono text-[#D99A35]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5B94F] animate-pulse" />
              <span>Hi, I&apos;m</span>
              <span className="text-white/30">•</span>
              <span className="text-[#b8b09f]">Portfolio & Workspace</span>
            </div>

            {/* Name with Modern Syne Architectural Font */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#F0E8D8] tracking-tight mb-2 drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)]">
              {PERSONAL_INFO.name}
            </h1>

            {/* Subtitle Roles */}
            <p className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-[#D99A35] uppercase mb-3 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              {PERSONAL_INFO.title}
            </p>

            {/* Bio Statement */}
            <p className="font-sans text-sm sm:text-base md:text-lg text-[#F0E8D8]/85 max-w-xl mx-auto leading-relaxed mb-6 drop-shadow-[0_2px_15px_rgba(0,0,0,0.95)]">
              {PERSONAL_INFO.tagline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-5">
              <a
                href="#creations"
                className="btn-primary-action group"
              >
                <span>Explore Creations</span>
                <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="btn-secondary-action group"
              >
                <FileText size={14} className="text-[#D99A35]" />
                <span>View Resume</span>
              </button>
            </div>

            {/* Quick Understated Context Bar */}
            <div className="inline-flex flex-wrap items-center justify-center gap-3 px-4 py-1.5 rounded-full bg-[#0e100c]/80 border border-white/5 backdrop-blur-md text-[11px] font-mono text-[#b8b09f]">
              <span className="flex items-center gap-1.5">
                <MapPin size={11} className="text-[#D99A35]" />
                Kolkata & Haldia
              </span>
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-1.5">
                <Award size={11} className="text-[#F5B94F]" />
                9.03 CGPA B.Tech CSE
              </span>
              <span className="text-white/20">•</span>
              <span className="text-[#F5B94F] font-medium">
                Founder @ Debi-Dorshon
              </span>
            </div>
          </div>

          {/* Bottom Scroll Prompt */}
          <div className="w-full flex justify-center pointer-events-auto">
            <a
              href="#creations"
              className="group flex flex-col items-center gap-1 text-[#b8b09f] hover:text-[#F5B94F] transition-colors text-decoration-none"
              title="Scroll to Selected Creations"
            >
              <span className="text-[10px] font-mono tracking-widest uppercase opacity-60 group-hover:opacity-100">
                Explore Studio
              </span>
              <div className="w-4 h-7 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-[#F5B94F] transition-colors">
                <div className="w-1 h-1.5 rounded-full bg-[#F5B94F] animate-bounce" />
              </div>
            </a>
          </div>
        </div>
      )}
    </section>
  );
};
