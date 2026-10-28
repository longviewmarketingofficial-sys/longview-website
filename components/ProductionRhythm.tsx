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
    title: "WEEK 1 // SIGNATURE OFFERINGS & HERO HOOKS",
    badge: "04 DELIVERABLES",
    desc: "We focus on what you are famous for. Hero Reels showcasing signature dishes or flagship services, with macro framing designed to stop local thumbs from scrolling.",
    items: [
      "2x Cinematic Reels on bestseller items",
      "1x Menu/Feature breakdown carousel",
      "1x Direct-offer single static graphic"
    ],
    icon: Film
  },
  2: {
    title: "WEEK 2 // CRAFT, KITCHEN & BACKSTORY",
    badge: "04 DELIVERABLES",
    desc: "Customers buy from businesses they trust. We highlight hygiene, preparation craft, behind-the-counter dedication, and founder story clips that humanize your brand.",
    items: [
      "1x Behind-the-scenes preparation reel",
      "1x Team & hygiene highlight carousel",
      "2x High-resolution product showcase posts"
    ],
    icon: Sparkles
  },
  3: {
    title: "WEEK 3 // HIGH-INTENT COMBOS & FOOTFALLS",
    badge: "04 DELIVERABLES",
    desc: "Designed to drive immediate action and fill slow mid-week periods with lunch combos, seasonal promotions, or early festival bookings.",
    items: [
      "1x Fast-cut promotional reel",
      "2x Multi-slide value combo carousels",
      "1x WhatsApp direct-order flyer post"
    ],
    icon: TrendingUp
  },
  4: {
    title: "WEEK 4 // AMBIENT VIBE & SOCIAL PROOF",
    badge: "04 DELIVERABLES",
    desc: "We spotlight buzzing dining rooms, happy guest moments, and review quotes to cement your location as the top weekend destination.",
    items: [
      "2x Ambient weekend energy reels",
      "1x Customer praise review carousel",
      "1x Weekend schedule/reservation reminder"
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
      <div className="flex flex-wrap justify-center gap-2 mb-8 font-mono text-xs">
        {[1, 2, 3, 4].map((num) => {
          const isActive = activeWeek === num;
          const labels = [
            '01 // WEEK 1: HERO HOOKS',
            '02 // WEEK 2: CRAFT & STORY',
            '03 // WEEK 3: COMBOS & FOOTFALL',
            '04 // WEEK 4: AMBIENT VIBE'
          ];
          return (
            <button
              key={num}
              onClick={() => setActiveWeek(num)}
              className={`px-5 py-2.5 rounded-sm font-bold border transition duration-200 cursor-pointer ${
                isActive
                  ? 'border-vermilion bg-vermilion text-white shadow-lg shadow-vermilion/25 scale-[1.02]'
                  : 'grid-border bg-obsidianSurface text-slate-300 hover:border-white/40 hover:text-white'
              }`}
            >
              {labels[num - 1]}
            </button>
          );
        })}
      </div>

      {/* Dynamic Week Display Box with 3D Tilt */}
      <TiltCard maxTilt={3.5} className="w-full">
        <div className="bg-obsidianSurface border grid-border p-8 sm:p-10 rounded-xl shadow-2xl relative overflow-hidden">
          {/* Subtle architectural corner accents */}
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-vermilion/40 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyberLime/30 pointer-events-none"></div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 relative z-10">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded bg-obsidian border grid-border flex items-center justify-center shrink-0 mt-1 shadow-inner">
                <Icon className="w-5 h-5 text-vermilion" />
              </div>
              <div>
                <span className="text-xs font-mono text-vermilion uppercase tracking-wider block mb-1">
                  SYNCHRONIZED CADENCE
                </span>
                <h3 className="font-bebas text-3xl sm:text-4xl text-bone tracking-wide">
                  {current.title}
                </h3>
              </div>
            </div>
            <span className="px-3 py-1 rounded border grid-border font-mono text-xs text-cyberLime bg-obsidian">
              {current.badge}
            </span>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-2xl font-normal relative z-10">
            {current.desc}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t grid-border font-mono text-xs relative z-10">
            {current.items.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded bg-obsidian/80 border grid-border hover:border-white/30 text-slate-200 flex items-center gap-2.5 transition-colors"
              >
                <span className="text-cyberLime text-xs">●</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </TiltCard>
    </div>
  );
}

