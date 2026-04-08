'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@components/ui/Badge';
import { Project } from '@types/index';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      className="bg-surface bg-opacity-80 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
      whileHover={{ y: -5 }}
    >
      <div className="relative h-48 w-full">
        {project.screenshots[0] && (
          <Image
            src={project.screenshots[0]}
            alt={project.name}
            fill
            className="object-cover"
          />
        )}
        <Badge intent={project.status.toLowerCase() as any} className="absolute top-2 left-2">
          {project.status}
        </Badge>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-primary">{project.name}</h3>
        <p className="text-sm text-gray-300 mb-3 line-clamp-2">{project.shortDescription}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {project.technologies.map((tech) => (
            <span key={tech} className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded">{tech}</span>
          ))}
        </div>
        <div className="flex gap-2">
          <Link href={`/projects/${project.slug}`} className="flex-1">
            <button className="w-full bg-primary text-white py-1.5 rounded hover:bg-primary/90 transition-colors">
              View Details
            </button>
          </Link>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
              <button className="w-full bg-green-600 text-white py-1.5 rounded hover:bg-green-500 transition-colors">
                Live Demo
              </button>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
