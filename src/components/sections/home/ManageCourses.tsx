'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/layout/Container';
import {
  Check,
  ArrowRight,
  Laptop,
  DollarSign,
  TrendingUp,
  Sparkles,
  Zap,
} from 'lucide-react';
import { SITE_CONFIG } from '@/constants/site';

export const ManageCourses: React.FC = () => {
  const [studentsCount, setStudentsCount] = useState<number>(500);
  const [coursePrice, setCoursePrice] = useState<number>(35);

  // 85% creator payout calculation
  const monthlyEarnings = Math.round(studentsCount * coursePrice * 0.85);

  const perks = [
    'Keep up to 85% of revenue on every sale',
    'Instant distribution to 120,000+ active learners',
    'AI-assisted course outline & transcript generation',
    'Automated global Stripe & PayPal payouts',
    'Private Creator Circle & quarterly creator grants',
  ];

  return (
    <section id="manage-courses" className="relative overflow-hidden bg-white py-20 lg:py-28 border-b border-slate-100">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Creator Value Prop & Benefits */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-bold text-emerald-700 mb-4 border border-emerald-200">
              <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
              <span>Creator Economy 2.0</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Turn Your Knowledge into <br />
              Predictable Monthly Income.
            </h2>

            <p className="mt-6 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {SITE_CONFIG.name} empowers teachers, engineers, and creators to package their expertise
              into world-class courses without worrying about hosting, marketing, or payment gateways.
            </p>

            {/* Checklist */}
            <div className="mt-8 space-y-3.5">
              {perks.map((perk, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-slate-800">
                    {perk}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/signup?role=creator"
                className="inline-flex items-center gap-2 rounded-full bg-[#0050FF] hover:bg-[#0042D9] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-95"
              >
                <span>Apply as an Instructor</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <span className="text-xs text-slate-400 font-medium">
                Free to publish • No upfront monthly fees
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Earnings Calculator */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-slate-900 text-white p-7 sm:p-10 shadow-2xl border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 h-40 w-40 bg-[#0050FF]/20 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                    Estimated Creator Earnings
                  </h3>
                  <p className="text-xs text-slate-400">Drag sliders to project your revenue</p>
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#C6FF00] text-slate-900 font-bold">
                  <DollarSign className="h-5 w-5 stroke-[2.5]" />
                </div>
              </div>

              {/* Sliders */}
              <div className="mt-6 space-y-6">
                {/* Students Slider */}
                <div>
                  <div className="flex justify-between items-center text-xs font-bold mb-2">
                    <span className="text-slate-300">Enrolled Students / Month</span>
                    <span className="text-[#C6FF00] text-sm">{studentsCount.toLocaleString()} Students</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="3000"
                    step="50"
                    value={studentsCount}
                    onChange={(e) => setStudentsCount(Number(e.target.value))}
                    className="w-full accent-[#C6FF00] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                    <span>50</span>
                    <span>1,500</span>
                    <span>3,000+</span>
                  </div>
                </div>

                {/* Course Price Slider */}
                <div>
                  <div className="flex justify-between items-center text-xs font-bold mb-2">
                    <span className="text-slate-300">Average Course Price</span>
                    <span className="text-[#C6FF00] text-sm">${coursePrice} USD</span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="150"
                    step="5"
                    value={coursePrice}
                    onChange={(e) => setCoursePrice(Number(e.target.value))}
                    className="w-full accent-[#C6FF00] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                    <span>$15</span>
                    <span>$75</span>
                    <span>$150</span>
                  </div>
                </div>
              </div>

              {/* Earnings Result Display Card */}
              <div className="mt-8 rounded-2xl bg-white/5 border border-white/10 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-slate-400 font-semibold">Your Potential Take-Home:</span>
                  <div className="text-3xl sm:text-4xl font-black text-[#C6FF00] tracking-tight mt-0.5">
                    ${monthlyEarnings.toLocaleString()}
                    <span className="text-xs text-slate-300 font-normal"> / month</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Based on 85% creator payout rate after card fees.
                  </p>
                </div>

                <div className="text-center sm:text-right shrink-0">
                  <div className="text-xs font-bold text-white">Annual Potential</div>
                  <div className="text-base font-extrabold text-emerald-400">
                    ${(monthlyEarnings * 12).toLocaleString()} / yr
                  </div>
                </div>
              </div>

              {/* Bottom Micro Trust */}
              <div className="mt-6 flex items-center justify-between text-[11px] text-slate-400 pt-4 border-t border-slate-800">
                <span className="flex items-center gap-1">
                  <Zap className="h-3 w-3 text-amber-400" /> Automated monthly wire payouts
                </span>
                <span>Join 2,400+ creators</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ManageCourses;
