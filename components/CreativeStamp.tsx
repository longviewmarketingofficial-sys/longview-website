'use client';

import React, { useState } from 'react';

interface CreativeStampProps {
  children: React.ReactNode;
  badge: string;
  category?: 'camera' | 'metric' | 'tech' | 'ad';
  className?: string;
}

export default function CreativeStamp({
  children,
  badge,
  category = 'tech',
  className = '',
}: CreativeStampProps) {
  const [isHovered, setIsHovered] = useState(false);

  const badgeColor = {
    camera: 'border-cyberLime text-cyberLime bg-obsidian/95 shadow-cyberLime/20',
    metric: 'border-vermilion text-vermilion bg-obsidian/95 shadow-vermilion/20',
    tech: 'border-cyan-400 text-cyan-300 bg-obsidian/95 shadow-cyan-400/20',
    ad: 'border-amber-400 text-amber-300 bg-obsidian/95 shadow-amber-400/20',
  }[category];

  return (
    <span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative inline-flex items-center cursor-help group/stamp ${className}`}
    >
      <span className="border-b border-dotted border-slate-500 group-hover/stamp:border-bone transition-colors">
        {children}
      </span>

      {isHovered && (
        <span
          role="tooltip"
          className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded border text-[10px] font-mono font-bold tracking-wider uppercase whitespace-nowrap shadow-xl z-50 pointer-events-none animate-badge-pop ${badgeColor}`}
        >
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-ping"></span>
            <span>{badge}</span>
          </span>
          {/* Arrow */}
          <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-obsidian"></span>
        </span>
      )}
    </span>
  );
}
