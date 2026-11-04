import React from 'react';

interface LongViewLogoProps {
  className?: string;
  glow?: boolean;
}

export default function LongViewLogo({ className = "w-8 h-8", glow = false }: LongViewLogoProps) {
  return (
    <svg
      className={`${className} ${glow ? 'drop-shadow-[0_0_14px_rgba(255,90,43,0.85)]' : ''}`}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Sunset Semi-Circle */}
      <path d="M 33 39 A 17 17 0 0 1 67 39 Z" fill="#FF5A2B" />
      {/* Horizontal Beam */}
      <line x1="16" y1="39" x2="84" y2="39" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
      {/* Inverted-V Perspective Legs (No Crossbar) */}
      <line x1="50" y1="39" x2="21" y2="73" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
      <line x1="50" y1="39" x2="79" y2="73" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

