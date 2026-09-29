import React from 'react';
import { Category } from '@/types';
import IconCircle from '@/components/ui/IconCircle';

export interface CategoryCardProps {
  category: Category;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-brand-blue hover:shadow-md cursor-pointer">
      <IconCircle iconName={category.iconName} size="md" className="mb-4" />
      <h3 className="text-base font-bold text-slate-900">{category.name}</h3>
      <p className="mt-1 text-xs text-slate-500">{category.courseCount} Courses</p>
    </div>
  );
};

export default CategoryCard;
