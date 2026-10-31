'use client';

interface MarqueeTickerProps {
  className?: string;
  speed?: 'normal' | 'fast' | 'slow';
}

const PHRASES = [
  "HYPER-LOCAL META ADS",
  "CUSTOM NFC REVIEW HARDWARE",
  "SCALING AMBITIOUS BUSINESSES",
];

export default function MarqueeTicker({ className = '' }: MarqueeTickerProps) {
  // 4 repetitions per set to ensure even ultra-wide 4K displays are fully filled
  const items = [...PHRASES, ...PHRASES, ...PHRASES, ...PHRASES];

  return (
    <div className={`w-full overflow-hidden border-t border-white/10 bg-[#05070B] py-1 select-none whitespace-nowrap flex ${className}`}>
      <style jsx>{`
        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marqueeScroll 40s linear infinite;
          will-change: transform;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="marquee-track flex items-center">
        {/* Set 1: Begins cleanly with ★ HYPER-LOCAL META ADS */}
        <div className="flex shrink-0 items-center">
          {items.map((item, idx) => (
            <div key={`m1-${idx}`} className="flex items-center">
              <span className="text-[#FF7A00] text-xs px-3 select-none drop-shadow-[0_0_8px_rgba(255,122,0,0.6)]">★</span>
              <span className="font-mono text-[11px] font-medium tracking-[0.28em] text-slate-300 uppercase whitespace-nowrap pr-3">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Set 2: Duplicate for seamless continuous infinite loop */}
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {items.map((item, idx) => (
            <div key={`m2-${idx}`} className="flex items-center">
              <span className="text-[#FF7A00] text-xs px-3 select-none drop-shadow-[0_0_8px_rgba(255,122,0,0.6)]">★</span>
              <span className="font-mono text-[11px] font-medium tracking-[0.28em] text-slate-300 uppercase whitespace-nowrap pr-3">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
