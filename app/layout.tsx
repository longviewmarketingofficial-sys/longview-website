import type { Metadata } from 'next';
import Script from 'next/script';
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
  metadataBase: new URL('https://www.longviewmarketing.agency'),
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
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
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
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-BYBHF8CWEN"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BYBHF8CWEN');
          `}
        </Script>
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
