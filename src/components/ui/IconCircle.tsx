import React from 'react';
import { cn } from '@/lib/utils';
import * as Icons from 'lucide-react';

export interface IconCircleProps {
  iconName: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const IconCircle: React.FC<IconCircleProps> = ({ iconName, className, size = 'md' }) => {
  // Dynamically pull icon from lucide-react or fallback to BookOpen
  const IconComponent = (Icons as unknown as Record<string, React.ElementType>)[iconName] || Icons.BookOpen;

  const sizes = {
    sm: 'h-8 w-8 text-sm',
    md: 'h-12 w-12 text-base',
    lg: 'h-16 w-16 text-xl',
  };

  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue font-bold',
        sizes[size],
        className
      )}
    >
      <IconComponent className="h-1/2 w-1/2" />
    </div>
  );
};

export default IconCircle;
