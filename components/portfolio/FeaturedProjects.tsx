import Link from 'next/link';
import { projects } from '@data/projects';
import ProjectCard from '@components/projects/ProjectCard';

export default function FeaturedProjects() {
  const featured = projects.slice(0, 3);

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Selected work</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-secondary md:text-4xl">
            Featured portfolio entries
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
            A focused set of case previews that can later live inside the main arosoft.io structure
            as `/portfolio`.
          </p>
        </div>
        <Link href="/projects" className="text-sm font-semibold text-primary hover:text-secondary">
          View the full archive
        </Link>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
