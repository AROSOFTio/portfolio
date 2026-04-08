import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

const baseBadgeStyles =
  'inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] ring-1 ring-inset';

const badgeVariants = {
  live: 'bg-emerald-100 text-emerald-700 ring-emerald-200',
  demo: 'bg-sky-100 text-sky-700 ring-sky-200',
  'in development': 'bg-amber-100 text-amber-700 ring-amber-200',
  completed: 'bg-slate-100 text-slate-700 ring-slate-200',
} as const;

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  intent?: keyof typeof badgeVariants;
  children: React.ReactNode;
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  { intent = 'completed', children, className, ...props },
  ref,
) {
  return (
    <span
      ref={ref}
      className={cn(baseBadgeStyles, badgeVariants[intent], className)}
      {...props}
    >
      {children}
    </span>
  );
});
