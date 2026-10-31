'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Course } from '@/types';
import {
  Star,
  BarChart2,
  Bookmark,
  CheckCircle2,
  ArrowUpRight,
  Clock,
  BookOpen,
  Eye,
} from 'lucide-react';

export interface CourseCardProps {
  course: Course;
  onPreview?: (course: Course) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onPreview }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-3.5 sm:p-4 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#0050FF]/40 hover:shadow-2xl">
      <div>
        {/* Thumbnail Container */}
        <div className="relative h-48 sm:h-52 w-full overflow-hidden rounded-2xl bg-slate-100">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Top Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
            {course.isPopular ? (
              <span className="rounded-full bg-[#0050FF] px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md">
                Bestseller
              </span>
            ) : (
              <span className="rounded-full bg-slate-900/80 backdrop-blur-md px-3 py-1 text-[10px] font-bold text-white">
                {course.level}
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
                  : 'bg-white/90 text-slate-700 hover:bg-white hover:text-[#0050FF]'
              }`}
            >
              <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-slate-900' : ''}`} />
            </button>
          </div>

          {/* Floating Pill on image bottom */}
          <div className="absolute bottom-3 left-3 right-3 z-10">
            <div className="flex items-center justify-between rounded-xl bg-black/65 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-md">
              <span className="flex items-center gap-1">
                <BookOpen className="h-3 w-3 text-[#C6FF00]" />
                {course.lessons}
              </span>
              <span className="text-white/40">•</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3 text-[#C6FF00]" />
                {course.duration}
              </span>
            </div>
          </div>
        </div>

        {/* Card Details */}
        <div className="pt-4 pb-1 px-1">
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="font-bold text-[#0050FF] uppercase tracking-wider text-[11px]">
              {course.category}
            </span>
            <div className="flex items-center gap-1 font-bold text-slate-800 bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded-md">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              <span>{course.rating}</span>
              {course.reviewsCount && (
                <span className="text-slate-400 font-normal text-[10px]">
                  ({course.reviewsCount})
                </span>
              )}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-base sm:text-lg font-bold text-slate-900 line-clamp-1 group-hover:text-[#0050FF] transition-colors">
            {course.title}
          </h3>

          {/* Instructor Row */}
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="h-5 w-5 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center text-[10px] font-bold">
                P
              </div>
              <span className="text-xs font-semibold text-slate-600">
                {course.instructor}
              </span>
              <CheckCircle2 className="h-3 w-3 text-[#0050FF]" />
            </div>

            {/* Level Pill */}
            <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-500">
              <BarChart2 className="h-3 w-3 text-[#0050FF]" />
              <span>{course.level}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing & Actions Row */}
      <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between px-1">
        <div className="flex items-baseline gap-1.5">
          <span className="text-xl sm:text-2xl font-black text-slate-900">
            ${course.price}
          </span>
          {course.originalPrice && (
            <span className="text-xs font-medium text-slate-400 line-through">
              ${course.originalPrice}
            </span>
          )}
          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
            Lifetime
          </span>
        </div>

        <div className="flex items-center gap-2">
          {onPreview && (
            <button
              type="button"
              onClick={() => onPreview(course)}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              title="Preview course"
            >
              <Eye className="h-4 w-4" />
            </button>
          )}

          <Link
            href={`/signup?course=${course.id}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-white bg-[#0050FF] hover:bg-[#0042D9] px-4 py-2 rounded-full transition-all shadow-sm shadow-blue-500/20 active:scale-95"
          >
            <span>Enroll</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
