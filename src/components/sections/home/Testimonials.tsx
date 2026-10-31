import React from 'react';
import Container from '@/components/layout/Container';
import TestimonialCard from '@/components/cards/TestimonialCard';
import { testimonials } from '@/data/testimonials';
import { SITE_CONFIG } from '@/constants/site';
import { MessageSquareHeart } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-white py-20 lg:py-28">
      {/* Soft Ambient Radiant Background Glows */}
      <div className="absolute -top-24 -left-24 h-[500px] w-[500px] rounded-full bg-[#0050FF]/8 blur-[130px] pointer-events-none" />
      <div className="absolute top-10 right-10 h-[520px] w-[520px] rounded-full bg-[#C6FF00]/15 blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-20 h-[420px] w-[420px] rounded-full bg-[#0050FF]/6 blur-[110px] pointer-events-none" />

      <Container className="relative z-10">
        {/* Section Header: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start">
          {/* Left Column: Heading */}
          <div className="lg:col-span-6 max-w-xl">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold text-[#0050FF] mb-3 border border-blue-100">
              <MessageSquareHeart className="h-3.5 w-3.5 text-[#0050FF]" />
              <span>Real Reviews from Real Learners</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Discover What Our <br />
              Community Is Saying
            </h2>
          </div>

          {/* Right Column: Description Text */}
          <div className="lg:col-span-6 max-w-xl lg:pt-2">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              At {SITE_CONFIG.name}, our vibrant community of learners and creators is at the heart of what we
              do. Hear directly from those who have experienced the transformative journey of
              learning and creating on our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* 3 Testimonials Cards Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
