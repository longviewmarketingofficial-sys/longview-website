'use client';

import { useState } from 'react';
import { Check, Plus, Minus, ArrowUpRight } from 'lucide-react';

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
            // 03 TRANSPARENT INVESTMENTS
          </span>
          <h1 className="font-bebas text-6xl sm:text-7xl md:text-8xl text-bone leading-none mb-6">
            PREDICTABLE MONTHLY <span className="text-vermilion">GROWTH RETAINERS</span>
          </h1>
          <p className="text-base text-slate-400 leading-relaxed font-normal">
            No hidden percentage markups, ad-budget kickbacks, or lock-in traps. Every plan includes dedicated visual production, ad campaign management, and custom countertop NFC hardware.
          </p>
        </div>

        {/* PRICING CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-24">
          
          {/* 3-Month Plan */}
          <div className="bg-obsidianSurface border grid-border p-8 rounded-xl flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-2">
                01 // SPRINT PACKAGE
              </span>
              <h3 className="font-bebas text-3xl text-bone mb-2">STARTER TEST</h3>
              <p className="text-slate-400 text-xs mb-6">
                Designed for business owners wanting to validate creative quality and lead flow.
              </p>
              
              <div className="mb-6 pb-6 border-b grid-border font-mono">
                <span className="text-4xl font-black text-bone">₹12,000</span>
                <span className="text-xs text-slate-500">/ month</span>
              </div>

              <ul className="text-xs text-slate-300 space-y-3.5 font-medium">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-vermilion shrink-0" />
                  <span><strong>12 Posts/month:</strong> 4 Reels + 8 Carousels</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-vermilion shrink-0" />
                  <span><strong>Meta Ads:</strong> 1 Click-to-WhatsApp campaign</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-vermilion shrink-0" />
                  <span><strong>Hardware:</strong> 1 Custom NFC Google Review Tap Card</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-vermilion shrink-0" />
                  <span>Monthly WhatsApp performance recap</span>
                </li>
              </ul>
            </div>

            <a
              href="https://wa.me/919879583117?text=Hi%20Long%20View,%20I'm%20interested%20in%20the%203-Month%20Starter%20Plan%20(%E2%82%B912,000/mo)"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block w-full py-3.5 text-center bg-white/5 hover:bg-white/15 border grid-border text-bone font-mono font-bold rounded-sm text-xs uppercase tracking-wider transition"
            >
              SELECT 3-MONTH SPRINT ↗
            </a>
          </div>

          {/* 6-Month Plan (FEATURED HERO CARD) */}
          <div className="bg-obsidianSurface border-2 border-vermilion p-8 sm:p-9 pt-10 rounded-xl relative flex flex-col justify-between shadow-2xl shadow-vermilion/15 md:-translate-y-2 mt-4 md:mt-0">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 shimmer-pill text-white border border-white/20 text-[10px] font-mono font-black uppercase px-4 py-1.5 rounded-full tracking-widest shadow-lg shadow-vermilion/40 whitespace-nowrap z-20">
              ★ RECOMMENDED CHOICE
            </div>

            <div>
              <span className="text-[11px] font-mono font-bold text-vermilion uppercase tracking-widest block mb-2">
                02 // GROWTH RETAINER
              </span>
              <h3 className="font-bebas text-3xl text-bone mb-2">THE GROWTH PARTNER</h3>
              <p className="text-slate-400 text-xs mb-6">
                Built to achieve sustained brand recall and predictable weekend walk-ins across Ahmedabad.
              </p>
              
              <div className="mb-6 pb-6 border-b grid-border font-mono">
                <span className="text-5xl font-black text-bone">₹10,000</span>
                <span className="text-xs text-slate-500">/ month</span>
              </div>

              <ul className="text-xs text-slate-300 space-y-3.5 font-medium">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-vermilion shrink-0" />
                  <span><strong>16 Posts/month:</strong> 6 Reels + 10 Carousels/Single</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-vermilion shrink-0" />
                  <span><strong>Meta Funnels:</strong> Retargeting + WhatsApp lead ads</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-vermilion shrink-0" />
                  <span><strong>Hardware:</strong> 2 Custom NFC Google Review Tap Cards</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-vermilion shrink-0" />
                  <span>Bi-weekly strategy sync & monthly report</span>
                </li>
              </ul>
            </div>

            <a
              href="https://wa.me/919879583117?text=Hi%20Long%20View,%20I'm%20interested%20in%20the%206-Month%20Growth%20Partner%20Plan%20(%E2%82%B910,000/mo)"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block w-full py-4 text-center btn-vermilion font-mono font-bold rounded-sm text-xs uppercase tracking-wider shadow-lg shadow-vermilion/30 transition"
            >
              SELECT GROWTH RETAINER ↗
            </a>
          </div>

          {/* 12-Month Plan */}
          <div className="bg-obsidianSurface border grid-border p-8 rounded-xl flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-2">
                03 // SCALE PARTNERSHIP
              </span>
              <h3 className="font-bebas text-3xl text-bone mb-2">ANNUAL MOAT</h3>
              <p className="text-slate-400 text-xs mb-6">
                For dominant local brands aiming to lock out local competitors for the year.
              </p>
              
              <div className="mb-6 pb-6 border-b grid-border font-mono">
                <span className="text-4xl font-black text-bone">₹8,500</span>
                <span className="text-xs text-slate-500">/ month</span>
              </div>

              <ul className="text-xs text-slate-300 space-y-3.5 font-medium">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-cyberLime shrink-0" />
                  <span><strong>20 Posts/month:</strong> 8 Reels + 12 Carousels/Single</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-cyberLime shrink-0" />
                  <span><strong>Meta Ads:</strong> Full omni-channel acquisition funnels</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-cyberLime shrink-0" />
                  <span><strong>Hardware:</strong> 3 Custom NFC Google Review Tap Cards</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-cyberLime shrink-0" />
                  <span>Dedicated account manager + weekly updates</span>
                </li>
              </ul>
            </div>

            <a
              href="https://wa.me/919879583117?text=Hi%20Long%20View,%20I'm%20interested%20in%20the%2012-Month%20Annual%20Moat%20Plan%20(%E2%82%B98,500/mo)"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block w-full py-3.5 text-center bg-white/5 hover:bg-white/15 border grid-border text-bone font-mono font-bold rounded-sm text-xs uppercase tracking-wider transition"
            >
              SELECT ANNUAL MOAT ↗
            </a>
          </div>

        </div>

        {/* DELIVERABLES COMPARISON TABLE */}
        <div className="mb-24 bg-obsidianSurface border grid-border rounded-xl overflow-hidden">
          <div className="p-6 sm:p-8 border-b grid-border">
            <span className="text-xs font-mono text-vermilion uppercase tracking-widest block mb-1">
              // SIDE-BY-SIDE MATRIX
            </span>
            <h3 className="font-bebas text-3xl text-bone">DETAILED DELIVERABLES BREAKDOWN</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs">
              <thead className="bg-obsidian border-b grid-border text-slate-400">
                <tr>
                  <th className="p-4 sm:p-5">FEATURE</th>
                  <th className="p-4 sm:p-5">STARTER TEST</th>
                  <th className="p-4 sm:p-5 text-vermilion">GROWTH PARTNER ★</th>
                  <th className="p-4 sm:p-5">ANNUAL MOAT</th>
                </tr>
              </thead>
              <tbody className="divide-y grid-border text-slate-300">
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-white">Monthly Video Reels</td>
                  <td className="p-4 sm:p-5">4 Reels</td>
                  <td className="p-4 sm:p-5 text-white font-bold">6 Reels</td>
                  <td className="p-4 sm:p-5">8 Reels</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-white">Carousels & Statics</td>
                  <td className="p-4 sm:p-5">8 Posts</td>
                  <td className="p-4 sm:p-5 text-white font-bold">10 Posts</td>
                  <td className="p-4 sm:p-5">12 Posts</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-white">Total Monthly Assets</td>
                  <td className="p-4 sm:p-5">12 Assets</td>
                  <td className="p-4 sm:p-5 text-cyberLime font-bold">16 Assets</td>
                  <td className="p-4 sm:p-5">20 Assets</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-white">Meta Ad Funnels</td>
                  <td className="p-4 sm:p-5">1 Campaign</td>
                  <td className="p-4 sm:p-5 text-white font-bold">2 Campaigns</td>
                  <td className="p-4 sm:p-5">3 Campaigns</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-white">Custom NFC Cards</td>
                  <td className="p-4 sm:p-5">1 Card</td>
                  <td className="p-4 sm:p-5 text-cyberLime font-bold">2 Cards</td>
                  <td className="p-4 sm:p-5">3 Cards</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-white">Commitment Term</td>
                  <td className="p-4 sm:p-5">3 Months</td>
                  <td className="p-4 sm:p-5 text-vermilion font-bold">6 Months</td>
                  <td className="p-4 sm:p-5">12 Months</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

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
