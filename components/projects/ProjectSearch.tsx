'use client';

import { Search } from 'lucide-react';

interface ProjectSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function ProjectSearch({ value, onChange }: ProjectSearchProps) {
  return (
    <label className="flex w-full items-center gap-3 rounded-full border border-line bg-background px-4 py-3 shadow-sm xl:max-w-xl">
      <Search size={18} className="text-slate-400" />
      <input
        type="text"
        placeholder="Search portfolio projects, sectors, or outcomes"
        className="w-full bg-transparent text-sm text-secondary outline-none placeholder:text-slate-400"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}
