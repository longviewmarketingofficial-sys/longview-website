import Link from 'next/link';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import LongViewLogo from '@/components/LongViewLogo';

export default function Footer() {
  return (
    <footer id="contact" className="w-full border-t border-white/10 py-16 px-6 sm:px-10 lg:px-14 bg-[#05070d] text-slate-400 text-xs font-mono relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        
        {/* Brand & Manifesto */}
        <div className="md:w-1/2 space-y-4">
          <Link href="/" className="inline-flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center p-1.5 shadow-md group-hover:border-amber-500/40 transition-all">
              <LongViewLogo className="w-full h-full" glow />
            </div>
            <span className="text-sm font-black text-white tracking-wider group-hover:text-amber-400 transition-colors">
              LONG VIEW DIGITAL MARKETING
            </span>
          </Link>
          
          <p className="text-slate-400 leading-relaxed max-w-sm font-sans text-xs">
            Disciplined marketing execution for ambitious brands. Reels, Meta funnels, and 5-star Google review hardware.
          </p>

          <div className="text-[11px] text-slate-500 space-y-1">
            <p>• Meta advertising budget is paid directly to Meta.</p>
            <p>• Retainers billed monthly in advance.</p>
            <p>• Google reviews must remain genuine customer feedback.</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-3 text-slate-300">
          <span className="text-xs uppercase tracking-widest text-amber-400 block mb-2">// DIRECTORY</span>
          <div className="flex flex-col space-y-2">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <Link href="/approach" className="hover:text-amber-400 transition-colors">Engineering Approach</Link>
            <Link href="/hardware" className="hover:text-amber-400 transition-colors">NFC Hardware & Review Stands</Link>
            <Link href="/investments" className="hover:text-amber-400 transition-colors">Retainer Investments & Pricing</Link>
            <Link href="/clients" className="hover:text-amber-400 transition-colors">Verified Clients</Link>
            <Link href="/about" className="hover:text-amber-400 transition-colors">About Us</Link>
          </div>
        </div>

        {/* Coordinates */}
        <div className="space-y-3 text-slate-300">
          <span className="text-xs uppercase tracking-widest text-amber-400 block mb-2">// COORDINATES</span>
          <p className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>Ahmedabad, Gujarat, India</span>
          </p>
          <p className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <a href="https://wa.me/919879583117" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition flex items-center gap-1">
              +91 98795 83117
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </p>
          <p className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-slate-400" />
            <a href="mailto:longviewmarketingofficial@gmail.com" className="hover:text-amber-400 transition">
              longviewmarketingofficial@gmail.com
            </a>
          </p>
          <p className="flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <a href="https://instagram.com/longview_digital" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition flex items-center gap-1">
              @longview_digital
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </p>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-[11px] gap-4">
        <span>© 2026 Long View Digital Marketing. All rights reserved.</span>
        <span className="text-slate-600 font-mono">// DISCIPLINED REGIONAL GROWTH</span>
      </div>
    </footer>
  );
}
