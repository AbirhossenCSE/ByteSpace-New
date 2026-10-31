import React from 'react';
import Link from 'next/link';
import Container from '@/components/layout/Container';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '@/constants/site';

export const CreatorCta: React.FC = () => {
  return (
    <section
      id="creators"
      className="relative overflow-hidden bg-slate-900 py-20 lg:py-24 text-white"
    >
      {/* Backward compatible anchor for #creator-cta */}
      <div id="creator-cta" className="absolute -top-20 opacity-0 pointer-events-none" />

      {/* Ambient background glow accents */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#0050FF]/30 blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#C6FF00]/15 blur-[130px] pointer-events-none" />

      <Container className="relative z-10 mx-auto text-center max-w-4xl">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-bold text-[#C6FF00] border border-white/15 mb-6">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Join Over 120,000+ Lifelong Learners Today</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
          Ready to Level Up Your Career <br />
          with {SITE_CONFIG.name}?
        </h2>

        <p className="mt-6 text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Get unlimited access to 250+ project-based courses, direct feedback from industry mentors,
          and verifiable certificates. Start your free trial today.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/signup"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#C6FF00] hover:bg-[#b8f000] px-8 py-4 text-sm sm:text-base font-extrabold text-slate-900 shadow-xl shadow-lime-500/10 transition-all hover:scale-[1.03] active:scale-95"
          >
            <span>Get Started for Free</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href="#courses"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white/20 px-8 py-4 text-sm sm:text-base font-bold text-white border border-white/20 transition-colors"
          >
            <span>Browse All Courses</span>
          </Link>
        </div>

        {/* Guarantees */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#C6FF00]" />
            <span>No Credit Card Required</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>30-Day Money-Back Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#C6FF00]" />
            <span>Cancel Anytime in 1-Click</span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CreatorCta;
