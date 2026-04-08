import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
  asChild?: boolean;
}

const baseStyles =
  'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-[0.02em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50';

const variants = {
  default: 'bg-primary text-white shadow-soft hover:bg-primary/90',
  outline: 'border border-primary/30 bg-white text-secondary hover:border-primary hover:text-primary',
  ghost: 'bg-transparent text-secondary hover:bg-primary/10 hover:text-primary',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button({ className, variant = 'default', asChild = false, ...props }, ref) {
  const Component = asChild ? 'span' : 'button';
  return (
    <Component
      className={cn(baseStyles, variants[variant], className)}
      ref={ref}
      {...props}
    />
  );
});
