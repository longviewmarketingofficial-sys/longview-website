'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MapPin, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { CLIENTS_DATA, CATEGORIES } from '@/data/clients';

export default function ClientsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredClients = selectedCategory === 'All'
    ? CLIENTS_DATA
    : CLIENTS_DATA.filter((c) => c.category === selectedCategory);

  return (
    <div className="relative z-10 py-16 sm:py-24 px-6 sm:px-10 lg:px-14 w-full luxury-bg min-h-screen">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Architectural Page Header */}
        <div className="max-w-4xl mb-12">
          <span className="font-mono text-xs text-amber-400 uppercase tracking-widest block mb-2">
            // 03 VERIFIED PARTNERS
          </span>
          <h1 className="font-bebas text-6xl sm:text-7xl md:text-8xl text-white tracking-tight leading-none mb-6">
            OUR HAPPY <span className="font-serif italic font-normal text-gold-gradient">CLIENTS</span>
          </h1>
          <p className="text-base text-slate-300 leading-relaxed font-normal">
            From bustling dining destinations to emerging retail showrooms — here are the ambitious businesses powered by Long View&apos;s synchronized monthly creative rhythm.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2.5 mb-12 font-mono text-xs">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-mono transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#FF5722] to-[#FF441A] text-white font-bold shadow-[0_0_20px_rgba(255,68,26,0.5)] border border-orange-400/40'
                  : 'editorial-glass-card text-slate-300 hover:text-white hover:border-white/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-20 w-full">
          {filteredClients.map((c) => (
            <div
              key={c.id}
              className="editorial-glass-card p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start gap-6 group hover:border-amber-500/40 transition-all duration-300 shadow-2xl relative overflow-hidden"
            >
              {/* Subtle Ambient Hover Glow */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all pointer-events-none" />

              {/* Logo on Left */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl bg-white p-2.5 flex items-center justify-center shrink-0 shadow-lg relative overflow-hidden border border-white/20">
                <Image
                  src={c.logo}
                  alt={`${c.name} Logo`}
                  width={112}
                  height={112}
                  className="object-contain"
                />
              </div>

              {/* Details on Right */}
              <div className="flex-1 min-w-0 text-center sm:text-left relative z-10">
                <div className="flex flex-wrap items-center justify-center sm:justify-between gap-2 mb-2">
                  <h3 className="font-bebas text-3xl sm:text-4xl text-white group-hover:text-amber-400 transition-colors truncate">
                    {c.name}
                  </h3>
                  <span className="text-[10px] font-mono font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md">
                    {c.category}
                  </span>
                </div>

                <p className="text-xs font-mono text-slate-400 mb-3 flex items-center justify-center sm:justify-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{c.location}</span>
                </p>

                {c.description && (
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-4">
                    {c.description}
                  </p>
                )}

                {c.results && c.results.length > 0 && (
                  <div className="pt-3 border-t border-white/10 space-y-1.5 font-mono text-[11px] text-slate-300">
                    {c.results.map((res, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 drop-shadow-[0_0_6px_rgba(245,158,11,0.5)]" />
                        <span>{res}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="editorial-glass-card p-8 sm:p-12 rounded-2xl text-center max-w-4xl mx-auto border-t-2 border-t-amber-500/60 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_40px_rgba(255,107,0,0.15)] relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block mb-2 relative z-10">
            // EXPANSION ROSTER
          </span>
          <h2 className="font-bebas text-3xl sm:text-5xl text-white mb-4 relative z-10">
            WANT YOUR BRAND FEATURED AMONG <span className="font-serif italic font-normal text-gold-gradient">FASTEST GROWING?</span>
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-8 leading-relaxed font-normal relative z-10">
            We intake a strictly limited number of regional clients each quarter to protect high-touch production quality. Inquire via WhatsApp to claim your category.
          </p>
          <a
            href="https://wa.me/919879583117?text=Hi%20Long%20View,%20I'd%20like%20to%20discuss%20joining%20as%20a%20growth%20client"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#FF5722] to-[#FF441A] text-white font-mono text-xs font-extrabold uppercase tracking-wider shadow-[0_0_30px_rgba(255,87,34,0.4)] hover:shadow-[0_0_45px_rgba(255,87,34,0.6)] hover:scale-[1.02] transition-all relative z-10"
          >
            <span>CLAIM CATEGORY ON WHATSAPP</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
}
