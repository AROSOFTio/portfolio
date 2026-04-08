'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@components/ui/Badge';
import type { Project } from '@/types';
import { normalizeCopy } from '@/lib/copy';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const statusIntent = project.status.toLowerCase() as 'live' | 'demo' | 'in development' | 'completed';
  const previewItems = (project.tags?.length ? project.tags : project.technologies)
    .slice(0, 3)
    .map((item) => normalizeCopy(item));

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-line bg-white shadow-soft transition-transform duration-300 hover:-translate-y-1 hover:shadow-panel">
      <div className="border-b border-line bg-[radial-gradient(circle_at_top_left,rgba(18,179,71,0.18),transparent_45%),linear-gradient(180deg,#f8fcf7_0%,#edf8f1_100%)] p-6">
        <div className="flex items-start justify-between gap-4">
          <Badge intent={statusIntent}>{normalizeCopy(project.status)}</Badge>
          <span className="text-sm font-medium text-slate-500">{project.year}</span>
        </div>
        <div className="mt-8 rounded-[1.35rem] border border-white/80 bg-white/90 p-5 shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            {normalizeCopy(project.category)}
          </p>
          <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-secondary">
            {normalizeCopy(project.name)}
          </h3>
          <div className="mt-5 flex flex-wrap gap-2">
            {previewItems.map((item) => (
              <span
                key={item}
                className="rounded-full border border-line bg-background px-3 py-1 text-xs font-medium text-slate-600"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm leading-7 text-slate-600">{normalizeCopy(project.shortDescription)}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-primary/15 bg-accent px-3 py-1 text-xs font-semibold text-primary"
            >
              {normalizeCopy(tech)}
            </span>
          ))}
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-primary/90"
          >
            View case study
          </Link>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/25 bg-white px-5 py-3 text-sm font-semibold text-secondary transition-colors hover:border-primary hover:text-primary"
            >
              Live project
              <ArrowUpRight size={16} />
            </a>
          ) : project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/25 bg-white px-5 py-3 text-sm font-semibold text-secondary transition-colors hover:border-primary hover:text-primary"
            >
              Demo preview
              <ArrowUpRight size={16} />
            </a>
          ) : (
            <span className="inline-flex items-center justify-center rounded-full border border-line bg-background px-5 py-3 text-sm font-semibold text-slate-500">
              Release planning
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
