import type { Metadata } from 'next';
import InvestmentsView from './InvestmentsView';

export const metadata: Metadata = {
  title: 'Retainer Investment Packages & Pricing | Long View',
  description: 'Predictable month-to-month digital marketing retainers. High-retention Reels, hyper-local Meta Ads funnels, and custom NFC review hardware with zero ad spend markups.',
  alternates: {
    canonical: '/investments',
  },
};

export default function InvestmentsPage() {
  return <InvestmentsView />;
}
