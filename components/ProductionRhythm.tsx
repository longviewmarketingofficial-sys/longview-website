'use client';

import { useState } from 'react';
import { Calendar, Film, Sparkles, TrendingUp } from 'lucide-react';
import TiltCard from '@/components/TiltCard';

interface WeekData {
  title: string;
  badge: string;
  desc: string;
  items: string[];
  icon: typeof Film;
}

const WEEKS: Record<number, WeekData> = {
  1: {
    title: "WEEK 1 // HERO OFFERINGS & VALUE HOOKS",
    badge: "04 DELIVERABLES",
    desc: "We spotlight your flagship products, services and core value propositions with compelling visual hooks designed to capture attention across digital feeds.",
    items: [
      "2x High-retention product or service Reels",
      "1x Feature or offering breakdown carousel",
      "1x Direct-offer single static graphic"
    ],
    icon: Film
  },
  2: {
    title: "WEEK 2 // CRAFT, PROCESS & BRAND STORY",
    badge: "04 DELIVERABLES",
    desc: "Customers connect with businesses they trust. We showcase behind-the-scenes processes, team expertise, quality standards and founder stories that humanise your brand.",
    items: [
      "1x Behind-the-scenes process Reel",
      "1x Team expertise & standards carousel",
      "2x High-resolution product or service showcase posts"
    ],
    icon: Sparkles
  },
  3: {
    title: "WEEK 3 // HIGH-INTENT CONVERSIONS & OFFERS",
    badge: "04 DELIVERABLES",
    desc: "Designed to encourage direct customer response through promotions, seasonal campaigns, lead-generating hooks and WhatsApp enquiries.",
    items: [
      "1x Fast-cut promotional Reel",
      "2x Multi-slide value proposition carousels",
      "1x Direct-inquiry WhatsApp flyer post"
    ],
    icon: TrendingUp
  },
  4: {
    title: "WEEK 4 // SOCIAL PROOF & COMMUNITY AUTHORITY",
    badge: "04 DELIVERABLES",
    desc: "We highlight genuine customer testimonials, real customer experiences and review milestones to strengthen your brand's credibility.",
    items: [
      "2x Customer spotlight & brand energy Reels",
      "1x Customer praise review carousel",
      "1x Value reminder or schedule graphic"
    ],
    icon: Calendar
  }
};

export default function ProductionRhythm() {
  const [activeWeek, setActiveWeek] = useState<number>(1);
  const current = WEEKS[activeWeek];
  const Icon = current.icon;

  return (
    <div className="w-full">
      {/* Week Selector Tabs */}
      <div className="flex flex-wrap justify-center gap-2.5 mb-8 font-mono text-xs">
        {[1, 2, 3, 4].map((num) => {
          const isActive = activeWeek === num;
          const labels = [
            '01 // WEEK 1: HERO HOOKS',
            '02 // WEEK 2: CRAFT & STORY',
            '03 // WEEK 3: CONVERSIONS & OFFERS',
            '04 // WEEK 4: SOCIAL PROOF'
          ];
          return (
            <button
              key={num}
              onClick={() => setActiveWeek(num)}
              className={`px-5 py-2.5 rounded-full font-bold border transition duration-200 cursor-pointer backdrop-blur-md ${
                isActive
                  ? 'border-transparent bg-gradient-to-r from-[#FF5722] to-[#FF441A] text-white shadow-[0_0_20px_rgba(255,68,26,0.45)] scale-[1.02]'
                  : 'border-white/10 bg-white/[0.04] text-slate-300 hover:border-white/30 hover:text-white'
              }`}
            >
              {labels[num - 1]}
            </button>
          );
        })}
      </div>

      {/* Dynamic Week Display Box with 3D Tilt */}
      <TiltCard maxTilt={3.5} className="w-full">
        <div
          className="p-8 sm:p-10 rounded-2xl shadow-2xl relative overflow-hidden transition-all duration-300"
          style={{
            background: 'rgba(255, 255, 255, 0.04)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
          }}
        >
          {/* Subtle architectural corner accents in warm amber */}
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#FF5722]/50 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#F59E0B]/50 pointer-events-none"></div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 relative z-10">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/15 flex items-center justify-center shrink-0 mt-1 shadow-inner">
                <Icon className="w-5 h-5 text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
              </div>
              <div>
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block mb-1 font-bold">
                  SYNCHRONIZED CADENCE
                </span>
                <h3 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide">
                  {current.title}
                </h3>
              </div>
            </div>
            <span className="px-3.5 py-1.5 rounded-full border border-amber-500/30 font-mono text-xs text-amber-400 bg-amber-500/10 font-bold shadow-[0_0_10px_rgba(245,158,11,0.2)]">
              {current.badge}
            </span>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-2xl font-normal relative z-10">
            {current.desc}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10 font-mono text-xs relative z-10">
            {current.items.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-amber-400/40 text-slate-200 flex items-center gap-2.5 transition-colors"
              >
                <span className="text-amber-400 drop-shadow-[0_0_6px_rgba(245,158,11,0.7)] text-xs">●</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </TiltCard>
    </div>
  );
}
