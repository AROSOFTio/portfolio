'use client';

import { services } from '@data/services';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  CalendarCheck,
  Cloud,
  Code,
  FileText,
  LayoutDashboard,
  Server,
  type LucideIcon,
} from 'lucide-react';

const serviceIcons: Record<string, LucideIcon> = {
  CalendarCheck,
  Cloud,
  Code,
  FileInvoice: FileText,
  LayoutDashboard,
  Server,
};

export default function ServicesSection() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">Our Services</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
          }}
        >
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </motion.div>
        <div className="text-center mt-8">
          <Link href="/contact" className="text-primary hover:underline font-medium">
            Interested? Get in touch →
          </Link>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  const Icon = serviceIcons[icon] ?? FileText;

  return (
    <motion.div
      className="bg-surface bg-opacity-80 backdrop-blur-md rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-shadow"
      whileHover={{ y: -5 }}
    >
      <div className="flex justify-center mb-4 text-primary">
        <Icon size={36} />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
    </motion.div>
  );
}
