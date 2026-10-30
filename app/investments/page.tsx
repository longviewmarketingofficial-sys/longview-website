'use client';

import { useState } from 'react';
import { Check, Plus, Minus, ArrowUpRight } from 'lucide-react';
import TiltCard from '@/components/TiltCard';
import MagneticButton from '@/components/MagneticButton';
import MarqueeTicker from '@/components/MarqueeTicker';

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
    <div className="relative z-10 py-16 sm:py-24 px-6 sm:px-10 lg:px-14 w-full">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Architectural Page Header */}
        <div className="max-w-4xl mb-16">
          <span className="font-mono text-xs text-cyberLime uppercase tracking-widest block mb-2">
            // PACKAGES
          </span>
          <h1 className="font-bebas text-6xl sm:text-7xl md:text-8xl text-bone leading-none mb-6">
            CHOOSE THE LEVEL OF MARKETING <span className="text-vermilion">YOUR BUSINESS NEEDS</span>
          </h1>
          <p className="text-base text-slate-400 leading-relaxed font-normal">
            No hidden percentage markups, ad-budget kickbacks, or lock-in traps. Every plan includes dedicated visual production, ad campaign management, and custom countertop NFC hardware.
          </p>
        </div>

        {/* PRICING CARDS WITH 3D TILT & GLARE */}
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

          {/* 6-Month Contract (FEATURED RECOMMENDED CARD) */}
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
                  className="block w-full py-4 text-center btn-vermilion font-mono font-bold rounded-sm text-xs uppercase tracking-wider shadow-lg shadow-vermilion/30 transition"
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
        <p className="text-center font-mono text-xs text-slate-500 max-w-4xl mx-auto mb-20 leading-relaxed">
          * Meta advertising spend is separate from our management fee. For the website, the client pays domain and hosting (about ₹1,500 a year).
        </p>

        {/* FAQ ACCORDION */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-vermilion font-mono font-bold text-xs uppercase tracking-widest block mb-2">
              // TRANSPARENCY
            </span>
            <h2 className="font-bebas text-4xl sm:text-5xl text-bone tracking-wide">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {INVESTMENT_FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  onClick={() => toggleFaq(index)}
                  className="bg-obsidianSurface border grid-border p-5 rounded-xl cursor-pointer hover:border-white/20 transition-colors"
                >
                  <div className="flex justify-between items-center gap-4">
                    <span className="font-mono text-sm text-bone font-semibold">{faq.q}</span>
                    <button className="text-vermilion p-1" aria-label="Toggle Question">
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </button>
                  </div>
                  {isOpen && (
                    <p className="text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed pt-3 border-t grid-border animate-in fade-in duration-200">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="bg-obsidianSurface border grid-border p-8 sm:p-12 rounded-2xl text-center max-w-4xl mx-auto border-l-4 border-l-vermilion shadow-2xl">
          <span className="text-xs font-mono font-bold text-cyberLime uppercase tracking-widest block mb-2">
            // FAST-TRACK ONBOARDING
          </span>
          <h2 className="font-bebas text-3xl sm:text-5xl text-bone mb-4">
            CONFIRM YOUR RETAINER & LAUNCH IN 7 DAYS
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mb-8 leading-relaxed font-normal">
            Direct communication with the agency founders. No account manager telephone games.
          </p>
          <a
            href="https://wa.me/919879583117?text=Hi%20Long%20View,%20I'd%20like%20to%20discuss%20joining%20as%20a%20growth%20client"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-vermilion inline-flex items-center gap-2 px-8 py-4 rounded-sm font-mono text-xs font-extrabold uppercase tracking-wider shadow-lg shadow-vermilion/25"
          >
            <span>CONFIRM RETAINER ON WHATSAPP</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
}
