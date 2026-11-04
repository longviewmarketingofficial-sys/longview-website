'use client';

import { useState } from 'react';
import { Check, Plus, Minus, ArrowUpRight } from 'lucide-react';
import TiltCard from '@/components/TiltCard';
import MagneticButton from '@/components/MagneticButton';

const INVESTMENT_FAQS = [
  {
    q: "Are Meta ad budgets included in the retainer fee?",
    a: "No. Retainer fees cover end-to-end creative production, copy architecture, ad campaign setup, A/B audience targeting, and NFC hardware. Ad spend goes directly to Meta without markups or percentage cuts."
  },
  {
    q: "How quickly does content production begin after signup?",
    a: "Within 48 hours of onboarding, our crew conducts the initial shoot at your business location. The first batch of edited Reels and carousels is delivered for review within 3 business days."
  },
  {
    q: "Do we own the raw footage and videos?",
    a: "Yes, 100%. All high-resolution 4K B-roll, photographs, and published creative assets belong entirely to your business for lifetime native use across any channel."
  },
  {
    q: "What happens if we need to update our Google Maps link?",
    a: "All our NFC hardware is connected via dynamic cloud routing. If your Google Maps link or destination ever changes, we update it remotely in 30 seconds with zero need to replace the physical hardware."
  }
];

export default function InvestmentsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="relative z-10 py-16 sm:py-24 px-6 sm:px-10 lg:px-14 w-full luxury-bg min-h-screen">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Architectural Page Header */}
        <div className="max-w-4xl mb-16">
          <span className="font-mono text-xs text-amber-400 uppercase tracking-widest block mb-2">
            // PACKAGES & INVESTMENT
          </span>
          <h1 className="font-bebas text-6xl sm:text-7xl md:text-8xl text-white tracking-tight leading-none mb-6">
            CHOOSE THE LEVEL OF MARKETING <span className="font-serif italic font-normal text-gold-gradient">YOUR BUSINESS</span> <span className="text-orange-gradient">NEEDS</span>
          </h1>
          <p className="text-base text-slate-300 leading-relaxed font-normal">
            No hidden percentage markups, ad-budget kickbacks, or lock-in traps. Every plan includes dedicated visual production, ad campaign management, and custom countertop NFC hardware.
          </p>
        </div>

        {/* PRICING CARDS WITH 3D TILT & GLARE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-8">
          
          {/* 3-Month Contract */}
          <TiltCard maxTilt={5} className="h-full">
            <div className="editorial-glass-card p-8 rounded-2xl flex flex-col justify-between h-full hover:border-amber-500/30 transition-all duration-300 shadow-xl relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
              <div>
                <span className="text-[11px] font-mono font-bold text-amber-400/80 uppercase tracking-widest block mb-2">
                  01 // SPRINT
                </span>
                <h3 className="font-bebas text-3xl text-white mb-1">3-MONTH CONTRACT</h3>
                <p className="text-slate-400 text-xs mb-6">
                  Best for owners who want to test the waters.
                </p>
                
                <div className="mb-6 pb-6 border-b border-white/10 font-mono">
                  <span className="text-4xl font-black text-white">₹20,000</span>
                  <span className="text-xs text-slate-400"> / month</span>
                </div>

                <ul className="text-xs text-slate-300 space-y-3.5 font-medium">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5 drop-shadow-[0_0_6px_rgba(245,158,11,0.5)]" />
                    <span>
                      <strong className="text-white">Social media:</strong> 12 posts a month, 4 Reels and 8 carousels or single posts
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5 drop-shadow-[0_0_6px_rgba(245,158,11,0.5)]" />
                    <span>
                      <strong className="text-white">Meta Ads:</strong> setup and management of 1 Click-to-WhatsApp campaign
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5 drop-shadow-[0_0_6px_rgba(245,158,11,0.5)]" />
                    <span>
                      <strong className="text-white">Reputation:</strong> 1 branded NFC Google Review Tap Card
                    </span>
                  </li>
                </ul>
              </div>

              <MagneticButton strength={0.25} className="w-full mt-8">
                <a
                  href="https://wa.me/919879583117?text=Hi%20Long%20View,%20I'm%20interested%20in%20the%203-Month%20Contract%20Plan%20(%E2%82%B920,000/mo)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3.5 text-center editorial-glass-card hover:bg-white/10 hover:border-amber-500/40 text-white font-mono font-bold rounded-xl text-xs uppercase tracking-wider transition-all duration-200"
                >
                  SELECT 3-MONTH SPRINT ↗
                </a>
              </MagneticButton>
            </div>
          </TiltCard>

          {/* 6-Month Contract (FEATURED RECOMMENDED CARD) */}
          <TiltCard maxTilt={6} className="h-full">
            <div 
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 107, 0, 0.5)',
                boxShadow: '0 0 50px rgba(255, 107, 0, 0.25), 0 30px 60px rgba(0, 0, 0, 0.8), inset 0 1px 1px rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
              }}
              className="p-8 sm:p-9 pt-10 rounded-2xl relative flex flex-col justify-between md:-translate-y-2 mt-4 md:mt-0 h-full transition-all duration-300"
            >
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#FF5722] to-[#FF441A] text-white border border-white/30 text-[10px] font-mono font-black uppercase px-4 py-1.5 rounded-full tracking-widest shadow-[0_0_25px_rgba(255,68,26,0.6)] whitespace-nowrap z-20">
                ★ RECOMMENDED
              </div>

              <div>
                <span className="text-[11px] font-mono font-bold text-amber-400 uppercase tracking-widest block mb-2">
                  02 // GROWTH PARTNER
                </span>
                <h3 className="font-bebas text-3xl text-white mb-1">6-MONTH CONTRACT</h3>
                <p className="text-slate-300 text-xs mb-3">
                  The Growth Partner: the best value for businesses ready to grow.
                </p>

                <div className="inline-block px-3 py-1 mb-4 rounded-full bg-amber-500/15 border border-amber-500/30 text-[11px] font-mono font-bold text-amber-400">
                  Save ₹2,500 a month compared with the 3-month plan
                </div>
                
                <div className="mb-6 pb-6 border-b border-white/10 font-mono">
                  <span className="text-5xl font-black text-orange-gradient">₹17,500</span>
                  <span className="text-xs text-slate-400"> / month</span>
                </div>

                <ul className="text-xs text-slate-300 space-y-3.5 font-medium">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5 drop-shadow-[0_0_6px_rgba(245,158,11,0.5)]" />
                    <span>
                      <strong className="text-white">Social media:</strong> 15 posts a month, 5 Reels and 10 carousels or offers
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5 drop-shadow-[0_0_6px_rgba(245,158,11,0.5)]" />
                    <span>
                      <strong className="text-white">Meta Ads:</strong> 2 managed campaigns, 1 always-on lead ad and 1 festival or seasonal offer ad
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5 drop-shadow-[0_0_6px_rgba(245,158,11,0.5)]" />
                    <span>
                      <strong className="text-white">Reputation:</strong> 2 branded NFC Google Review Tap Cards
                    </span>
                  </li>
                </ul>
              </div>

              <MagneticButton strength={0.25} className="w-full mt-8">
                <a
                  href="https://wa.me/919879583117?text=Hi%20Long%20View,%20I'm%20interested%20in%20the%206-Month%20Contract%20Plan%20(%E2%82%B917,500/mo)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 text-center rounded-xl bg-gradient-to-r from-[#FF5722] to-[#FF441A] text-white font-mono font-bold text-xs uppercase tracking-wider shadow-[0_0_30px_rgba(255,87,34,0.4)] hover:shadow-[0_0_45px_rgba(255,87,34,0.6)] hover:scale-[1.02] transition-all"
                >
                  SELECT 6-MONTH CONTRACT ↗
                </a>
              </MagneticButton>
            </div>
          </TiltCard>

          {/* 12-Month Contract */}
          <TiltCard maxTilt={5} className="h-full">
            <div className="editorial-glass-card p-8 rounded-2xl flex flex-col justify-between h-full hover:border-amber-500/30 transition-all duration-300 shadow-xl relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
              <div>
                <span className="text-[11px] font-mono font-bold text-amber-400/80 uppercase tracking-widest block mb-2">
                  03 // FULL DELEGATION
                </span>
                <h3 className="font-bebas text-3xl text-white mb-1">12-MONTH CONTRACT</h3>
                <p className="text-slate-400 text-xs mb-3">
                  For owners looking for full marketing delegation.
                </p>

                <div className="inline-block px-3 py-1 mb-4 rounded-full bg-amber-500/10 border border-amber-500/30 text-[11px] font-mono font-bold text-amber-400">
                  Locked for 1 year, or pay ₹1,74,000 upfront
                </div>
                
                <div className="mb-6 pb-6 border-b border-white/10 font-mono">
                  <span className="text-4xl font-black text-white">₹15,500</span>
                  <span className="text-xs text-slate-400"> / month</span>
                </div>

                <ul className="text-xs text-slate-300 space-y-3.5 font-medium">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5 drop-shadow-[0_0_6px_rgba(245,158,11,0.5)]" />
                    <span>
                      <strong className="text-white">Social media:</strong> 16 posts a month: Reels, client spotlights and promotional graphics
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5 drop-shadow-[0_0_6px_rgba(245,158,11,0.5)]" />
                    <span>
                      <strong className="text-white">Meta Ads:</strong> complete ad setup, regular creative refreshes and seasonal campaigns
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5 drop-shadow-[0_0_6px_rgba(245,158,11,0.5)]" />
                    <span>
                      <strong className="text-white">Reputation:</strong> 3 branded NFC Google Review Tap Cards
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5 drop-shadow-[0_0_6px_rgba(245,158,11,0.5)]" />
                    <span>
                      <strong className="text-white">Support:</strong> priority WhatsApp support
                    </span>
                  </li>
                </ul>
              </div>

              <MagneticButton strength={0.25} className="w-full mt-8">
                <a
                  href="https://wa.me/919879583117?text=Hi%20Long%20View,%20I'm%20interested%20in%20the%2012-Month%20Contract%20Plan%20(%E2%82%B915,500/mo)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3.5 text-center editorial-glass-card hover:bg-white/10 hover:border-amber-500/40 text-white font-mono font-bold rounded-xl text-xs uppercase tracking-wider transition-all duration-200"
                >
                  SELECT 12-MONTH CONTRACT ↗
                </a>
              </MagneticButton>
            </div>
          </TiltCard>

        </div>

        {/* Disclaimer / Ad Spend & Hosting Note */}
        <p className="text-center font-mono text-xs text-slate-400 max-w-4xl mx-auto mb-20 leading-relaxed">
          * Meta advertising spend is separate from our management fee. For the website, the client pays domain and hosting (about ₹1,500 a year).
        </p>

        {/* FAQ ACCORDION */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-amber-400 font-mono font-bold text-xs uppercase tracking-widest block mb-2">
              // TRANSPARENCY
            </span>
            <h2 className="font-bebas text-4xl sm:text-5xl text-white tracking-wide">
              FREQUENTLY ASKED <span className="font-serif italic font-normal text-gold-gradient">QUESTIONS</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {INVESTMENT_FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  onClick={() => toggleFaq(index)}
                  className="editorial-glass-card p-5 rounded-xl cursor-pointer hover:border-amber-500/30 transition-all duration-200"
                >
                  <div className="flex justify-between items-center gap-4">
                    <span className="font-mono text-sm text-white font-semibold">{faq.q}</span>
                    <button className="text-amber-400 p-1" aria-label="Toggle Question">
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </button>
                  </div>
                  {isOpen && (
                    <p className="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed pt-3 border-t border-white/10 animate-in fade-in duration-200">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="editorial-glass-card p-8 sm:p-12 rounded-2xl text-center max-w-4xl mx-auto border-t-2 border-t-amber-500/60 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_40px_rgba(255,107,0,0.15)] relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block mb-2 relative z-10">
            // FAST-TRACK ONBOARDING
          </span>
          <h2 className="font-bebas text-3xl sm:text-5xl text-white mb-4 relative z-10">
            CONFIRM YOUR RETAINER & <span className="font-serif italic font-normal text-gold-gradient">LAUNCH IN 7 DAYS</span>
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-8 leading-relaxed font-normal relative z-10">
            Direct communication with the agency founders. No account manager telephone games.
          </p>
          <a
            href="https://wa.me/919879583117?text=Hi%20Long%20View,%20I'd%20like%20to%20discuss%20joining%20as%20a%20growth%20client"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#FF5722] to-[#FF441A] text-white font-mono text-xs font-extrabold uppercase tracking-wider shadow-[0_0_30px_rgba(255,87,34,0.4)] hover:shadow-[0_0_45px_rgba(255,87,34,0.6)] hover:scale-[1.02] transition-all relative z-10"
          >
            <span>CONFIRM RETAINER ON WHATSAPP</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
}
