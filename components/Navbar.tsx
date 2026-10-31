'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isHome && !scrolled
          ? 'bg-transparent border-b border-transparent py-2'
          : 'bg-[#070A12]/90 backdrop-blur-xl border-b border-white/[0.08] py-0 shadow-xl'
      }`}
    >
      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-14 h-16 flex items-center justify-between">
        
        {/* Brand Geometric Sunset / Arch Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 flex items-center justify-center transition-transform group-hover:scale-105">
            <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Sunset Semi-Circle */}
              <path d="M26 42 A 24 24 0 0 1 74 42 Z" fill="#FF5722" className="drop-shadow-[0_0_8px_rgba(255,87,34,0.8)]" />
              {/* White Angular Arch */}
              <line x1="14" y1="44" x2="86" y2="44" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
              <line x1="48" y1="46" x2="24" y2="82" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
              <line x1="52" y1="46" x2="76" y2="82" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
              <line x1="32" y1="67" x2="68" y2="67" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
          <span className="text-lg sm:text-xl font-black tracking-[0.2em] text-white leading-none font-sans">
            LONGVIEW
          </span>
        </Link>

        {/* Center Navigation: Micro-sized, widely spaced typography */}
        <nav className="hidden lg:flex items-center gap-7 text-[11px] font-sans font-medium tracking-[0.22em] text-slate-400">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`py-1 transition-all duration-200 relative ${
                  active
                    ? 'text-[#FF6B35] font-semibold drop-shadow-[0_0_12px_rgba(255,107,53,0.7)]'
                    : 'text-slate-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]'
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#FF6B35] shadow-[0_0_8px_#FF6B35]"></span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Translucent Glassmorphic Pill Button */}
        <div className="hidden sm:flex items-center">
          <a
            href="https://wa.me/919879583117?text=Hi%20Long%20View,%20I'd%20like%20to%20discuss%20a%20growth%20plan%20for%20my%20business"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-5 py-2 bg-white/[0.08] hover:bg-white/[0.16] border border-white/20 backdrop-blur-md text-white text-xs font-mono font-medium tracking-wider flex items-center gap-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all hover:scale-[1.02]"
          >
            <span>BOOK CALL</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-white/80" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-full bg-white/[0.06] border border-white/10 text-slate-300 hover:text-white transition"
          aria-label="Toggle Navigation"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#070A12]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 font-mono text-xs animate-in slide-in-from-top duration-150">
          <div className="flex flex-col space-y-3 text-slate-300">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`py-2 px-3 rounded-md transition-colors ${
                    active
                      ? 'text-[#FF6B35] font-bold bg-[#FF6B35]/10 border border-[#FF6B35]/30'
                      : 'hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-white/10">
              <a
                href="https://wa.me/919879583117?text=Hi%20Long%20View,%20I'd%20like%20to%20discuss%20a%20growth%20plan%20for%20my%20business"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="w-full text-center flex items-center justify-center gap-1.5 py-3 rounded-full bg-gradient-to-r from-[#FF5722] to-[#FF3D00] font-mono font-bold text-xs uppercase tracking-wider text-white shadow-lg shadow-[#FF5722]/30"
              >
                <span>BOOK CALL ON WHATSAPP</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
