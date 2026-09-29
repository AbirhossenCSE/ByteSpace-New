import React from 'react';
import Container from '@/components/layout/Container';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="py-20 bg-slate-100 border-b border-slate-200">
      <Container className="text-center">
        <h2 className="text-2xl font-bold text-slate-700 uppercase tracking-wide">
          1. Hero Section Placeholder
        </h2>
      </Container>
    </section>
  );
};

export default Hero;
