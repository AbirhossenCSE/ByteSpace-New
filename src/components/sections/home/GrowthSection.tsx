import React from 'react';
import Image from 'next/image';
import Container from '@/components/layout/Container';
import { growthStats } from '@/data/stats';
import { TrendingUp, Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '@/constants/site';

export const GrowthSection: React.FC = () => {
  return (
    <section id="growth" className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/60 to-white py-20 lg:py-28 border-b border-slate-100">
      <Container className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12 items-center">
        {/* Left Column: Headline, Description & Verified Metrics */}
        <div className="lg:col-span-6 max-w-xl">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold text-[#0050FF] mb-4 border border-blue-100">
            <Award className="h-3.5 w-3.5 text-[#0050FF]" />
            <span>Proven Student Success</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            Real Skills. Real Portfolios. <br />
            Measurable Career Growth.
          </h2>

          <p className="mt-6 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Whether you want to transition into UX design, master cloud infrastructure, or build
            profitable side projects, {SITE_CONFIG.name} provides the exact step-by-step guidance
            you need without the high tuition of a traditional bootcamp.
          </p>

          {/* Stats Grid with Modern Card Style */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {growthStats.map((stat) => (
              <div
                key={stat.id}
                className="rounded-2xl bg-white p-4 sm:p-5 border border-slate-200/80 shadow-sm"
              >
                <span className="text-2xl sm:text-3xl font-black text-[#0050FF] tracking-tight">
                  {stat.value}
                </span>
                <span className="mt-1 block text-xs font-bold text-slate-700">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Trust Guarantees */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-200/80 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              <span>30-Day Money-Back Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#0050FF]" />
              <span>Lifetime Access to Content & Updates</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Collage with Student Cutout */}
        <div className="lg:col-span-6 relative flex justify-center items-center">
          <div className="relative h-[480px] sm:h-[540px] w-full max-w-[500px] flex items-end justify-center">
            {/* Ambient Background Aura */}
            <div className="absolute top-10 left-10 h-64 w-64 rounded-full bg-[#0050FF]/15 blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-[#C6FF00]/25 blur-3xl pointer-events-none" />

            {/* Floating Course Card */}
            <div className="absolute top-6 -left-4 sm:-left-8 z-30 w-56 sm:w-64 rounded-2xl border border-slate-200/90 bg-white p-3 shadow-xl transition-transform duration-300 hover:scale-105">
              <div className="relative h-28 w-full overflow-hidden rounded-xl bg-slate-100">
                <Image
                  src="/images/courses/course-figma.jpg"
                  alt="Learn Figma from Basic"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-2.5 px-0.5">
                <h4 className="text-xs font-bold text-slate-900 truncate">Learn Figma from Basic</h4>
                <p className="text-[10px] font-semibold text-[#0050FF]">by purepeert studio</p>
                <div className="mt-2 flex items-center justify-between border-t border-slate-100 pt-1.5 text-xs">
                  <span className="font-extrabold text-[#0050FF]">$25</span>
                  <span className="text-[10px] text-slate-400">1.2k Students</span>
                </div>
              </div>
            </div>

            {/* Floating Learning Progress Card */}
            <div className="absolute top-36 -right-2 sm:right-2 z-30 w-44 sm:w-48 rounded-2xl border border-slate-100 bg-white p-3.5 shadow-xl transition-transform duration-300 hover:scale-105">
              <div className="text-[11px] font-semibold text-slate-500 mb-1">Learning Progress</div>
              <div className="text-2xl font-black text-slate-900 mb-2">85%</div>
              <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full w-[85%]" />
              </div>
              <span className="mt-2 block text-[10px] font-bold text-emerald-600">
                Certificate ready to unlock
              </span>
            </div>

            {/* Main Student Portrait Standing */}
            <div className="relative z-20 h-full w-full flex items-end justify-center pointer-events-none">
              <Image
                src="/images/growth-student.png"
                alt="Student reaching career goals"
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
