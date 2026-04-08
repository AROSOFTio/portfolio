export default function PortfolioFooter() {
  return (
    <footer className="border-t border-line/80 bg-white/75 backdrop-blur-sm">
      <div className="mx-auto max-w-[1180px] px-4 py-10 md:px-6">
        <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr_0.85fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">AROSOFT Portfolio</p>
            <h3 className="mt-3 font-display text-2xl font-semibold text-secondary">
              Delivery work connected to the main AROSOFT site.
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
              This portfolio is designed as an extension of arosoft.io, showcasing systems,
              platforms, and operational delivery across software, content, and business tools.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Explore</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li><a href="https://arosoft.io" className="hover:text-primary">Main Website</a></li>
              <li><a href="/projects" className="hover:text-primary">Project Archive</a></li>
              <li><a href="https://arosoft.io/services" className="hover:text-primary">Services</a></li>
              <li><a href="https://arosoft.io/tools" className="hover:text-primary">Tools</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Connect</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li><a href="mailto:info@arosoft.io" className="hover:text-primary">info@arosoft.io</a></li>
              <li><a href="https://arosoft.io/contact" className="hover:text-primary">Contact AROSOFT</a></li>
              <li><a href="https://arosoft.io/privacy" className="hover:text-primary">Privacy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-3 border-t border-line pt-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} AROSOFT Innovations Ltd. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://arosoft.io/blog" className="hover:text-primary">Blog</a>
            <a href="https://arosoft.io/tutorials" className="hover:text-primary">Tutorials</a>
            <a href="https://arosoft.io/hosting" className="hover:text-primary">Hosting</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
