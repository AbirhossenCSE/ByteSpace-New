import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface RatingProps {
  value: number;
  max?: number;
  showValue?: boolean;
  className?: string;
}

export const Rating: React.FC<RatingProps> = ({
  value,
  max = 5,
  showValue = true,
  className,
}) => {
  return (
    <div className={cn('flex items-center gap-1 text-amber-400', className)}>
      <div className="flex">
        {Array.from({ length: max }).map((_, index) => (
          <Star
            key={index}
            className={cn(
              'h-4 w-4 fill-current',
              index < Math.floor(value) ? 'text-amber-400' : 'text-slate-200 fill-slate-200'
            )}
          />
        ))}
      </div>
      {showValue && <span className="ml-1 text-xs font-semibold text-slate-700">{value}</span>}
    </div>
  );
};

export default Rating;
