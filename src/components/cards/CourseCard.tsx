import React from 'react';
import Image from 'next/image';
import { Course } from '@/types';
import Rating from '@/components/ui/Rating';
import Badge from '@/components/ui/Badge';
import { Users } from 'lucide-react';

export interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
      {/* Image Container */}
      <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
        {course.image ? (
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-slate-200 text-slate-400">
            Course Thumbnail
          </div>
        )}
        {course.badge && (
          <div className="absolute top-3 left-3">
            <Badge variant="blue">{course.badge}</Badge>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5">
        <div className="text-xs font-semibold text-brand-blue">{course.category}</div>
        <h3 className="mt-1.5 text-base font-bold text-slate-900 line-clamp-2 group-hover:text-brand-blue transition-colors">
          {course.title}
        </h3>
        <p className="mt-1 text-xs text-slate-500">By {course.instructor}</p>

        <div className="mt-3 flex items-center justify-between">
          <Rating value={course.rating} />
          <div className="flex items-center text-xs text-slate-500 gap-1">
            <Users className="h-3.5 w-3.5" />
            <span>{course.studentsCount.toLocaleString()}</span>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg font-extrabold text-slate-900">${course.price}</span>
            {course.originalPrice && (
              <span className="text-xs text-slate-400 line-through">
                ${course.originalPrice}
              </span>
            )}
          </div>
          <span className="text-xs font-medium text-slate-600 bg-slate-100 px-2 py-1 rounded">
            {course.level}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
