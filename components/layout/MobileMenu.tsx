'use client';

import Link from 'next/link';
import { X, Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@components/ui/Button';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  // Close on route change (simple approach – listen to hash change)
  useEffect(() => {
    const handleHash = () => setOpen(false);
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className={`fixed inset-0 bg-secondary bg-opacity-95 backdrop-blur-md z-40 transform transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
      <button
        className="absolute top-4 right-4 text-white"
        onClick={() => setOpen(false)}
        aria-label="Close menu"
      >
        <X size={28} />
      </button>
      <nav className="flex flex-col items-center justify-center h-full space-y-6 text-white text-xl">
        {navItems.map((item) => (
          <Link key={item.name} href={item.href} onClick={() => setOpen(false)} className="hover:text-primary transition-colors">
            {item.name}
          </Link>
        ))}
        <Button asChild className="mt-4">
          <Link href="/projects">View Projects</Link>
        </Button>
      </nav>
    </div>
  );
}
