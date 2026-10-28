'use client';

import { useState } from 'react';
import { Wifi, ArrowUpRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import NfcModal from '@/components/NfcModal';

export default function HardwarePage() {
  const [isNfcModalOpen, setIsNfcModalOpen] = useState(false);

  return (
    <div className="relative z-10 py-16 sm:py-24 px-6 sm:px-10 lg:px-14 w-full">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Architectural Page Header */}
        <div className="max-w-4xl mb-16">
          <span className="font-mono text-xs text-cyberLime uppercase tracking-widest block mb-2">
            // 02 HARDWARE INNOVATION
          </span>
          <h1 className="font-bebas text-6xl sm:text-7xl md:text-8xl text-bone leading-none mb-6">
            COUNTERTOP SMART NFC <span className="text-vermilion">REVIEW CARDS</span>
          </h1>
          <p className="text-base text-slate-400 leading-relaxed font-normal">
            Most regional businesses print QR codes on paper bills that end up crumpled in the trash. We manufacture custom, permanent matte smart cards that sit at your checkout, turning every walk-in into a verified 5-star Google Maps review in 2 seconds.
          </p>
        </div>

        {/* INTERACTIVE 3D HARDWARE SHOWCASE & LIVE SIMULATOR */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 bg-obsidianSurface p-8 sm:p-12 lg:p-16 rounded-2xl border grid-border">
          
          {/* Left: 3D Angled Card Simulation */}
          <div className="lg:col-span-7 flex flex-col justify-center items-center relative py-6">
            <div className="absolute top-0 right-4 w-14 h-3.5 bg-cyberLime rounded-sm shadow-[0_0_15px_rgba(212,255,0,0.35)] z-20"></div>

            <div className="w-full max-w-[420px] aspect-[1.586/1] bg-gradient-to-br from-[#1A2230] to-[#0D121B] rounded-2xl transform rotate-[-4deg] scale-[1.03] border border-white/10 shadow-2xl absolute pointer-events-none -z-0"></div>

            <div
              onClick={() => setIsNfcModalOpen(true)}
              className="w-full max-w-[380px] aspect-[1.586/1] rounded-xl p-5 sm:p-6 border border-white/20 shadow-2xl relative flex flex-col justify-between overflow-hidden cursor-pointer transform hover:scale-[1.02] transition-transform duration-300 z-10 group"
              style={{ background: 'linear-gradient(135deg, #131722 0%, #080B12 100%)' }}
            >
              <div className="absolute inset-0 pointer-events-none opacity-15">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="30" x2="100%" y2="30" stroke="#FFFFFF" strokeWidth="0.5" strokeDasharray="3 6" />
                  <line x1="75" y1="0" x2="75" y2="100%" stroke="#FFFFFF" strokeWidth="0.5" strokeDasharray="3 6" />
                </svg>
              </div>

              {/* Top Row */}
              <div className="flex items-center gap-1.5 text-vermilion relative z-10">
                <Wifi className="w-4 h-4 animate-pulse rotate-90" />
                <span className="text-[9px] font-mono font-bold tracking-widest uppercase">
                  TAP TO CONNECT NFC
                </span>
              </div>

              {/* Center Row */}
              <div className="grid grid-cols-12 gap-3 items-center relative z-10 my-1">
                <div className="col-span-5 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#0E1726] border border-white/20 flex flex-col items-center justify-center p-1.5 text-center shadow-lg group-hover:border-vermilion/50 transition">
                    <svg className="w-7 h-7 mb-0.5" viewBox="0 0 100 100" fill="none">
                      <path d="M26 44 A 24 24 0 0 1 74 44 Z" fill="#FF441A" />
                      <rect x="14" y="44" width="72" height="6" rx="3" fill="#FFFFFF" />
                      <line x1="48" y1="50" x2="25" y2="78" stroke="#FFFFFF" strokeWidth="6.5" strokeLinecap="round" />
                      <line x1="52" y1="50" x2="75" y2="78" stroke="#FFFFFF" strokeWidth="6.5" strokeLinecap="round" />
                    </svg>
                    <span className="text-[7.5px] font-black tracking-widest text-white leading-tight">LONG VIEW</span>
                    <span className="text-[5.5px] font-mono tracking-widest text-vermilion">DIGITAL MARKETING</span>
                  </div>
                </div>

                <div className="col-span-7 flex flex-col justify-between space-y-1 border-l border-white/10 pl-3">
                  <div className="text-[8.5px] font-mono text-slate-300 space-y-0.5">
                    <div className="truncate">longviewmarketingofficial@gmail.com</div>
                    <div>@longview_digital</div>
                    <div className="text-amber-400">Ahmedabad, Gujarat</div>
                  </div>

                  <div className="flex items-center gap-2 pt-0.5">
                    <div className="w-8 h-8 bg-white p-0.5 rounded shadow flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 24 24" className="w-full h-full text-black" fill="currentColor">
                        <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14 0h4v4h-4v-4zm-4 4h4v4h-4v-4zm4-4h4v4h-4v-4zM14 14h2v2h-2v-2z" />
                      </svg>
                    </div>
                    <span className="text-[8px] font-mono text-slate-400">GOOGLE MAPS VERIFIED</span>
                  </div>
                </div>
              </div>

              {/* Bottom Vermilion Edge Highlight */}
              <div className="pt-1.5 border-t border-white/10 flex justify-between items-center relative z-10 text-[8px] font-mono text-slate-400">
                <span className="text-cyberLime flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyberLime"></span>
                  SMART NFC FIRMWARE
                </span>
                <span className="text-vermilion font-bold group-hover:underline">CLICK TO TEST TAP →</span>
              </div>
            </div>
          </div>

          {/* Right: Simulator Controls */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-cyberLime font-mono text-xs font-bold block uppercase tracking-widest">
              // THE 2-SECOND EXPERIENCE
            </span>
            <h2 className="font-bebas text-4xl sm:text-5xl text-bone leading-tight">
              ZERO APP DOWNLOADS. <br />
              <span className="text-vermilion">ZERO TYPING REQUIRED.</span>
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed font-normal">
              When a happy diner or shopper walks up to pay, your staff simply says: <em>&quot;Tap your phone here to share your review!&quot;</em> The customer’s phone natively registers the chip and immediately displays your Google 5-star review modal.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setIsNfcModalOpen(true)}
                className="btn-vermilion w-full py-3.5 rounded-sm font-mono text-xs font-bold uppercase tracking-wider shadow-lg shadow-vermilion/25 flex items-center justify-center gap-2"
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
            <span className="text-vermilion font-mono font-bold text-xs uppercase tracking-widest block mb-2">
              // WORKFLOW
            </span>
            <h2 className="font-bebas text-4xl sm:text-5xl text-bone tracking-wide">
              HOW IT OPERATES AT YOUR BILLING COUNTER
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
            <div className="p-6 rounded-xl bg-obsidianSurface border grid-border flex flex-col justify-between">
              <div>
                <span className="w-8 h-8 rounded bg-vermilion/20 text-vermilion font-bold flex items-center justify-center text-sm mb-4">
                  01
                </span>
                <h4 className="font-bold text-white text-sm uppercase mb-2">Order Completed</h4>
                <p className="text-slate-400 leading-relaxed font-normal">
                  Customer finishes meal, retail purchase, or salon session at your billing desk.
                </p>
              </div>
              <span className="text-slate-600 mt-4 text-[10px]">// STEP 01</span>
            </div>

            <div className="p-6 rounded-xl bg-obsidianSurface border grid-border flex flex-col justify-between">
              <div>
                <span className="w-8 h-8 rounded bg-vermilion/20 text-vermilion font-bold flex items-center justify-center text-sm mb-4">
                  02
                </span>
                <h4 className="font-bold text-white text-sm uppercase mb-2">Verbal Invitation</h4>
                <p className="text-slate-400 leading-relaxed font-normal">
                  Staff naturally points: <em>&quot;Just tap your phone on this card to leave your review!&quot;</em>
                </p>
              </div>
              <span className="text-slate-600 mt-4 text-[10px]">// STEP 02</span>
            </div>

            <div className="p-6 rounded-xl bg-obsidianSurface border grid-border flex flex-col justify-between">
              <div>
                <span className="w-8 h-8 rounded bg-vermilion/20 text-vermilion font-bold flex items-center justify-center text-sm mb-4">
                  03
                </span>
                <h4 className="font-bold text-white text-sm uppercase mb-2">Instant NFC Tap</h4>
                <p className="text-slate-400 leading-relaxed font-normal">
                  No searching on Google Maps, no typing the business name, no paper bill scan.
                </p>
              </div>
              <span className="text-slate-600 mt-4 text-[10px]">// STEP 03</span>
            </div>

            <div className="p-6 rounded-xl bg-obsidianSurface border grid-border flex flex-col justify-between">
              <div>
                <span className="w-8 h-8 rounded bg-vermilion/20 text-vermilion font-bold flex items-center justify-center text-sm mb-4">
                  04
                </span>
                <h4 className="font-bold text-white text-sm uppercase mb-2">5-Star Submission</h4>
                <p className="text-slate-400 leading-relaxed font-normal">
                  Google review rating modal launches instantly on their device with 5 stars pre-selected.
                </p>
              </div>
              <span className="text-slate-600 mt-4 text-[10px]">// STEP 04</span>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="bg-obsidianSurface border grid-border p-8 sm:p-12 rounded-2xl text-center max-w-4xl mx-auto border-l-4 border-l-vermilion shadow-2xl">
          <span className="text-xs font-mono font-bold text-cyberLime uppercase tracking-widest block mb-2">
            // HARDWARE ROLLOUT
          </span>
          <h2 className="font-bebas text-3xl sm:text-5xl text-bone mb-4">
            GET CUSTOM NFC CARDS BRANDED FOR YOUR STORE
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mb-8 leading-relaxed font-normal">
            Custom smart cards are prepared and programmed within 7 days of onboarding. Claim your setup via WhatsApp.
          </p>
          <a
            href="https://wa.me/919879583117?text=Hi%20Long%20View,%20I'd%20like%20to%20order%20NFC%20Google%20Review%20Cards%20for%20my%20business"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-vermilion inline-flex items-center gap-2 px-8 py-4 rounded-sm font-mono text-xs font-extrabold uppercase tracking-wider shadow-lg shadow-vermilion/25"
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
