'use client';

import React from 'react';
import Image from 'next/image';
import Container from '@/components/layout/Container';
import { Search } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#0050FF] bg-hero-grid pt-12 pb-0 lg:pt-16 text-white min-h-[750px] flex flex-col justify-between">
      {/* 3D Decorative Floating Shapes - Replicating exact screenshot shapes */}

      {/* 1. Top-Left: Bright Lime 3D Spring Ribbon */}
      <div className="absolute top-10 -left-6 sm:left-4 lg:left-10 pointer-events-none z-10">
        <svg width="140" height="200" viewBox="0 0 140 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl">
          <path
            d="M20 30 Q 120 10, 70 80 T 30 140 T 100 180"
            stroke="#C6FF00"
            strokeWidth="32"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* 2. Middle-Left: White 3D Squiggly Spring */}
      <div className="absolute top-1/2 left-8 lg:left-24 -translate-y-1/2 pointer-events-none z-10">
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none" className="drop-shadow-xl">
          <path
            d="M15 20 L40 45 L15 70 L65 45 L40 20"
            stroke="#FFFFFF"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* 3. Bottom-Left: White 3D Torus Donut Ring */}
      <div className="absolute bottom-16 left-6 lg:left-16 pointer-events-none z-10 transform -rotate-45">
        <div className="h-28 w-44 sm:h-32 sm:w-48 rounded-[100%] border-[22px] border-white shadow-2xl bg-transparent" />
      </div>

      {/* 4. Top-Right: Bright Lime 3D Cylinder */}
      <div className="absolute top-12 -right-8 sm:right-6 lg:right-14 pointer-events-none z-10 transform rotate-12">
        <div className="h-44 w-24 sm:h-52 sm:w-28 rounded-[50px] bg-[#C6FF00] shadow-2xl border-4 border-white/20" />
      </div>

      {/* 5. Middle-Right: White 3D Pyramid */}
      <div className="absolute top-1/3 right-10 lg:right-28 pointer-events-none z-10 transform rotate-12">
        <div className="relative w-28 h-32">
          <div className="absolute inset-0 w-0 h-0 border-l-[45px] border-l-transparent border-r-[45px] border-r-transparent border-b-[85px] border-b-white/95 drop-shadow-2xl" />
          <div className="absolute inset-0 w-0 h-0 border-l-[45px] border-l-transparent border-r-[0px] border-r-transparent border-b-[85px] border-b-slate-200/80" />
        </div>
      </div>

      {/* 6. Bottom-Right: White 3D Squiggly Ribbon */}
      <div className="absolute bottom-20 right-8 lg:right-20 pointer-events-none z-10 transform rotate-45">
        <svg width="100" height="150" viewBox="0 0 100 150" fill="none" className="drop-shadow-2xl">
          <path
            d="M15 20 Q 90 40, 30 80 T 80 140"
            stroke="#FFFFFF"
            strokeWidth="24"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <Container className="relative z-20 text-center flex-1 flex flex-col justify-start">
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] max-w-4xl mx-auto">
          Get Access to Hundreds <br />
          Courses Available
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-sm sm:text-base md:text-lg text-blue-100 max-w-2xl mx-auto font-normal opacity-90 leading-relaxed">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Search Bar */}
        <div className="mt-8 max-w-xl mx-auto w-full">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center rounded-full bg-white p-1.5 shadow-2xl border border-slate-100"
          >
            <div className="pl-4 text-slate-400">
              <Search className="h-5 w-5" />
            </div>
            <input
              type="text"
              placeholder="Course, topic, creator"
              aria-label="Search course, topic, creator"
              className="w-full bg-transparent px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none font-medium"
            />
            <button
              type="submit"
              className="rounded-full bg-[#C6FF00] px-8 py-3 text-sm font-extrabold text-slate-900 transition-all hover:brightness-105 active:scale-95 shadow-md shrink-0"
            >
              Search
            </button>
          </form>
        </div>

        {/* Center Student Image & Giant Lime Backdrop Circle */}
        <div className="mt-12 relative max-w-2xl mx-auto flex justify-center items-end">
          {/* Giant Lime Circle */}
          <div className="relative h-[340px] w-[340px] sm:h-[460px] sm:w-[460px] lg:h-[540px] lg:w-[540px] rounded-full bg-[#C6FF00] flex items-end justify-center shadow-2xl">
            {/* Student Photo */}
            <div className="relative h-full w-full rounded-full overflow-hidden flex items-end justify-center">
              <Image
                src="/images/hero-student.jpg"
                alt="Student holding laptop with headphones"
                fill
                priority
                className="object-cover object-top"
              />
            </div>

            {/* Floating Glass Card 1: Top-Left UI/UX Design */}
            <div className="absolute top-8 -left-8 sm:top-12 sm:-left-16 bg-white rounded-2xl px-5 py-3.5 shadow-2xl border border-slate-100 text-left min-w-[190px] z-30">
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">UI/UX Design</h4>
              <p className="text-[10px] sm:text-xs font-semibold text-slate-500 mt-0.5">200 Courses • 1000+ Students</p>
            </div>

            {/* Floating Glass Card 2: Top-Right Learning Progress */}
            <div className="absolute top-10 -right-8 sm:top-16 sm:-right-16 bg-white rounded-2xl p-4 shadow-2xl border border-slate-100 w-48 text-left z-30">
              <div className="text-[11px] font-semibold text-slate-500 mb-1">Learning Progress</div>
              <div className="text-2xl font-black text-slate-900 mb-2">55%</div>
              <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full bg-[#C6FF00] rounded-full w-[55%]" />
              </div>
            </div>

            {/* Floating Glass Card 3: Bottom-Left Happy Students */}
            <div className="absolute bottom-10 -left-6 sm:bottom-16 sm:-left-12 bg-white rounded-2xl p-4 shadow-2xl border border-slate-100 text-left min-w-[210px] z-30">
              <div className="text-xs font-bold text-slate-900">Happy Students</div>
              <div className="flex items-center gap-1 text-[11px] font-bold text-slate-700 mt-0.5">
                <span>4.5</span>
                <span className="text-slate-400 font-normal">(240)</span>
                <span className="text-amber-400">★</span>
              </div>
              <div className="flex items-center mt-2.5">
                <div className="flex -space-x-2">
                  <div className="h-6 w-6 rounded-full bg-slate-800 border-2 border-white flex items-center justify-center text-[8px] font-bold text-white">A</div>
                  <div className="h-6 w-6 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center text-[8px] font-bold text-white">B</div>
                  <div className="h-6 w-6 rounded-full bg-pink-500 border-2 border-white flex items-center justify-center text-[8px] font-bold text-white">C</div>
                  <div className="h-6 w-6 rounded-full bg-emerald-600 border-2 border-white flex items-center justify-center text-[8px] font-bold text-white">D</div>
                  <div className="h-6 w-6 rounded-full bg-amber-600 border-2 border-white flex items-center justify-center text-[8px] font-bold text-white">E</div>
                </div>
                <span className="ml-2 text-[10px] font-extrabold text-slate-900 bg-[#C6FF00] px-2 py-0.5 rounded-full">
                  2K+
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
