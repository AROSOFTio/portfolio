const steps = [
  {
    number: '01',
    title: 'Map the parent site language',
    copy: 'Use the existing arosoft.io tone, links, and visual rhythm as the baseline.',
  },
  {
    number: '02',
    title: 'Frame the portfolio as proof',
    copy: 'Projects support services, hosting, content, and business system credibility.',
  },
  {
    number: '03',
    title: 'Design the subpath transition',
    copy: 'Prepare the portfolio to later live naturally under arosoft.io/portfolio.',
  },
  {
    number: '04',
    title: 'Guide visitors back to action',
    copy: 'Push traffic toward strategy calls, services, tools, and practical next steps.',
  },
];

export default function Process() {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Portfolio flow</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-secondary md:text-4xl">
          How this portfolio should behave inside the AROSOFT ecosystem
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((step) => (
          <article key={step.number} className="rounded-[1.5rem] border border-line bg-white p-6 shadow-soft">
            <p className="text-sm font-semibold text-primary">{step.number}</p>
            <h3 className="mt-4 text-lg font-semibold text-secondary">{step.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{step.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
