import React from 'react';
import Image from 'next/image';
import { Testimonial } from '@/types';
import { Star, CheckCircle, Quote } from 'lucide-react';

export interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="relative flex flex-col justify-between rounded-[28px] bg-white p-7 sm:p-9 shadow-[0_10px_35px_rgba(0,0,0,0.04)] border border-slate-100 transition-all duration-300 hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 group">
      {/* Decorative subtle quote mark */}
      <div className="absolute top-6 right-7 text-slate-100 group-hover:text-blue-50 transition-colors pointer-events-none">
        <Quote className="h-10 w-10 rotate-180" />
      </div>

      <div className="relative z-10">
        {/* User Avatar & Verified Badge */}
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-full shrink-0 shadow-sm border-2 border-white ring-2 ring-slate-100">
            {testimonial.avatar ? (
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-slate-100 text-sm font-bold text-slate-700">
                {testimonial.name[0]}
              </div>
            )}
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                {testimonial.name}
              </h3>
              <CheckCircle className="h-4 w-4 text-[#0050FF]" />
            </div>
            <p className="text-xs font-semibold text-[#0050FF]">
              {testimonial.role}
            </p>
          </div>
        </div>

        {/* 5-Star Rating */}
        <div className="mt-5 flex items-center gap-1 text-amber-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
          ))}
          <span className="ml-1 text-xs font-bold text-slate-700">5.0</span>
        </div>

        {/* Testimonial Quote */}
        <p className="mt-4 text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
          &ldquo;{testimonial.content}&rdquo;
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
