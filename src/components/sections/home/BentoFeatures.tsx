'use client';

import React from 'react';
import Link from 'next/link';
import Container from '@/components/layout/Container';
import {
  Code2,
  Users2,
  Award,
  Sparkles,
  ArrowRight,
  Terminal,
  MessageSquare,
  CheckCircle2,
  DollarSign,
  TrendingUp,
} from 'lucide-react';
import { SITE_CONFIG } from '@/constants/site';

export const BentoFeatures: React.FC = () => {
  return (
    <section id="why-us" className="bg-[#FAFBFD] py-20 lg:py-28 border-b border-slate-100">
      <Container>
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold text-[#0050FF] mb-3 border border-blue-100">
            <Sparkles className="h-3.5 w-3.5 text-[#0050FF]" />
            <span>The SkillSphere Advantage</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            Built Different. <br />
            Designed for Real Career Outcomes.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Most online platforms only sell passive videos. {SITE_CONFIG.name} provides hands-on project labs,
            personalized mentor reviews, and a direct pipeline to top hiring teams.
          </p>
        </div>

        {/* Bento Grid (4 Cards) */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Project-Based Learning (7 Cols) */}
          <div className="md:col-span-7 rounded-3xl bg-white p-7 sm:p-9 shadow-sm border border-slate-200/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#0050FF] mb-5 group-hover:scale-110 transition-transform">
                <Code2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Learn by Building Real Projects, Not Just Watching
              </h3>
              <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Every curriculum is centered around production-grade projects. You will deploy real apps, design full design systems in Figma, and build an impressive portfolio that hiring managers love.
              </p>
            </div>

            {/* Code / Project Mockup Preview */}
            <div className="mt-6 rounded-2xl bg-slate-900 p-4 text-white text-xs font-mono shadow-inner border border-slate-800">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400">
                <div className="flex items-center gap-2">
                  <Terminal className="h-3.5 w-3.5 text-emerald-400" />
                  <span>project-lab / fullstack-app.ts</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-bold">● Live Sandbox</span>
              </div>
              <pre className="mt-3 text-slate-300 overflow-x-auto leading-relaxed">
                <code>{`// Lesson 5: Real-time Vector Search API
import { embedQuery } from "@/lib/ai-pipeline";

export async function POST(req: Request) {
  const { prompt } = await req.json();
  const vector = await embedQuery(prompt);
  return Response.json({ success: true, matches: 42 });
}`}</code>
              </pre>
            </div>
          </div>

          {/* Card 2: 1-on-1 Mentorship (5 Cols) */}
          <div className="md:col-span-5 rounded-3xl bg-white p-7 sm:p-9 shadow-sm border border-slate-200/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 mb-5 group-hover:scale-110 transition-transform">
                <Users2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Direct Feedback from 1% Mentors
              </h3>
              <p className="mt-2.5 text-sm text-slate-600 leading-relaxed font-normal">
                Never get stuck again. Ask questions in real-time, submit code for line-by-line code reviews, and join weekly office hours.
              </p>
            </div>

            {/* Mentor Chat Simulation */}
            <div className="mt-6 space-y-2.5 bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <div className="flex items-start gap-2.5">
                <div className="h-7 w-7 rounded-full bg-slate-800 text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                  JS
                </div>
                <div className="bg-white p-2.5 rounded-xl text-xs text-slate-800 shadow-sm border border-slate-100">
                  How do I handle race conditions in this state machine?
                </div>
              </div>
              <div className="flex items-start gap-2.5 flex-row-reverse">
                <div className="h-7 w-7 rounded-full bg-[#0050FF] text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                  AR
                </div>
                <div className="bg-[#0050FF] p-2.5 rounded-xl text-xs text-white shadow-sm">
                  Use an abort controller or debounce the dispatch. I left notes in your PR! 🚀
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Verifiable Certificates (5 Cols) */}
          <div className="md:col-span-5 rounded-3xl bg-white p-7 sm:p-9 shadow-sm border border-slate-200/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 mb-5 group-hover:scale-110 transition-transform">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Accredited & Verifiable Credentials
              </h3>
              <p className="mt-2.5 text-sm text-slate-600 leading-relaxed font-normal">
                Earn certificates backed by real assessments that you can showcase directly on LinkedIn and your resume.
              </p>
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-gradient-to-tr from-amber-50 to-orange-50 border border-amber-200/80 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-800">
                  SkillSphere Certified
                </span>
                <div className="text-sm font-bold text-slate-900 mt-0.5">
                  Senior Product Designer
                </div>
                <span className="text-xs text-slate-500">Credential ID: SS-98214</span>
              </div>
              <div className="h-10 w-10 rounded-full bg-amber-400 text-slate-950 font-black flex items-center justify-center shadow-md">
                ★
              </div>
            </div>
          </div>

          {/* Card 4: Creator Economy & Monetization (7 Cols) */}
          <div className="md:col-span-7 rounded-3xl bg-gradient-to-br from-[#0050FF] to-[#0038B3] p-7 sm:p-9 shadow-lg text-white flex flex-col justify-between group">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-[#C6FF00] mb-5 group-hover:scale-110 transition-transform">
                <DollarSign className="h-6 w-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Teach & Earn: Keep Up to 85% of Revenue
              </h3>
              <p className="mt-2.5 text-sm sm:text-base text-blue-100 leading-relaxed font-normal">
                Turn your hard-won experience into high-margin recurring income. Use our state-of-the-art Course Studio to upload 4K video, build quizzes, and sell globally with automated payouts.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/15">
              <div className="flex items-center gap-6">
                <div>
                  <div className="text-2xl font-black text-[#C6FF00]">$12,000+</div>
                  <span className="text-xs text-blue-200">Average Top Creator Payout</span>
                </div>
                <div className="h-8 w-px bg-white/20" />
                <div>
                  <div className="text-2xl font-black text-white">85%</div>
                  <span className="text-xs text-blue-200">Direct Creator Share</span>
                </div>
              </div>

              <Link
                href="/signup?role=creator"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#C6FF00] hover:bg-white px-5 py-2.5 text-xs sm:text-sm font-extrabold text-slate-900 transition-colors shadow-md"
              >
                <span>Become an Instructor</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BentoFeatures;

