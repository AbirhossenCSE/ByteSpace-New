import React from 'react';
import Image from 'next/image';
import { Testimonial } from '@/types';
import Rating from '@/components/ui/Rating';
import { Quote } from 'lucide-react';

export interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
      <Quote className="absolute top-4 right-4 h-8 w-8 text-slate-100" />
      <div>
        <Rating value={testimonial.rating} className="mb-4" />
        <p className="text-sm italic text-slate-700 leading-relaxed">&quot;{testimonial.content}&quot;</p>
      </div>

      <div className="mt-6 flex items-center gap-3 pt-4 border-t border-slate-100">
        <div className="relative h-10 w-10 overflow-hidden rounded-full bg-slate-200">
          {testimonial.avatar ? (
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-xs font-bold text-slate-500">
              {testimonial.name[0]}
            </div>
          )}
        </div>
        <div>
          <h4 className="text-sm font-bold text-slate-900">{testimonial.name}</h4>
          <p className="text-xs text-slate-500">
            {testimonial.role} {testimonial.company && `at ${testimonial.company}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
