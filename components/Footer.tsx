import Link from 'next/link';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="w-full border-t grid-border py-16 px-6 sm:px-10 lg:px-14 bg-obsidian text-slate-400 text-xs font-mono">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        
        {/* Brand & Manifesto */}
        <div className="md:w-1/2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-obsidianSurface border grid-border flex items-center justify-center p-1">
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="46" fill="#0A0E18" />
                <path d="M26 44 A 24 24 0 0 1 74 44 Z" fill="#FF441A" />
                <rect x="14" y="44" width="72" height="6" rx="3" fill="#FFFFFF" />
              </svg>
            </div>
            <span className="text-sm font-black text-bone tracking-wider">LONG VIEW DIGITAL MARKETING</span>
          </div>
          
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
          <span className="text-xs uppercase tracking-widest text-slate-500 block mb-2">// DIRECTORY</span>
          <div className="flex flex-col space-y-2">
            <Link href="/" className="hover:text-vermilion transition-colors">Home</Link>
            <Link href="/approach" className="hover:text-vermilion transition-colors">Engineering Approach</Link>
            <Link href="/hardware" className="hover:text-vermilion transition-colors">NFC Hardware & Review Stands</Link>
            <Link href="/clients" className="hover:text-vermilion transition-colors">Verified Clients</Link>
            <Link href="/investments" className="hover:text-vermilion transition-colors">Retainer Investments & Pricing</Link>
          </div>
        </div>

        {/* Coordinates */}
        <div className="space-y-3 text-slate-300">
          <span className="text-xs uppercase tracking-widest text-slate-500 block mb-2">// COORDINATES</span>
          <p className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-vermilion" />
            <span>Ahmedabad, Gujarat, India</span>
          </p>
          <p className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <a href="https://wa.me/919879583117" target="_blank" rel="noopener noreferrer" className="hover:text-vermilion transition flex items-center gap-1">
              +91 98795 83117
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </p>
          <p className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-slate-400" />
            <a href="mailto:longviewmarketingofficial@gmail.com" className="hover:text-vermilion transition">
              longviewmarketingofficial@gmail.com
            </a>
          </p>
          <p className="flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-vermilion" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <a href="https://instagram.com/longview_digital" target="_blank" rel="noopener noreferrer" className="hover:text-vermilion transition flex items-center gap-1">
              @longview_digital
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </p>
          <p className="text-slate-600 pt-4">© 2026 Long View Digital Marketing. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
