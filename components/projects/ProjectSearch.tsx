import { useState } from 'react';
import { Search } from 'lucide-react';

interface ProjectSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function ProjectSearch({ value, onChange }: ProjectSearchProps) {
  const [local, setLocal] = useState(value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onChange(local);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center border border-gray-300 rounded-md overflow-hidden">
      <input
        type="text"
        placeholder="Search projects..."
        className="px-3 py-2 w-48 focus:outline-none"
        value={local}
        onChange={(e) => setLocal(e.target.value)}
      />
      <button type="submit" className="bg-primary text-white p-2">
        <Search size={18} />
      </button>
    </form>
  );
}
