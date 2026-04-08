import { cn } from '@utils/cn';
import { VariantProps, cva } from 'class-variance-authority';
import { forwardRef } from 'react';

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset',
  {
    variants: {
      intent: {
        live: 'bg-green-100 text-green-800 ring-green-200',
        demo: 'bg-blue-100 text-blue-800 ring-blue-200',
        development: 'bg-yellow-100 text-yellow-800 ring-yellow-200',
        completed: 'bg-gray-100 text-gray-800 ring-gray-200',
      },
    },
    defaultVariants: {
      intent: 'completed',
    },
  },
);

export interface BadgeProps extends VariantProps<typeof badgeVariants> {
  children: React.ReactNode;
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge({ intent, children, className }, ref) {
  return (
    <span ref={ref} className={cn(badgeVariants({ intent }), className)}>
      {children}
    </span>
  );
});
