export default function Hero() {
  return (
    <section className="rounded-[2rem] border border-line bg-[radial-gradient(circle_at_top_left,rgba(18,179,71,0.14),transparent_40%),linear-gradient(135deg,#f0f8f1_0%,#ffffff_55%,#e1f3e7_100%)] p-8 shadow-panel md:p-12">
      <div className="grid gap-8 lg:grid-cols-[1.45fr_0.95fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            AROSOFT Innovations Ltd
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold tracking-[-0.04em] text-secondary md:text-6xl">
            Portfolio delivery aligned with the main AROSOFT website.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            This space showcases systems, SaaS products, dashboards, portals, and execution work
            delivered for real operational teams. It is designed to feel like one continuous AROSOFT
            experience, not a disconnected microsite.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://arosoft.io/contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-primary/90"
            >
              Book Strategy Call
            </a>
            <a
              href="/projects"
              className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-white px-6 py-3 text-sm font-semibold text-secondary transition-colors hover:border-primary hover:text-primary"
            >
              Explore Portfolio
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600">
            <span className="rounded-full border border-line bg-white px-4 py-2">ERP, POS, CRM, Education</span>
            <span className="rounded-full border border-line bg-white px-4 py-2">SaaS + dashboards + portals</span>
            <span className="rounded-full border border-line bg-white px-4 py-2">Execution tied back to arosoft.io</span>
          </div>
        </div>
        <div className="space-y-4">
          <InfoCard
            label="Delivery Stack"
            title="Engineering + Operations"
            copy="From planning to deployment and support with one accountable delivery partner."
          />
          <InfoCard
            label="Content Engine"
            title="Projects + Case Narratives"
            copy="A presentation layer that connects real builds to the main AROSOFT brand and services."
          />
          <InfoCard
            label="Business Systems"
            title="Hospitality, Utility, Education, Finance"
            copy="Systems shaped around workflows and outcomes, not generic templates."
          />
        </div>
      </div>
    </section>
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
    <div className="rounded-[1.5rem] border border-line bg-white/90 p-6 shadow-soft">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{label}</p>
      <h2 className="mt-3 text-2xl font-semibold text-secondary">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-slate-600">{copy}</p>
    </div>
  );
}
