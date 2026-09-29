'use client';

import React from 'react';
import Image from 'next/image';
import Container from '@/components/layout/Container';
import { Search } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <>
      <section id="hero" className="relative overflow-hidden bg-[#0B52E8] bg-hero-grid pt-12 pb-20 lg:pt-16 lg:pb-28 text-white">
        {/* Decorative 3D Floating Shapes */}
        {/* Top-Left Lime Wavy Blob */}
        <div className="absolute top-6 left-4 lg:left-12 pointer-events-none opacity-90 animate-pulse">
          <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 40 Q 30 10, 60 40 T 110 40" stroke="#C4F800" strokeWidth="24" strokeLinecap="round" />
          </svg>
        </div>

        {/* Middle-Left White Squiggle */}
        <div className="absolute top-1/2 left-6 lg:left-20 -translate-y-1/2 pointer-events-none opacity-80">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <path d="M10 10 L25 30 L40 10 L55 30" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Bottom-Left White Torus Ring */}
        <div className="absolute bottom-12 left-10 lg:left-28 pointer-events-none">
          <div className="h-16 w-16 rounded-full border-8 border-white/80 shadow-lg transform -rotate-12" />
        </div>

        {/* Top-Right Yellow Cylinder */}
        <div className="absolute top-8 right-6 lg:right-16 pointer-events-none">
          <div className="h-20 w-12 rounded-3xl bg-[#C4F800] transform rotate-12 shadow-xl" />
        </div>

        {/* Middle-Right White Cone */}
        <div className="absolute top-1/3 right-8 lg:right-24 pointer-events-none">
          <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[40px] border-b-white/90 transform rotate-45 shadow-lg" />
        </div>

        {/* Bottom-Right White Ribbon */}
        <div className="absolute bottom-16 right-10 lg:right-20 pointer-events-none opacity-80">
          <svg width="80" height="50" viewBox="0 0 80 50" fill="none">
            <path d="M5 25 Q 25 5, 45 25 T 75 25" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" />
          </svg>
        </div>

        <Container className="relative z-10 text-center">
          {/* Main Headline */}
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-[1.15] max-w-4xl mx-auto">
            Get Access to Hundreds <br className="hidden sm:inline" />
            Courses Available
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-sm sm:text-base md:text-lg text-blue-100 max-w-xl mx-auto font-normal leading-relaxed">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          {/* Search Pill Input Bar */}
          <div className="mt-8 max-w-xl mx-auto">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center rounded-full bg-white p-1.5 shadow-2xl"
            >
              <div className="pl-4 text-slate-400">
                <Search className="h-5 w-5" />
              </div>
              <input
                type="text"
                placeholder="Course, topic, creator"
                aria-label="Search course, topic, creator"
                className="w-full bg-transparent px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-[#C4F800] px-7 py-3 text-sm font-extrabold text-slate-900 transition-all hover:bg-brand-lime-bright active:scale-95 shadow-md"
              >
                Search
              </button>
            </form>
          </div>

          {/* Center Student Image with Floating Cards */}
          <div className="mt-14 relative max-w-lg mx-auto flex justify-center items-center">
            {/* Bright Lime Circle Backdrop */}
            <div className="relative h-72 w-72 sm:h-96 sm:w-96 md:h-[400px] md:w-[400px] rounded-full bg-[#C4F800] flex items-center justify-center shadow-2xl">
              {/* Student Image */}
              <div className="relative h-full w-full rounded-full overflow-hidden border-4 border-white/20">
                <Image
                  src="/images/hero-student.jpg"
                  alt="Student with headphones and laptop"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Floating Card 1: Top-Left UI/UX Design */}
              <div className="absolute -top-4 -left-6 sm:top-4 sm:-left-12 bg-white rounded-2xl p-3 shadow-2xl border border-slate-100 flex items-center gap-3 text-left">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue font-bold text-xs">
                  UI/UX
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">UI/UX Design</h4>
                  <p className="text-[10px] font-medium text-slate-500">200 Courses • 1000+ Students</p>
                </div>
              </div>

              {/* Floating Card 2: Top-Right Learning Progress */}
              <div className="absolute top-6 -right-6 sm:top-8 sm:-right-10 bg-white rounded-2xl p-3.5 shadow-2xl border border-slate-100 w-44 text-left">
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-700 mb-1">
                  <span>Learning Progress</span>
                </div>
                <div className="text-xl font-black text-slate-900 mb-1.5">55%</div>
                <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full bg-[#0B52E8] rounded-full w-[55%]" />
                </div>
              </div>

              {/* Floating Card 3: Bottom-Left Happy Students */}
              <div className="absolute bottom-2 -left-4 sm:bottom-4 sm:-left-10 bg-white rounded-2xl p-3 shadow-2xl border border-slate-100 text-left">
                <div className="text-[11px] font-bold text-slate-900">Happy Students</div>
                <div className="flex items-center gap-1 text-[10px] text-amber-500 font-bold mt-0.5">
                  <span>4.5</span>
                  <span className="text-slate-400 font-normal">(240)</span>
                  <span>★</span>
                </div>
                <div className="flex items-center mt-2">
                  <div className="flex -space-x-2">
                    <div className="h-6 w-6 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-[8px] font-bold text-white">S</div>
                    <div className="h-6 w-6 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-[8px] font-bold text-white">M</div>
                    <div className="h-6 w-6 rounded-full bg-purple-500 border-2 border-white flex items-center justify-center text-[8px] font-bold text-white">A</div>
                  </div>
                  <span className="ml-2 text-[10px] font-bold text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded-full">2K+</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Sponsor / Partner Logo Cloud Row */}
      <section className="bg-slate-50 border-b border-slate-200 py-6">
        <Container className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center gap-2 font-bold text-slate-600 text-base">
              <div className="h-5 w-5 rounded-full bg-slate-400/30" />
              <span>Logoipsum</span>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
};

export default Hero;
