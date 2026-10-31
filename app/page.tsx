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
import HeroInteractiveCollage from '@/components/HeroInteractiveCollage';

export default function HomePage() {
  const [isNfcModalOpen, setIsNfcModalOpen] = useState(false);

  return (
    <div className="w-full flex flex-col justify-between">
      {/* ========================================================== */}
      {/* 1. HERO SECTION WITH INTEGRATED BOTTOM MARQUEE             */}
      {/* ========================================================== */}
      <section className="w-full relative h-screen max-h-screen overflow-hidden flex flex-col justify-between pt-16 pb-2 px-8 lg:px-14 border-b border-white/[0.08] hero-backdrop-bg">
        
        <div className="w-full max-w-[1700px] mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-6 lg:gap-8 relative z-10 my-auto py-1">
          
          {/* LEFT COLUMN: CRISP ARCHITECTURAL & MONUMENTAL TYPOGRAPHY (LEFT 50%) */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-3.5 py-1">
            <div>
              {/* Monospaced Super-heading */}
              <span className="font-mono text-[10px] sm:text-[11px] text-[#F59E0B] uppercase tracking-[0.25em] block mb-2 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]">
                // FULL-SERVICE DIGITAL GROWTH STUDIO
              </span>

              {/* Stacked Monumental Headline with 3 Distinct Typographic Styles - Scaled ~10% */}
              <h1 className="tracking-tight select-text">
                {/* 1st Line: Mammoth, ultra-bold flat white sans-serif */}
                <span className="block font-bebas text-5xl lg:text-7xl text-white leading-[0.9] drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
                  BE SEEN.
                </span>

                {/* 2nd Line: Sprawling, elegant, high-contrast serif-italic with metallic amber-gold gradient - ONE SINGLE LINE */}
                <span
                  className="block whitespace-nowrap text-5xl lg:text-7xl leading-[1.05] tracking-wide my-1 drop-shadow-[0_0_25px_rgba(245,158,11,0.5)]"
                  style={{
                    background: 'linear-gradient(90deg, #FEE180 0%, #E5A93C 50%, #C86016 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontFamily: 'serif',
                    fontStyle: 'italic',
                  }}
                >
                  BE REMEMBERED.
                </span>

                {/* 3rd Line: Massive fiery orange block lettering */}
                <span
                  className="block font-bebas text-5xl lg:text-7xl leading-[0.9] drop-shadow-[0_4px_30px_rgba(255,106,0,0.65)]"
                  style={{
                    background: 'linear-gradient(180deg, #FF6A00 0%, #D43800 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 900,
                  }}
                >
                  BE CHOSEN.
                </span>
              </h1>

              {/* Neutral readable white/slate description - compact text-sm */}
              <p className="mt-2.5 text-sm leading-relaxed max-w-md text-slate-300 font-normal select-text">
                Local business marketing without the agency fluff. High-retention Instagram Reels, hyper-local Meta Ads, and automated 5-star Google Review hardware.
              </p>

              {/* Action Buttons: 2 Pill-shaped CTAs with compact padding */}
              <div className="mt-4 flex flex-wrap items-center gap-3.5">
                <MagneticButton strength={0.25}>
                  <a
                    href="https://wa.me/919879583117?text=Hi%20Long%20View,%20I'm%20interested%20in%20the%203-Month%20Contract%20Plan%20(%E2%82%B920,000/mo)"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full px-6 py-2.5 bg-gradient-to-r from-[#FF5722] via-[#FF441A] to-[#E63900] hover:from-[#FF6A3D] hover:to-[#FF5722] text-white font-mono text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(255,68,26,0.5)] transition-all hover:scale-[1.02]"
                  >
                    <span>START 3-MONTH SPRINT</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </MagneticButton>

                <MagneticButton strength={0.25}>
                  <Link
                    href="/approach"
                    className="rounded-full px-6 py-2.5 bg-white/[0.06] hover:bg-white/[0.14] border border-white/20 hover:border-white/40 backdrop-blur-md text-white font-mono text-xs font-semibold uppercase tracking-wider transition-all block"
                  >
                    VIEW METHODOLOGY →
                  </Link>
                </MagneticButton>
              </div>
            </div>

            {/* Bottom Features: Gold-bordered Worldwide Capsule & 16 Pieces/Mo Flag */}
            <div className="pt-3 mt-3 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
              {/* Bottom Left Capsule */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/40 bg-black/40 backdrop-blur-md text-[10px] font-mono tracking-wider text-slate-300 shadow-sm select-text">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_#F59E0B] animate-pulse"></span>
                <span>SERVING AMBITIOUS BUSINESSES WORLDWIDE</span>
              </div>

              {/* Bottom Right Flag */}
              <div className="inline-flex items-center px-2.5 py-0.5 rounded-sm border border-amber-500/30 bg-amber-500/10 text-amber-400 font-mono text-[10px] font-bold tracking-widest select-text">
                // 16 PIECES/MO
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: 3D INTERACTIVE UI COLLAGE ON VOLUMETRIC VORTEX CANVAS (SCALED ~10%) */}
          <div className="lg:col-span-6 relative flex items-center justify-center transform scale-[0.92] origin-center">
            <HeroInteractiveCollage onCardClick={() => setIsNfcModalOpen(true)} />
          </div>

        </div>

        {/* INTEGRATED FULL-WIDTH BOTTOM TICKER INSIDE THE HERO VIEWPORT */}
        <div className="w-full relative z-20">
          <MarqueeTicker className="border-t border-white/10" />
        </div>
      </section>

      {/* ========================================================== */}
      {/* 2. 3-PILLAR STRIP (DISCOVERY / ARCHITECTURE / EXECUTION)    */}
      {/* ========================================================== */}
      <section id="approach" className="w-full border-b border-white/10 editorial-glass-card relative flex-none">
        <div className="grid grid-cols-1 md:grid-cols-3 w-full">
          
          {/* Pillar 01: DISCOVERY */}
          <TiltCard maxTilt={4} className="border-b md:border-b-0 md:border-r border-white/10">
            <div className="py-6 sm:py-8 px-6 sm:px-8 lg:px-10 h-full flex flex-col justify-between group hover:bg-white/[0.02] transition-colors">
              <div>
                <div className="flex justify-between items-start mb-2.5 font-mono text-xs">
                  <span className="text-slate-400 uppercase tracking-wider text-[10px]">LONG VIEW<br />DIGITAL MARKETING</span>
                  <span className="text-amber-400 font-bold tracking-widest text-[11px]">01 // 03</span>
                </div>
                <h3 className="font-bebas text-3xl sm:text-4xl text-white mb-1 tracking-wide group-hover:text-amber-400 transition-colors">
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
          <TiltCard maxTilt={4} className="border-b md:border-b-0 md:border-r border-white/10">
            <div className="py-6 sm:py-8 px-6 sm:px-8 lg:px-10 h-full flex flex-col justify-between group hover:bg-white/[0.02] transition-colors">
              <div>
                <div className="flex justify-between items-start mb-2.5 font-mono text-xs">
                  <span className="text-slate-400 uppercase tracking-wider text-[10px]">LONG VIEW<br />DIGITAL MARKETING</span>
                  <span className="text-amber-400 font-bold tracking-widest text-[11px]">02 // 03</span>
                </div>
                <h3 className="font-bebas text-3xl sm:text-4xl text-white mb-1 tracking-wide group-hover:text-amber-400 transition-colors">
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
            <div className="py-6 sm:py-8 px-6 sm:px-8 lg:px-10 h-full flex flex-col justify-between group hover:bg-white/[0.02] transition-colors">
              <div>
                <div className="flex justify-between items-start mb-2.5 font-mono text-xs">
                  <span className="text-slate-400 uppercase tracking-wider text-[10px]">LONG VIEW<br />DIGITAL MARKETING</span>
                  <span className="text-amber-400 font-bold tracking-widest text-[11px]">03 // 03</span>
                </div>
                <h3 className="font-bebas text-3xl sm:text-4xl text-white mb-1 tracking-wide group-hover:text-amber-400 transition-colors">
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
              <span className="text-amber-400 font-mono text-xs font-bold block uppercase tracking-widest">
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

                  <div className="inline-block px-2.5 py-1 mb-4 rounded bg-amber-500/10 border border-amber-500/30 text-[11px] font-mono font-bold text-amber-400">
                    Locked for 1 year, or pay ₹1,74,000 upfront
                  </div>
                  
                  <div className="mb-6 pb-6 border-b grid-border font-mono">
                    <span className="text-4xl font-black text-bone">₹15,500</span>
                    <span className="text-xs text-slate-500"> / month</span>
                  </div>

                  <ul className="text-xs text-slate-300 space-y-3.5 font-medium">
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5 drop-shadow-[0_0_6px_rgba(245,158,11,0.5)]" />
                      <span>
                        <strong>Social media:</strong> 16 posts a month: Reels, client spotlights and promotional graphics
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5 drop-shadow-[0_0_6px_rgba(245,158,11,0.5)]" />
                      <span>
                        <strong>Meta Ads:</strong> complete ad setup, regular creative refreshes and seasonal campaigns
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5 drop-shadow-[0_0_6px_rgba(245,158,11,0.5)]" />
                      <span>
                        <strong>Reputation:</strong> 3 branded NFC Google Review Tap Cards
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5 drop-shadow-[0_0_6px_rgba(245,158,11,0.5)]" />
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
