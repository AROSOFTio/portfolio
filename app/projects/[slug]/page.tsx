import { notFound } from 'next/navigation';
import { projects } from '@data/projects';
import ProjectDetailView from '@components/portfolio/ProjectDetailView';

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailView project={project} />;
  /*

  return (
    <article className="container mx-auto py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-primary mb-2">{project.name}</h1>
        <Badge intent={project.status.toLowerCase() as any} className="mb-4">
          {project.status}
        </Badge>
        <p className="text-lg text-gray-300">{project.fullDescription}</p>
      </header>

      SCREENSHOT GALLERY
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {project.screenshots.map((src, i) => (
          <div key={i} className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg">
            <Image src={src} alt={`${project.name} screenshot ${i + 1}`} fill className="object-cover" />
          </div>
        ))}
      </section>

      FEATURES AND TECH
      <section className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            {project.features.map((feat, i) => (
              <li key={i}>{feat}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-4">Technologies</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      CTA BUTTONS
      <div className="flex gap-4 mb-8">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button className="w-full bg-green-600 hover:bg-green-500">Live Demo</Button>
          </a>
        )}
        {project.demoUrl && (
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button variant="outline" className="w-full">Demo / Staging</Button>
          </a>
        )}
        <Link href="/projects" className="flex-1">
          <Button variant="ghost" className="w-full">← Back to Projects</Button>
        </Link>
      </div>
    </article>
  );
  */
}
