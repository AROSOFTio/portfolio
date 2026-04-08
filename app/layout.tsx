import './globals.css';
import { Inter, Outfit } from 'next/font/google';
import Navbar from '@components/layout/Navbar';
import PortfolioFooter from '@components/layout/PortfolioFooter';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata = {
  title: 'AROSOFT Innovations – Portfolio',
  description: 'Official showcase of AROSOFT Innovations Ltd – software systems, SaaS platforms, dashboards, and more.',
  openGraph: {
    title: 'AROSOFT Innovations – Portfolio',
    description: 'Explore our portfolio of cutting‑edge software solutions.',
    url: 'https://portfolio.arosoft.io',
    siteName: 'AROSOFT Portfolio',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@arosoft',
    title: 'AROSOFT Innovations – Portfolio',
    description: 'Explore our portfolio of cutting‑edge software solutions.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="flex min-h-screen flex-col bg-background text-secondary">
        <Navbar />
        <main className="mx-auto flex w-full max-w-[1180px] flex-1 px-4 pb-16 pt-32 md:px-6 md:pt-36">
          {children}
        </main>
        <PortfolioFooter />
      </body>
    </html>
  );
}
