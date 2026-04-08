'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@components/ui/Button';

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-primary to-indigo-600 text-white overflow-hidden">
      <motion.div
        className="container mx-auto text-center px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">AROSOFT Innovations Ltd</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Crafting premium software systems, SaaS platforms, and digital experiences for forward‑thinking businesses.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <Link href="/projects">Explore Projects</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
