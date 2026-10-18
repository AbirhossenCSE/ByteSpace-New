import React from 'react';
import Image from 'next/image';
import { Course } from '@/types';
import { Star, BarChart2 } from 'lucide-react';

export interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="group rounded-3xl border border-slate-200/80 bg-white p-3.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Thumbnail Container */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden rounded-2xl bg-slate-100">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Floating pill bar at the bottom of the image */}
        <div className="absolute bottom-3 left-3 right-3">
          <div className="flex items-center justify-between rounded-full bg-black/60 px-3.5 py-1.5 text-[11px] font-medium text-white backdrop-blur-md">
            <span>{course.lessons}</span>
            <span className="text-white/40">•</span>
            <span>{course.duration}</span>
            <span className="text-white/40">•</span>
            <span>{course.commentsCount} Comments</span>
          </div>
        </div>
      </div>

      {/* Card Details */}
      <div className="pt-3.5 pb-1 px-1">
        {/* Title and Rating Row */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-bold text-slate-900 line-clamp-1 group-hover:text-[#0050FF] transition-colors">
            {course.title}
          </h3>
          <div className="flex items-center gap-1 shrink-0 text-xs font-bold text-slate-700">
            <span>{course.rating}</span>
            <Star className="h-3.5 w-3.5 fill-[#0050FF] text-[#0050FF]" />
          </div>
        </div>

        {/* Instructor */}
        <div className="mt-0.5">
          <span className="text-xs font-medium text-[#0050FF]">
            by {course.instructor}
          </span>
        </div>

        {/* Level and Students Avatars Row */}
        <div className="mt-4 flex items-center justify-between">
          {/* Level */}
          <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
            <BarChart2 className="h-3.5 w-3.5 text-[#0050FF]" />
            <span>{course.level}</span>
          </div>

          {/* Overlapping Student Avatars + 26+ Badge */}
          <div className="flex items-center">
            <div className="flex -space-x-1.5">
              <div className="h-5 w-5 rounded-full border border-white bg-slate-700 flex items-center justify-center text-[7px] font-bold text-white">
                JD
              </div>
              <div className="h-5 w-5 rounded-full border border-white bg-blue-600 flex items-center justify-center text-[7px] font-bold text-white">
                AK
              </div>
              <div className="h-5 w-5 rounded-full border border-white bg-pink-500 flex items-center justify-center text-[7px] font-bold text-white">
                SL
              </div>
            </div>
            <span className="ml-1 flex h-5 min-w-[20px] px-1 items-center justify-center rounded-full bg-[#C6FF00] text-[9px] font-extrabold text-slate-900">
              {course.extraStudentsCount || '26+'}
            </span>
          </div>
        </div>

        {/* Price Row */}
        <div className="mt-3 flex items-baseline gap-1">
          <span className="text-lg font-extrabold text-[#0050FF]">
            ${course.price}
          </span>
          <span className="text-xs font-normal text-slate-400">
            {course.priceUnit || '/lifetime'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
