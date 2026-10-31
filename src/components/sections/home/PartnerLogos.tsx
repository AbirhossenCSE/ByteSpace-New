import React from 'react';
import Image from 'next/image';
import Container from '@/components/layout/Container';
import { partnerLogos } from '@/data/partners';
import { SITE_CONFIG } from '@/constants/site';
import { TrendingUp, Award, Briefcase } from 'lucide-react';

export const PartnerLogos: React.FC = () => {
  return (
    <section className="bg-white border-b border-slate-100 py-10 lg:py-14">
      <Container>
        {/* Subtitle */}
        <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
          Learners at {SITE_CONFIG.name} build careers at industry leaders
        </p>

        {/* Logos Marquee Row */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 md:gap-20">
          {partnerLogos.map((partner) => (
            <div
              key={partner.id}
              className="flex items-center justify-center opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={partner.image}
                alt={partner.name}
                width={150}
                height={36}
                className="h-7 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* 3 Graduate Highlights Grid */}
        <div className="mt-10 pt-8 border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3.5 justify-center sm:justify-start">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <TrendingUp className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-extrabold text-slate-900">94% Career Advancement</div>
              <p className="text-xs text-slate-500">Graduates report promotion or new role</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 justify-center sm:justify-start">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0050FF]">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-extrabold text-slate-900">Accredited Credentials</div>
              <p className="text-xs text-slate-500">Verifiable certificates for your resume</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 justify-center sm:justify-start">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
              <Briefcase className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-extrabold text-slate-900">$24,500 Avg. Salary Hike</div>
              <p className="text-xs text-slate-500">Across design, tech & marketing tracks</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PartnerLogos;
