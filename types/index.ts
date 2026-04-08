export interface Project {
  name: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  status: 'Live' | 'Demo' | 'In Development' | 'Completed';
  year: number;
  technologies: string[];
  features: string[];
  screenshots: string[]; // paths in public/images/projects/<slug>/
  liveUrl?: string;
  demoUrl?: string;
  tags?: string[];
  deploymentType?: string;
  clientType?: string;
  roles?: string[];
}

export interface Service {
  title: string;
  description: string;
  icon: string; // Lucide icon name
}

export interface Tech {
  name: string;
  logo: string; // path to logo image
}
