import type { Metadata } from 'next';
import ClientsView from './ClientsView';

export const metadata: Metadata = {
  title: 'Verified Regional Clients & Case Studies | Long View',
  description: 'Explore the regional businesses and dining destinations growing with Long View digital marketing, cinematic Reels, Meta ad campaigns, and NFC Google review stands.',
  alternates: {
    canonical: '/clients',
  },
};

export default function ClientsPage() {
  return <ClientsView />;
}
