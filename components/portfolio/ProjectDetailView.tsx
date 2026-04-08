import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Badge } from '@components/ui/Badge';
import type { Project } from '@/types';
import { normalizeCopy } from '@/lib/copy';

export default function ProjectDetailView({ project }: { project: Project }) {
  const statusIntent = project.status.toLowerCase() as 'live' | 'demo' | 'in development' | 'completed';
  const stack = project.technologies.map((item) => normalizeCopy(item));
  const roles = (project.roles ?? []).map((item) => normalizeCopy(item));
  const tags = (project.tags ?? []).map((item) => normalizeCopy(item));

  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-line bg-[radial-gradient(circle_at_top_left,rgba(18,179,71,0.16),transparent_40%),linear-gradient(135deg,#f4faee_0%,#ffffff_58%,#e3f4e9_100%)] p-8 shadow-panel md:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary">
              <ArrowLeft size={16} />
              Back to archive
            </Link>
            <div className="mt-6 flex flex-wrap gap-3">
              <Badge intent={statusIntent}>{normalizeCopy(project.status)}</Badge>
              <span className="rounded-full border border-line bg-white px-4 py-1 text-sm font-medium text-slate-600">
                {project.year}
              </span>
              <span className="rounded-full border border-line bg-white px-4 py-1 text-sm font-medium text-slate-600">
                {normalizeCopy(project.category)}
              </span>
            </div>
            <h1 className="mt-6 font-display text-4xl font-semibold tracking-[-0.04em] text-secondary md:text-5xl">
              {normalizeCopy(project.name)}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              {normalizeCopy(project.fullDescription)}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="rounded-full border border-line bg-white px-4 py-2 text-sm text-slate-600">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <aside className="w-full max-w-sm rounded-[1.5rem] border border-white/80 bg-white/90 p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Engagement profile</p>
            <dl className="mt-5 space-y-5 text-sm">
              <div>
                <dt className="font-semibold text-secondary">Client type</dt>
                <dd className="mt-1 text-slate-600">{normalizeCopy(project.clientType ?? 'Private organization')}</dd>
              </div>
              <div>
                <dt className="font-semibold text-secondary">Deployment</dt>
                <dd className="mt-1 text-slate-600">{normalizeCopy(project.deploymentType ?? 'Managed hosting')}</dd>
              </div>
              <div>
                <dt className="font-semibold text-secondary">Role coverage</dt>
                <dd className="mt-1 text-slate-600">{roles.length > 0 ? roles.join(', ') : 'Application delivery'}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-[1.75rem] border border-line bg-white p-8 shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Key features</p>
          <ul className="mt-6 grid gap-4">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 rounded-[1.2rem] border border-line bg-background p-4">
                <span className="mt-0.5 rounded-full bg-accent p-2 text-primary">
                  <CheckCircle2 size={16} />
                </span>
                <span className="text-sm leading-7 text-slate-600">{normalizeCopy(feature)}</span>
              </li>
            ))}
          </ul>
        </article>

        <div className="space-y-6">
          <article className="rounded-[1.75rem] border border-line bg-white p-8 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Technology stack</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {stack.map((item) => (
                <span key={item} className="rounded-full border border-primary/15 bg-accent px-4 py-2 text-sm font-semibold text-primary">
                  {item}
                </span>
              ))}
            </div>
          </article>

          <article className="rounded-[1.75rem] border border-line bg-secondary p-8 text-white shadow-panel">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">Next step</p>
            <h2 className="mt-3 font-display text-3xl font-semibold">Need a similar system for your team?</h2>
            <p className="mt-4 text-sm leading-7 text-white/80">
              This case study now sits inside a portfolio shell that points back into the wider
              AROSOFT services, hosting, and delivery offers.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-secondary transition-colors hover:bg-accent"
                >
                  Open live project
                  <ArrowUpRight size={16} />
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20"
                >
                  Open demo environment
                  <ArrowUpRight size={16} />
                </a>
              )}
              <a
                href="https://arosoft.io/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20"
              >
                Contact AROSOFT
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <InfoPanel
          title="Delivery model"
          value={roles.length > 0 ? roles.slice(0, 2).join(' + ') : 'Full-stack delivery'}
          copy="The same engagement can connect back to services, hosting, and support on the main website."
        />
        <InfoPanel
          title="Hosting fit"
          value={normalizeCopy(project.deploymentType ?? 'Managed environment')}
          copy="Deployment details are presented cleanly without depending on screenshots or external assets."
        />
        <InfoPanel
          title="Audience"
          value={normalizeCopy(project.clientType ?? 'Business operations')}
          copy="Each project is framed as practical execution proof for the wider AROSOFT brand."
        />
      </section>
    </div>
  );
}

function InfoPanel({
  title,
  value,
  copy,
}: {
  title: string;
  value: string;
  copy: string;
}) {
  return (
    <article className="rounded-[1.5rem] border border-line bg-white p-6 shadow-soft">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{title}</p>
      <h2 className="mt-3 text-xl font-semibold text-secondary">{value}</h2>
      <p className="mt-3 text-sm leading-7 text-slate-600">{copy}</p>
    </article>
  );
}
