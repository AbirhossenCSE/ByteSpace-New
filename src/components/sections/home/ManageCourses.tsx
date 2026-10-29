import React from 'react';
import Image from 'next/image';
import Container from '@/components/layout/Container';
import { Check } from 'lucide-react';

export const ManageCourses: React.FC = () => {
  const checklist = [
    'Share Your Expertise',
    'Monetize Your Passion',
    'Flexibility and Autonomy',
    'Build a Community',
  ];

  return (
    <section id="manage-courses" className="relative overflow-hidden bg-gradient-to-b from-[#F5F8FF]/80 via-white to-white py-16 sm:py-24">
      {/* Soft Ambient Background Glows matching design reference */}
      <div className="absolute -bottom-24 -left-24 h-[480px] w-[480px] rounded-full bg-[#C6FF00]/20 blur-[110px] pointer-events-none" />
      <div className="absolute top-0 left-10 h-[380px] w-[380px] rounded-full bg-[#0050FF]/10 blur-[90px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 h-[450px] w-[450px] rounded-full bg-[#EBF3FF] blur-[100px] pointer-events-none" />

      <Container className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
        {/* Left Column: Visual Collage (Instructor + Revenue Cards + Happy Students + Lime 3D Spring) */}
        <div className="lg:col-span-6 relative flex justify-center items-center">
          <div className="relative h-[540px] sm:h-[600px] w-full max-w-[520px] flex items-end justify-center">
            {/* 3D Decorative Lime Spring on the Right (Behind Instructor) */}
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

            {/* Floating Blue Card 1: Total Revenue (Top Left - Behind Hair z-10) */}
            <div className="absolute top-8 -left-4 sm:-left-8 lg:-left-12 z-10 w-44 sm:w-48 rounded-2xl bg-[#0050FF] p-4 text-white shadow-2xl transition-transform duration-300 hover:scale-105">
              <div className="text-xs font-medium text-white/90">Total Revenue</div>
              <div className="text-[10px] text-white/70">July 1-28</div>
              <div className="mt-1 text-2xl font-black text-white tracking-tight">
                $120.29
              </div>
              {/* Progress bar matching design reference */}
              <div className="mt-2.5 h-1.5 w-full rounded-full bg-white/25 overflow-hidden">
                <div className="h-full bg-[#C6FF00] rounded-full w-[65%]" />
              </div>
            </div>

            {/* Floating Blue Card 2: Year to Date (Middle Left - Behind Arm z-10) */}
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

            {/* Floating Card 3: Happy Students (Bottom Right - In Front of Body/Tablet z-30) */}
            <div className="absolute bottom-10 -right-2 sm:right-0 lg:-right-4 z-30 min-w-[220px] sm:min-w-[250px] rounded-2xl border border-slate-100/90 bg-white p-4 shadow-2xl text-left transition-transform duration-300 hover:scale-105">
              <div className="text-xs sm:text-sm font-bold text-slate-900">Happy Students</div>
              <div className="flex items-center gap-1 text-xs font-bold text-slate-700 mt-0.5">
                <span>4.5</span>
                <span className="text-slate-400 font-normal">(240)</span>
                <span className="text-amber-400">★</span>
              </div>
              {/* High-fidelity avatar row matching design */}
              <div className="mt-2.5 relative h-9 w-full">
                <Image
                  src="/images/happy-student-avatars-clean.png"
                  alt="Happy students community avatars"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>

            {/* Main Instructor Cutout Image with soft drop shadow (z-20) */}
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            Create & Manage <br />
            Courses Easily.
          </h2>

          <p className="mt-6 text-sm sm:text-base text-slate-600 leading-relaxed">
            <span className="font-bold text-slate-900">ByteSpace</span> supports individuals or
            entities in the creation, publication, and administration of educational courses.
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
        </div>
      </Container>
    </section>
  );
};

export default ManageCourses;
