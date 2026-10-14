import type { Metadata } from 'next';
import './globals.css';
import MainLayout from '@/components/MainLayout';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.novariseexports.com'),
  title: 'NOVA RISE EXPORTS | Global Merchant Exporters from Kerala, India',
  description: 'Nova Rise Exports is a premier partnership firm based in Kannur, Kerala, India. Exporters of readymade garments, bed sheets, clothing materials, packed snacks, fresh fruits & jackfruit, cereals, pulses, pure coconut oil, and authentic Kerala spices.',
  keywords: [
    'Nova Rise Exports',
    'Kerala Exporters',
    'Kannur Exporters',
    'Merchant Exporter India',
    'Kerala Spices Export',
    'Coconut Oil Exporter',
    'Jackfruit Export',
    'Banana Chips Export',
    'Indian Garments Exporter',
    'Bed Sheets Export',
    'Jagesh Karakandy',
    'Sooraj N L'
  ],
  authors: [{ name: 'Nova Rise Exports' }],
  openGraph: {
    title: 'NOVA RISE EXPORTS | Premium Global Export House',
    description: 'Trust, Reliability, and Customer Satisfaction. Exporting premium garments, bed sheets, Kerala snacks, jackfruit, pulses, cereals, pure coconut oil, and spices worldwide.',
    url: 'https://www.novariseexports.com',
    siteName: 'Nova Rise Exports',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Nova Rise Exports Official Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
