import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'lime';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

    const variants = {
      primary: 'bg-brand-blue text-white hover:bg-brand-blue-dark focus:ring-brand-blue',
      secondary: 'bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-900',
      outline:
        'border border-slate-300 bg-transparent text-slate-700 hover:bg-slate-50 focus:ring-slate-400',
      ghost: 'bg-transparent text-slate-700 hover:bg-slate-100 focus:ring-slate-300',
      lime: 'bg-brand-lime text-slate-900 font-semibold hover:bg-brand-lime-bright focus:ring-brand-lime',
    };

    const sizes = {
      sm: 'text-xs px-3 py-1.5 gap-1.5',
      md: 'text-sm px-4 py-2 gap-2',
      lg: 'text-base px-6 py-3 gap-2.5',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
