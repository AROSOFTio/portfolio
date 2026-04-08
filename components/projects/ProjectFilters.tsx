'use client';

import { cn } from '@/lib/utils';

interface ProjectFiltersProps {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

export default function ProjectFilters({ categories, selected, onSelect }: ProjectFiltersProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((cat) => (
        <button
          key={cat}
          type="button"
          onClick={() => onSelect(cat)}
          className={cn(
            'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
            selected === cat
              ? 'border-primary bg-primary text-white shadow-soft'
              : 'border-line bg-white text-slate-600 hover:border-primary/40 hover:text-primary'
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
