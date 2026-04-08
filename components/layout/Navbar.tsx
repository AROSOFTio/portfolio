import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
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
        {/* Desktop */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium text-white">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="hover:text-primary transition-colors">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* CTA Button */}
        <div className="hidden md:block">
          <Button asChild>
            <Link href="/projects">View Projects</Link>
          </Button>
        </div>
        {/* Mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
    </header>
  );
}
