import React from 'react';
import Image from 'next/image';
import Container from '@/components/layout/Container';
import { growthStats } from '@/data/stats';
import { BarChart2, TrendingUp, Award } from 'lucide-react';

export const GrowthSection: React.FC = () => {
  return (
    <section id="growth" className="relative overflow-hidden bg-gradient-to-b from-[#F0F5FF]/70 via-[#F7FAFF]/50 to-white py-16 sm:py-24 border-b border-slate-100">
      <Container className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
        {/* Left Column: Headline, Description & Stats */}
        <div className="lg:col-span-6 max-w-xl">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-100/70 px-3.5 py-1 text-xs font-bold text-[#0050FF] mb-4">
            <Award className="h-3.5 w-3.5 text-[#0050FF]" />
            <span>Accelerate Your Career</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            Your Path to Professional <br />
            Growth Starts Here!
          </h2>

          <p className="mt-6 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Explore our curated selection of courses tailored to enhance your capabilities and
            accelerate your career journey. Whether you are looking to sharpen specific skills, gain
            industry expertise, or embark on a new career path entirely, we have the resources you
            need.
          </p>

          {/* Stats Counters with Badges */}
          <div className="mt-10 sm:mt-12 flex flex-wrap items-center gap-8 sm:gap-12">
            {growthStats.map((stat) => (
              <div key={stat.id} className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-black text-[#0050FF] tracking-tight">
                  {stat.value}
                </span>
                <span className="mt-1 text-sm font-semibold text-slate-700 flex items-center gap-1">
                  <TrendingUp className="h-3.5 w-3.5 text-emerald-600" />
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Visual Collage (Student + Floating Course Card + Progress Card + 3D Shape) */}
        <div className="lg:col-span-6 relative flex justify-center items-center">
          <div className="relative h-[480px] sm:h-[540px] w-full max-w-[500px] flex items-end justify-center">
            {/* 3D Decorative Lime Spring on Right */}
            <div className="absolute top-16 right-0 sm:right-4 z-0 pointer-events-none">
              <svg width="100" height="150" viewBox="0 0 100 150" fill="none" className="drop-shadow-lg">
                <path
                  d="M20 20 Q 90 40, 30 80 T 80 140"
                  stroke="#C6FF00"
                  strokeWidth="22"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Floating Course Card */}
            <div className="absolute top-6 -left-6 sm:-left-12 lg:-left-16 z-30 w-60 sm:w-68 rounded-2xl border border-slate-200/90 bg-white p-3 shadow-2xl transition-transform duration-300 hover:scale-105">
              <div className="relative h-28 w-full overflow-hidden rounded-xl bg-slate-100">
                <Image
                  src="/images/courses/course-figma.jpg"
                  alt="Learn Figma from Basic"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-1.5 left-1.5 right-1.5 rounded-full bg-black/60 px-2 py-0.5 text-[9px] font-medium text-white backdrop-blur-md flex justify-between">
                  <span>17 Lessons</span>
                  <span>2 hours 16 mins</span>
                </div>
              </div>
              <div className="mt-2.5 px-0.5">
                <h4 className="text-xs font-bold text-slate-900 truncate">Learn Figma from Basic</h4>
                <p className="text-[10px] font-semibold text-[#0050FF]">by purepeert studio</p>
                <div className="mt-2 flex items-center justify-between border-t border-slate-100 pt-2">
                  <div className="flex items-center gap-1 text-[10px] text-slate-500 font-medium">
                    <BarChart2 className="h-3 w-3 text-[#0050FF]" />
                    <span>Beginner</span>
                  </div>
                  <span className="text-xs font-extrabold text-[#0050FF]">
                    $25<span className="text-[9px] font-normal text-slate-400">/lifetime</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Learning Progress Card */}
            <div className="absolute top-36 -right-2 sm:right-2 z-30 w-44 sm:w-48 rounded-2xl border border-slate-100 bg-white p-3.5 shadow-2xl transition-transform duration-300 hover:scale-105">
              <div className="text-[11px] font-semibold text-slate-500 mb-1">Learning Progress</div>
              <div className="text-2xl font-black text-slate-900 mb-2">55%</div>
              <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full bg-[#0050FF] rounded-full w-[55%]" />
              </div>
            </div>

            {/* Main Student Portrait Standing */}
            <div className="relative z-20 h-full w-full flex items-end justify-center pointer-events-none">
              <Image
                src="/images/growth-student.png"
                alt="Professional growth student with laptop"
                fill
                priority
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GrowthSection;
