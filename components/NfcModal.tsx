'use client';

import { useEffect } from 'react';
import { X, Star, Smartphone, CheckCircle } from 'lucide-react';

interface NfcModalProps {
  isOpen: boolean;
  onClose: () => void;
  businessName?: string;
}

export default function NfcModal({ isOpen, onClose, businessName = 'Your Business Name' }: NfcModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-obsidianSurface border grid-border max-w-sm w-full rounded-xl p-6 shadow-2xl relative text-left"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded transition"
          aria-label="Close Preview"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded bg-white flex items-center justify-center font-bold text-blue-600 shadow text-xl font-sans">
            G
          </div>
          <div>
            <span className="text-xs font-mono text-slate-400 block">Instant Google Review Prompt</span>
            <span className="text-sm font-black text-bone">{businessName}</span>
          </div>
        </div>

        <div className="bg-obsidian p-4 rounded border grid-border mb-4 text-center">
          <span className="text-xs text-slate-300 font-medium block mb-2 font-mono">
            Rate and share your review
          </span>
          <div className="text-2xl text-amber-400 flex justify-center gap-1.5 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-6 h-6 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-[11px] text-cyberLime font-mono font-bold flex items-center justify-center gap-1">
            <CheckCircle className="w-3.5 h-3.5" />
            5-Star Rating Pre-Configured
          </span>
        </div>

        <div className="flex items-start gap-2.5 bg-obsidianCard/80 p-3 rounded border grid-border mb-5">
          <Smartphone className="w-5 h-5 text-vermilion shrink-0 mt-0.5" />
          <p className="text-xs text-slate-400 font-mono leading-relaxed">
            Zero login barriers. iOS and Android automatically detect the NFC hardware chip without installing any third-party app.
          </p>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-sm bg-white/10 hover:bg-white/20 text-bone font-mono font-bold text-xs uppercase tracking-wider transition"
        >
          CLOSE SIMULATION
        </button>
      </div>
    </div>
  );
}
