import React from 'react';
import Image from 'next/image';
import Container from '@/components/layout/Container';
import { partnerLogos } from '@/data/partners';

export const PartnerLogos: React.FC = () => {
  return (
    <section className="bg-[#F4F4F6] border-b border-slate-200/80 py-8 lg:py-10">
      <Container className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
        {partnerLogos.map((partner) => (
          <div
            key={partner.id}
            className="flex items-center justify-center opacity-85 hover:opacity-100 transition-opacity"
          >
            <Image
              src={partner.image}
              alt={partner.name}
              width={160}
              height={40}
              className="h-8 sm:h-9 w-auto object-contain"
            />
          </div>
        ))}
      </Container>
    </section>
  );
};

export default PartnerLogos;
