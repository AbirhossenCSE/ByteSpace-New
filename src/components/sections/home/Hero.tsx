'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/layout/Container';
import {
  Search,
  Sparkles,
  Play,
  CheckCircle2,
  Star,
  Users,
  Award,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Code,
  Laptop,
} from 'lucide-react';
import { SITE_CONFIG } from '@/constants/site';

export const Hero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'preview' | 'curriculum'>('preview');

  const popularTags = [
    'Next.js 14',
    'UI/UX Design',
    'Python & AI',
    'Figma Tokens',
    'Data Science',
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-100">
      {/* Soft Ambient Radial Glows */}
      <div className="absolute top-0 left-1/4 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0050FF]/8 blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 h-[480px] w-[480px] rounded-full bg-[#C6FF00]/20 blur-[130px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & Search */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Announcement Pill */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200/90 px-3.5 py-1.5 text-xs font-bold text-slate-800 shadow-sm mb-6 hover:border-[#0050FF]/40 transition-colors">
              <span className="flex h-2 w-2 rounded-full bg-[#0050FF] animate-pulse" />
              <span className="text-[#0050FF] font-extrabold">SkillSphere 2.0</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-600 font-semibold">Over 250+ Hands-On Courses</span>
              <Sparkles className="h-3.5 w-3.5 text-amber-500" />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] font-extrabold tracking-tight text-slate-900 leading-[1.08]">
              Master In-Demand Skills. <br />
              <span className="bg-gradient-to-r from-[#0050FF] via-[#0042D9] to-indigo-600 bg-clip-text text-transparent">
                Build Real-World
              </span>{' '}
              Projects.
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed">
              Accelerate your career with interactive courses taught by world-class creators and
              engineers. Get personalized roadmaps, portfolio reviews, and verifiable certificates.
            </p>

            {/* Interactive Search Bar */}
            <div className="mt-8 w-full max-w-xl">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('courses');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center rounded-2xl bg-white p-2 shadow-lg shadow-slate-200/50 border border-slate-200 focus-within:border-[#0050FF] focus-within:ring-4 focus-within:ring-[#0050FF]/10 transition-all"
              >
                <div className="pl-3 text-slate-400">
                  <Search className="h-5 w-5" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="What skill do you want to master today? (e.g. Figma, Python)"
                  className="w-full bg-transparent px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none font-medium"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-[#0050FF] hover:bg-[#0042D9] px-6 py-3 text-sm font-bold text-white transition-all shadow-md shadow-blue-500/25 active:scale-95 shrink-0"
                >
                  Explore
                </button>
              </form>

              {/* Popular Search Chips */}
              <div className="mt-3.5 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                <span className="font-semibold text-slate-700 flex items-center gap-1">
                  <TrendingUp className="h-3.5 w-3.5 text-[#0050FF]" /> Popular:
                </span>
                {popularTags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => {
                      setSearchQuery(tag);
                      const el = document.getElementById('courses');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="rounded-lg bg-slate-100 hover:bg-slate-200/80 px-2.5 py-1 text-slate-700 font-medium transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Social Proof & Trust Metric */}
            <div className="mt-10 pt-8 border-t border-slate-200/80 w-full flex flex-wrap items-center gap-6 sm:gap-10">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="h-9 w-9 rounded-full border-2 border-white bg-slate-800 flex items-center justify-center text-xs font-bold text-white shadow-sm">
                    A
                  </div>
                  <div className="h-9 w-9 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center text-xs font-bold text-white shadow-sm">
                    B
                  </div>
                  <div className="h-9 w-9 rounded-full border-2 border-white bg-purple-600 flex items-center justify-center text-xs font-bold text-white shadow-sm">
                    C
                  </div>
                  <div className="h-9 w-9 rounded-full border-2 border-white bg-emerald-600 flex items-center justify-center text-xs font-bold text-white shadow-sm">
                    D
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">120,000+ Students</div>
                  <div className="text-[11px] text-slate-500">Enrolled across 85 countries</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400" />
                  ))}
                </div>
                <div className="text-xs">
                  <span className="font-extrabold text-slate-900">4.9 / 5.0</span>
                  <span className="text-slate-400 ml-1">(18,500+ reviews)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Modern Interactive Course Studio Preview */}
          <div className="lg:col-span-5 relative">
            {/* Background Accent Card Layer */}
            <div className="absolute inset-0 -rotate-2 rounded-3xl bg-gradient-to-tr from-[#0050FF] to-blue-400 opacity-20 blur-xl pointer-events-none" />

            {/* Main Interactive Showcase Card */}
            <div className="relative rounded-3xl bg-white p-5 sm:p-6 shadow-2xl border border-slate-200/90 transition-all duration-300 hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]">
              {/* Card Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-rose-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-400" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-xs font-bold text-slate-600 ml-2">Course Studio Live</span>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 text-emerald-700 px-2.5 py-0.5 text-[10px] font-extrabold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Interactive Lab
                </span>
              </div>

              {/* Video/Preview Stage */}
              <div className="relative mt-4 h-48 sm:h-56 w-full rounded-2xl overflow-hidden bg-slate-900 group">
                <Image
                  src="/images/courses/course-figma.jpg"
                  alt="Modern Figma Architecture"
                  fill
                  className="object-cover opacity-85 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30" />

                {/* Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    type="button"
                    aria-label="Play course preview"
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-[#0050FF] shadow-xl backdrop-blur-md transition-all hover:scale-110 active:scale-95"
                  >
                    <Play className="h-6 w-6 fill-[#0050FF] ml-1" />
                  </button>
                </div>

                {/* Live Progress Bar on Image */}
                <div className="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-md rounded-xl p-2.5 text-white">
                  <div className="flex items-center justify-between text-[11px] font-semibold mb-1">
                    <span>Lesson 4: Building Design Tokens</span>
                    <span className="text-[#C6FF00]">12:40 / 18:25</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-[#C6FF00] rounded-full w-[68%]" />
                  </div>
                </div>
              </div>

              {/* Course Info Bar */}
              <div className="mt-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Learn Figma & UI/UX from Scratch
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      by purepeert studio • Masterclass
                    </p>
                  </div>
                  <span className="text-lg font-black text-[#0050FF]">$25</span>
                </div>

                {/* Interactive Feature Pills */}
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-2 rounded-xl bg-slate-50 p-2.5 border border-slate-100">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span className="font-semibold text-slate-700">17 Hands-on Labs</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-slate-50 p-2.5 border border-slate-100">
                    <ShieldCheck className="h-4 w-4 text-[#0050FF] shrink-0" />
                    <span className="font-semibold text-slate-700">Verified Certificate</span>
                  </div>
                </div>

                {/* Quick Action Button */}
                <Link
                  href="/signup"
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#0050FF] hover:bg-[#0042D9] py-3 text-sm font-bold text-white transition-colors shadow-md shadow-blue-500/20"
                >
                  <span>Start Learning Now</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Floating Badge 1: Top-Right Achievement */}
              <div className="absolute -top-5 -right-4 bg-white rounded-2xl px-4 py-2.5 shadow-xl border border-slate-100 flex items-center gap-2.5 z-20 animate-bounce duration-1000">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#C6FF00] text-slate-900 font-bold">
                  🏆
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-900">Top Rated Course</div>
                  <div className="text-[9px] text-slate-500">4.9 Star Average</div>
                </div>
              </div>

              {/* Floating Badge 2: Bottom-Left Mentor Callout */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl border border-slate-100 hidden sm:flex items-center gap-3 z-20">
                <div className="relative h-10 w-10 rounded-full overflow-hidden border border-slate-200">
                  <Image
                    src="/images/testimonials/avatar-alex.png"
                    alt="Mentor"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1">
                    <span>1-on-1 Mentorship</span>
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  </div>
                  <div className="text-[10px] text-slate-500">Weekly Office Hours Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
