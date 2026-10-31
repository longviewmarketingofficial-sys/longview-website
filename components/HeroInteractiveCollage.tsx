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
        {/* 3. META CARD (BOTTOM LEFT): METRICS & LEVEL BAR PILLS    */}
        {/* ======================================================== */}
        <div
          className="absolute -bottom-8 -left-4 sm:-left-8 lg:-left-14 z-30 rounded-2xl p-5 sm:p-6 shadow-2xl transition-transform duration-300 hover:scale-105 pointer-events-auto min-w-[240px] sm:min-w-[275px]"
          style={frostedGlassStyle}
        >
          {/* Header: Official Meta Logo + "Meta" in bold white */}
          <div className="flex items-center justify-between gap-3 mb-3">
            <div className="flex items-center">
              {/* Official Meta Logo */}
              <svg className="w-5 h-5 inline-block mr-1.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M2.5 12C2.5 8.13 5.34 5.5 8.58 5.5c1.9 0 3.32.93 4.42 2.3 1.1-1.37 2.52-2.3 4.42-2.3 3.24 0 6.08 2.63 6.08 6.5 0 4.1-3.08 7.5-6.52 7.5-2.07 0-3.36-.98-3.98-1.78-.62.8-1.91 1.78-3.98 1.78C5.58 19.5 2.5 16.1 2.5 12zm3.17 0c0 2.2 1.48 4.2 3.33 4.2 1.8 0 2.87-1.4 3.4-2.58.53-1.18.9-2.3.9-2.3s-.37-1.12-.9-2.3c-.53-1.18-1.6-2.58-3.4-2.58-1.85 0-3.33 2-3.33 4.26zm12.66 0c0-2.26-1.48-4.26-3.33-4.26-1.8 0-2.87 1.4-3.4 2.58-.53 1.18-.9 2.3-.9 2.3s.37 1.12.9 2.3c.53 1.18 1.6 2.58 3.4 2.58 1.85 0 3.33-2 3.33-4.2z" fill="#0081FB"/>
              </svg>
              <span className="text-sm font-sans font-bold text-white tracking-wide">Meta</span>
            </div>
            
            {/* Luminous +340% ROI Pill */}
            <span
              className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full shadow-[0_0_12px_rgba(245,158,11,0.4)]"
              style={{
                background: 'rgba(245, 158, 11, 0.22)',
                border: '1px solid rgba(245, 158, 11, 0.5)',
                color: '#ffffff',
              }}
            >
              <span style={{ color: '#fbbf24', marginRight: '3px' }}>+340%</span>ROI
            </span>
          </div>

          {/* Area Graph: Amber glowing stroke (#f59e0b) with semi-transparent orange gradient underneath */}
          <div className="relative w-full h-16 mb-3">
            {/* Background Axis Labels */}
            <div className="absolute top-0 left-0 bottom-3 flex flex-col justify-between text-[8px] font-mono text-slate-400 select-none pointer-events-none">
              <span>40M</span>
              <span>30M</span>
              <span>20M</span>
            </div>

            <div className="w-full h-full pl-6">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 120 40">
                <defs>
                  <linearGradient id="metaAreaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.02" />
                  </linearGradient>
                </defs>
                {/* Area Gradient Fill */}
                <path
                  d="M 0 35 Q 25 32 45 22 T 85 14 T 120 4 L 120 40 L 0 40 Z"
                  fill="url(#metaAreaGrad)"
                />
                {/* Glowing Amber Stroke */}
                <path
                  d="M 0 35 Q 25 32 45 22 T 85 14 T 120 4"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="2.5"
                  style={{
                    filter: 'drop-shadow(0 0 8px rgba(245, 158, 11, 0.9))',
                  }}
                />
                {/* Peak Node Point */}
                <circle cx="120" cy="4" r="3.5" fill="#FFF" style={{ filter: 'drop-shadow(0 0 8px #FFF)' }} />
              </svg>
            </div>

            {/* X-axis months */}
            <div className="w-full pl-6 flex justify-between text-[8px] font-mono text-slate-400 select-none">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
            </div>
          </div>

          {/* Footer: "ACTIVE CAMPAIGNS" label above two mini progress-bar pills */}
          <div className="text-[9px] font-mono uppercase tracking-widest mb-2 font-bold text-slate-300">
            ACTIVE CAMPAIGNS
          </div>

          <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
            {/* Impressions Pill with Orange Level Bar */}
            <div
              className="rounded-xl px-2.5 py-1.5 flex flex-col justify-center"
              style={miniGlassTileStyle}
            >
              <span className="text-white font-medium block text-[10px] mb-1">Impressions</span>
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full shadow-[0_0_6px_#f59e0b]"
                  style={{ width: '78%', background: 'linear-gradient(90deg, #ff7a00, #f59e0b)' }}
                ></div>
              </div>
            </div>

            {/* Reactivity Pill with Orange Level Bar */}
            <div
              className="rounded-xl px-2.5 py-1.5 flex flex-col justify-center"
              style={miniGlassTileStyle}
            >
              <span className="text-slate-200 font-medium block text-[10px] mb-1">Reactivity</span>
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full shadow-[0_0_6px_#f59e0b]"
                  style={{ width: '52%', background: 'linear-gradient(90deg, #ff7a00, #f59e0b)' }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 4. GOOGLE ADS CARD (TALL RIGHT PANEL)                    */}
        {/* ======================================================== */}
        <div
          className="absolute top-0 -right-6 sm:-right-10 lg:-right-16 z-30 rounded-2xl p-5 sm:p-6 shadow-2xl transition-transform duration-300 hover:scale-105 pointer-events-auto w-[215px] sm:w-[245px]"
          style={frostedGlassStyle}
        >
          {/* Header: Official Google Ads 3-Color Ribbon Logo + "Google Ads" in bold white */}
          <div className="flex items-center mb-3">
            <svg className="w-5 h-5 inline-block mr-1.5 shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.5 35.5L20.5 7.5C21.3 5.6 23.5 4.6 25.4 5.4C27.3 6.2 28.3 8.4 27.5 10.3L15.5 38.3C14.7 40.2 12.5 41.2 10.6 40.4C8.7 39.6 7.7 37.4 8.5 35.5Z" fill="#4285F4"/>
              <path d="M39.5 35.5L27.5 7.5C26.7 5.6 24.5 4.6 22.6 5.4C20.7 6.2 19.7 8.4 20.5 10.3L32.5 38.3C33.3 40.2 35.5 41.2 37.4 40.4C39.3 39.6 40.3 37.4 39.5 35.5Z" fill="#FBBC04"/>
              <circle cx="12" cy="38" r="5" fill="#34A853"/>
            </svg>
            <span className="text-sm font-sans font-bold text-white tracking-wide">
              Google Ads
            </span>
          </div>

          {/* Top section: "Search" and "Click" metrics with amber multi-wave chart */}
          <div className="flex justify-between items-center text-[10px] font-mono mb-1 font-semibold">
            <span className="text-white">Search</span>
            <span className="text-amber-400 font-bold drop-shadow-[0_0_6px_rgba(245,158,11,0.7)]">Click</span>
          </div>

          <div className="relative w-full h-13 mb-3">
            {/* Axis marks */}
            <div className="absolute top-0 left-0 bottom-2 flex flex-col justify-between text-[7px] font-mono text-slate-400 select-none">
              <span>2000</span>
              <span>1000</span>
              <span>0</span>
            </div>

            <div className="w-full h-full pl-5">
              <svg className="w-full h-full" viewBox="0 0 100 30">
                <defs>
                  <linearGradient id="adsWaveGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                {/* Amber Multi-Wave Area */}
                <path
                  d="M 0 24 Q 25 6 50 18 T 100 8 L 100 30 L 0 30 Z"
                  fill="url(#adsWaveGrad)"
                />
                {/* Amber Primary Curve */}
                <path
                  d="M 0 24 Q 25 6 50 18 T 100 8"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="2.5"
                  style={{ filter: 'drop-shadow(0 0 8px rgba(245, 158, 11, 0.9))' }}
                />
                {/* Secondary Wave Curve */}
                <path
                  d="M 0 28 Q 30 18 60 22 T 100 14"
                  fill="none"
                  stroke="#93c5fd"
                  strokeWidth="1.5"
                  opacity="0.85"
                />
              </svg>
            </div>
          </div>

          {/* Middle section: Two side-by-side glass metric tiles */}
          <div className="grid grid-cols-2 gap-2 mb-3 font-mono">
            {/* Left tile: "5.0" (bold white) / "RATING" (muted white) */}
            <div
              className="rounded-xl p-2.5 text-center flex flex-col justify-center"
              style={miniGlassTileStyle}
            >
              <span className="text-[10px] text-amber-300 font-bold block mb-0.5">★★★★★</span>
              <span className="text-lg font-black text-white block leading-tight">5.0</span>
              <span className="text-[8px] text-slate-300 font-semibold tracking-wider block mt-0.5">RATING</span>
            </div>

            {/* Right tile: "4.8x" (bright amber) / "ROAS" (muted white) */}
            <div
              className="rounded-xl p-2.5 text-center flex flex-col justify-center"
              style={miniGlassTileStyle}
            >
              <span className="text-[8px] text-slate-300 font-semibold tracking-wider block mb-0.5">ROAS</span>
              <span className="text-lg font-black text-[#fbbf24] block leading-tight drop-shadow-[0_0_10px_rgba(251,191,36,0.85)]">4.8x</span>
            </div>
          </div>

          {/* Bottom section: "CAMPAIGN ANALYTICS" with "4.8x" badge, upward trend line, and 6-column amber vertical bar chart */}
          <div className="pt-2.5 border-t border-white/15">
            <div className="flex justify-between items-center text-[9px] font-mono mb-1.5 font-bold">
              <span className="text-white">CAMPAIGN ANALYTICS</span>
              <span className="text-[#fbbf24] bg-amber-500/20 border border-amber-500/40 px-1.5 py-0.5 rounded-full text-[9px] drop-shadow-[0_0_6px_rgba(251,191,36,0.7)]">
                4.8x
              </span>
            </div>

            {/* Upward trend line */}
            <div className="w-full h-4 mb-1">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 100 16">
                <path
                  d="M 0 14 Q 30 12 60 7 T 100 2"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="2"
                  style={{ filter: 'drop-shadow(0 0 6px rgba(245, 158, 11, 0.8))' }}
                />
                <circle cx="100" cy="2" r="2.5" fill="#FFF" style={{ filter: 'drop-shadow(0 0 6px #FFF)' }} />
              </svg>
            </div>

            {/* 6-Column Amber Vertical Bar Chart */}
            <div className="flex items-end gap-1.5 h-9">
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
                  boxShadow: '0 0 8px rgba(245, 158, 11, 0.45)',
                }}
              ></div>
              <div
                className="flex-1 rounded-t h-[85%]"
                style={{
                  background: 'linear-gradient(180deg, #ff9e42 0%, #ff5722 100%)',
                  boxShadow: '0 0 12px rgba(255, 122, 0, 0.65)',
                }}
              ></div>
              <div
                className="flex-1 rounded-t h-[100%]"
                style={{
                  background: 'linear-gradient(180deg, #fbbf24 0%, #ff6b00 100%)',
                  boxShadow: '0 0 16px rgba(251, 191, 36, 0.95)',
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