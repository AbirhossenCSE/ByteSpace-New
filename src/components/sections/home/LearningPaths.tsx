import React from 'react';
import Container from '@/components/layout/Container';
import CategoryCard from '@/components/cards/CategoryCard';
import { learningPaths } from '@/data/categories';

export const LearningPaths: React.FC = () => {
  return (
    <section id="paths" className="bg-white py-16 sm:py-24 border-t border-slate-100">
      <Container>
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-500 leading-relaxed max-w-2xl mx-auto">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range
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
