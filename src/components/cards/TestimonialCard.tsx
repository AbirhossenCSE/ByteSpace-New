import React from 'react';
import Image from 'next/image';
import { Testimonial } from '@/types';

export interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="flex flex-col justify-between rounded-[28px] bg-white p-7 sm:p-9 shadow-[0_10px_35px_rgba(0,0,0,0.04)] border border-slate-100 transition-all duration-300 hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] hover:-translate-y-1">
      <div>
        {/* User Avatar */}
        <div className="relative h-16 w-16 overflow-hidden rounded-full shrink-0 shadow-sm">
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

        {/* User Name & Role */}
        <div className="mt-6">
          <h3 className="text-lg font-bold text-slate-900 tracking-tight">
            {testimonial.name}
          </h3>
          <p className="mt-0.5 text-sm font-semibold text-[#0050FF]">
            {testimonial.role}
          </p>
        </div>

        {/* Testimonial Quote */}
        <p className="mt-5 text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
          &quot;{testimonial.content}&quot;
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
