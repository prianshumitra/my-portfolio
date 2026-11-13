// HeroWorkspace.tsx – rebuilt from scratch to match the reference design
import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export const HeroWorkspace: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;

  const handlePrev = () => setCurrentPage((p) => (p > 1 ? p - 1 : totalPages));
  const handleNext = () => setCurrentPage((p) => (p < totalPages ? p + 1 : 1));

  return (
    <section
      id="home"
      className="relative w-full h-screen bg-[#F0E8D8] text-[#171710] overflow-hidden"
    >
      {/* Background split – left ivory, right dark with curved transition */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Dark olive polygon – begins at top right between Contact & Résumé and swoops down */}
        <svg viewBox="0 0 1648 928" className="w-full h-full hidden lg:block" preserveAspectRatio="none">
          <path
            d="M 1320 0 C 1260 50, 1190 120, 1140 200 C 1090 280, 1060 380, 1040 500 C 1020 620, 1020 740, 1020 928 L 1648 928 L 1648 0 Z"
            fill="#15180F"
          />
        </svg>
        {/* Mobile fallback – simple split */}
        <div className="md:hidden absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-[55%] bg-[#F0E8D8]" />
          <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-[#15180F]" />
        </div>
      </div>

      {/* Signature Ivory Wave – swoops in front of the bottom of the workspace arch ONLY on the right */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none z-20 hidden lg:block">
        <svg viewBox="0 0 1648 240" className="w-full h-[180px] xl:h-[210px]" preserveAspectRatio="none">
          <path
            d="M 680 240 C 850 240, 1020 180, 1180 130 C 1340 85, 1480 60, 1648 55 L 1648 240 Z"
            fill="#F0E8D8"
          />
        </svg>
      </div>

      {/* BOTTOM-LEFT SKYLINE WITH DARK GREEN BACKDROP & ARCHITECTURAL LINE – top-level z-30, completely uncut */}
      <div className="absolute bottom-0 left-0 z-30 pointer-events-none select-none flex items-end">
        {/* Dark moss-green quarter-circle anchored at bottom-left corner behind skyline */}
        <svg
          viewBox="0 0 100 100"
          className="absolute left-0 bottom-0 w-[130px] sm:w-[155px] lg:w-[180px] xl:w-[200px] h-[130px] sm:h-[155px] lg:h-[180px] xl:h-[200px] pointer-events-none z-0"
        >
          <path d="M 0 0 A 100 100 0 0 1 100 100 L 0 100 Z" fill="#242B1E" opacity="0.15" />
        </svg>

        {/* Delicate architectural vertical guide line with crosshair */}
        <div className="hidden sm:block absolute left-8 lg:left-12 bottom-0 h-[460px] w-px bg-[#39382F]/20 pointer-events-none z-0">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 flex items-center justify-center">
            <div className="w-3.5 h-px bg-[#39382F]/40" />
            <div className="h-3.5 w-px bg-[#39382F]/40 absolute" />
          </div>
        </div>

        {/* Kolkata skyline illustration – scaled down slightly for better balance */}
        <img
          src="/assets/kolkata_skyline_sun.png"
          alt="Kolkata skyline"
          className="relative z-10 w-[420px] sm:w-[500px] lg:w-[580px] xl:w-[660px] max-w-[70vw] max-h-[170px] sm:max-h-[200px] lg:max-h-[230px] h-auto object-contain object-left-bottom opacity-100"
          style={{ filter: 'drop-shadow(0 12px 20px rgba(23, 23, 16, 0.22))' }}
        />
      </div>

      {/* Main flex container */}
      <div className="relative z-10 flex h-full flex-col lg:flex-row">
        {/* LEFT HERO CONTENT */}
        <div className="flex w-full lg:w-[48%] flex-col justify-start pl-10 sm:pl-16 lg:pl-28 xl:pl-36 pr-6 lg:pr-8 pt-24 sm:pt-28 lg:pt-32 z-20">
          <div className="max-w-[520px] text-left space-y-6 sm:space-y-7">
            {/* Eyebrow */}
            <div className="font-mono text-xs sm:text-[13px] tracking-[0.24em] uppercase text-[#5F5B50]">
              ENGINEER&nbsp;&nbsp;|&nbsp;&nbsp;FOUNDER&nbsp;&nbsp;|&nbsp;&nbsp;MUSICIAN
            </div>
            {/* Heading – slightly enlarged */}
            <h1 className="font-serif text-[5.2rem] sm:text-[6.2rem] lg:text-[6.8rem] xl:text-[7.4rem] leading-[0.88] tracking-[-0.03em] text-[#171710]">
              Prianshu<br />Mitra
            </h1>
            {/* Ochre underline */}
            <div className="w-28 h-[5.5px] bg-[#D99A19] rounded" />
            {/* Description – slightly enlarged */}
            <p className="font-mono text-[1.05rem] sm:text-[1.12rem] italic text-[#39382F] leading-[1.72] max-w-[420px]">
              I build digital products at the intersection
              <br className="hidden sm:inline" /> of technology and creativity.
            </p>
            {/* CTA – slightly enlarged */}
            <div className="pt-1">
              <a href="#creations" className="inline-flex items-center gap-2.5 bg-[#15180F] text-[#EEE8D9] px-7 py-3.5 rounded-[4px] hover:bg-[#22251A] transition-all text-[15px] font-sans font-bold shadow-md hover:shadow-lg">
                <span>Explore Work</span>
                <ArrowUpRight size={17} className="text-[#D99A19]" />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT ARCH CONTENT */}
        <div className="relative flex w-full lg:w-[54%] items-center justify-center px-4 lg:px-6 pt-6 lg:pt-10 pb-6 lg:pb-8">
          {/* Arch container – adjusted position */}
          <div className="relative w-full max-w-[540px] lg:max-w-[600px] xl:max-w-[640px] ml-auto mr-4 lg:mr-8 xl:mr-10 translate-x-[30px] translate-y-[15px]">
            {/* Concentric Guide line – balanced moderate distance from frame */}
            <svg viewBox="0 0 710 720" className="absolute -top-8 -left-10 w-[calc(100%+72px)] h-[calc(100%+46px)] pointer-events-none z-10" fill="none">
              <path
                d="M 24 720 L 24 360 C 24 135, 160 16, 355 16 C 450 16, 535 48, 600 95"
                stroke="rgba(57, 56, 47, 0.26)"
                strokeWidth="1.5"
              />
            </svg>

            {/* Arch frame with Cozy Creative Studio by Night image – elongated vertically */}
            <div
              className="workspace-arch-frame shadow-2xl relative z-0 overflow-hidden"
              style={{
                aspectRatio: '0.93 / 1',
                borderTopLeftRadius: '9999px',
                borderTopRightRadius: '9999px',
                border: '1.5px solid rgba(238, 232, 217, 0.35)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(23, 23, 16, 0.2)'
              }}
            >
              <img
                src="/assets/Cozy%20Creative%20Studio%20by%20Night.png"
                alt="Cozy Creative Studio by Night"
                className="w-full h-full object-cover"
                style={{ objectPosition: '68% 30%' }}
              />
            </div>

            {/* Right vertical architectural guideline with corner crosshair */}
            <div className="hidden sm:block absolute -right-4 lg:-right-6 top-10 bottom-0 w-px bg-[rgba(238,232,217,0.15)] pointer-events-none">
              {/* Corner Crosshair */}
              <div className="absolute bottom-6 -right-[5px] w-3 h-3 flex items-center justify-center">
                <div className="w-3 h-px bg-[rgba(238,232,217,0.35)]" />
                <div className="h-3 w-px bg-[rgba(238,232,217,0.35)] absolute" />
              </div>
            </div>
          </div>
          {/* Pagination – sits on ivory wave */}
          <div className="flex items-center gap-4 pt-5 pr-6 lg:pr-14 xl:pr-20 absolute bottom-4 lg:bottom-6 right-0 z-30">
            <div className="w-24 h-px bg-[#39382F]/30" />
            <div className="flex items-center gap-1.5 font-mono text-sm font-bold text-[#171710]">
              <span>{`0${currentPage}`}</span>
              <span className="text-[#D99A19] font-bold">/</span>
              <span className="text-[#5F5B50]">0{totalPages}</span>
            </div>
            <button onClick={handlePrev} className="p-1 hover:text-[#D99A19] transition-colors" aria-label="Previous slide">
              <svg viewBox="0 0 24 24" width="15" height="15"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
            </button>
            <button onClick={handleNext} className="p-1 hover:text-[#D99A19] transition-colors" aria-label="Next slide">
              <svg viewBox="0 0 24 24" width="15" height="15"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
