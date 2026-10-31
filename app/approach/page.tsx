import type { Metadata } from 'next';
import { Clock, CalendarCheck, ShieldCheck, ArrowUpRight } from 'lucide-react';
import ProductionRhythm from '@/components/ProductionRhythm';

export const metadata: Metadata = {
  title: "Engineering Approach & Timeline | Long View Digital Marketing",
  description: "A synchronized 3-pillar growth system for modern businesses: Discovery, Strategy Architecture, and a strict 16-asset monthly production rhythm.",
};

export default function ApproachPage() {
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
            // 01 METHODOLOGY & TIMELINE
          </span>
          <h1 className="font-bebas text-6xl sm:text-7xl md:text-8xl text-bone leading-[0.95] mb-6">
            ENGINEERING PREDICTABLE{' '}
            <span
              className="inline-block"
              style={{
                background: 'linear-gradient(90deg, #FEE180 0%, #E5A93C 50%, #C86016 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: 'serif',
                fontStyle: 'italic',
              }}
            >
              REGIONAL GROWTH
            </span>
          </h1>
          <p className="text-base text-slate-300 leading-relaxed font-normal max-w-3xl">
            A synchronized 3-pillar architectural growth system: In-depth Discovery, Full-Funnel Strategy Architecture, and a strict weekly 16-asset production rhythm designed to dominate regional customer attention.
          </p>
        </div>

        {/* THE 3 PILLARS DEEP DIVE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 items-stretch">
          
          {/* Pillar 01 */}
          <div
            className="p-8 sm:p-10 rounded-2xl flex flex-col justify-between group transition-all duration-300 hover:border-amber-500/40"
            style={frostedCardStyle}
          >
            <div>
              <div className="flex justify-between items-start mb-6 font-mono text-xs">
                <span className="text-slate-400 uppercase tracking-wider text-[10px]">LONG VIEW ARCHITECTURE</span>
                <span className="text-amber-400 font-bold tracking-widest text-xs drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]">
                  01 // 03
                </span>
              </div>

              <h3 className="font-bebas text-4xl sm:text-5xl text-white mb-2 group-hover:text-amber-300 transition-colors">
                01 // DISCOVERY
              </h3>

              <div className="font-mono text-xs text-amber-400/80 uppercase tracking-widest mb-5">
                METADATA — 01 AUDIT
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                We audit your competitors, advertising gaps, and business unit economics to construct a high-retention organic roadmap tailored to your local customer demographic.
              </p>

              <ul className="space-y-3 font-mono text-xs text-slate-300 border-t border-white/10 pt-5">
                <li className="flex items-center gap-2.5">
                  <span className="text-amber-400 drop-shadow-[0_0_6px_rgba(245,158,11,0.6)]">✓</span>
                  <span>Local Competitor Gap Analysis</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-amber-400 drop-shadow-[0_0_6px_rgba(245,158,11,0.6)]">✓</span>
                  <span>Flagship Offer Pricing & Unit Economics</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-amber-400 drop-shadow-[0_0_6px_rgba(245,158,11,0.6)]">✓</span>
                  <span>Audience Demographic & Hook Persona</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pillar 02 */}
          <div
            className="p-8 sm:p-10 rounded-2xl flex flex-col justify-between group transition-all duration-300 hover:border-amber-500/40"
            style={frostedCardStyle}
          >
            <div>
              <div className="flex justify-between items-start mb-6 font-mono text-xs">
                <span className="text-slate-400 uppercase tracking-wider text-[10px]">LONG VIEW ARCHITECTURE</span>
                <span className="text-amber-400 font-bold tracking-widest text-xs drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]">
                  02 // 03
                </span>
              </div>

              <h3 className="font-bebas text-4xl sm:text-5xl text-white mb-2 group-hover:text-amber-300 transition-colors">
                02 // ARCHITECTURE
              </h3>

              <div className="font-mono text-xs text-amber-400/80 uppercase tracking-widest mb-5">
                METADATA — 02 STRATEGY
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                Custom-engineered with 16 scheduled assets, hyper-local Meta ad funnels, and counter NFC review hardware to build an unbreakable regional moat.
              </p>

              <ul className="space-y-3 font-mono text-xs text-slate-300 border-t border-white/10 pt-5">
                <li className="flex items-center gap-2.5">
                  <span className="text-amber-400 drop-shadow-[0_0_6px_rgba(245,158,11,0.6)]">✓</span>
                  <span>16 Monthly Scheduled Visual Assets</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-amber-400 drop-shadow-[0_0_6px_rgba(245,158,11,0.6)]">✓</span>
                  <span>Geo-Fenced Meta WhatsApp Funnels</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-amber-400 drop-shadow-[0_0_6px_rgba(245,158,11,0.6)]">✓</span>
                  <span>Counter Smart NFC Hardware Setup</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pillar 03 */}
          <div
            className="p-8 sm:p-10 rounded-2xl flex flex-col justify-between group transition-all duration-300 hover:border-amber-500/40"
            style={frostedCardStyle}
          >
            <div>
              <div className="flex justify-between items-start mb-6 font-mono text-xs">
                <span className="text-slate-400 uppercase tracking-wider text-[10px]">LONG VIEW ARCHITECTURE</span>
                <span className="text-amber-400 font-bold tracking-widest text-xs drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]">
                  03 // 03
                </span>
              </div>

              <h3 className="font-bebas text-4xl sm:text-5xl text-white mb-2 group-hover:text-amber-300 transition-colors">
                03 // EXECUTION
              </h3>

              <div className="font-mono text-xs text-amber-400/80 uppercase tracking-widest mb-5">
                METADATA — 03 SUCCESS
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                Disciplined publishing velocity that produces sustainable foot traffic, weekend walk-in surges, and verified 5-star Google review momentum.
              </p>

              <ul className="space-y-3 font-mono text-xs text-slate-300 border-t border-white/10 pt-5">
                <li className="flex items-center gap-2.5">
                  <span className="text-amber-400 drop-shadow-[0_0_6px_rgba(245,158,11,0.6)]">✓</span>
                  <span>Cinema 4K Shooting & Color Grade</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-amber-400 drop-shadow-[0_0_6px_rgba(245,158,11,0.6)]">✓</span>
                  <span>Strict Zero-Missed-Deadline Publishing</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-amber-400 drop-shadow-[0_0_6px_rgba(245,158,11,0.6)]">✓</span>
                  <span>Verified 5-Star Review Growth Velocity</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* MONTHLY PRODUCTION RHYTHM */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#F59E0B] font-mono font-bold text-xs uppercase tracking-[0.25em] block mb-2 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]">
              // PRODUCTION TIMELINE
            </span>
            <h2 className="font-bebas text-4xl sm:text-6xl text-white tracking-wide">
              HOW EVERY SINGLE MONTH OPERATES
            </h2>
            <p className="text-slate-300 text-sm mt-3 font-normal">
              Four weekly cycles delivering 16 assets monthly with strict adherence to publishing deadlines.
            </p>
          </div>

          <ProductionRhythm />
        </div>

        {/* SLA & COMMITMENTS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 font-mono text-xs">
          <div className="p-6 rounded-2xl" style={frostedCardStyle}>
            <Clock className="w-5 h-5 text-vermilion mb-3 drop-shadow-[0_0_8px_rgba(255,68,26,0.6)]" />
            <h4 className="font-bold text-white text-sm uppercase mb-1">48-Hour Footage Turnaround</h4>
            <p className="text-slate-400 leading-relaxed font-normal">
              Raw footage shot in your business is ingested, graded, and formatted into initial cuts within 48 hours.
            </p>
          </div>
          <div className="p-6 rounded-2xl" style={frostedCardStyle}>
            <CalendarCheck className="w-5 h-5 text-amber-400 mb-3 drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
            <h4 className="font-bold text-white text-sm uppercase mb-1">Guaranteed Publishing SLA</h4>
            <p className="text-slate-400 leading-relaxed font-normal">
              Strict calendar adherence. Your 16 scheduled monthly assets publish at peak engagement hours without fail.
            </p>
          </div>
          <div className="p-6 rounded-2xl" style={frostedCardStyle}>
            <ShieldCheck className="w-5 h-5 text-amber-400 mb-3 drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
            <h4 className="font-bold text-white text-sm uppercase mb-1">100% Native Asset Rights</h4>
            <p className="text-slate-400 leading-relaxed font-normal">
              All raw clips, cinematic 4K B-roll, and high-res imagery belong entirely to you for lifetime promotional use.
            </p>
          </div>
        </div>

        {/* Bottom Direct Access Card */}
        <div
          className="p-8 sm:p-12 rounded-3xl text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden"
          style={{
            ...frostedCardStyle,
            borderLeft: '4px solid #FF441A',
          }}
        >
          <span className="text-xs font-mono font-bold text-[#F59E0B] uppercase tracking-[0.25em] block mb-2 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]">
            // DIRECT ACCESS
          </span>
          <h2 className="font-bebas text-3xl sm:text-5xl text-white mb-4">
            WANT THIS SYSTEM DEPLOYED FOR YOUR BRAND?
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-8 leading-relaxed font-normal">
            We intake a strictly limited number of regional clients each quarter to protect high-touch production quality. Inquire via WhatsApp to claim your category.
          </p>
          <a
            href="https://wa.me/919879583117?text=Hi%20Long%20View,%20I'd%20like%20to%20discuss%20joining%20as%20a%20growth%20client"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#FF5722] via-[#FF441A] to-[#E63900] hover:from-[#FF6A3D] hover:to-[#FF5722] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-[0_0_25px_rgba(255,68,26,0.5)] transition-all hover:scale-[1.02]"
          >
            <span>CLAIM CATEGORY ON WHATSAPP</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
}
