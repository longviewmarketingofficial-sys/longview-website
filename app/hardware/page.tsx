'use client';

import { useState } from 'react';
import { Wifi, ArrowUpRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import NfcModal from '@/components/NfcModal';

export default function HardwarePage() {
  const [isNfcModalOpen, setIsNfcModalOpen] = useState(false);

  const frostedCardStyle: React.CSSProperties = {
    background: 'rgba(255, 255, 255, 0.04)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
  };

  return (
    <div className="relative z-10 py-16 sm:py-24 px-6 sm:px-10 lg:px-14 w-full luxury-bg min-h-screen">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Editorial Page Header */}
        <div className="max-w-4xl mb-16">
          <span className="font-mono text-xs text-[#F59E0B] uppercase tracking-[0.25em] block mb-3 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]">
            // 02 HARDWARE INNOVATION
          </span>
          <h1 className="font-bebas text-6xl sm:text-7xl md:text-8xl text-bone leading-[0.95] mb-6">
            COUNTERTOP SMART NFC{' '}
            <span
              className="inline-block"
              style={{
                background: 'linear-gradient(180deg, #FF6A00 0%, #D43800 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 900,
              }}
            >
              REVIEW CARDS
            </span>
          </h1>
          <p className="text-base text-slate-300 leading-relaxed font-normal max-w-3xl">
            Most regional businesses print QR codes on paper bills that end up crumpled in the trash. We manufacture custom, permanent matte smart cards that sit at your checkout, turning every walk-in into a verified 5-star Google Maps review in 2 seconds.
          </p>
        </div>

        {/* INTERACTIVE 3D HARDWARE SHOWCASE & LIVE SIMULATOR */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 p-8 sm:p-12 lg:p-16 rounded-3xl"
          style={frostedCardStyle}
        >
          {/* Left: 3D Angled Card Simulation */}
          <div className="lg:col-span-7 flex flex-col justify-center items-center relative py-8">
            {/* Background depth blur plate */}
            <div className="w-full max-w-[420px] aspect-[1.586/1] bg-gradient-to-br from-[#1A2230] to-[#0D121B] rounded-2xl transform rotate-[-4deg] scale-[1.03] border border-white/10 shadow-2xl absolute pointer-events-none -z-0"></div>

            {/* Main Interactive 3D Card with Tilt & Amber Rim Lighting */}
            <div
              onClick={() => setIsNfcModalOpen(true)}
              className="w-full max-w-[390px] aspect-[1.586/1] rounded-2xl p-6 sm:p-7 relative flex flex-col justify-between overflow-hidden cursor-pointer transform hover:scale-[1.03] transition-all duration-300 z-10 group"
              style={{
                background: 'linear-gradient(155deg, #181C26 0%, #0E1119 50%, #080A0F 100%)',
                border: '1px solid rgba(255, 255, 255, 0.14)',
                boxShadow: '0 30px 60px -10px rgba(0, 0, 0, 0.9), 0 0 35px rgba(255, 107, 0, 0.25)',
                transform: 'perspective(1000px) rotate(-6deg) rotateY(12deg)',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Subtle grid lines in card */}
              <div className="absolute inset-0 pointer-events-none opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="30" x2="100%" y2="30" stroke="#FFFFFF" strokeWidth="0.5" strokeDasharray="3 6" />
                  <line x1="75" y1="0" x2="75" y2="100%" stroke="#FFFFFF" strokeWidth="0.5" strokeDasharray="3 6" />
                </svg>
              </div>

              {/* Top Row: NFC Wave */}
              <div className="flex items-center gap-2 text-amber-400 relative z-10">
                <Wifi className="w-4 h-4 animate-pulse rotate-90 drop-shadow-[0_0_8px_rgba(245,158,11,0.7)]" />
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase">
                  TAP TO CONNECT NFC
                </span>
              </div>

              {/* Center Row: Longview Emblem */}
              <div className="grid grid-cols-12 gap-3 items-center relative z-10 my-1">
                <div className="col-span-5 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#0E1726] border border-white/20 flex flex-col items-center justify-center p-1.5 text-center shadow-lg group-hover:border-amber-500/50 transition">
                    <svg className="w-7 h-7 mb-0.5" viewBox="0 0 100 100" fill="none">
                      <path d="M26 44 A 24 24 0 0 1 74 44 Z" fill="#FF5722" />
                      <rect x="14" y="44" width="72" height="6" rx="3" fill="#FFFFFF" />
                      <line x1="48" y1="50" x2="25" y2="78" stroke="#FFFFFF" strokeWidth="6.5" strokeLinecap="round" />
                      <line x1="52" y1="50" x2="75" y2="78" stroke="#FFFFFF" strokeWidth="6.5" strokeLinecap="round" />
                    </svg>
                    <span className="text-[8px] font-black tracking-widest text-white leading-tight font-sans">LONGVIEW</span>
                    <span className="text-[5.5px] font-mono tracking-widest text-amber-400">DIGITAL MARKETING</span>
                  </div>
                </div>

                <div className="col-span-7 flex flex-col justify-between space-y-1.5 border-l border-white/10 pl-3">
                  <div className="text-[9px] font-mono text-slate-300 space-y-0.5">
                    <div className="truncate">longviewmarketingofficial@gmail.com</div>
                    <div>@longview_digital</div>
                    <div className="text-amber-400 font-semibold">Ahmedabad, Gujarat</div>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <div className="w-8 h-8 bg-white p-0.5 rounded shadow flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 24 24" className="w-full h-full text-black" fill="currentColor">
                        <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14 0h4v4h-4v-4zm-4 4h4v4h-4v-4zm4-4h4v4h-4v-4zM14 14h2v2h-2v-2z" />
                      </svg>
                    </div>
                    <span className="text-[8.5px] font-mono text-slate-300 font-semibold">GOOGLE MAPS VERIFIED</span>
                  </div>
                </div>
              </div>

              {/* Bottom Edge Status */}
              <div className="pt-2 border-t border-white/10 flex justify-between items-center relative z-10 text-[9px] font-mono text-slate-400">
                <span className="text-amber-400 flex items-center gap-1.5 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_#F59E0B] animate-pulse"></span>
                  SMART NFC FIRMWARE
                </span>
                <span className="text-[#FF5722] font-bold group-hover:underline">CLICK TO TEST TAP →</span>
              </div>
            </div>
          </div>

          {/* Right: Simulator Controls */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[#F59E0B] font-mono text-xs font-bold block uppercase tracking-[0.25em] drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]">
              // THE 2-SECOND EXPERIENCE
            </span>
            <h2 className="font-bebas text-4xl sm:text-5xl text-bone leading-tight">
              ZERO APP DOWNLOADS. <br />
              <span
                style={{
                  background: 'linear-gradient(90deg, #FEE180 0%, #E5A93C 50%, #C86016 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: 'serif',
                  fontStyle: 'italic',
                }}
              >
                ZERO TYPING REQUIRED.
              </span>
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              When a happy diner or shopper walks up to pay, your staff simply says: <em>&quot;Tap your phone here to share your review!&quot;</em> The customer’s phone natively registers the chip and immediately displays your Google 5-star review modal.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setIsNfcModalOpen(true)}
                className="rounded-full w-full py-3.5 bg-gradient-to-r from-[#FF5722] via-[#FF441A] to-[#E63900] hover:from-[#FF6A3D] hover:to-[#FF5722] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-[0_0_25px_rgba(255,68,26,0.5)] flex items-center justify-center gap-2 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <span>SIMULATE PHONE TAP IN BROWSER</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* 4-STEP CHECKOUT PROTOCOL */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[#F59E0B] font-mono font-bold text-xs uppercase tracking-[0.25em] block mb-2 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]">
              // WORKFLOW
            </span>
            <h2 className="font-bebas text-4xl sm:text-5xl text-bone tracking-wide">
              HOW IT OPERATES AT YOUR BILLING COUNTER
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
            {/* Step 1 */}
            <div className="p-6 rounded-2xl flex flex-col justify-between" style={frostedCardStyle}>
              <div>
                <span className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/30 text-amber-400 font-bold flex items-center justify-center text-sm mb-4 shadow-[0_0_8px_rgba(245,158,11,0.3)]">
                  01
                </span>
                <h4 className="font-bold text-white text-sm uppercase mb-2">Order Completed</h4>
                <p className="text-slate-300 leading-relaxed font-normal">
                  Customer finishes meal, retail purchase, or salon session at your billing desk.
                </p>
              </div>
              <span className="text-slate-500 mt-4 text-[10px]">// STEP 01</span>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl flex flex-col justify-between" style={frostedCardStyle}>
              <div>
                <span className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/30 text-amber-400 font-bold flex items-center justify-center text-sm mb-4 shadow-[0_0_8px_rgba(245,158,11,0.3)]">
                  02
                </span>
                <h4 className="font-bold text-white text-sm uppercase mb-2">Verbal Invitation</h4>
                <p className="text-slate-300 leading-relaxed font-normal">
                  Staff naturally points: <em>&quot;Just tap your phone on this card to leave your review!&quot;</em>
                </p>
              </div>
              <span className="text-slate-500 mt-4 text-[10px]">// STEP 02</span>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl flex flex-col justify-between" style={frostedCardStyle}>
              <div>
                <span className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/30 text-amber-400 font-bold flex items-center justify-center text-sm mb-4 shadow-[0_0_8px_rgba(245,158,11,0.3)]">
                  03
                </span>
                <h4 className="font-bold text-white text-sm uppercase mb-2">Instant NFC Tap</h4>
                <p className="text-slate-300 leading-relaxed font-normal">
                  No searching on Google Maps, no typing the business name, no paper bill scan.
                </p>
              </div>
              <span className="text-slate-500 mt-4 text-[10px]">// STEP 03</span>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-2xl flex flex-col justify-between" style={frostedCardStyle}>
              <div>
                <span className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/30 text-amber-400 font-bold flex items-center justify-center text-sm mb-4 shadow-[0_0_8px_rgba(245,158,11,0.3)]">
                  04
                </span>
                <h4 className="font-bold text-white text-sm uppercase mb-2">5-Star Submission</h4>
                <p className="text-slate-300 leading-relaxed font-normal">
                  Google review rating modal launches instantly on their device with 5 stars pre-selected.
                </p>
              </div>
              <span className="text-slate-500 mt-4 text-[10px]">// STEP 04</span>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div
          className="p-8 sm:p-12 rounded-3xl text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden"
          style={{
            ...frostedCardStyle,
            borderLeft: '4px solid #FF441A',
          }}
        >
          <span className="text-xs font-mono font-bold text-[#F59E0B] uppercase tracking-[0.25em] block mb-2 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]">
            // HARDWARE ROLLOUT
          </span>
          <h2 className="font-bebas text-3xl sm:text-5xl text-white mb-4">
            GET CUSTOM NFC CARDS BRANDED FOR YOUR STORE
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-8 leading-relaxed font-normal">
            Custom smart cards are prepared and programmed within 7 days of onboarding. Claim your setup via WhatsApp.
          </p>
          <a
            href="https://wa.me/919879583117?text=Hi%20Long%20View,%20I'd%20like%20to%20order%20NFC%20Google%20Review%20Cards%20for%20my%20business"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#FF5722] via-[#FF441A] to-[#E63900] hover:from-[#FF6A3D] hover:to-[#FF5722] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-[0_0_25px_rgba(255,68,26,0.5)] transition-all hover:scale-[1.02]"
          >
            <span>ORDER NFC HARDWARE ON WHATSAPP</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>

      <NfcModal isOpen={isNfcModalOpen} onClose={() => setIsNfcModalOpen(false)} />
    </div>
  );
}
