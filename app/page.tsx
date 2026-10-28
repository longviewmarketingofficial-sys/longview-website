'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Wifi, Sparkles, Check, Phone, MapPin } from 'lucide-react';
import NfcModal from '@/components/NfcModal';
import ProductionRhythm from '@/components/ProductionRhythm';
import FaqAccordion from '@/components/FaqAccordion';
import MarqueeTicker from '@/components/MarqueeTicker';
import TiltCard from '@/components/TiltCard';
import MagneticButton from '@/components/MagneticButton';

export default function HomePage() {
  const [isNfcModalOpen, setIsNfcModalOpen] = useState(false);

  return (
    <div className="w-full flex flex-col justify-between">
      {/* ========================================================== */}
      {/* 1. HERO SECTION (GEOMETRIC SPLIT)                          */}
      {/* ========================================================== */}
      <section className="w-full border-b grid-border relative flex-1 flex items-stretch">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch w-full">
          
          {/* LEFT HERO COLUMN: ARCHITECTURAL TYPOGRAPHY */}
          <div className="lg:col-span-6 border-b lg:border-b-0 lg:border-r grid-border py-8 lg:py-12 px-6 sm:px-10 lg:px-12 xl:px-14 flex flex-col justify-between">
            <div className="my-auto py-2">
              <span className="font-mono text-xs text-cyberLime uppercase tracking-widest block mb-4">
                // FULL-SERVICE DIGITAL GROWTH STUDIO
              </span>
              <h1 className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-[76px] xl:text-[88px] 2xl:text-[100px] leading-[0.85] tracking-tight uppercase select-none">
                <span className="block text-bone">BE SEEN.</span>
                <span className="block text-bone">BE REMEMBERED.</span>
                <span className="block text-vermilion">BE CHOSEN.</span>
              </h1>
              <p className="mt-6 text-sm sm:text-base text-slate-400 max-w-lg leading-relaxed font-normal">
                Local business marketing without the agency fluff. High-retention Instagram Reels, hyper-local Meta Ads, and automated 5-star Google Review hardware.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <MagneticButton strength={0.25}>
                  <a
                    href="https://wa.me/919879583117?text=Hi%20Long%20View,%20I'd%20like%20to%20discuss%20a%20growth%20plan%20for%20my%20business"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-vermilion px-6 py-3.5 rounded-sm font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-vermilion/30"
                  >
                    <span>START 3-MONTH SPRINT</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </MagneticButton>
                <MagneticButton strength={0.25}>
                  <Link
                    href="/approach"
                    className="px-6 py-3.5 rounded-sm bg-obsidianSurface border grid-border hover:border-white/30 text-bone font-mono text-xs font-bold uppercase tracking-wider transition block"
                  >
                    VIEW METHODOLOGY →
                  </Link>
                </MagneticButton>
              </div>
            </div>

            {/* Bottom Coordinates Bar */}
            <div className="pt-6 border-t grid-border flex items-center justify-between font-mono text-[10px] sm:text-[11px] text-slate-500">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyberLime animate-pulse"></span>
                <span>SERVING AMBITIOUS BUSINESSES WORLDWIDE</span>
              </span>
              <span className="text-cyberLime font-bold">// 16 PIECES/MO</span>
            </div>
          </div>

          {/* RIGHT HERO COLUMN: 3D REALISTIC SLATE NFC CARD SHOWCASE WITH 3D TILT */}
          <div className="lg:col-span-6 relative bg-[#070A0F] py-10 lg:py-16 px-6 sm:px-8 lg:px-10 flex flex-col justify-center items-center overflow-hidden min-h-[420px] lg:min-h-[480px]">
            {/* Neon Lime Status Capsule */}
            <div className="absolute top-4 right-6 lg:right-10 w-14 h-3.5 bg-cyberLime rounded-sm shadow-[0_0_15px_rgba(212,255,0,0.35)] z-20"></div>

            {/* 3D Angled Slate Pedestal Background */}
            <div className="w-full max-w-[370px] xl:max-w-[420px] aspect-[1.586/1] bg-gradient-to-br from-[#1A2230] to-[#0D121B] rounded-2xl transform rotate-[-4deg] scale-[1.03] border border-white/10 shadow-2xl absolute pointer-events-none -z-0"></div>

            {/* THE SMART NFC BUSINESS CARD (WRAPPED IN 3D TILT WITH MOVING GLARE) */}
            <TiltCard maxTilt={10} className="w-full max-w-[340px] xl:max-w-[390px] z-10">
              <div
                onClick={() => setIsNfcModalOpen(true)}
                className="w-full aspect-[1.586/1] rounded-xl p-5 border border-white/20 shadow-2xl relative flex flex-col justify-between overflow-hidden cursor-pointer group"
                style={{ background: 'linear-gradient(135deg, #131722 0%, #080B12 100%)' }}
              >
                {/* Subtle watermark */}
                <div className="absolute inset-0 pointer-events-none opacity-15">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="30" x2="100%" y2="30" stroke="#FFFFFF" strokeWidth="0.5" strokeDasharray="3 6" />
                    <line x1="75" y1="0" x2="75" y2="100%" stroke="#FFFFFF" strokeWidth="0.5" strokeDasharray="3 6" />
                  </svg>
                </div>

                {/* Top Row: NFC Wave Icon & Label */}
                <div className="flex items-center gap-1.5 text-vermilion relative z-10">
                  <Wifi className="w-4 h-4 animate-pulse rotate-90" />
                  <span className="text-[8.5px] sm:text-[9px] font-mono font-bold tracking-widest uppercase">
                    TAP TO CONNECT NFC
                  </span>
                </div>

                {/* Center Row: Navy Sunrise Logo Badge + Contact Details */}
                <div className="grid grid-cols-12 gap-3 items-center relative z-10 my-0.5">
                  {/* Circular Navy Emblem */}
                  <div className="col-span-5 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-[#0E1726] border border-white/20 flex flex-col items-center justify-center p-2 text-center shadow-lg group-hover:border-vermilion/60 transition-colors">
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

                  {/* Right Contact Info */}
                  <div className="col-span-7 flex flex-col justify-between space-y-1.5 border-l border-white/10 pl-3">
                    <div className="text-[8px] sm:text-[9px] font-mono text-slate-300 space-y-1">
                      <div className="truncate">longviewmarketingofficial@gmail.com</div>
                      <div>@longview_digital</div>
                      <div className="text-amber-400">Ahmedabad, Gujarat</div>
                    </div>

                    {/* Google Maps Indicator */}
                    <div className="flex items-center gap-2 pt-1">
                      <div className="w-7 h-7 bg-white p-0.5 rounded shadow flex items-center justify-center shrink-0">
                        <svg viewBox="0 0 24 24" className="w-full h-full text-black" fill="currentColor">
                          <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14 0h4v4h-4v-4zm-4 4h4v4h-4v-4zm4-4h4v4h-4v-4zM14 14h2v2h-2v-2z" />
                        </svg>
                      </div>
                      <span className="text-[7.5px] font-mono text-slate-400">GOOGLE MAPS VERIFIED</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Edge */}
                <div className="pt-2 border-t border-white/10 flex justify-between items-center relative z-10 text-[8px] font-mono text-slate-400">
                  <span className="text-cyberLime flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyberLime"></span>
                    SMART NFC CHIP
                  </span>
                  <span className="text-vermilion font-bold group-hover:underline">CLICK TO TEST TAP →</span>
                </div>
              </div>
            </TiltCard>
          </div>

        </div>
      </section>

      {/* ========================================================== */}
      {/* KINETIC INFINITE TYPOGRAPHY MARQUEE STRIP                   */}
      {/* ========================================================== */}
      <MarqueeTicker />

      {/* ========================================================== */}
      {/* 2. 3-PILLAR STRIP (DISCOVERY / ARCHITECTURE / EXECUTION)    */}
      {/* ========================================================== */}
      <section id="approach" className="w-full border-b grid-border bg-techGreen relative flex-none">
        <div className="grid grid-cols-1 md:grid-cols-3 w-full">
          
          {/* Pillar 01: DISCOVERY */}
          <TiltCard maxTilt={4} className="border-b md:border-b-0 md:border-r grid-border-green">
            <div className="py-6 sm:py-8 px-6 sm:px-8 lg:px-10 h-full flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-start mb-2.5 font-mono text-xs">
                  <span className="text-slate-400 uppercase tracking-wider text-[10px]">LONG VIEW<br />DIGITAL MARKETING</span>
                  <span className="text-cyberLime font-bold tracking-widest text-[11px]">01 // 03</span>
                </div>
                <h3 className="font-bebas text-3xl sm:text-4xl text-bone mb-1 tracking-wide group-hover:text-cyberLime transition-colors">
                  01 // DISCOVERY
                </h3>
                <div className="font-mono text-[10px] text-slate-400 uppercase tracking-widest mb-2.5">
                  METADATA — 01 AUDIT
                </div>
                <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed font-normal">
                  Understand customers, advertising gaps, and business unit economics to build a high-retention organic content roadmap.
                </p>
              </div>
            </div>
          </TiltCard>

          {/* Pillar 02: ARCHITECTURE */}
          <TiltCard maxTilt={4} className="border-b md:border-b-0 md:border-r grid-border-green">
            <div className="py-6 sm:py-8 px-6 sm:px-8 lg:px-10 h-full flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-start mb-2.5 font-mono text-xs">
                  <span className="text-slate-400 uppercase tracking-wider text-[10px]">LONG VIEW<br />DIGITAL MARKETING</span>
                  <span className="text-cyberLime font-bold tracking-widest text-[11px]">02 // 03</span>
                </div>
                <h3 className="font-bebas text-3xl sm:text-4xl text-bone mb-1 tracking-wide group-hover:text-cyberLime transition-colors">
                  02 // ARCHITECTURE
                </h3>
                <div className="font-mono text-[10px] text-slate-400 uppercase tracking-widest mb-2.5">
                  METADATA — 02 STRATEGY
                </div>
                <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed font-normal">
                  Custom-designed with 16 scheduled assets, geo-fenced Meta ad funnels, and counter NFC review hardware.
                </p>
              </div>
            </div>
          </TiltCard>

          {/* Pillar 03: EXECUTION */}
          <TiltCard maxTilt={4}>
            <div className="py-6 sm:py-8 px-6 sm:px-8 lg:px-10 h-full flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-start mb-2.5 font-mono text-xs">
                  <span className="text-slate-400 uppercase tracking-wider text-[10px]">LONG VIEW<br />DIGITAL MARKETING</span>
                  <span className="text-cyberLime font-bold tracking-widest text-[11px]">03 // 03</span>
                </div>
                <h3 className="font-bebas text-3xl sm:text-4xl text-bone mb-1 tracking-wide group-hover:text-cyberLime transition-colors">
                  03 // EXECUTION
                </h3>
                <div className="font-mono text-[10px] text-slate-400 uppercase tracking-widest mb-2.5">
                  METADATA — 03 SUCCESS
                </div>
                <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed font-normal">
                  Execution of sustainable foot traffic, weekend walk-in surges, and verified 5-star Google review velocity for your business.
                </p>
              </div>
            </div>
          </TiltCard>

        </div>
      </section>

      {/* ========================================================== */}
      {/* 3. MONTHLY PRODUCTION RHYTHM (INTERACTIVE)                 */}
      {/* ========================================================== */}
      <section id="rhythm" className="w-full border-b grid-border py-20 sm:py-28 px-6 sm:px-10 lg:px-14">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-vermilion font-mono font-bold text-xs uppercase tracking-widest block mb-2">
              // PRODUCTION TIMELINE
            </span>
            <h2 className="font-bebas text-4xl sm:text-6xl text-bone tracking-wide">
              HOW EVERY SINGLE MONTH OPERATES
            </h2>
            <p className="text-slate-400 text-sm mt-3 font-normal">
              Four weekly cycles delivering 16 assets monthly with strict adherence to publishing deadlines.
            </p>
          </div>

          <ProductionRhythm />
        </div>
      </section>

      {/* ========================================================== */}
      {/* 4. NFC HARDWARE ADVANTAGE                                  */}
      {/* ========================================================== */}
      <section id="hardware" className="w-full border-b grid-border py-20 sm:py-28 px-6 sm:px-10 lg:px-14">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-vermilion font-mono font-bold text-xs uppercase tracking-widest block">
              // HARDWARE ADVANTAGE
            </span>
            <h2 className="font-bebas text-4xl sm:text-6xl text-bone leading-tight">
              CUSTOM NFC SMART CARDS. <br />
              <span className="text-vermilion">PERMANENTLY AT YOUR BILLING COUNTER.</span>
            </h2>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
              Most businesses print QR codes on paper bills that end up crumpled in the trash. We manufacture high-grade matte smart cards customized with your branding that sit permanently at your checkout.
            </p>

            {/* 4-Step Checklist */}
            <div className="space-y-3 pt-2 font-mono text-xs">
              {[
                { step: '01', text: 'Customer completes payment or counter dining experience.' },
                { step: '02', text: 'Staff invites them: "Simply tap your phone here to leave your review!"' },
                { step: '03', text: 'Customer taps phone — no typing, search bar, or app download needed.' },
                { step: '04', text: 'Your Google Maps 5-star review modal launches instantaneously.' },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-3.5 p-3.5 rounded bg-obsidianSurface border grid-border">
                  <span className="w-6 h-6 rounded bg-vermilion/20 text-vermilion font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {item.step}
                  </span>
                  <p className="text-slate-300">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Simulator Callout */}
          <div className="lg:col-span-5 flex flex-col items-center text-center">
            <div className="p-8 rounded-xl bg-obsidianSurface border grid-border w-full max-w-sm space-y-5">
              <span className="text-cyberLime font-mono text-xs font-bold block uppercase tracking-widest">
                // LIVE TEST
              </span>
              <h4 className="font-bebas text-3xl text-bone">TEST THE 2-SECOND EXPERIENCE</h4>
              <p className="text-xs text-slate-400 font-normal leading-relaxed">
                Experience the customer journey firsthand with our instant modal preview.
              </p>
              <button
                onClick={() => setIsNfcModalOpen(true)}
                className="btn-vermilion w-full py-3.5 rounded-sm font-mono text-xs font-bold uppercase tracking-wider shadow-lg shadow-vermilion/25 flex items-center justify-center gap-2"
              >
                <span>SIMULATE PHONE TAP</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================== */}
      {/* 5. FEATURED CLIENT SPOTLIGHT                               */}
      {/* ========================================================== */}
      <section className="w-full border-b grid-border py-20 px-6 sm:px-10 lg:px-14 bg-obsidianSurface/40">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
            <div>
              <span className="text-vermilion font-mono font-bold text-xs uppercase tracking-widest block mb-1">
                // PROVEN RESULTS
              </span>
              <h2 className="font-bebas text-4xl sm:text-5xl text-bone tracking-wide">
                AMBITIOUS BRANDS IN OUR MONTHLY RHYTHM
              </h2>
            </div>
            <Link
              href="/clients"
              className="btn-bone px-5 py-2.5 rounded-sm font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-1.5"
            >
              <span>VIEW ALL CLIENTS</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Client Card */}
          <div className="bg-obsidianSurface border grid-border p-6 sm:p-8 rounded-xl flex flex-col sm:flex-row items-center sm:items-start gap-6 group hover:border-vermilion/50 transition-colors">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-lg bg-white p-2.5 flex items-center justify-center shrink-0 shadow-md relative overflow-hidden">
              <Image
                src="/maharaj-k-momos-logo.jpg"
                alt="Maharaj K Momos Logo"
                width={112}
                height={112}
                className="object-contain"
              />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h3 className="font-bebas text-3xl sm:text-4xl text-bone group-hover:text-vermilion transition-colors">
                  MAHARAJ K MOMOS
                </h3>
                <span className="text-[10px] font-mono font-bold text-vermilion bg-vermilion/10 border grid-border px-3 py-1 rounded uppercase tracking-wider self-center sm:self-auto">
                  FOOD & DINING
                </span>
              </div>
              <p className="text-xs font-mono text-slate-400 mb-3 flex items-center justify-center sm:justify-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-vermilion" />
                <span>Bopal, Ahmedabad, Gujarat</span>
              </p>
              <p className="text-sm text-slate-400 leading-relaxed font-normal">
                Ahmedabad&apos;s premier destination for authentic, steaming dumplings. Partnered with Long View for cinematic Reels, festive foot traffic campaigns, and counter NFC review hardware.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* 6. PACKAGES & RETAINERS                                    */}
      {/* ========================================================== */}
      <section id="retainers" className="w-full border-b grid-border py-24 px-6 sm:px-10 lg:px-14">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-vermilion font-mono font-bold text-xs uppercase tracking-widest block mb-2">
              // PACKAGES
            </span>
            <h2 className="font-bebas text-4xl sm:text-6xl text-bone tracking-wide">
              CHOOSE THE LEVEL OF MARKETING YOUR BUSINESS NEEDS
            </h2>
            <p className="text-slate-400 text-sm mt-3 font-normal">
              No hidden percentage cuts, secret markups, or lock-in traps. Every plan includes dedicated execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-8">
            
            {/* 3-Month Contract */}
            <TiltCard maxTilt={5} className="h-full">
              <div className="bg-obsidianSurface border grid-border p-8 rounded-xl flex flex-col justify-between h-full">
                <div>
                  <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-2">
                    01 // SPRINT
                  </span>
                  <h3 className="font-bebas text-3xl text-bone mb-1">3-MONTH CONTRACT</h3>
                  <p className="text-slate-400 text-xs mb-6">
                    Best for owners who want to test the waters.
                  </p>
                  
                  <div className="mb-6 pb-6 border-b grid-border font-mono">
                    <span className="text-4xl font-black text-bone">₹20,000</span>
                    <span className="text-xs text-slate-500"> / month</span>
                  </div>

                  <ul className="text-xs text-slate-300 space-y-3.5 font-medium">
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-vermilion shrink-0 mt-0.5" />
                      <span>
                        <strong>Social media:</strong> 12 posts a month, 4 Reels and 8 carousels or single posts
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-vermilion shrink-0 mt-0.5" />
                      <span>
                        <strong>Meta Ads:</strong> setup and management of 1 Click-to-WhatsApp campaign
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-vermilion shrink-0 mt-0.5" />
                      <span>
                        <strong>Reputation:</strong> 1 branded NFC Google Review Tap Card
                      </span>
                    </li>
                  </ul>
                </div>

                <MagneticButton strength={0.25} className="w-full mt-8">
                  <a
                    href="https://wa.me/919879583117?text=Hi%20Long%20View,%20I'm%20interested%20in%20the%203-Month%20Contract%20Plan%20(%E2%82%B920,000/mo)"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3.5 text-center bg-white/5 hover:bg-white/15 border grid-border text-bone font-mono font-bold rounded-sm text-xs uppercase tracking-wider transition"
                  >
                    SELECT 3-MONTH SPRINT ↗
                  </a>
                </MagneticButton>
              </div>
            </TiltCard>

            {/* 6-Month Contract (FEATURED) */}
            <TiltCard maxTilt={6} className="h-full">
              <div className="bg-obsidianSurface border-2 border-vermilion p-8 sm:p-9 pt-10 rounded-xl relative flex flex-col justify-between shadow-2xl shadow-vermilion/15 md:-translate-y-2 mt-4 md:mt-0 h-full">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 shimmer-pill text-white border border-white/20 text-[10px] font-mono font-black uppercase px-4 py-1.5 rounded-full tracking-widest shadow-lg shadow-vermilion/40 whitespace-nowrap z-20">
                  ★ RECOMMENDED
                </div>

                <div>
                  <span className="text-[11px] font-mono font-bold text-vermilion uppercase tracking-widest block mb-2">
                    02 // GROWTH PARTNER
                  </span>
                  <h3 className="font-bebas text-3xl text-bone mb-1">6-MONTH CONTRACT</h3>
                  <p className="text-slate-400 text-xs mb-3">
                    The Growth Partner: the best value for businesses ready to grow.
                  </p>

                  <div className="inline-block px-2.5 py-1 mb-4 rounded bg-vermilion/10 border border-vermilion/30 text-[11px] font-mono font-bold text-vermilion">
                    Save ₹2,500 a month compared with the 3-month plan
                  </div>
                  
                  <div className="mb-6 pb-6 border-b grid-border font-mono">
                    <span className="text-5xl font-black text-vermilion">₹17,500</span>
                    <span className="text-xs text-slate-500"> / month</span>
                  </div>

                  <ul className="text-xs text-slate-300 space-y-3.5 font-medium">
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-vermilion shrink-0 mt-0.5" />
                      <span>
                        <strong>Social media:</strong> 15 posts a month, 5 Reels and 10 carousels or offers
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-vermilion shrink-0 mt-0.5" />
                      <span>
                        <strong>Meta Ads:</strong> 2 managed campaigns, 1 always-on lead ad and 1 festival or seasonal offer ad
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-vermilion shrink-0 mt-0.5" />
                      <span>
                        <strong>Reputation:</strong> 2 branded NFC Google Review Tap Cards
                      </span>
                    </li>
                  </ul>
                </div>

                <MagneticButton strength={0.25} className="w-full mt-8">
                  <a
                    href="https://wa.me/919879583117?text=Hi%20Long%20View,%20I'm%20interested%20in%20the%206-Month%20Contract%20Plan%20(%E2%82%B917,500/mo)"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-4 text-center btn-vermilion text-white font-mono font-extrabold rounded-sm text-xs uppercase tracking-wider shadow-lg transition"
                  >
                    SELECT 6-MONTH CONTRACT ↗
                  </a>
                </MagneticButton>
              </div>
            </TiltCard>

            {/* 12-Month Contract */}
            <TiltCard maxTilt={5} className="h-full">
              <div className="bg-obsidianSurface border grid-border p-8 rounded-xl flex flex-col justify-between h-full">
                <div>
                  <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-2">
                    03 // FULL DELEGATION
                  </span>
                  <h3 className="font-bebas text-3xl text-bone mb-1">12-MONTH CONTRACT</h3>
                  <p className="text-slate-400 text-xs mb-3">
                    For owners looking for full marketing delegation.
                  </p>

                  <div className="inline-block px-2.5 py-1 mb-4 rounded bg-cyberLime/10 border border-cyberLime/30 text-[11px] font-mono font-bold text-cyberLime">
                    Locked for 1 year, or pay ₹1,74,000 upfront
                  </div>
                  
                  <div className="mb-6 pb-6 border-b grid-border font-mono">
                    <span className="text-4xl font-black text-bone">₹15,500</span>
                    <span className="text-xs text-slate-500"> / month</span>
                  </div>

                  <ul className="text-xs text-slate-300 space-y-3.5 font-medium">
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-cyberLime shrink-0 mt-0.5" />
                      <span>
                        <strong>Social media:</strong> 16 posts a month: Reels, client spotlights and promotional graphics
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-cyberLime shrink-0 mt-0.5" />
                      <span>
                        <strong>Meta Ads:</strong> complete ad setup, regular creative refreshes and seasonal campaigns
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-cyberLime shrink-0 mt-0.5" />
                      <span>
                        <strong>Reputation:</strong> 3 branded NFC Google Review Tap Cards
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-cyberLime shrink-0 mt-0.5" />
                      <span>
                        <strong>Support:</strong> priority WhatsApp support
                      </span>
                    </li>
                  </ul>
                </div>

                <MagneticButton strength={0.25} className="w-full mt-8">
                  <a
                    href="https://wa.me/919879583117?text=Hi%20Long%20View,%20I'm%20interested%20in%20the%2012-Month%20Contract%20Plan%20(%E2%82%B915,500/mo)"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3.5 text-center bg-white/5 hover:bg-white/15 border grid-border text-bone font-mono font-bold rounded-sm text-xs uppercase tracking-wider transition"
                  >
                    SELECT 12-MONTH CONTRACT ↗
                  </a>
                </MagneticButton>
              </div>
            </TiltCard>

          </div>

          {/* Disclaimer / Ad Spend & Hosting Note */}
          <p className="text-center font-mono text-xs text-slate-500 max-w-4xl mx-auto leading-relaxed">
            * Meta advertising spend is separate from our management fee. For the website, the client pays domain and hosting (about ₹1,500 a year).
          </p>
        </div>
      </section>

      {/* ========================================================== */}
      {/* 7. FREQUENTLY ADDRESSED QUESTIONS                          */}
      {/* ========================================================== */}
      <section id="faq" className="w-full border-b grid-border py-24 px-6 sm:px-10 lg:px-14">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-vermilion font-mono font-bold text-xs uppercase tracking-widest block mb-2">
              // TECHNICAL CLARITY
            </span>
            <h2 className="font-bebas text-4xl sm:text-5xl text-bone tracking-wide">
              FREQUENTLY ADDRESSED QUESTIONS
            </h2>
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* Nfc Modal */}
      <NfcModal isOpen={isNfcModalOpen} onClose={() => setIsNfcModalOpen(false)} />
    </div>
  );
}
