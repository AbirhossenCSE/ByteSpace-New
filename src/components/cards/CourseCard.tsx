'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Course } from '@/types';
import { Star, BarChart2, Bookmark, CheckCircle2, ArrowUpRight } from 'lucide-react';

export interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-3.5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-300 hover:shadow-xl">
      {/* Thumbnail Container */}
      <div>
        <div className="relative h-48 sm:h-52 w-full overflow-hidden rounded-2xl bg-slate-100">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Top Badges: Popular / Category & Wishlist */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
            {course.isPopular ? (
              <span className="rounded-full bg-[#0050FF] px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md">
                Bestseller
              </span>
            ) : (
              <span className="rounded-full bg-slate-900/70 backdrop-blur-md px-2.5 py-1 text-[10px] font-semibold text-white">
                {course.category}
              </span>
            )}

            <button
              type="button"
              aria-label="Save to wishlist"
              onClick={(e) => {
                e.preventDefault();
                setIsBookmarked(!isBookmarked);
              }}
              className={`flex h-8 w-8 items-center justify-center rounded-full backdrop-blur-md shadow-md transition-all active:scale-90 ${
                isBookmarked
                  ? 'bg-[#C6FF00] text-slate-900'
                  : 'bg-white/80 text-slate-700 hover:bg-white hover:text-[#0050FF]'
              }`}
            >
              <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-slate-900' : ''}`} />
            </button>
          </div>

          {/* Floating pill bar at the bottom of the image */}
          <div className="absolute bottom-3 left-3 right-3 z-10">
            <div className="flex items-center justify-between rounded-full bg-black/65 px-3.5 py-1.5 text-[11px] font-medium text-white backdrop-blur-md">
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
            <div className="flex items-center gap-1 shrink-0 text-xs font-bold text-slate-800 bg-amber-50 border border-amber-200/60 px-1.5 py-0.5 rounded-md">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              <span>{course.rating}</span>
            </div>
          </div>

          {/* Instructor with Verified Icon */}
          <div className="mt-1 flex items-center gap-1">
            <span className="text-xs font-semibold text-[#0050FF]">
              by {course.instructor}
            </span>
            <CheckCircle2 className="h-3 w-3 text-[#0050FF]" />
          </div>

          {/* Level and Students Avatars Row */}
          <div className="mt-4 flex items-center justify-between">
            {/* Level */}
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
              <BarChart2 className="h-3.5 w-3.5 text-[#0050FF]" />
              <span>{course.level}</span>
            </div>

            {/* Overlapping Student Avatars + Badge */}
            <div className="flex items-center">
              <div className="flex -space-x-1.5">
                <div className="h-5 w-5 rounded-full border border-white bg-slate-800 flex items-center justify-center text-[7px] font-bold text-white shadow-sm">
                  JD
                </div>
                <div className="h-5 w-5 rounded-full border border-white bg-blue-600 flex items-center justify-center text-[7px] font-bold text-white shadow-sm">
                  AK
                </div>
                <div className="h-5 w-5 rounded-full border border-white bg-pink-500 flex items-center justify-center text-[7px] font-bold text-white shadow-sm">
                  SL
                </div>
              </div>
              <span className="ml-1.5 flex h-5 min-w-[20px] px-1.5 items-center justify-center rounded-full bg-[#C6FF00] text-[9px] font-extrabold text-slate-900 shadow-sm">
                {course.extraStudentsCount || '26+'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Price & Action Row */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between px-1">
        <div className="flex items-baseline gap-1.5">
          <span className="text-xl font-black text-[#0050FF]">
            ${course.price}
          </span>
          <span className="text-xs font-medium text-slate-400 line-through">
            ${course.price * 3}
          </span>
          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1 py-0.5 rounded">
            65% OFF
          </span>
        </div>

        <Link
          href={`/signup?course=${course.id}`}
          className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 bg-slate-100 hover:bg-[#C6FF00] px-3 py-1.5 rounded-full transition-colors"
        >
          <span>Enroll</span>
          <ArrowUpRight className="h-3 w-3" />
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
