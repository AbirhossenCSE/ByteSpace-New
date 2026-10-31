'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Container from '@/components/layout/Container';
import {
  Compass,
  ArrowRight,
  Code2,
  PenTool,
  Sparkles,
  BarChart3,
  DollarSign,
  Clock,
  CheckCircle,
} from 'lucide-react';
import { SITE_CONFIG } from '@/constants/site';

interface CareerPath {
  id: string;
  title: string;
  icon: React.ElementType;
  avgSalary: string;
  duration: string;
  openRoles: string;
  description: string;
  steps: { title: string; desc: string }[];
}

export const LearningPaths: React.FC = () => {
  const pathways: CareerPath[] = [
    {
      id: 'fullstack',
      title: 'Full-Stack Web Engineer',
      icon: Code2,
      avgSalary: '$115,000 / yr',
      duration: '4-6 Months',
      openRoles: '42,000+ Jobs',
      description:
        'Master modern frontend and scalable cloud backends with TypeScript, Next.js, PostgreSQL, and AWS.',
      steps: [
        { title: '1. Foundations', desc: 'Modern JavaScript, TypeScript & Component Architecture' },
        { title: '2. Full-Stack Mastery', desc: 'Next.js 14 App Router, Server Actions & ORMs' },
        { title: '3. Production Systems', desc: 'Caching, Microservices, CI/CD & Cloud Deployment' },
        { title: '4. Capstone Portfolio', desc: 'Build an enterprise SaaS and get resume certified' },
      ],
    },
    {
      id: 'uiux',
      title: 'Senior Product (UI/UX) Designer',
      icon: PenTool,
      avgSalary: '$108,000 / yr',
      duration: '3-5 Months',
      openRoles: '28,000+ Jobs',
      description:
        'Go from wireframes to high-fidelity design systems in Figma, user research, and interactive prototyping.',
      steps: [
        { title: '1. Design Fundamentals', desc: 'Typography, Grid Systems, Contrast & Layout Rules' },
        { title: '2. Figma Mastery', desc: 'Auto Layout, Component Variants & Design Tokens' },
        { title: '3. Product Strategy', desc: 'User Interviews, Usability Testing & Analytics' },
        { title: '4. Portfolio Case Study', desc: 'Ship 3 end-to-end case studies ready for hiring' },
      ],
    },
    {
      id: 'ai-data',
      title: 'AI & Data Scientist',
      icon: Sparkles,
      avgSalary: '$135,000 / yr',
      duration: '5-7 Months',
      openRoles: '35,000+ Jobs',
      description:
        'Harness the power of Python, LLMs, Vector Databases, and machine learning models for business impact.',
      steps: [
        { title: '1. Data Wrangling', desc: 'Python, Pandas, SQL & Advanced Statistical Modeling' },
        { title: '2. Machine Learning', desc: 'Supervised Learning, Regression & Classification' },
        { title: '3. Generative AI', desc: 'Fine-tuning LLMs, Embeddings & RAG Architectures' },
        { title: '4. AI Deployment', desc: 'Production inference APIs & Monitoring' },
      ],
    },
    {
      id: 'growth',
      title: 'Growth & Product Marketer',
      icon: BarChart3,
      avgSalary: '$98,000 / yr',
      duration: '3-4 Months',
      openRoles: '19,000+ Jobs',
      description:
        'Learn acquisition funnels, data-driven experimentation, viral loops, and content marketing.',
      steps: [
        { title: '1. Funnel Architecture', desc: 'AARRR Metrics, Customer Journey Mapping' },
        { title: '2. Paid & Organic Scale', desc: 'SEO Systems, High-converting Ad Campaigns' },
        { title: '3. Product-Led Growth', desc: 'Onboarding optimization, retention and virality' },
        { title: '4. Growth Audit', desc: 'Full-scale growth audit for a real startup' },
      ],
    },
  ];

  const [activePath, setActivePath] = useState<CareerPath>(pathways[0]);
  const ActiveIcon = activePath.icon;

  return (
    <section id="paths" className="bg-[#FAFBFD] py-20 lg:py-28 border-b border-slate-100">
      <Container>
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#C6FF00]/30 px-3.5 py-1 text-xs font-bold text-slate-900 mb-3 border border-[#C6FF00]">
            <Compass className="h-3.5 w-3.5 text-slate-900" />
            <span>Structured Career Roadmaps</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            Fast-Track Your Journey to a Six-Figure Career
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Don&apos;t know what to study next? Follow our curated career roadmaps with step-by-step
            milestones, real projects, and industry benchmark salaries.
          </p>
        </div>

        {/* Roadmap Explorer Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Pathway Selection Tabs (Left 4 Cols) */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 pl-2">
              Select A Pathway
            </span>
            {pathways.map((path) => {
              const Icon = path.icon;
              const isSelected = activePath.id === path.id;
              return (
                <button
                  key={path.id}
                  type="button"
                  onClick={() => setActivePath(path)}
                  className={`w-full flex items-center justify-between p-4 rounded-2xl text-left transition-all duration-200 border ${
                    isSelected
                      ? 'bg-white border-[#0050FF] shadow-lg shadow-blue-500/10'
                      : 'bg-white/60 border-slate-200/80 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors ${
                        isSelected
                          ? 'bg-[#0050FF] text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-slate-900">{path.title}</div>
                      <div className="text-xs text-slate-500 font-medium">{path.avgSalary}</div>
                    </div>
                  </div>
                  <ArrowRight
                    className={`h-4 w-4 transition-transform ${
                      isSelected ? 'text-[#0050FF] translate-x-1' : 'text-slate-300'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Pathway Roadmap Detailed Canvas (Right 8 Cols) */}
          <div className="lg:col-span-8 rounded-3xl bg-white p-7 sm:p-10 shadow-xl border border-slate-200/80">
            {/* Header with Metrics */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C6FF00] text-slate-900 font-bold shadow-sm">
                  <ActiveIcon className="h-6 w-6 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    {activePath.title} Roadmap
                  </h3>
                  <p className="text-xs text-slate-500">{activePath.description}</p>
                </div>
              </div>

              {/* Badges */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 rounded-xl bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-800 border border-emerald-100">
                  <DollarSign className="h-4 w-4" />
                  <span>{activePath.avgSalary}</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-xl bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700">
                  <Clock className="h-4 w-4 text-slate-500" />
                  <span>{activePath.duration}</span>
                </div>
              </div>
            </div>

            {/* Step-by-Step Milestones */}
            <div className="mt-8 space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Curriculum Progression & Milestones
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activePath.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-xs font-extrabold text-[#0050FF]">
                        <CheckCircle className="h-4 w-4 text-[#0050FF]" />
                        <span>{step.title}</span>
                      </div>
                      <p className="mt-1 text-xs text-slate-600 font-medium leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Action */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500">
                ✨ Includes 14 courses, 3 capstone projects, and 1-on-1 mentor reviews.
              </div>

              <Link
                href="/signup"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#0050FF] hover:bg-[#0042D9] px-7 py-3 text-sm font-bold text-white shadow-md shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-95"
              >
                <span>Enroll in This Pathway</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LearningPaths;
