import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  badge,
  centered = false,
  className,
}) => {
  return (
    <div className={cn('max-w-2xl', centered && 'mx-auto text-center', className)}>
      {badge && (
        <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-wider text-brand-blue">
          {badge}
        </span>
      )}
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-base text-slate-600 sm:text-lg">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
