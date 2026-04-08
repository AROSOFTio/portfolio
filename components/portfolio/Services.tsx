import {
  CalendarCheck,
  Cloud,
  Code,
  FileText,
  LayoutDashboard,
  Server,
  type LucideIcon,
} from 'lucide-react';
import { services } from '@data/services';
import { normalizeCopy } from '@/lib/copy';

const serviceIcons: Record<string, LucideIcon> = {
  CalendarCheck,
  Cloud,
  Code,
  FileInvoice: FileText,
  LayoutDashboard,
  Server,
};

export default function Services() {
  return (
    <section className="rounded-[2rem] border border-line bg-white p-8 shadow-soft md:p-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Service alignment</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-secondary md:text-4xl">
            Built to connect with the parent AROSOFT offers
          </h2>
        </div>
        <a href="https://arosoft.io/services" className="text-sm font-semibold text-primary hover:text-secondary">
          Open main services page
        </a>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => {
          const Icon = serviceIcons[service.icon] ?? FileText;

          return (
            <article key={service.title} className="rounded-[1.5rem] border border-line bg-background p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-primary">
                <Icon size={24} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-secondary">{normalizeCopy(service.title)}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {normalizeCopy(service.description)}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
