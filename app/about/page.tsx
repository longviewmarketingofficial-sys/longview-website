'use client';

import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  Target, 
  Compass, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  TrendingUp, 
  Layers, 
  Users 
} from 'lucide-react';
import TiltCard from '@/components/TiltCard';
import LongViewLogo from '@/components/LongViewLogo';

interface Founder {
  name: string;
  role: string;
  designation: string;
  image?: string;
  domains: string[];
}

const FOUNDERS: Founder[] = [
  {
    name: 'Harit Jayprakash',
    role: 'Co-Founder',
    designation: 'Chief Operating Officer (COO)',
    image: '/team/harit-jayprakash.jpg',
    domains: [
      'Client Relations',
      'Web Development Coordination',
      'Operations & Design',
    ],
  },
  {
    name: 'Kathan Patel',
    role: 'Co-Founder',
    designation: 'Chief Executive Officer (CEO)',
    image: '/team/kathan-patel.jpg',
    domains: [
      'Digital Strategy',
      'Performance Marketing',
      'Technology & Finance',
    ],
  },
  {
    name: 'Jay Thakkar',
    role: 'Co-Founder',
    designation: 'Chief Business Development Officer (CBDO)',
    // Placeholder as requested, will be updated once image is provided
    domains: [
      'Business Development',
      'Client Acquisition',
      'Negotiation & Social Media',
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="relative z-10 py-16 sm:py-24 px-6 sm:px-10 lg:px-14 w-full luxury-bg min-h-screen">
      <div className="w-full max-w-7xl mx-auto space-y-24 sm:space-y-32">
        
        {/* ========================================================== */}
        {/* 1. HERO HEADER                                             */}
        {/* ========================================================== */}
        <section className="max-w-4xl pt-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 font-mono text-[11px] font-bold tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_#F59E0B] animate-pulse" />
            // ABOUT LONGVIEW
          </div>
          
          <h1 className="font-bebas text-6xl sm:text-7xl md:text-8xl text-white tracking-tight leading-none mb-6">
            BUILDING BRANDS.{' '}
            <span className="font-serif italic font-normal text-gold-gradient block sm:inline">
              CREATING CONNECTIONS.
            </span>{' '}
            <span className="text-orange-gradient block">
              DRIVING GROWTH.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-3xl">
            At Longview, we believe every business deserves the opportunity to grow, compete, and establish a commanding presence in the digital world.
          </p>
        </section>

        {/* ========================================================== */}
        {/* 2. THE ORIGIN & CAPABILITY SYSTEM                          */}
        {/* ========================================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Story Narrative (Left) */}
          <div className="lg:col-span-7 editorial-glass-card p-8 sm:p-10 rounded-2xl flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute -top-16 -left-16 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <span className="font-mono text-xs text-amber-400 uppercase tracking-widest block mb-4">
                // 01 THE ORIGIN
              </span>

              <h2 className="font-bebas text-3xl sm:text-4xl text-white mb-6 tracking-wide">
                BRIDGING THE GAP BETWEEN <span className="font-serif italic font-normal text-gold-gradient">EXCEPTIONAL PRODUCTS</span> AND <span className="text-orange-gradient">DIGITAL REACH</span>
              </h2>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  We started Longview with a simple observation: many businesses have exceptional products and services, but struggle to reach the right audience because they lack a strong digital presence, effective marketing strategies, and the right brand positioning.
                </p>
                <p className="text-white font-medium">
                  We saw an opportunity to bridge that gap.
                </p>
                <p>
                  What started as an idea between three partners has evolved into a unified vision to help businesses transform their digital presence through creative thinking, strategic marketing, and technology-driven solutions.
                </p>
                <p>
                  At Longview, we don&apos;t just aim to make brands visible. We aim to make them memorable, competitive, and ready for what comes next.
                </p>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-white/10 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/15 flex items-center justify-center p-2 shrink-0">
                <LongViewLogo className="w-full h-full" glow />
              </div>
              <p className="font-mono text-xs text-amber-400 font-bold tracking-wider uppercase">
                THINK BEYOND TODAY. GROW WITH LONGVIEW.
              </p>
            </div>
          </div>

          {/* Full-Stack Solutions (Right) */}
          <div className="lg:col-span-5 editorial-glass-card p-8 sm:p-10 rounded-2xl flex flex-col justify-between shadow-2xl relative overflow-hidden border-t-2 border-t-amber-500/50">
            <div className="absolute top-0 right-0 w-36 h-36 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <span className="font-mono text-xs text-amber-400 uppercase tracking-widest block mb-4">
                // FULL-SPECTRUM EXECUTION
              </span>

              <h3 className="font-bebas text-2xl sm:text-3xl text-white mb-4 tracking-wide">
                SYNCHRONIZED CREATIVE & PERFORMANCE
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                We bring together creativity, strategy, and execution to help brands stand out in an increasingly competitive marketplace with tailor-made solutions:
              </p>

              <div className="space-y-3 font-mono text-xs">
                {[
                  'Social Media Management & Native Reels',
                  'Performance-Driven Meta Ad Campaigns',
                  'High-Conversion Website Infrastructure',
                  'Distinct Brand Identity Systems',
                  'Targeted Lead & Foot Traffic Generation',
                  'Smart NFC Google Review Stand Hardware',
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.08]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 drop-shadow-[0_0_6px_rgba(245,158,11,0.5)]" />
                    <span className="text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 font-mono text-[11px] text-slate-400 flex items-center justify-between">
              <span>// ARCHITECTURAL DISCIPLINE</span>
              <span className="text-amber-400 font-bold">100% IN-HOUSE</span>
            </div>
          </div>

        </section>

        {/* ========================================================== */}
        {/* 3. ETHICAL FOUNDATION & VALUES                              */}
        {/* ========================================================== */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-amber-400 font-mono font-bold text-xs uppercase tracking-widest block mb-2">
              // 02 WHAT TRULY DEFINES US
            </span>
            <h2 className="font-bebas text-4xl sm:text-5xl text-white tracking-wide">
              OUR CORE <span className="font-serif italic font-normal text-gold-gradient">PHILOSOPHY</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm font-normal mt-2">
              We reject vanity metrics, inflated claims, and opaque retainer markups in favor of pure accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            
            {/* Value 1 */}
            <TiltCard maxTilt={5} className="h-full">
              <div className="editorial-glass-card p-8 rounded-2xl h-full flex flex-col justify-between hover:border-amber-500/40 transition-all duration-300">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-amber-400/80 uppercase tracking-widest block mb-1">
                    PRINCIPLE 01
                  </span>
                  <h3 className="font-bebas text-2xl text-white mb-3">
                    TRANSPARENCY OVER PROMISES
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                    We maintain crystal-clear communication, transparent advertising budgets, and straightforward pricing. Clients always know where their investment goes and what is being produced.
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-white/10 font-mono text-[10px] text-slate-500 uppercase tracking-wider">
                  // ZERO AD SPEND MARKUPS
                </div>
              </div>
            </TiltCard>

            {/* Value 2 */}
            <TiltCard maxTilt={5} className="h-full">
              <div className="editorial-glass-card p-8 rounded-2xl h-full flex flex-col justify-between hover:border-amber-500/40 transition-all duration-300">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5">
                    <Compass className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-amber-400/80 uppercase tracking-widest block mb-1">
                    PRINCIPLE 02
                  </span>
                  <h3 className="font-bebas text-2xl text-white mb-3">
                    STRATEGY OVER SHORTCUTS
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                    No recycled templates or arbitrary posting schedules. Every campaign is engineered from client unit economics, audience geography, and sustainable long-term brand equity.
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-white/10 font-mono text-[10px] text-slate-500 uppercase tracking-wider">
                  // STRUCTURED PRODUCTION RHYTHM
                </div>
              </div>
            </TiltCard>

            {/* Value 3 */}
            <TiltCard maxTilt={5} className="h-full">
              <div className="editorial-glass-card p-8 rounded-2xl h-full flex flex-col justify-between hover:border-amber-500/40 transition-all duration-300">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-amber-400/80 uppercase tracking-widest block mb-1">
                    PRINCIPLE 03
                  </span>
                  <h3 className="font-bebas text-2xl text-white mb-3">
                    GENUINE RESULTS OVER INFLATION
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                    We focus on driving measurable business opportunities and verified Google reputation velocity, strictly avoiding misleading numbers or artificial lead-generation claims.
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-white/10 font-mono text-[10px] text-slate-500 uppercase tracking-wider">
                  // VERIFIABLE FOOT TRAFFIC & LEADS
                </div>
              </div>
            </TiltCard>

          </div>
        </section>

        {/* ========================================================== */}
        {/* 4. MISSION & VISION DUAL MONUMENTS                          */}
        {/* ========================================================== */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Mission */}
          <div className="editorial-glass-card p-8 sm:p-12 rounded-2xl relative overflow-hidden flex flex-col justify-between border-t-2 border-t-amber-500/70 shadow-2xl">
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-[10px] font-bold uppercase tracking-widest mb-6">
                <Target className="w-3.5 h-3.5" />
                <span>// 03 OUR MISSION</span>
              </div>

              <h3 className="font-bebas text-3xl sm:text-4xl text-white mb-4 tracking-wide">
                EMPOWERING SUSTAINABLE <span className="font-serif italic font-normal text-gold-gradient">GROWTH</span>
              </h3>

              <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
                To empower businesses with accessible, innovative, and result-oriented digital solutions that strengthen their online presence, connect them with the right audience, and support sustainable business growth.
              </p>
            </div>

            <div className="pt-8 mt-8 border-t border-white/10 font-mono text-xs text-amber-400/90 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>MEASURABLE BUSINESS IMPACT</span>
            </div>
          </div>

          {/* Vision */}
          <div className="editorial-glass-card p-8 sm:p-12 rounded-2xl relative overflow-hidden flex flex-col justify-between border-t-2 border-t-orange-500/70 shadow-2xl">
            <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-mono text-[10px] font-bold uppercase tracking-widest mb-6">
                <Compass className="w-3.5 h-3.5" />
                <span>// 04 OUR VISION</span>
              </div>

              <h3 className="font-bebas text-3xl sm:text-4xl text-white mb-4 tracking-wide">
                THE PREMIER <span className="text-orange-gradient">GROWTH PARTNER</span>
              </h3>

              <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
                To become a trusted digital growth partner for businesses across industries by combining creativity, technology, and strategic thinking to create meaningful, measurable, and lasting impact.
              </p>
            </div>

            <div className="pt-8 mt-8 border-t border-white/10 font-mono text-xs text-orange-400/90 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF5722]" />
              <span>LONG-HORIZON PARTNERSHIP</span>
            </div>
          </div>

        </section>

        {/* ========================================================== */}
        {/* 5. CO-FOUNDERS / LEADERSHIP COUNCIL                        */}
        {/* ========================================================== */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-amber-400 font-mono font-bold text-xs uppercase tracking-widest block mb-2">
              // 05 LEADERSHIP
            </span>
            <h2 className="font-bebas text-4xl sm:text-6xl text-white tracking-wide">
              THE CO-FOUNDING <span className="font-serif italic font-normal text-gold-gradient">TEAM</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm font-normal mt-2">
              Three partners uniting operations, performance marketing, and regional business acquisition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {FOUNDERS.map((founder, index) => (
              <div
                key={index}
                className="editorial-glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group hover:border-amber-500/40 transition-all duration-300 shadow-xl relative overflow-hidden"
              >
                {/* Subtle Amber Glow */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all pointer-events-none" />

                <div>
                  {/* Portrait Container */}
                  <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 bg-[#0a0e18] border border-white/15 shadow-inner">
                    {founder.image ? (
                      <Image
                        src={founder.image}
                        alt={`${founder.name} - ${founder.designation}`}
                        fill
                        className="object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : (
                      /* Sleek Executive Placeholder for Jay Thakkar */
                      <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-white/[0.05] to-transparent">
                        <div className="w-20 h-20 rounded-full bg-white/[0.06] border border-amber-500/30 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                          <Users className="w-8 h-8 text-amber-400/80" />
                        </div>
                        <span className="font-mono text-[11px] font-bold tracking-widest text-amber-400 uppercase block mb-1">
                          EXECUTIVE PORTRAIT
                        </span>
                        <span className="font-mono text-[10px] text-slate-500">
                          // PHOTO PENDING
                        </span>
                      </div>
                    )}
                    
                    {/* Role Pill Overlay */}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                      {founder.role}
                    </div>
                  </div>

                  {/* Name & Designation */}
                  <div className="mb-4">
                    <h3 className="font-bebas text-3xl sm:text-4xl text-white group-hover:text-amber-400 transition-colors">
                      {founder.name}
                    </h3>
                    <p className="font-mono text-xs text-amber-400/90 font-semibold tracking-wide">
                      {founder.designation}
                    </p>
                  </div>

                  {/* Domain Badges */}
                  <div className="space-y-1.5 pt-4 border-t border-white/10 font-mono text-[11px]">
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-2">
                      // CORE EXPERTISE
                    </span>
                    {founder.domains.map((dom, i) => (
                      <div 
                        key={i} 
                        className="flex items-center gap-2 text-slate-300 py-1 px-2.5 rounded bg-white/[0.03] border border-white/[0.06]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80" />
                        <span>{dom}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>FOUNDING PARTNER</span>
                  <span className="text-amber-400 font-bold">LONGVIEW</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================== */}
        {/* 6. BOTTOM BANNER                                           */}
        {/* ========================================================== */}
        <section className="editorial-glass-card p-8 sm:p-14 rounded-2xl text-center max-w-4xl mx-auto border-t-2 border-t-amber-500/60 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_40px_rgba(255,107,0,0.15)] relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block mb-2 relative z-10">
            // READY FOR WHAT COMES NEXT
          </span>
          
          <h2 className="font-bebas text-4xl sm:text-6xl text-white mb-4 relative z-10">
            THINK BEYOND TODAY. <span className="font-serif italic font-normal text-gold-gradient">GROW WITH LONGVIEW.</span>
          </h2>
          
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-8 leading-relaxed font-normal relative z-10">
            Partner directly with our founders to construct your high-conversion creative rhythm, localized Meta ad architecture, and countertop NFC review hardware.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
            <a
              href="https://wa.me/919879583117?text=Hi%20Long%20View,%20I'd%20like%20to%20discuss%20partnering%20with%20your%20team"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#FF5722] to-[#FF441A] text-white font-mono text-xs font-extrabold uppercase tracking-wider shadow-[0_0_30px_rgba(255,87,34,0.4)] hover:shadow-[0_0_45px_rgba(255,87,34,0.6)] hover:scale-[1.02] transition-all"
            >
              <span>CONNECT WITH FOUNDERS ON WHATSAPP</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <Link
              href="/investments"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl editorial-glass-card hover:bg-white/10 hover:border-amber-500/40 text-white font-mono text-xs font-extrabold uppercase tracking-wider transition-all"
            >
              <span>VIEW PACKAGES & PRICING</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
