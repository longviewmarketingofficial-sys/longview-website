import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono, Bebas_Neue } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CursorSpotlight from '@/components/CursorSpotlight';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Long View Digital Marketing | Modern Digital Growth Studio",
  description: "Long View Digital Marketing is a premier growth studio. We engineer high-retention Instagram Reels, hyper-local Meta Ads, and custom NFC Google Review cards for ambitious businesses.",
  keywords: [
    "digital marketing",
    "instagram reels production",
    "meta ads",
    "nfc google review card",
    "growth studio",
    "business marketing"
  ],
  openGraph: {
    title: "Long View Digital Marketing | Modern Digital Growth Studio",
    description: "Marketing without the agency fluff. High-retention Reels, hyper-local Meta Ads, and automated 5-star Google Review hardware.",
    type: "website",
    locale: "en_IN",
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${plusJakarta.variable} ${jetbrainsMono.variable} ${bebasNeue.variable} bg-obsidian text-slate-100 font-sans selection:bg-vermilion selection:text-white antialiased relative overflow-x-hidden min-h-screen bg-architectural-grid`}
      >
        <CursorSpotlight />
        <Navbar />
        <main className="min-h-screen flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
