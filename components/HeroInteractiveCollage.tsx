'use client';

import React from 'react';
import { Wifi, Star } from 'lucide-react';
import TiltCard from '@/components/TiltCard';

interface HeroInteractiveCollageProps {
  onCardClick?: () => void;
}

export default function HeroInteractiveCollage({ onCardClick }: HeroInteractiveCollageProps) {
  // True frosted glass styling allowing amber rays and glowing rings to shine through
  const glassPanelStyle: React.CSSProperties = {
    background: 'rgba(255, 255, 255, 0.07)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.25)',
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
        {/* FLOATING GLASS CARD 1 (TOP LEFT): GOOGLE VERIFIED        */}
        {/* Scaled up 25%, overlapping top-left shoulder of NFC card */}
        {/* ======================================================== */}
        <div
          className="absolute -top-6 left-0 sm:-left-4 lg:-left-8 z-30 rounded-2xl p-4.5 sm:p-5 shadow-2xl transition-transform duration-300 hover:scale-105 pointer-events-auto min-w-[170px] sm:min-w-[195px]"
          style={glassPanelStyle}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono font-bold text-white tracking-wide">
              Google Verified
            </span>
          </div>

          {/* Brightened Golden Amber Stars */}
          <div className="flex items-center gap-1.5 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-[#ffb703] text-[#ffb703] drop-shadow-[0_0_8px_rgba(255,183,3,0.6)]"
              />
            ))}
          </div>

          {/* Crisp Light Gray/White Reviews Label */}
          <div className="text-gray-200 text-xs sm:text-[13px] font-mono font-semibold tracking-wider">
            +145 New Reviews
          </div>
        </div>

        {/* ======================================================== */}
        {/* FLOATING GLASS CARD 2 (BOTTOM LEFT): META (+340% ROI)    */}
        {/* Scaled up 25%, overlapping bottom-left corner of NFC card*/}
        {/* ======================================================== */}
        <div
          className="absolute -bottom-8 -left-4 sm:-left-8 lg:-left-14 z-30 rounded-2xl p-5 sm:p-6 shadow-2xl transition-transform duration-300 hover:scale-105 pointer-events-auto min-w-[240px] sm:min-w-[275px]"
          style={glassPanelStyle}
        >
          {/* Header */}
          <div className="flex items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-2">
              {/* Meta Loop Icon */}
              <svg className="w-5 h-5 text-[#0081FB] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 7.2c2.1-3 4.2-4.2 6.5-4.2 3.3 0 5.5 2.5 5.5 6 0 4.8-4.2 8.8-8.9 12-1.9 1.3-4.3 1.3-6.2 0-4.7-3.2-8.9-7.2-8.9-12 0-3.5 2.2-6 5.5-6 2.3 0 4.4 1.2 6.5 4.2zm-2.8 5.7c-1.3-1.6-2.5-2.7-3.7-2.7-1.5 0-2.5 1.1-2.5 2.8 0 2.6 2.5 5.3 5.4 7.4 1.1.8 2.5.8 3.6 0 .9-.6 1.8-1.4 2.8-2.4-2-2.3-3.9-3.7-5.6-5.1zm5.6 0c1.7 1.4 3.6 2.8 5.6 5.1 1 1 1.9 1.8 2.8 2.4 1.1.8 2.5.8 3.6 0 2.9-2.1 5.4-4.8 5.4-7.4 0-1.7-1-2.8-2.5-2.8-1.2 0-2.4 1.1-3.7 2.7z" />
              </svg>
              <span className="text-sm font-mono font-bold text-white">Meta</span>
            </div>
            
            {/* Bright +340% ROI Pill */}
            <span
              className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full shadow-[0_0_12px_rgba(255,107,0,0.4)]"
              style={{
                background: 'rgba(255, 107, 0, 0.2)',
                border: '1px solid rgba(255, 107, 0, 0.4)',
                color: '#ff9e42',
              }}
            >
              +340% ROI
            </span>
          </div>

          {/* Distinct Glowing Bright Orange Sparkline Graph */}
          <div className="w-full h-14 mb-3">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 120 40">
              <defs>
                <linearGradient id="metaGlowGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ff6b00" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#ff6b00" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M 0 35 Q 25 32 45 22 T 85 14 T 120 4 L 120 40 L 0 40 Z"
                fill="url(#metaGlowGrad)"
              />
              <path
                d="M 0 35 Q 25 32 45 22 T 85 14 T 120 4"
                fill="none"
                stroke="#ff6b00"
                strokeWidth="2.5"
                className="drop-shadow-[0_0_6px_rgba(255,107,0,0.8)]"
              />
              <circle cx="120" cy="4" r="3.5" fill="#FFF" className="drop-shadow-[0_0_10px_#FFF]" />
            </svg>
          </div>

          <div className="text-[9px] font-mono text-slate-300 uppercase tracking-widest mb-2 font-semibold">
            ACTIVE CAMPAIGNS
          </div>

          {/* Bottom Tabs */}
          <div className="flex items-center gap-2 text-[10px] font-mono">
            <span className="px-3 py-1 rounded-full bg-[#ff6b00]/25 text-[#ff9e42] border border-[#ff6b00]/50 font-bold shadow-[0_0_10px_rgba(255,107,0,0.4)]">
              Impressions
            </span>
            <span className="px-3 py-1 rounded-full bg-white/[0.08] text-gray-200 hover:text-white border border-white/20">
              Reactivity
            </span>
          </div>
        </div>

        {/* ======================================================== */}
        {/* FLOATING GLASS CARD 3 (RIGHT): GOOGLE ADS               */}
        {/* Scaled up 25%, prominent high-contrast numbers           */}
        {/* ======================================================== */}
        <div
          className="absolute top-0 -right-6 sm:-right-10 lg:-right-16 z-30 rounded-2xl p-5 sm:p-6 shadow-2xl transition-transform duration-300 hover:scale-105 pointer-events-auto w-[210px] sm:w-[240px]"
          style={glassPanelStyle}
        >
          {/* Header */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center p-0.5 shrink-0">
              <svg viewBox="0 0 24 24" className="w-full h-full">
                <path fill="#FBBC04" d="M3.7 13.9 8.2 6.1c1-1.8 3.3-2.4 5.1-1.3l.8.5c1.8 1 2.4 3.3 1.3 5.1l-4.5 7.8c-1 1.8-3.3 2.4-5.1 1.3l-.8-.5c-1.8-1-2.4-3.3-1.3-5.1z"/>
                <path fill="#4285F4" d="M19.3 15.6 14.8 7.8c-.5-.9-1.4-1.5-2.4-1.7l6.1-3.5c1.8-1 4.1-.4 5.1 1.3l.8 1.4c1 1.8.4 4.1-1.3 5.1l-3.8 5.2z"/>
                <circle fill="#34A853" cx="6.4" cy="18.6" r="2.9"/>
              </svg>
            </div>
            <span className="text-xs sm:text-sm font-mono font-bold text-white tracking-wide">
              Google Ads
            </span>
          </div>

          {/* Search / Click wave graph with glowing amber tones */}
          <div className="flex justify-between items-center text-[10px] font-mono mb-1 font-semibold">
            <span className="text-gray-100">Search</span>
            <span className="text-[#ffb703] font-bold drop-shadow-[0_0_6px_rgba(255,183,3,0.6)]">Click</span>
          </div>
          <div className="w-full h-11 mb-3.5">
            <svg className="w-full h-full" viewBox="0 0 100 30">
              <path
                d="M 0 24 Q 25 6 50 18 T 100 8"
                fill="none"
                stroke="#ff6b00"
                strokeWidth="2.5"
                className="drop-shadow-[0_0_8px_rgba(255,107,0,0.8)]"
              />
              <path
                d="M 0 28 Q 30 18 60 22 T 100 14"
                fill="none"
                stroke="#ffb703"
                strokeWidth="1.5"
                opacity="0.85"
              />
            </svg>
          </div>

          {/* Large Crisp White and High-Contrast Gold Metric Boxes */}
          <div className="grid grid-cols-2 gap-2 mb-3.5 font-mono">
            <div className="bg-white/[0.08] border border-white/20 rounded-xl p-2 text-center backdrop-blur-sm">
              <span className="text-[10px] text-[#ffb703] font-bold block mb-0.5 drop-shadow-[0_0_6px_rgba(255,183,3,0.6)]">★★★★★</span>
              <span className="text-sm sm:text-base font-black text-white block">5.0</span>
              <span className="text-[8px] text-gray-300 font-semibold tracking-wider block">RATING</span>
            </div>
            <div className="bg-white/[0.08] border border-white/20 rounded-xl p-2 text-center flex flex-col justify-center backdrop-blur-sm">
              <span className="text-[9px] text-gray-300 font-semibold tracking-wider block">ROAS</span>
              <span className="text-sm sm:text-base font-black text-[#ffb703] block drop-shadow-[0_0_10px_rgba(255,183,3,0.7)]">4.8x</span>
            </div>
          </div>

          {/* Campaign Analytics Bar Chart with Glowing Amber Tones */}
          <div className="pt-2.5 border-t border-white/10">
            <div className="flex justify-between items-center text-[9px] font-mono mb-2 font-bold">
              <span className="text-gray-100">CAMPAIGN ANALYTICS</span>
              <span className="text-[#ffb703] drop-shadow-[0_0_6px_rgba(255,183,3,0.6)]">4.8x</span>
            </div>
            <div className="flex items-end gap-2 h-9">
              <div className="flex-1 bg-white/20 rounded-t h-[40%]"></div>
              <div className="flex-1 bg-white/30 rounded-t h-[60%]"></div>
              <div className="flex-1 bg-[#ff9e42]/50 rounded-t h-[50%]"></div>
              <div className="flex-1 bg-[#ff6b00]/80 rounded-t h-[85%] shadow-[0_0_10px_rgba(255,107,0,0.5)]"></div>
              <div className="flex-1 bg-[#ffb703] rounded-t h-[100%] shadow-[0_0_14px_rgba(255,183,3,0.8)]"></div>
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