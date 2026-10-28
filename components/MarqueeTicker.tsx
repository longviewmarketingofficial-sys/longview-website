'use client';

interface MarqueeTickerProps {
  className?: string;
  speed?: 'normal' | 'fast' | 'slow';
}

const ITEMS = [
  "CINEMATIC 4K REELS",
  "HYPER-LOCAL META ADS",
  "CUSTOM NFC REVIEW HARDWARE",
  "AHMEDABAD & GUJARAT EXCLUSIVE",
  "0% AGENCY FLUFF",
  "16 DELIVERABLES EVERY MONTH",
  "100% FOOTAGE OWNERSHIP",
  "RAPID 48HR ONBOARDING SHOOT",
];

export default function MarqueeTicker({ className = '' }: MarqueeTickerProps) {
  return (
    <div className={`w-full overflow-hidden border-y grid-border bg-obsidianSurface/60 backdrop-blur-sm py-3.5 select-none ${className}`}>
      <div className="animate-marquee flex items-center">
        {/* First set */}
        <div className="flex items-center shrink-0">
          {ITEMS.map((item, idx) => (
            <div key={`m1-${idx}`} className="flex items-center">
              <span className="font-mono text-xs sm:text-[13px] font-bold tracking-widest text-slate-300 uppercase whitespace-nowrap px-4">
                {item}
              </span>
              <span className="text-vermilion font-mono text-xs px-2">★</span>
            </div>
          ))}
        </div>

        {/* Duplicate set for seamless continuous loop */}
        <div className="flex items-center shrink-0" aria-hidden="true">
          {ITEMS.map((item, idx) => (
            <div key={`m2-${idx}`} className="flex items-center">
              <span className="font-mono text-xs sm:text-[13px] font-bold tracking-widest text-slate-300 uppercase whitespace-nowrap px-4">
                {item}
              </span>
              <span className="text-cyberLime font-mono text-xs px-2">★</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
