import { normalizeCopy } from '@/lib/copy';

const capabilities = [
  {
    title: 'Parent-site consistency',
    copy: 'Green/white palette, rounded surfaces, connected navigation, and clearer calls back into arosoft.io.',
  },
  {
    title: 'Project storytelling',
    copy: 'Every case preview is positioned as proof of execution, not a disconnected gallery.',
  },
  {
    title: 'Delivery coverage',
    copy: 'Hospitality, utility, education, finance, monitoring, and internal business operations.',
  },
  {
    title: 'Tooling and hosting fit',
    copy: 'The portfolio can support the main site’s hosting, tools, tutorials, and services pillars.',
  },
];

const stack = [
  'Next.js',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Docker',
  'Node.js',
  'PostgreSQL',
  'Framer Motion',
];

export default function CapabilityGrid() {
  return (
    <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="rounded-[1.75rem] border border-line bg-white p-8 shadow-soft">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Why this rebuild</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-secondary">A stronger portfolio shell with less friction.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {capabilities.map((item) => (
            <article key={item.title} className="rounded-[1.25rem] border border-line bg-background p-5">
              <h3 className="text-lg font-semibold text-secondary">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{normalizeCopy(item.copy)}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="rounded-[1.75rem] border border-line bg-secondary p-8 text-white shadow-panel">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">Current build system</p>
        <h2 className="mt-3 font-display text-3xl font-semibold">Still using the working Next + Docker flow.</h2>
        <p className="mt-4 text-sm leading-7 text-white/80">
          The visual rebuild keeps the current build pipeline intact while changing the design system
          and presentation layer.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {stack.map((item) => (
            <span key={item} className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/85">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
