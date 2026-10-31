import React from 'react';
import { Category } from '@/types';
import {
  PenTool,
  Code2,
  Laptop,
  Building2,
  Megaphone,
  Camera,
  ArrowUpRight,
  LucideIcon,
} from 'lucide-react';

export interface CategoryCardProps {
  category: Category;
}

const iconMap: Record<string, LucideIcon> = {
  PenTool,
  Code2,
  Laptop,
  Building2,
  Megaphone,
  Camera,
};

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const IconComponent = iconMap[category.iconName] || PenTool;

  return (
    <div className="group relative flex flex-col items-center justify-between rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#0050FF]/40 hover:shadow-xl cursor-pointer">
      {/* Top arrow indicator on hover */}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowUpRight className="h-4 w-4 text-[#0050FF]" />
      </div>

      {/* Lime Circular Icon Badge */}
      <div className="mb-4 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#C6FF00] text-slate-900 shadow-sm transition-transform duration-300 group-hover:scale-110">
        <IconComponent className="h-6 w-6 sm:h-7 sm:w-7 stroke-[2]" />
      </div>

      {/* Category Name & Count */}
      <div>
        <h3 className="text-sm sm:text-base font-bold text-slate-900 transition-colors group-hover:text-[#0050FF]">
          {category.name}
        </h3>
        <p className="mt-1 text-xs font-semibold text-slate-400 group-hover:text-slate-600 transition-colors">
          {category.courseCount}+ Courses
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
