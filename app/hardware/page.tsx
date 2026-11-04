import type { Metadata } from 'next';
import HardwareView from './HardwareView';

export const metadata: Metadata = {
  title: 'Countertop NFC Google Review Cards & Hardware | Long View',
  description: 'Permanent, matte smart countertop NFC hardware for regional businesses. Turn customer walk-ins into authentic 5-star Google Maps reviews in 2 seconds with zero typing.',
  alternates: {
    canonical: '/hardware',
  },
};

export default function HardwarePage() {
  return <HardwareView />;
}
