'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { projects } from '@data/projects';
import ProjectCard from '@components/projects/ProjectCard';
import ProjectFilters from '@components/projects/ProjectFilters';
import ProjectSearch from '@components/projects/ProjectSearch';
import { normalizeCopy } from '@/lib/copy';

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const normalizedCategory = normalizeCopy(p.category);
      const searchableText = `${normalizeCopy(p.name)} ${normalizeCopy(p.shortDescription)}`.toLowerCase();
      const matchesCategory = categoryFilter === 'All' || normalizedCategory === categoryFilter;
      const matchesSearch = searchableText.includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, categoryFilter]);

  const categories = useMemo(() => {
    const set = new Set(projects.map((p) => normalizeCopy(p.category)));
    return ['All', ...Array.from(set)];
  }, []);

  const liveCount = projects.filter((project) => project.status === 'Live').length;
  const categoryCount = categories.length - 1;

  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-line bg-[radial-gradient(circle_at_top_left,rgba(18,179,71,0.14),transparent_38%),linear-gradient(135deg,#f4faee_0%,#ffffff_58%,#e6f5eb_100%)] p-8 shadow-panel md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Portfolio archive</p>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] text-secondary md:text-5xl">
              Project work that now feels native to the main AROSOFT site.
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              Browse case studies across SaaS, business systems, dashboards, and delivery tools.
              The current Next.js and Docker build flow stays intact while the presentation layer
              aligns to the parent website.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="https://arosoft.io/services"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-primary/90"
              >
                View services
              </a>
              <a
                href="https://arosoft.io/contact"
                className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-white px-6 py-3 text-sm font-semibold text-secondary transition-colors hover:border-primary hover:text-primary"
              >
                Discuss a similar build
              </a>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            <ArchiveStat label="Total entries" value={projects.length.toString()} />
            <ArchiveStat label="Live deployments" value={liveCount.toString()} />
            <ArchiveStat label="Coverage areas" value={categoryCount.toString()} />
          </div>
        </div>
      </section>

      <section className="rounded-[1.75rem] border border-line bg-white p-6 shadow-soft md:p-8">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <ProjectSearch value={searchTerm} onChange={setSearchTerm} />
          <ProjectFilters categories={categories} selected={categoryFilter} onSelect={setCategoryFilter} />
        </div>
        <div className="mt-6 flex flex-col gap-3 border-t border-line pt-6 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <p>
            Showing {filteredProjects.length} of {projects.length} portfolio entries.
          </p>
          <Link href="/" className="font-semibold text-primary hover:text-secondary">
            Back to portfolio overview
          </Link>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-[1.5rem] border border-dashed border-line bg-background p-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">No direct match</p>
            <h2 className="mt-3 text-2xl font-semibold text-secondary">Try a different category or search phrase.</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Search by sector, platform type, or outcome to narrow the archive.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

function ArchiveStat({ label, value }: { label: string; value: string }) {
  return (
    <article className="rounded-[1.4rem] border border-line bg-white/85 p-5 shadow-soft">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{label}</p>
      <p className="mt-3 font-display text-4xl font-semibold text-secondary">{value}</p>
    </article>
  );
}
