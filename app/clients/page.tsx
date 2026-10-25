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
    <div className="relative z-10 py-16 sm:py-24 px-6 sm:px-10 lg:px-14 w-full">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Architectural Page Header */}
        <div className="max-w-4xl mb-12">
          <span className="font-mono text-xs text-cyberLime uppercase tracking-widest block mb-2">
            // 03 VERIFIED PARTNERS
          </span>
          <h1 className="font-bebas text-6xl sm:text-7xl md:text-8xl text-bone leading-none mb-6">
            OUR HAPPY <span className="text-vermilion">CLIENTS</span>
          </h1>
          <p className="text-base text-slate-400 leading-relaxed font-normal">
            From bustling dining destinations to emerging retail showrooms across Ahmedabad and Gujarat — here are the ambitious local businesses powered by Long View&apos;s synchronized monthly creative rhythm.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-12 font-mono text-xs">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-sm border transition-colors ${
                selectedCategory === cat
                  ? 'border-vermilion bg-vermilion text-white font-bold'
                  : 'grid-border bg-obsidianSurface text-slate-400 hover:text-white hover:border-white/20'
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
              className="bg-obsidianSurface border grid-border p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start gap-6 group hover:border-vermilion/50 transition-all shadow-xl"
            >
              {/* Logo on Left */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl bg-white p-2.5 flex items-center justify-center shrink-0 shadow-md relative overflow-hidden">
                <Image
                  src={c.logo}
                  alt={`${c.name} Logo`}
                  width={112}
                  height={112}
                  className="object-contain"
                />
              </div>

              {/* Details on Right */}
              <div className="flex-1 min-w-0 text-center sm:text-left">
                <div className="flex flex-wrap items-center justify-center sm:justify-between gap-2 mb-2">
                  <h3 className="font-bebas text-3xl sm:text-4xl text-bone group-hover:text-vermilion transition-colors truncate">
                    {c.name}
                  </h3>
                  <span className="text-[10px] font-mono font-bold text-vermilion bg-vermilion/10 border grid-border px-3 py-1 rounded uppercase tracking-wider">
                    {c.category}
                  </span>
                </div>

                <p className="text-xs font-mono text-slate-400 mb-3 flex items-center justify-center sm:justify-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-vermilion shrink-0" />
                  <span>{c.location}</span>
                </p>

                {c.description && (
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-4">
                    {c.description}
                  </p>
                )}

                {c.results && c.results.length > 0 && (
                  <div className="pt-3 border-t grid-border space-y-1.5 font-mono text-[11px] text-slate-400">
                    {c.results.map((res, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyberLime shrink-0" />
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
        <div className="bg-obsidianSurface border grid-border p-8 sm:p-12 rounded-2xl text-center max-w-4xl mx-auto border-l-4 border-l-vermilion shadow-2xl">
          <span className="text-xs font-mono font-bold text-cyberLime uppercase tracking-widest block mb-2">
            // EXPANSION ROSTER
          </span>
          <h2 className="font-bebas text-3xl sm:text-5xl text-bone mb-4">
            WANT YOUR BRAND FEATURED AMONG FASTEST GROWING?
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mb-8 leading-relaxed font-normal">
            We intake a strictly limited number of regional clients each quarter to protect high-touch production quality. Inquire via WhatsApp to claim your category.
          </p>
          <a
            href="https://wa.me/919879583117?text=Hi%20Long%20View,%20I'd%20like%20to%20discuss%20joining%20as%20a%20growth%20client"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-vermilion inline-flex items-center gap-2 px-8 py-4 rounded-sm font-mono text-xs font-extrabold uppercase tracking-wider shadow-lg shadow-vermilion/25"
          >
            <span>CLAIM CATEGORY ON WHATSAPP</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
}
