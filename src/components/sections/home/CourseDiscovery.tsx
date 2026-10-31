'use client';

import React, { useState } from 'react';
import Container from '@/components/layout/Container';
import CourseCard from '@/components/cards/CourseCard';
import { sampleCourses } from '@/data/courses';
import { SITE_CONFIG } from '@/constants/site';
import { cn } from '@/lib/utils';
import { Sparkles, SlidersHorizontal } from 'lucide-react';

export const CourseDiscovery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Featured');
  const [showAllCategories, setShowAllCategories] = useState(false);

  // Categories organized according to the rows in the design reference
  const row1 = [
    'Featured',
    'Music',
    'Drawing & Painting',
    'Marketing',
    'Animation',
    'Social Media',
    'UI/UX Design',
    'Creative Marketing',
  ];

  const row2 = [
    'Digital Illustration',
    'Film & Video',
    'Crafts',
    'Freelance & Entrepreneurship',
    'Graphic Design',
    'Photography',
  ];

  const row3 = [
    'Productivity',
    'Web Development',
    'Data Science',
    'Cooking',
  ];

  const extraCategories = [
    'Business & Finance',
    'Artificial Intelligence',
    'Mobile Development',
    '3D Modeling',
  ];

  // Course filtering: if "Featured", show all courses; otherwise filter by category matching
  const filteredCourses =
    activeTab === 'Featured'
      ? sampleCourses
      : sampleCourses.filter(
          (course) =>
            course.category.toLowerCase().includes(activeTab.toLowerCase()) ||
            activeTab.toLowerCase().includes(course.category.toLowerCase())
        );

  // If a selected category has no direct course in mock data, show sampleCourses so UI remains full & rich
  const displayedCourses =
    filteredCourses.length > 0 ? filteredCourses : sampleCourses;

  const renderPill = (category: string) => {
    const isActive = activeTab === category;
    return (
      <button
        key={category}
        type="button"
        onClick={() => setActiveTab(category)}
        className={cn(
          'rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer',
          isActive
            ? 'bg-[#C6FF00] text-slate-900 shadow-md scale-105'
            : 'bg-[#F4F4F6] text-slate-600 hover:bg-slate-200/90 hover:text-slate-900'
        )}
      >
        {category}
      </button>
    );
  };

  return (
    <section id="courses" className="bg-white py-16 sm:py-24 border-b border-slate-100">
      <Container>
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold text-[#0050FF] mb-3">
            <Sparkles className="h-3.5 w-3.5 text-[#0050FF]" />
            <span>Hand-Picked By Industry Experts</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            Discover Your Passion, <br className="hidden sm:inline" />
            Build Your Skills
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            At {SITE_CONFIG.name}, we bring you closer to life-changing knowledge. Explore a variety
            of courses across different fields, from technology to the arts, and accelerate your career.
          </p>
        </div>

        {/* Filter Tag Pills */}
        <div className="mt-10 sm:mt-12 flex flex-col items-center gap-3">
          {/* Row 1 */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {row1.map(renderPill)}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {row2.map(renderPill)}
          </div>

          {/* Row 3 */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {row3.map(renderPill)}
            <button
              type="button"
              onClick={() => setShowAllCategories(!showAllCategories)}
              className="text-xs sm:text-sm font-extrabold text-[#0050FF] hover:underline px-3 py-2 cursor-pointer transition-colors"
            >
              {showAllCategories ? '- Show Less' : '+ More Categories'}
            </button>
          </div>

          {/* Expandable Extra Categories */}
          {showAllCategories && (
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 animate-fadeIn mt-1">
              {extraCategories.map(renderPill)}
            </div>
          )}
        </div>

        {/* Filter Summary Bar */}
        <div className="mt-10 flex items-center justify-between text-xs sm:text-sm text-slate-500 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-[#0050FF]" />
            <span className="font-semibold text-slate-900">
              Showing {displayedCourses.length} courses
            </span>
            <span>in &ldquo;{activeTab}&rdquo;</span>
          </div>
          {activeTab !== 'Featured' && (
            <button
              type="button"
              onClick={() => setActiveTab('Featured')}
              className="font-bold text-[#0050FF] hover:underline"
            >
              Reset to Featured
            </button>
          )}
        </div>

        {/* Courses 3-Column Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CourseDiscovery;
