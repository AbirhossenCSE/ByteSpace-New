import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/layout/Container';

export const CreatorCta: React.FC = () => {
  return (
    <section
      id="creators"
      className="relative overflow-hidden bg-[#0050FF] bg-hero-grid py-20 lg:py-24 text-white selection:bg-[#C6FF00] selection:text-slate-900"
      aria-labelledby="creator-cta-heading"
    >
      {/* Anchor for backward compatibility with id="creator-cta" */}
      <div id="creator-cta" className="absolute -top-20 opacity-0 pointer-events-none" />

      {/* 3D Decorative Background Collage matching the exact Figma design */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center items-center overflow-hidden">
        <div className="relative w-full h-full max-w-[1440px] min-h-[440px] opacity-40 sm:opacity-80 lg:opacity-100 transition-opacity">
          <Image
            src="/images/creator-cta-bg.png"
            alt="ByteSpace creator 3D shapes"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
      </div>

      <Container className="relative z-10 mx-auto flex flex-col items-center justify-center text-center">
        {/* Main Headline */}
        <h2
          id="creator-cta-heading"
          className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-white leading-[1.18] max-w-3xl mx-auto"
        >
          Unlock Your Potential as a <br className="hidden sm:inline" />
          Creator with ByteSpace
        </h2>

        {/* Descriptive Subtitle */}
        <p className="mt-5 sm:mt-6 text-sm sm:text-base text-blue-100/90 max-w-3xl mx-auto font-normal leading-relaxed">
          Experience the collaboration of numerous creators and an expanding selection of courses.
          Register now and become a part of a community comprising over 10,000 local and
          international creators. Utilize our Course Editor, and showcase your expertise by
          publishing your finest course on the ByteSpace Course Library.
        </p>

        {/* CTA Button */}
        <div className="mt-8 sm:mt-10">
          <Link
            href="/signup?role=creator"
            className="inline-flex items-center justify-center rounded-full bg-[#C6FF00] px-8 py-3.5 text-sm sm:text-base font-extrabold text-slate-900 shadow-lg shadow-black/10 transition-all duration-200 hover:brightness-105 hover:scale-[1.02] active:scale-95"
          >
            Join as Creator
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default CreatorCta;
