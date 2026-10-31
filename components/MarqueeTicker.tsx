'use client';

interface MarqueeTickerProps {
  className?: string;
  speed?: 'normal' | 'fast' | 'slow';
}

const ITEMS = [
  "HYPER-LOCAL META ADS",
  "CUSTOM NFC REVIEW HARDWARE",
  "SCALING AMBITIOUS BUSINESSES",
  "HYPER-LOCAL META ADS",
  "CUSTOM NFC REVIEW HARDWARE",
  "SCALING AMBITIOUS BUSINESSES",
];

export default function MarqueeTicker({ className = '' }: MarqueeTickerProps) {
  return (
    <div className={`w-full overflow-hidden border-t border-white/10 bg-[#05070B] py-3.5 select-none whitespace-nowrap ${className}`}>
      <div className="animate-marquee flex items-center will-change-transform whitespace-nowrap">
        {/* First set */}
        <div className="flex items-center shrink-0">
          {ITEMS.map((item, idx) => (
            <div key={`m1-${idx}`} className="flex items-center">
              <span className="text-[#FF7A00] text-sm px-4 select-none drop-shadow-[0_0_8px_rgba(255,122,0,0.6)]">★</span>
              <span className="font-mono text-xs sm:text-[13px] font-medium tracking-[0.28em] text-slate-300 uppercase whitespace-nowrap pr-4">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Duplicate set for seamless continuous loop */}
        <div className="flex items-center shrink-0" aria-hidden="true">
          {ITEMS.map((item, idx) => (
            <div key={`m2-${idx}`} className="flex items-center">
              <span className="text-[#FF7A00] text-sm px-4 select-none drop-shadow-[0_0_8px_rgba(255,122,0,0.6)]">★</span>
              <span className="font-mono text-xs sm:text-[13px] font-medium tracking-[0.28em] text-slate-300 uppercase whitespace-nowrap pr-4">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
