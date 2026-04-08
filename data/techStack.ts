export interface Tech {
  name: string;
  logo: string; // path to logo image in public/tech
}

export const techStack: Tech[] = [
  { name: 'Next.js', logo: '/tech/nextjs.svg' },
  { name: 'React', logo: '/tech/react.svg' },
  { name: 'TypeScript', logo: '/tech/typescript.svg' },
  { name: 'Tailwind CSS', logo: '/tech/tailwindcss.svg' },
  { name: 'Framer Motion', logo: '/tech/framer-motion.svg' },
  { name: 'Node.js', logo: '/tech/nodejs.svg' },
  { name: 'PostgreSQL', logo: '/tech/postgresql.svg' },
  { name: 'MongoDB', logo: '/tech/mongodb.svg' },
];
