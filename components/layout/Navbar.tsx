'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@components/ui/Button';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = () => setMobileOpen(!mobileOpen);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-secondary bg-opacity-80 backdrop-blur-md fixed w-full z-30 top-0 shadow-md">
      <nav className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link href="/" className="text-2xl font-bold text-primary">
          AROSOFT
        </Link>
        <ul className="hidden md:flex space-x-6 text-sm font-medium text-white">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="hover:text-primary transition-colors">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <Button asChild>
            <Link href="/projects">View Projects</Link>
          </Button>
        </div>
        <button
          type="button"
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {mobileOpen && (
        <div className="border-t border-white/10 bg-secondary/95 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-4 text-white">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="mt-2">
              <Link href="/projects" onClick={() => setMobileOpen(false)}>
                View Projects
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
