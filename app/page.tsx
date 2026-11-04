import type { Metadata } from 'next';
import HomeView from './HomeView';

export const metadata: Metadata = {
  title: 'Long View Digital Marketing | Modern Digital Growth Studio',
  description: 'Long View Digital Marketing is a premier growth studio. We engineer high-retention Instagram Reels, hyper-local Meta Ads, and custom NFC Google Review cards for ambitious businesses.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return <HomeView />;
}
