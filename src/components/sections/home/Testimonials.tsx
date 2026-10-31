'use client';

import React, { useState } from 'react';
import Container from '@/components/layout/Container';
import TestimonialCard from '@/components/cards/TestimonialCard';
import { testimonials } from '@/data/testimonials';
import { SITE_CONFIG } from '@/constants/site';
import { MessageSquareHeart, Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-[#FAFBFD] py-20 lg:py-28 border-b border-slate-100">
      <Container className="relative z-10">
        {/* Section Header: 2 Columns */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200/80">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold text-[#0050FF] mb-3 border border-blue-100">
              <MessageSquareHeart className="h-3.5 w-3.5 text-[#0050FF]" />
              <span>Real Stories & Reviews</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Loved by 120,000+ Learners <br />
              and Creators Worldwide
            </h2>
          </div>

          <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm shrink-0">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400" />
              ))}
            </div>
            <div className="text-xs">
              <div className="font-extrabold text-slate-900">4.9 / 5.0 Rating</div>
              <div className="text-slate-500">Based on 18,500+ verified ratings</div>
            </div>
          </div>
        </div>

        {/* 3 Testimonials Cards Grid */}
        <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
