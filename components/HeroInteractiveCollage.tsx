'use client';

import React from 'react';
import { Wifi, Star } from 'lucide-react';
import TiltCard from '@/components/TiltCard';

interface HeroInteractiveCollageProps {
  onCardClick?: () => void;
}

export default function HeroInteractiveCollage({ onCardClick }: HeroInteractiveCollageProps) {
  // Explicit translucent frosted glass styling allowing background amber light rings to shine through
  const glassPanelStyle: React.CSSProperties = {
    background: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(24px) saturate(180%)',
    WebkitBackdropFilter: 'blur(24px) saturate(180%)',
    border: '1px solid rgba(255, 255, 255, 0.22)',
    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.3)',
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
        {/* Force translucent frosted glass, pure white & gold text  */}
        {/* ======================================================== */}
        <div
          className="absolute -top-6 left-0 sm:-left-4 lg:-left-8 z-30 rounded-2xl p-4.5 sm:p-5 shadow-2xl transition-transform duration-300 hover:scale-105 pointer-events-auto min-w-[170px] sm:min-w-[195px]"
          style={glassPanelStyle}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono font-bold tracking-wide" style={{ color: '#ffffff' }}>
              Google Verified
            </span>
          </div>

          {/* Bright Golden Yellow Stars (#ffc107) with Subtle Glow */}
          <div className="flex items-center gap-1.5 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4"
                style={{
                  fill: '#ffc107',
                  color: '#ffc107',
                  filter: 'drop-shadow(0 0 6px rgba(255, 193, 7, 0.8))',
                }}
              />
            ))}
          </div>

          {/* Crisp Light Gray (#e5e7eb) Reviews Label */}
          <div className="text-xs sm:text-[13px] font-mono font-semibold tracking-wider" style={{ color: '#e5e7eb' }}>
            +145 New Reviews
          </div>
        </div>

        {/* ======================================================== */}
        {/* FLOATING GLASS CARD 2 (BOTTOM LEFT): META (+340% ROI)    */}
        {/* Force translucent frosted glass, bright orange trendline */}
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
              <span className="text-sm font-mono font-bold" style={{ color: '#ffffff' }}>Meta</span>
            </div>
            
            {/* Bright +340% ROI Pill */}
            <span
              className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full shadow-[0_0_12px_rgba(255,122,0,0.5)]"
              style={{
                background: 'rgba(255, 122, 0, 0.22)',
                border: '1px solid rgba(255, 122, 0, 0.55)',
                color: '#ffffff',
              }}
            >
              <span style={{ color: '#fbbf24', marginRight: '3px' }}>+340%</span>ROI
            </span>
          </div>

          {/* Glowing Orange #ff7a00 Sparkline Graph with Drop Shadow */}
          <div className="w-full h-14 mb-3">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 120 40">
              <defs>
                <linearGradient id="metaGlowGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ff7a00" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#ff7a00" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M 0 35 Q 25 32 45 22 T 85 14 T 120 4 L 120 40 L 0 40 Z"
                fill="url(#metaGlowGrad)"
              />
              <path
                d="M 0 35 Q 25 32 45 22 T 85 14 T 120 4"
                fill="none"
                stroke="#ff7a00"
                strokeWidth="2.5"
                style={{
                  filter: 'drop-shadow(0 0 6px rgba(255, 122, 0, 0.8))',
                }}
              />
              <circle cx="120" cy="4" r="3.5" fill="#FFF" style={{ filter: 'drop-shadow(0 0 8px #FFF)' }} />
            </svg>
          </div>

          <div className="text-[9px] font-mono uppercase tracking-widest mb-2 font-semibold" style={{ color: '#d1d5db' }}>
            ACTIVE CAMPAIGNS
          </div>

          {/* Bottom Tabs */}
          <div className="flex items-center gap-2 text-[10px] font-mono">
            <span
              className="px-3 py-1 rounded-full font-bold shadow-[0_0_10px_rgba(255,122,0,0.4)]"
              style={{
                background: 'rgba(255, 122, 0, 0.25)',
                color: '#fbbf24',
                border: '1px solid rgba(255, 122, 0, 0.5)',
              }}
            >
              Impressions
            </span>
            <span
              className="px-3 py-1 rounded-full border"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'rgba(255, 255, 255, 0.25)',
                color: '#f3f4f6',
              }}
            >
              Reactivity
            </span>
          </div>
        </div>

        {/* ======================================================== */}
        {/* FLOATING GLASS CARD 3 (RIGHT): GOOGLE ADS               */}
        {/* Force translucent frosted glass, pure white & gold text  */}
        {/* ======================================================== */}
        <div
          className="absolute top-0 -right-6 sm:-right-10 lg:-right-16 z-30 rounded-2xl p-5 sm:p-6 shadow-2xl transition-transform duration-300 hover:scale-105 pointer-events-auto w-[210px] sm:w-[240px]"
          style={glassPanelStyle}
        >
          {/* Header */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center p-0.5 shrink-0">
              <svg viewBox="0 0 24 24" className="w-full h-full">
                <path fill="#FBBC04" d="M3.7 13.9 8.2 6.1c1-1.8 3.3-2.4 5.1-1.3l.8.5c1.8 1 2.4 3.3 1.3 5.1l-4.5 7.8c-1 1.8-3.3 2.4-5.1 1.3l-.8-.5c-1.8-1-2.4-3.3-1.3-5.1z"/>
                <path fill="#4285F4" d="M19.3 15.6 14.8 7.8c-.5-.9-1.4-1.5-2.4-1.7l6.1-3.5c1.8-1 4.1-.4 5.1 1.3l.8 1.4c1 1.8.4 4.1-1.3 5.1l-3.8 5.2z"/>
                <circle fill="#34A853" cx="6.4" cy="18.6" r="2.9"/>
              </svg>
            </div>
            <span className="text-xs sm:text-sm font-mono font-bold tracking-wide" style={{ color: '#ffffff' }}>
              Google Ads
            </span>
          </div>

          {/* Clean White/Light Gray (#f3f4f6) Search / Click Labels */}
          <div className="flex justify-between items-center text-[10px] font-mono mb-1 font-semibold">
            <span style={{ color: '#f3f4f6' }}>Search</span>
            <span style={{ color: '#ffffff', filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.6))' }}>Click</span>
          </div>
          <div className="w-full h-11 mb-3.5">
            <svg className="w-full h-full" viewBox="0 0 100 30">
              <path
                d="M 0 24 Q 25 6 50 18 T 100 8"
                fill="none"
                stroke="#ff7a00"
                strokeWidth="2.5"
                style={{ filter: 'drop-shadow(0 0 8px rgba(255, 122, 0, 0.8))' }}
              />
              <path
                d="M 0 28 Q 30 18 60 22 T 100 14"
                fill="none"
                stroke="#60A5FA"
                strokeWidth="1.5"
                opacity="0.85"
              />
            </svg>
          </div>

          {/* Large Crisp White and High-Contrast Gold Metric Boxes */}
          <div className="grid grid-cols-2 gap-2 mb-3.5 font-mono">
            {/* 5.0 RATING */}
            <div
              className="rounded-xl p-2 text-center"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
              }}
            >
              <span className="text-[10px] font-bold block mb-0.5" style={{ color: '#ffc107', filter: 'drop-shadow(0 0 6px rgba(255, 193, 7, 0.8))' }}>★★★★★</span>
              <span className="text-lg font-black block" style={{ color: '#ffffff' }}>5.0</span>
              <span className="text-[8px] font-semibold tracking-wider block" style={{ color: '#9ca3af' }}>RATING</span>
            </div>

            {/* 4.8x ROAS */}
            <div
              className="rounded-xl p-2 text-center flex flex-col justify-center"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
              }}
            >
              <span className="text-[9px] font-semibold tracking-wider block" style={{ color: '#9ca3af' }}>ROAS</span>
              <span className="text-lg font-black block" style={{ color: '#fbbf24', filter: 'drop-shadow(0 0 10px rgba(251, 191, 36, 0.8))' }}>4.8x</span>
            </div>
          </div>

          {/* Campaign Analytics Bar Chart with Bright Luminous Amber/Orange Gradients */}
          <div className="pt-2.5 border-t border-white/15">
            <div className="flex justify-between items-center text-[9px] font-mono mb-2 font-bold">
              <span style={{ color: '#f3f4f6' }}>CAMPAIGN ANALYTICS</span>
              <span style={{ color: '#fbbf24', filter: 'drop-shadow(0 0 6px rgba(251, 191, 36, 0.7))' }}>4.8x</span>
            </div>
            <div className="flex items-end gap-2 h-9">
              <div
                className="flex-1 rounded-t h-[40%]"
                style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 100%)' }}
              ></div>
              <div
                className="flex-1 rounded-t h-[60%]"
                style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.25) 100%)' }}
              ></div>
              <div
                className="flex-1 rounded-t h-[50%]"
                style={{ background: 'linear-gradient(180deg, #ffb703 0%, #ff7a00 100%)' }}
              ></div>
              <div
                className="flex-1 rounded-t h-[85%]"
                style={{
                  background: 'linear-gradient(180deg, #ff9e42 0%, #ff5722 100%)',
                  boxShadow: '0 0 10px rgba(255, 122, 0, 0.6)',
                }}
              ></div>
              <div
                className="flex-1 rounded-t h-[100%]"
                style={{
                  background: 'linear-gradient(180deg, #fbbf24 0%, #ff6b00 100%)',
                  boxShadow: '0 0 16px rgba(251, 191, 36, 0.9)',
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