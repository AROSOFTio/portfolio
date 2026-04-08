export default function Overview() {
  const pillars = [
    {
      title: 'Operational systems',
      copy: 'Business platforms designed around billing, booking, monitoring, reporting, and workflow control.',
    },
    {
      title: 'Content-backed delivery',
      copy: 'Portfolio work should support the main site narrative around services, tutorials, and practical implementation.',
    },
    {
      title: 'Clean handoff',
      copy: 'Each portfolio entry should guide the visitor back to the main AROSOFT offers, not trap them in a separate island.',
    },
  ];

  return (
    <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-[1.75rem] border border-line bg-secondary p-8 text-white shadow-panel">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">Who we are</p>
        <h2 className="mt-4 font-display text-3xl font-semibold">
          A boutique execution partner for systems, content, tools, and growth.
        </h2>
        <p className="mt-5 text-sm leading-7 text-white/80">
          AROSOFT blends software delivery, technical content, hosting support, and practical
          business systems into one coordinated operation. This portfolio is the proof layer for
          that work.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {pillars.map((pillar) => (
          <article key={pillar.title} className="rounded-[1.5rem] border border-line bg-white p-6 shadow-soft">
            <h3 className="text-lg font-semibold text-secondary">{pillar.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{pillar.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
