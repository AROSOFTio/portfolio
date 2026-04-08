import { cn } from '@utils/cn';

interface ProjectFiltersProps {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

export default function ProjectFilters({ categories, selected, onSelect }: ProjectFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={cn(
            'px-3 py-1 rounded-full text-sm transition-colors',
            selected === cat ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
