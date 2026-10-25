'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'HOME', href: '/' },
    { label: 'APPROACH', href: '/approach' },
    { label: 'NFC HARDWARE', href: '/hardware' },
    { label: 'CLIENTS', href: '/clients' },
    { label: 'INVESTMENTS', href: '/investments' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-obsidian/95 backdrop-blur-md border-b grid-border">
      <div className="w-full px-6 sm:px-10 lg:px-14 h-16 flex items-center justify-between">
        
        {/* Brand Geometric Sunrise Mark */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-sm bg-obsidianSurface border grid-border flex items-center justify-center p-1.5 shadow-md group-hover:border-vermilion/50 transition-colors">
            <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="46" fill="#0A0E18" />
              <path d="M26 44 A 24 24 0 0 1 74 44 Z" fill="#FF441A" />
              <rect x="14" y="44" width="72" height="6" rx="3" fill="#FFFFFF" />
              <line x1="48" y1="50" x2="25" y2="78" stroke="#FFFFFF" strokeWidth="6.5" strokeLinecap="round" />
              <line x1="52" y1="50" x2="75" y2="78" stroke="#FFFFFF" strokeWidth="6.5" strokeLinecap="round" />
            </svg>
          </div>
          <span className="text-xl sm:text-2xl font-black tracking-widest text-white leading-none">
            LONGVIEW
          </span>
        </Link>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-1.5 text-xs font-mono font-medium text-slate-300">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-sm transition-colors ${
                  active
                    ? 'text-vermilion font-bold bg-vermilion/10 border border-vermilion/30'
                    : 'hover:text-white hover:bg-white/[0.06] border border-transparent'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Button: Book Call */}
        <div className="hidden sm:flex items-center">
          <a
            href="https://wa.me/919879583117?text=Hi%20Long%20View,%20I'd%20like%20to%20discuss%20a%20growth%20plan%20for%20my%20business"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-bone px-4 py-2 rounded-sm text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm"
          >
            <span>BOOK CALL</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-obsidian" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded bg-obsidianSurface border grid-border text-slate-300 hover:text-white transition"
          aria-label="Toggle Navigation"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-obsidianSurface/95 backdrop-blur-xl border-b grid-border px-6 py-6 font-mono text-xs animate-in slide-in-from-top duration-150">
          <div className="flex flex-col space-y-3 text-slate-300">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`py-2 px-3 rounded-sm transition-colors ${
                    active
                      ? 'text-vermilion font-bold bg-vermilion/10'
                      : 'hover:text-vermilion'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-3 border-t grid-border">
              <a
                href="https://wa.me/919879583117?text=Hi%20Long%20View,%20I'd%20like%20to%20discuss%20a%20growth%20plan%20for%20my%20business"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="btn-bone w-full text-center flex items-center justify-center gap-1.5 py-3 rounded-sm font-mono font-bold text-xs uppercase tracking-wider"
              >
                <span>BOOK CALL ON WHATSAPP</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-obsidian" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
