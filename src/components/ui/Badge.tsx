import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'lime' | 'slate' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'blue', className }) => {
  const variants = {
    blue: 'bg-blue-100 text-brand-blue-dark',
    lime: 'bg-brand-lime/20 text-slate-900',
    slate: 'bg-slate-100 text-slate-700',
    outline: 'border border-slate-200 text-slate-600',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
