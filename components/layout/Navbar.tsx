'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = () => setMobileOpen((current) => !current);

  const navItems = [
    { name: 'Main Site', href: 'https://arosoft.io', external: true },
    { name: 'Portfolio', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: 'https://arosoft.io/about', external: true },
    { name: 'Services', href: 'https://arosoft.io/services', external: true },
    { name: 'Contact', href: 'https://arosoft.io/contact', external: true },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto max-w-[1180px] px-4 pt-4 md:px-6">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex flex-wrap gap-2">
            <a href="https://arosoft.io/about" className="rounded-full border border-line bg-white/85 px-4 py-2 hover:border-primary hover:text-primary">
              About
            </a>
            <a href="https://arosoft.io/privacy" className="rounded-full border border-line bg-white/85 px-4 py-2 hover:border-primary hover:text-primary">
              Privacy
            </a>
            <a href="https://arosoft.io/contact" className="rounded-full border border-line bg-white/85 px-4 py-2 hover:border-primary hover:text-primary">
              Contact
            </a>
          </div>
          <a
            href="https://arosoft.io"
            className="inline-flex items-center gap-1 rounded-full border border-transparent px-3 py-2 font-medium text-slate-500 hover:border-line hover:bg-white/80 hover:text-secondary"
          >
            Back to arosoft.io
            <ArrowUpRight size={14} />
          </a>
        </div>
        <div className="rounded-[1.8rem] border border-primary/10 bg-primary px-4 py-4 shadow-panel">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-3 rounded-[1.35rem] bg-white px-4 py-3 text-secondary">
              <span className="flex h-10 w-10 items-center justify-center rounded-[1rem] bg-accent font-display text-lg font-bold text-primary">
                A
              </span>
              <span className="flex flex-col">
                <span className="font-display text-base font-semibold">AROSOFT</span>
                <span className="text-[11px] uppercase tracking-[0.22em] text-slate-500">Portfolio</span>
              </span>
            </Link>
            <nav className="hidden items-center gap-6 text-sm font-medium text-white lg:flex">
              {navItems.map((item) => (
                <NavItem key={item.name} {...item} />
              ))}
            </nav>
            <div className="hidden lg:block">
              <a
                href="https://arosoft.io/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20"
              >
                Book Strategy Call
              </a>
            </div>
            <button
              type="button"
              className="rounded-full border border-white/30 bg-white/10 p-3 text-white lg:hidden"
              onClick={toggleMenu}
              aria-expanded={mobileOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          {mobileOpen && (
            <div className="mt-4 rounded-[1.35rem] bg-white p-4 lg:hidden">
              <nav className="flex flex-col gap-3 text-sm font-medium text-secondary">
                {navItems.map((item) => (
                  <NavItem key={item.name} {...item} onNavigate={() => setMobileOpen(false)} mobile />
                ))}
                <a
                  href="https://arosoft.io/contact"
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white"
                >
                  Book Strategy Call
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

function NavItem({
  href,
  name,
  external,
  mobile = false,
  onNavigate,
}: {
  href: string;
  name: string;
  external?: boolean;
  mobile?: boolean;
  onNavigate?: () => void;
}) {
  const className = mobile
    ? 'rounded-full px-3 py-2 hover:bg-muted hover:text-primary'
    : 'transition-colors hover:text-accent';

  if (external) {
    return (
      <a href={href} className={className} onClick={onNavigate}>
        {name}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onNavigate}>
      {name}
    </Link>
  );
}
