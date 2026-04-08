export default function Cta() {
  return (
    <section className="rounded-[2rem] border border-primary/15 bg-[linear-gradient(135deg,#102130_0%,#1d2b39_45%,#0f7f33_120%)] p-8 text-white shadow-panel md:p-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/65">Next step</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold md:text-4xl">
            Ready to turn the portfolio into a true child section of arosoft.io?
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80">
            The current build works. The next move is to merge the same design system, links, and
            content structure into the parent site and then redirect the subdomain cleanly.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://arosoft.io/contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-secondary transition-colors hover:bg-accent"
          >
            Contact AROSOFT
          </a>
          <a
            href="https://arosoft.io"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20"
          >
            Open Main Website
          </a>
        </div>
      </div>
    </section>
  );
}
