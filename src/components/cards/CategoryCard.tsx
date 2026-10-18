import React from 'react';
import { Category } from '@/types';
import {
  PenTool,
  Code2,
  Laptop,
  Building2,
  Megaphone,
  Camera,
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
    <div className="group relative flex flex-col items-center justify-center rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-300 hover:shadow-lg cursor-pointer">
      {/* Lime Circular Icon Badge */}
      <div className="mb-4 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#C6FF00] text-slate-900 shadow-sm transition-transform duration-300 group-hover:scale-110">
        <IconComponent className="h-6 w-6 sm:h-7 sm:w-7 stroke-[2]" />
      </div>

      {/* Category Name */}
      <h3 className="text-sm sm:text-base font-bold text-slate-900 transition-colors group-hover:text-[#0050FF]">
        {category.name}
      </h3>
    </div>
  );
};

export default CategoryCard;
