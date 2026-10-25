'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "How is the Meta advertising budget handled?",
    answer: "Your ad spend is paid directly to Meta (Facebook/Instagram) using your own payment card. Long View's retainer covers ad strategy, target radius setup, creative copywriting, visual design, and weekly performance adjustments. You retain 100% billing transparency."
  },
  {
    question: "How do we capture raw footage for the Reels?",
    answer: "We eliminate guesswork by providing you with clear, monthly shot-lists (e.g. 5–8 second clips your team can capture on any iPhone or Samsung device). You upload raw video files to our shared Google Drive, and our agency editors handle pacing, trending audio hooks, captions, and color correction."
  },
  {
    question: "Do the NFC tap cards require an app or batteries?",
    answer: "Zero batteries, zero charging, and zero apps. NFC cards run on passive near-field frequency powered momentarily by the customer's phone during contact. They last indefinitely and include a printed QR code backup for older smartphones."
  },
  {
    question: "How fast does onboarding take?",
    answer: "Once you confirm your plan via WhatsApp, we collect your business assets within 48 hours. By Day 7, your Week 1 content calendar is delivered for approval and your custom NFC hardware enters production."
  }
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-3">
      {FAQS.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="bg-obsidianSurface border grid-border p-6 rounded-lg cursor-pointer transition-colors hover:border-white/20"
            onClick={() => toggle(idx)}
          >
            <div className="flex justify-between items-center gap-4">
              <h4 className="text-sm sm:text-base font-mono font-bold text-bone">
                {faq.question}
              </h4>
              <button
                className="text-vermilion p-1 rounded hover:bg-white/5 transition"
                aria-label="Toggle Question"
              >
                {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              </button>
            </div>
            {isOpen && (
              <div className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed pt-3 border-t grid-border font-normal animate-in fade-in duration-200">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
