import './globals.css';
import { Inter, Outfit } from 'next/font/google';
import Navbar from '@components/layout/Navbar';
import Footer from '@components/layout/Footer';
import MobileMenu from '@components/layout/MobileMenu';

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
      <body className="bg-background text-secondary min-h-screen flex flex-col">
        <Navbar />
        <MobileMenu />
        <main className="flex-1 container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
