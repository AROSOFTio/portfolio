import { useState, useMemo } from 'react';
import { projects } from '@data/projects';
import ProjectCard from '@components/projects/ProjectCard';
import ProjectFilters from '@components/projects/ProjectFilters';
import ProjectSearch from '@components/projects/ProjectSearch';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = categoryFilter === 'All' || p.category === categoryFilter;
      const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, categoryFilter]);

  const categories = useMemo(() => {
    const set = new Set(projects.map((p) => p.category));
    return ['All', ...Array.from(set)];
  }, []);

  return (
    <section className="py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-primary">Our Projects</h1>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 px-4">
        <ProjectSearch value={searchTerm} onChange={setSearchTerm} />
        <ProjectFilters categories={categories} selected={categoryFilter} onSelect={setCategoryFilter} />
      </div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        layout
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
