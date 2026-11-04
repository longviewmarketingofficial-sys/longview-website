import type { Metadata } from 'next';
import AboutView from './AboutView';

export const metadata: Metadata = {
  title: 'About Long View | Founding Team, Mission & Philosophy',
  description: 'Learn about Long View Digital Marketing, our co-founders Harit, Kathan, and Jay, and our disciplined approach to regional business growth.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return <AboutView />;
}
