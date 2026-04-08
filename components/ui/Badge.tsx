import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

const baseBadgeStyles =
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset';

const badgeVariants = {
  live: 'bg-green-100 text-green-800 ring-green-200',
  demo: 'bg-blue-100 text-blue-800 ring-blue-200',
  'in development': 'bg-yellow-100 text-yellow-800 ring-yellow-200',
  completed: 'bg-gray-100 text-gray-800 ring-gray-200',
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
