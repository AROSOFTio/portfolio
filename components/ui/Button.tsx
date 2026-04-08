import { forwardRef } from 'react';
import { cn } from '@utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
  asChild?: boolean;
}

const baseStyles = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

const variants = {
  default: 'bg-primary text-white hover:bg-primary/90',
  outline: 'border border-primary text-primary hover:bg-primary/10',
  ghost: 'bg-transparent text-primary hover:bg-primary/10',
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
