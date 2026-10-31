'use client';

import React from 'react';
import { Wifi, Star } from 'lucide-react';
import TiltCard from '@/components/TiltCard';

interface HeroInteractiveCollageProps {
  onCardClick?: () => void;
}

export default function HeroInteractiveCollage({ onCardClick }: HeroInteractiveCollageProps) {
  // True frosted acrylic glass material (removes all dark/brown backgrounds, lets amber vortex shine through)
  const frostedGlassStyle: React.CSSProperties = {
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: '1px solid rgba(255, 255, 255, 0.22)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.3)',
  };

  const miniGlassTileStyle: React.CSSProperties = {
    background: 'rgba(255, 255, 255, 0.06)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.2)',
  };

  return (
    <div className="relative w-full h-full min-h-[580px] lg:min-h-[720px] flex items-center justify-center bg-transparent select-none">
      
      {/* 3D COLLAGE STAGE */}
      <div className="relative z-10 w-full max-w-[560px] sm:max-w-[640px] lg:max-w-[720px] px-2 py-6 flex items-center justify-center">

        {/* CENTRAL SUBJECT: SLEEK MATTE-BLACK VERTICAL NFC SMART CARD WITH REALISTIC 3D PERSPECTIVE */}
        <TiltCard maxTilt={6} className="relative z-10">
          <div
            onClick={onCardClick}
            className="w-[270px] sm:w-[310px] lg:w-[340px] aspect-[1/1.586] rounded-2xl relative flex flex-col justify-between cursor-pointer group transition-all duration-300 hover:scale-[1.02] overflow-hidden"
            style={{
              background: 'linear-gradient(155deg, #181C26 0%, #0E1119 50%, #080A0F 100%)',
              border: '1px solid rgba(255, 255, 255, 0.14)',
              boxShadow: '0 30px 60px -10px rgba(0, 0, 0, 0.9), 0 0 35px rgba(255, 107, 0, 0.25)',
              transform: 'perspective(1000px) rotate(-8deg) rotateY(16deg) rotateX(8deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Top Chevron Architectural Accent Plate */}
            <div
              className="absolute top-0 left-0 right-0 h-[62%] pointer-events-none"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 80%, rgba(0,0,0,0.4) 100%)',
                clipPath: 'polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%)',
                borderBottom: '1px solid rgba(255,255,255,0.15)',
              }}
            ></div>

            {/* Top Row: Wireless Waves (Top Right) */}
            <div className="p-6 flex justify-end items-start relative z-10">
              <div className="text-amber-400/80 group-hover:text-amber-300 transition-colors">
                <Wifi className="w-6 h-6 rotate-45 drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
              </div>
            </div>

            {/* Center Area: Glowing Orange Sunset/Arch Emblem & LONGVIEW Wordmark */}
            <div className="my-auto flex flex-col items-center justify-center text-center relative z-10 px-4">
              <div className="w-18 h-18 sm:w-22 sm:h-22 mb-2 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <svg className="w-full h-full drop-shadow-[0_0_20px_rgba(255,87,34,0.95)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Glowing Sunset Semi-Circle */}
                  <path d="M26 42 A 24 24 0 0 1 74 42 Z" fill="#FF5722" />
                  {/* White / Glowing Orange Architectural Arch */}
                  <line x1="14" y1="44" x2="86" y2="44" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
                  <line x1="48" y1="46" x2="24" y2="82" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
                  <line x1="52" y1="46" x2="76" y2="82" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
                  <line x1="32" y1="67" x2="68" y2="67" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>

              <span className="font-bebas text-3xl sm:text-4xl tracking-[0.25em] text-[#FF6B35] drop-shadow-[0_0_16px_rgba(255,107,53,0.9)] leading-none">
                LONGVIEW
              </span>
            </div>

            {/* Bottom Row: Wireless Waves (Bottom Right) */}
            <div className="p-6 flex justify-end items-end relative z-10">
              <div className="text-amber-400/80 group-hover:text-amber-300 transition-colors">
                <Wifi className="w-5 h-5 rotate-45 drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
              </div>
            </div>
          </div>
        </TiltCard>

        {/* ======================================================== */}
        {/* 2. GOOGLE VERIFIED WIDGET (TOP LEFT): TWO STACKED PLAQUES */}
        {/* ======================================================== */}
        <div className="absolute -top-6 left-0 sm:-left-4 lg:-left-8 z-30 flex flex-col gap-2 pointer-events-auto transition-transform duration-300 hover:scale-105">
          {/* Top Pill Plaque: "Google Verified" with soft white glow */}
          <div
            className="rounded-full px-4 py-1.5 flex items-center justify-center self-start"
            style={frostedGlassStyle}
          >
            <span
              className="text-xs font-mono font-bold tracking-wide text-white"
              style={{
                textShadow: '0 0 8px rgba(255, 255, 255, 0.6)',
              }}
            >
              Google Verified
            </span>
          </div>

          {/* Bottom Plaque: 5 Golden 3D Stars + "+145 New Reviews" */}
          <div
            className="rounded-2xl px-5 py-3.5 flex flex-col gap-1.5"
            style={frostedGlassStyle}
          >
            {/* 5 Bright Golden 3D Stars (★★★★★) */}
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4"
                  style={{
                    fill: '#ffc107',
                    color: '#ffc107',
                    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5)) drop-shadow(0 0 8px rgba(255, 193, 7, 0.9))',
                  }}
                />
              ))}
            </div>

            {/* Clean White Reviews Label */}
            <div className="text-xs sm:text-[13px] font-mono font-bold text-white tracking-wider">
              +145 New Reviews
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 3. META CARD (BOTTOM LEFT): SCALED UP FOR BALANCE        */}
        {/* ======================================================== */}
        <div
          className="absolute -bottom-10 -left-6 sm:-left-10 lg:-left-16 z-30 rounded-2xl p-6 sm:p-7 shadow-2xl transition-transform duration-300 hover:scale-105 pointer-events-auto w-[285px] sm:w-[325px]"
          style={frostedGlassStyle}
        >
          {/* Header: Enriched w-8 h-8 Logo + text-base Meta + text-xs ROI */}
          <div className="flex items-center justify-between gap-3 mb-3.5">
            <div className="flex items-center">
              {/* Enlarge Meta logo image to w-8 h-8 */}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg"
                alt="Meta"
                className="w-8 h-8 object-contain inline-block mr-2 shrink-0 drop-shadow-[0_0_8px_rgba(0,129,251,0.5)]"
              />
              <span className="text-base font-bold text-white tracking-wide">Meta</span>
            </div>
            
            {/* Luminous +340% ROI Pill (text-xs font-bold) */}
            <span
              className="text-xs font-mono font-bold px-3 py-1 rounded-full shadow-[0_0_14px_rgba(245,158,11,0.5)]"
              style={{
                background: 'rgba(245, 158, 11, 0.22)',
                border: '1px solid rgba(245, 158, 11, 0.55)',
                color: '#ffffff',
              }}
            >
              <span style={{ color: '#fbbf24', marginRight: '4px' }}>+340%</span>ROI
            </span>
          </div>

          {/* Area Graph: Scaled height (h-20) for bold, clear curve */}
          <div className="relative w-full h-20 mb-3.5">
            {/* Background Axis Labels */}
            <div className="absolute top-0 left-0 bottom-4 flex flex-col justify-between text-[9px] font-mono text-slate-400 select-none pointer-events-none">
              <span>40M</span>
              <span>30M</span>
              <span>20M</span>
            </div>

            <div className="w-full h-full pl-7">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 120 45">
                <defs>
                  <linearGradient id="metaAreaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.02" />
                  </linearGradient>
                </defs>
                {/* Area Gradient Fill */}
                <path
                  d="M 0 40 Q 25 36 45 25 T 85 16 T 120 5 L 120 45 L 0 45 Z"
                  fill="url(#metaAreaGrad)"
                />
                {/* Glowing Amber Stroke */}
                <path
                  d="M 0 40 Q 25 36 45 25 T 85 16 T 120 5"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="3"
                  style={{
                    filter: 'drop-shadow(0 0 10px rgba(245, 158, 11, 0.95))',
                  }}
                />
                {/* Peak Node Point */}
                <circle cx="120" cy="5" r="4" fill="#FFF" style={{ filter: 'drop-shadow(0 0 8px #FFF)' }} />
              </svg>
            </div>

            {/* X-axis months */}
            <div className="w-full pl-7 flex justify-between text-[9px] font-mono text-slate-400 select-none mt-0.5">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
            </div>
          </div>

          {/* Footer: "ACTIVE CAMPAIGNS" label above two mini progress-bar pills */}
          <div className="text-[10px] font-mono uppercase tracking-widest mb-2.5 font-bold text-slate-300">
            ACTIVE CAMPAIGNS
          </div>

          <div className="grid grid-cols-2 gap-2.5 text-[11px] font-mono">
            {/* Impressions Pill with Orange Level Bar */}
            <div
              className="rounded-xl px-3 py-2 flex flex-col justify-center"
              style={miniGlassTileStyle}
            >
              <span className="text-white font-medium block text-[11px] mb-1.5">Impressions</span>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full shadow-[0_0_8px_#f59e0b]"
                  style={{ width: '78%', background: 'linear-gradient(90deg, #ff7a00, #f59e0b)' }}
                ></div>
              </div>
            </div>

            {/* Reactivity Pill with Orange Level Bar */}
            <div
              className="rounded-xl px-3 py-2 flex flex-col justify-center"
              style={miniGlassTileStyle}
            >
              <span className="text-slate-200 font-medium block text-[11px] mb-1.5">Reactivity</span>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full shadow-[0_0_8px_#f59e0b]"
                  style={{ width: '52%', background: 'linear-gradient(90deg, #ff7a00, #f59e0b)' }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 4. GOOGLE ADS CARD (TALL RIGHT PANEL): SCALED UP         */}
        {/* ======================================================== */}
        <div
          className="absolute -top-2 -right-4 sm:-right-8 lg:-right-12 xl:-right-14 z-30 rounded-2xl p-6 sm:p-7 shadow-2xl transition-transform duration-300 hover:scale-105 pointer-events-auto w-[260px] sm:w-[295px]"
          style={frostedGlassStyle}
        >
          {/* Header: Enlarge Google Ads logo to w-7 h-7 + text-base Google Ads */}
          <div className="flex items-center mb-3.5">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg"
              alt="Google Ads"
              className="w-7 h-7 object-contain inline-block mr-2 shrink-0 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
            />
            <span className="text-base font-bold text-white tracking-wide">
              Google Ads
            </span>
          </div>

          {/* Top section: "Search" and "Click" metrics with amber multi-wave chart */}
          <div className="flex justify-between items-center text-xs font-mono mb-1.5 font-semibold">
            <span className="text-white">Search</span>
            <span className="text-amber-400 font-bold drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]">Click</span>
          </div>

          <div className="relative w-full h-16 mb-4">
            {/* Axis marks */}
            <div className="absolute top-0 left-0 bottom-2 flex flex-col justify-between text-[8px] font-mono text-slate-400 select-none">
              <span>2000</span>
              <span>1000</span>
              <span>0</span>
            </div>

            <div className="w-full h-full pl-6">
              <svg className="w-full h-full" viewBox="0 0 100 32">
                <defs>
                  <linearGradient id="adsWaveGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                {/* Amber Multi-Wave Area */}
                <path
                  d="M 0 25 Q 25 7 50 19 T 100 9 L 100 32 L 0 32 Z"
                  fill="url(#adsWaveGrad)"
                />
                {/* Amber Primary Curve */}
                <path
                  d="M 0 25 Q 25 7 50 19 T 100 9"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="2.8"
                  style={{ filter: 'drop-shadow(0 0 10px rgba(245, 158, 11, 0.95))' }}
                />
                {/* Secondary Wave Curve */}
                <path
                  d="M 0 29 Q 30 19 60 23 T 100 15"
                  fill="none"
                  stroke="#93c5fd"
                  strokeWidth="1.8"
                  opacity="0.85"
                />
              </svg>
            </div>
          </div>

          {/* Middle section: Two prominent side-by-side glass metric tiles */}
          <div className="grid grid-cols-2 gap-2.5 mb-4 font-mono">
            {/* Left tile: "5.0" (text-xl sm:text-2xl font-extrabold white) / "RATING" */}
            <div
              className="rounded-xl p-3 text-center flex flex-col justify-center"
              style={miniGlassTileStyle}
            >
              <span className="text-[11px] text-amber-300 font-bold block mb-1">★★★★★</span>
              <span className="text-xl sm:text-2xl font-extrabold text-white block leading-tight">5.0</span>
              <span className="text-[9px] text-slate-300 font-semibold tracking-wider block mt-1">RATING</span>
            </div>

            {/* Right tile: "4.8x" (text-xl sm:text-2xl font-extrabold amber) / "ROAS" */}
            <div
              className="rounded-xl p-3 text-center flex flex-col justify-center"
              style={miniGlassTileStyle}
            >
              <span className="text-[9px] text-slate-300 font-semibold tracking-wider block mb-1">ROAS</span>
              <span className="text-xl sm:text-2xl font-extrabold text-amber-400 block leading-tight drop-shadow-[0_0_12px_rgba(251,191,36,0.9)]">4.8x</span>
            </div>
          </div>

          {/* Bottom section: "CAMPAIGN ANALYTICS" with "4.8x" badge, upward trend line, and 6-column amber vertical bar chart */}
          <div className="pt-3 border-t border-white/15">
            <div className="flex justify-between items-center text-[10px] font-mono mb-2 font-bold">
              <span className="text-white">CAMPAIGN ANALYTICS</span>
              <span className="text-amber-400 bg-amber-500/20 border border-amber-500/40 px-2 py-0.5 rounded-full text-[10px] drop-shadow-[0_0_8px_rgba(251,191,36,0.75)]">
                4.8x
              </span>
            </div>

            {/* Upward trend line */}
            <div className="w-full h-5 mb-1.5">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 100 16">
                <path
                  d="M 0 14 Q 30 12 60 7 T 100 2"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="2.2"
                  style={{ filter: 'drop-shadow(0 0 8px rgba(245, 158, 11, 0.85))' }}
                />
                <circle cx="100" cy="2" r="3" fill="#FFF" style={{ filter: 'drop-shadow(0 0 8px #FFF)' }} />
              </svg>
            </div>

            {/* 6-Column Amber Vertical Bar Chart (enlarged h-12 with clear spacing) */}
            <div className="flex items-end gap-2 h-12">
              <div
                className="flex-1 rounded-t h-[35%]"
                style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.15) 100%)' }}
              ></div>
              <div
                className="flex-1 rounded-t h-[50%]"
                style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.25) 100%)' }}
              ></div>
              <div
                className="flex-1 rounded-t h-[45%]"
                style={{ background: 'linear-gradient(180deg, #f59e0b 0%, #d97706 100%)' }}
              ></div>
              <div
                className="flex-1 rounded-t h-[70%]"
                style={{
                  background: 'linear-gradient(180deg, #fbbf24 0%, #f59e0b 100%)',
                  boxShadow: '0 0 10px rgba(245, 158, 11, 0.5)',
                }}
              ></div>
              <div
                className="flex-1 rounded-t h-[85%]"
                style={{
                  background: 'linear-gradient(180deg, #ff9e42 0%, #ff5722 100%)',
                  boxShadow: '0 0 14px rgba(255, 122, 0, 0.7)',
                }}
              ></div>
              <div
                className="flex-1 rounded-t h-[100%]"
                style={{
                  background: 'linear-gradient(180deg, #fbbf24 0%, #ff6b00 100%)',
                  boxShadow: '0 0 18px rgba(251, 191, 36, 1)',
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* FINE PAGINATION: 01 // 03                               */}
        {/* ======================================================== */}
        <div className="absolute -right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-1 text-[11px] font-mono text-slate-500 tracking-widest pl-4">
          <span className="text-amber-400 font-bold">01</span>
          <span>//</span>
          <span>03</span>
        </div>

      </div>

    </div>
  );
}