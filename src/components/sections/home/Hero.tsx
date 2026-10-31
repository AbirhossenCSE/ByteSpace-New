'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/layout/Container';
import { Search, Sparkles, TrendingUp, Users, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const trendingTags = [
    'UI/UX Design',
    'Figma',
    'Web Development',
    'Big Data',
    'Productivity',
  ];

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#0050FF] bg-hero-grid pt-12 pb-0 lg:pt-16 text-white min-h-[750px] flex flex-col justify-between selection:bg-[#C6FF00] selection:text-slate-900"
    >
      {/* 3D Decorative Floating Shapes - Exact Figma match with smooth drop shadows */}

      {/* 1. Top-Left: Bright Lime 3D Spring Ribbon */}
      <div className="absolute top-10 -left-6 sm:left-4 lg:left-10 pointer-events-none z-10 opacity-70 sm:opacity-100 transition-opacity">
        <svg
          width="140"
          height="200"
          viewBox="0 0 140 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-2xl"
        >
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
      <div className="absolute top-1/2 left-8 lg:left-24 -translate-y-1/2 pointer-events-none z-10 hidden sm:block">
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
      <div className="absolute bottom-16 left-6 lg:left-16 pointer-events-none z-10 transform -rotate-45 hidden md:block">
        <div className="h-28 w-44 sm:h-32 sm:w-48 rounded-[100%] border-[22px] border-white shadow-2xl bg-transparent" />
      </div>

      {/* 4. Top-Right: Bright Lime 3D Cylinder */}
      <div className="absolute top-12 -right-8 sm:right-6 lg:right-14 pointer-events-none z-10 transform rotate-12 opacity-80 sm:opacity-100">
        <div className="h-44 w-24 sm:h-52 sm:w-28 rounded-[50px] bg-[#C6FF00] shadow-2xl border-4 border-white/20" />
      </div>

      {/* 5. Middle-Right: White 3D Pyramid */}
      <div className="absolute top-1/3 right-10 lg:right-28 pointer-events-none z-10 transform rotate-12 hidden sm:block">
        <div className="relative w-28 h-32">
          <div className="absolute inset-0 w-0 h-0 border-l-[45px] border-l-transparent border-r-[45px] border-r-transparent border-b-[85px] border-b-white/95 drop-shadow-2xl" />
          <div className="absolute inset-0 w-0 h-0 border-l-[45px] border-l-transparent border-r-[0px] border-r-transparent border-b-[85px] border-b-slate-200/80" />
        </div>
      </div>

      {/* 6. Bottom-Right: White 3D Squiggly Ribbon */}
      <div className="absolute bottom-20 right-8 lg:right-20 pointer-events-none z-10 transform rotate-45 hidden md:block">
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
        <div className="inline-flex items-center gap-2 self-center rounded-full bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-blue-100 border border-white/15 mb-4 shadow-sm">
          <Sparkles className="h-3.5 w-3.5 text-[#C6FF00]" />
          <span>Over 250+ Interactive Courses Added</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-extrabold tracking-tight text-white leading-[1.08] max-w-4xl mx-auto">
          Get Access to Hundreds <br />
          of Courses Available
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-sm sm:text-base md:text-lg text-blue-100/90 max-w-2xl mx-auto font-normal leading-relaxed">
          Unlock your creativity, gain valuable knowledge, and grow your career with our curated range of world-class courses taught by industry veterans.
        </p>

        {/* Search Bar */}
        <div className="mt-8 max-w-xl mx-auto w-full px-2">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const el = document.getElementById('courses');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center rounded-full bg-white p-1.5 shadow-2xl border border-slate-100 transition-all focus-within:ring-4 focus-within:ring-[#C6FF00]/40"
          >
            <div className="pl-4 text-slate-400">
              <Search className="h-5 w-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search course, topic, creator..."
              aria-label="Search course, topic, creator"
              className="w-full bg-transparent px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none font-medium"
            />
            <button
              type="submit"
              className="rounded-full bg-[#C6FF00] px-7 sm:px-9 py-3 text-sm font-extrabold text-slate-900 transition-all hover:brightness-105 hover:scale-[1.02] active:scale-95 shadow-md shrink-0"
            >
              Search
            </button>
          </form>

          {/* Trending Search Tags */}
          <div className="mt-3.5 flex flex-wrap items-center justify-center gap-2 text-xs text-blue-100/80">
            <span className="font-semibold flex items-center gap-1 text-white/90">
              <TrendingUp className="h-3 w-3 text-[#C6FF00]" /> Trending:
            </span>
            {trendingTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => {
                  setSearchQuery(tag);
                  const el = document.getElementById('courses');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="rounded-full bg-white/10 hover:bg-white/20 px-2.5 py-0.5 font-medium transition-colors cursor-pointer"
              >
                {tag}
              </button>
            ))}
          </div>
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
            <div className="absolute top-8 -left-6 sm:top-12 sm:-left-16 bg-white/95 backdrop-blur-md rounded-2xl px-5 py-3.5 shadow-2xl border border-slate-100 text-left min-w-[190px] z-30 transition-transform duration-300 hover:scale-105">
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">UI/UX Design</h4>
              <p className="text-[10px] sm:text-xs font-semibold text-slate-500 mt-0.5">
                200 Courses • 1000+ Students
              </p>
            </div>

            {/* Floating Glass Card 2: Top-Right Learning Progress */}
            <div className="absolute top-10 -right-6 sm:top-16 sm:-right-16 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-slate-100 w-48 text-left z-30 transition-transform duration-300 hover:scale-105">
              <div className="text-[11px] font-semibold text-slate-500 mb-1">Learning Progress</div>
              <div className="text-2xl font-black text-slate-900 mb-2">55%</div>
              <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full bg-[#0050FF] rounded-full w-[55%]" />
              </div>
            </div>

            {/* Floating Glass Card 3: Bottom-Left Happy Students */}
            <div className="absolute bottom-10 -left-4 sm:bottom-16 sm:-left-12 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-slate-100 text-left min-w-[210px] z-30 transition-transform duration-300 hover:scale-105">
              <div className="text-xs font-bold text-slate-900 flex items-center justify-between">
                <span>Happy Students</span>
                <Users className="h-3.5 w-3.5 text-[#0050FF]" />
              </div>
              <div className="flex items-center gap-1 text-[11px] font-bold text-slate-700 mt-0.5">
                <span>4.5</span>
                <span className="text-slate-400 font-normal">(240)</span>
                <div className="flex text-amber-400">
                  <Star className="h-3 w-3 fill-amber-400" />
                </div>
              </div>
              <div className="flex items-center mt-2.5">
                <div className="flex -space-x-2">
                  <div className="h-6 w-6 rounded-full bg-slate-800 border-2 border-white flex items-center justify-center text-[8px] font-bold text-white">
                    A
                  </div>
                  <div className="h-6 w-6 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center text-[8px] font-bold text-white">
                    B
                  </div>
                  <div className="h-6 w-6 rounded-full bg-pink-500 border-2 border-white flex items-center justify-center text-[8px] font-bold text-white">
                    C
                  </div>
                  <div className="h-6 w-6 rounded-full bg-emerald-600 border-2 border-white flex items-center justify-center text-[8px] font-bold text-white">
                    D
                  </div>
                  <div className="h-6 w-6 rounded-full bg-amber-600 border-2 border-white flex items-center justify-center text-[8px] font-bold text-white">
                    E
                  </div>
                </div>
                <span className="ml-2 text-[10px] font-extrabold text-slate-900 bg-[#C6FF00] px-2 py-0.5 rounded-full shadow-sm">
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
