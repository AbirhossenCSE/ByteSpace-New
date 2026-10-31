import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/layout/Container';
import { Check, ArrowRight, Laptop } from 'lucide-react';
import { SITE_CONFIG } from '@/constants/site';

export const ManageCourses: React.FC = () => {
  const checklist = [
    'Share Your Expertise with Millions',
    'Monetize Your Passion on Your Own Terms',
    'Complete Flexibility and Total Autonomy',
    'Build and Nurture a Global Community',
  ];

  return (
    <section id="manage-courses" className="relative overflow-hidden bg-gradient-to-b from-[#F5F8FF]/80 via-white to-white py-16 sm:py-24 border-b border-slate-100">
      {/* Soft Ambient Background Glows */}
      <div className="absolute -bottom-24 -left-24 h-[480px] w-[480px] rounded-full bg-[#C6FF00]/20 blur-[110px] pointer-events-none" />
      <div className="absolute top-0 left-10 h-[380px] w-[380px] rounded-full bg-[#0050FF]/10 blur-[90px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 h-[450px] w-[450px] rounded-full bg-[#EBF3FF] blur-[100px] pointer-events-none" />

      <Container className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
        {/* Left Column: Visual Collage (Instructor + Revenue Cards + Happy Students + Lime 3D Spring) */}
        <div className="lg:col-span-6 relative flex justify-center items-center">
          <div className="relative h-[540px] sm:h-[600px] w-full max-w-[520px] flex items-end justify-center">
            {/* 3D Decorative Lime Spring on the Right */}
            <div className="absolute top-16 right-2 sm:right-6 z-0 pointer-events-none transform rotate-6">
              <svg width="120" height="180" viewBox="0 0 110 170" fill="none" className="drop-shadow-xl">
                <path
                  d="M20 20 Q 95 35, 35 75 T 85 125 T 30 160"
                  stroke="#C6FF00"
                  strokeWidth="26"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Floating Blue Card 1: Total Revenue */}
            <div className="absolute top-8 -left-4 sm:-left-8 lg:-left-12 z-10 w-44 sm:w-48 rounded-2xl bg-[#0050FF] p-4 text-white shadow-2xl transition-transform duration-300 hover:scale-105">
              <div className="text-xs font-medium text-white/90">Total Revenue</div>
              <div className="text-[10px] text-white/70">July 1-28</div>
              <div className="mt-1 text-2xl font-black text-white tracking-tight">
                $120.29
              </div>
              <div className="mt-2.5 h-1.5 w-full rounded-full bg-white/25 overflow-hidden">
                <div className="h-full bg-[#C6FF00] rounded-full w-[65%]" />
              </div>
            </div>

            {/* Floating Blue Card 2: Year to Date */}
            <div className="absolute top-44 -left-4 sm:-left-8 lg:-left-12 z-10 w-44 sm:w-48 rounded-2xl bg-[#0050FF] p-4 text-white shadow-2xl transition-transform duration-300 hover:scale-105">
              <div className="text-xs font-medium text-white/90">Year to Date</div>
              <div className="text-[10px] text-white/70">2023</div>
              <div className="mt-1 text-2xl font-black text-white tracking-tight">
                $1,200.38
              </div>
              <div className="mt-2.5 inline-flex items-center rounded-full bg-[#C6FF00] px-2.5 py-0.5 text-xs font-black text-slate-900">
                +12$
              </div>
            </div>

            {/* Floating Card 3: Happy Students */}
            <div className="absolute bottom-10 -right-2 sm:right-0 lg:-right-4 z-30 min-w-[220px] sm:min-w-[250px] rounded-2xl border border-slate-100/90 bg-white p-4 shadow-2xl text-left transition-transform duration-300 hover:scale-105">
              <div className="text-xs sm:text-sm font-bold text-slate-900">Happy Students</div>
              <div className="flex items-center gap-1 text-xs font-bold text-slate-700 mt-0.5">
                <span>4.5</span>
                <span className="text-slate-400 font-normal">(240)</span>
                <span className="text-amber-400">★</span>
              </div>
              <div className="mt-2.5 relative h-9 w-full">
                <Image
                  src="/images/happy-student-avatars-clean.png"
                  alt="Happy students community avatars"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>

            {/* Main Instructor Cutout Image */}
            <div className="relative z-20 h-full w-full flex items-end justify-center pointer-events-none drop-shadow-[0_20px_35px_rgba(0,0,0,0.18)]">
              <Image
                src="/images/course-instructor.png"
                alt="Instructor creator holding tablet with headset"
                fill
                priority
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Headline, Description & Features Checklist */}
        <div className="lg:col-span-6 max-w-xl">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-100/70 px-3.5 py-1 text-xs font-bold text-[#0050FF] mb-4">
            <Laptop className="h-3.5 w-3.5 text-[#0050FF]" />
            <span>Teach & Earn</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            Create & Manage <br />
            Courses Easily.
          </h2>

          <p className="mt-6 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            <span className="font-bold text-slate-900">{SITE_CONFIG.name}</span> supports individuals and
            organizations in the creation, publication, and seamless administration of educational courses.
            Reach a worldwide audience and earn recurring income with our powerful teaching tools.
          </p>

          {/* Checklist */}
          <div className="mt-8 space-y-4">
            {checklist.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0050FF] text-white shadow-sm">
                  <Check className="h-3 w-3 stroke-[3]" />
                </div>
                <span className="text-sm sm:text-base font-semibold text-slate-800">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Link */}
          <div className="mt-9">
            <Link
              href="/signup?role=creator"
              className="inline-flex items-center gap-2 rounded-full bg-[#0050FF] hover:bg-[#0042D9] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all hover:gap-3"
            >
              <span>Start Teaching Today</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ManageCourses;
