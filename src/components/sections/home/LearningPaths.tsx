import React from 'react';
import Container from '@/components/layout/Container';
import CategoryCard from '@/components/cards/CategoryCard';
import { learningPaths } from '@/data/categories';
import { SITE_CONFIG } from '@/constants/site';
import { Compass } from 'lucide-react';

export const LearningPaths: React.FC = () => {
  return (
    <section id="paths" className="bg-[#FAFBFD] py-16 sm:py-24 border-b border-slate-100">
      <Container>
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#C6FF00]/30 px-3.5 py-1 text-xs font-bold text-slate-900 mb-3 border border-[#C6FF00]">
            <Compass className="h-3.5 w-3.5 text-slate-900" />
            <span>Curated Career Roadmaps</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            Explore Diverse Learning Paths at {SITE_CONFIG.name}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            At {SITE_CONFIG.name}, we believe in empowering individuals through knowledge. Our diverse range
            of courses spans various fields, ensuring there&apos;s something for everyone. Unleash
            your potential and explore our carefully curated categories.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {learningPaths.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default LearningPaths;
