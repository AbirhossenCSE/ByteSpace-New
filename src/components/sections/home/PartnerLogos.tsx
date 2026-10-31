import React from 'react';
import Image from 'next/image';
import Container from '@/components/layout/Container';
import { partnerLogos } from '@/data/partners';

export const PartnerLogos: React.FC = () => {
  return (
    <section className="bg-[#F8F9FB] border-b border-slate-200/80 py-8 lg:py-10">
      <Container>
        <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 sm:mb-8">
          Trusted by learners and teams at innovative companies worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
          {partnerLogos.map((partner) => (
            <div
              key={partner.id}
              className="flex items-center justify-center opacity-75 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={partner.image}
                alt={partner.name}
                width={160}
                height={40}
                className="h-7 sm:h-8 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PartnerLogos;
