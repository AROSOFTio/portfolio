'use client';

import { projects } from '@data/projects';
import ProjectCard from '@components/projects/ProjectCard';
import { motion } from 'framer-motion';

export default function FeaturedProjects() {
  const featured = projects.slice(0, 3);
  return (
    <section className="py-12 bg-surface bg-opacity-50 backdrop-blur-md">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">Featured Projects</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>
        <div className="text-center mt-8">
          <a href="/projects" className="text-primary hover:underline font-medium">
            View all projects →
          </a>
        </div>
      </div>
    </section>
  );
}
