import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const strengths = [
  'Full-stack delivery across modern web, SaaS, content, and business platforms.',
  'Design-led execution that keeps product experience tied to business clarity.',
  'Containerized deployment workflows and production hosting support.',
  'Operational systems built around real teams, not generic templates.',
];

const principles = [
  {
    title: 'Execution with context',
    copy: 'We connect software builds, content, tutorials, hosting, and tooling into one operating model.',
  },
  {
    title: 'Brand continuity',
    copy: 'This portfolio is being rebuilt to feel like a natural extension of arosoft.io, not an isolated microsite.',
  },
  {
    title: 'Practical outcomes',
    copy: 'Our focus is measurable delivery: billing, bookings, dashboards, automation, and business workflow control.',
  },
];

export default function AboutContent() {
  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-line bg-[radial-gradient(circle_at_top_left,rgba(18,179,71,0.14),transparent_40%),linear-gradient(135deg,#f4faee_0%,#ffffff_60%,#e4f4e8_100%)] p-8 shadow-panel md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">About AROSOFT</p>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] text-secondary md:text-5xl">
              Delivery partner for systems, content, tools, and growth.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              AROSOFT Innovations Ltd builds digital systems that sit closer to operations:
              platforms, portals, automation, technical content, and the infrastructure needed to
              keep them running. This portfolio now mirrors that wider parent-site direction.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="https://arosoft.io/services"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-primary/90"
              >
                Explore services
              </a>
              <a
                href="https://arosoft.io/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-white px-6 py-3 text-sm font-semibold text-secondary transition-colors hover:border-primary hover:text-primary"
              >
                Contact the team
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
          <div className="grid gap-4">
            <InfoCard
              label="Focus"
              title="Execution over noise"
              copy="Systems, SaaS products, and delivery tools built for practical day-to-day operations."
            />
            <InfoCard
              label="Positioning"
              title="Connected to arosoft.io"
              copy="The portfolio now supports the main website's services, blog, tutorials, tools, and contact flows."
            />
            <InfoCard
              label="Build system"
              title="Current pipeline retained"
              copy="The redesign keeps the existing Next.js, Tailwind, and Docker deployment flow in place."
            />
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="rounded-[1.75rem] border border-line bg-white p-8 shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Core strengths</p>
          <ul className="mt-6 grid gap-4">
            {strengths.map((strength) => (
              <li key={strength} className="flex items-start gap-3 rounded-[1.25rem] border border-line bg-background p-4">
                <span className="mt-0.5 rounded-full bg-accent p-2 text-primary">
                  <CheckCircle2 size={16} />
                </span>
                <span className="text-sm leading-7 text-slate-600">{strength}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-[1.75rem] border border-line bg-secondary p-8 text-white shadow-panel">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">How we work</p>
          <div className="mt-6 space-y-4">
            {principles.map((principle) => (
              <div key={principle.title} className="rounded-[1.3rem] border border-white/10 bg-white/5 p-5">
                <h2 className="text-xl font-semibold">{principle.title}</h2>
                <p className="mt-3 text-sm leading-7 text-white/80">{principle.copy}</p>
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}

function InfoCard({
  label,
  title,
  copy,
}: {
  label: string;
  title: string;
  copy: string;
}) {
  return (
    <article className="rounded-[1.5rem] border border-line bg-white/90 p-6 shadow-soft">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{label}</p>
      <h2 className="mt-3 text-2xl font-semibold text-secondary">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-slate-600">{copy}</p>
    </article>
  );
}
