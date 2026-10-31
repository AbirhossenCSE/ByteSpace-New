'use client';

import React, { useState, useMemo } from 'react';
import Container from '@/components/layout/Container';
import CourseCard from '@/components/cards/CourseCard';
import { sampleCourses } from '@/data/courses';
import { Course } from '@/types';
import {
  Sparkles,
  Search,
  Filter,
  SlidersHorizontal,
  X,
  Play,
  CheckCircle2,
  Clock,
  BookOpen,
  ArrowRight,
} from 'lucide-react';
import { SITE_CONFIG } from '@/constants/site';

export const CourseDiscovery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [previewCourse, setPreviewCourse] = useState<Course | null>(null);

  const categories = [
    'All',
    'UI/UX Design',
    'Graphic Design',
    'Data Science',
    'Productivity',
    'Finance',
    'Freelance & Entrepreneurship',
  ];

  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  // Filtered and Sorted Courses
  const filteredCourses = useMemo(() => {
    return sampleCourses
      .filter((course) => {
        const matchesCategory =
          selectedCategory === 'All' ||
          course.category.toLowerCase().includes(selectedCategory.toLowerCase());

        const matchesLevel =
          selectedLevel === 'All' ||
          course.level.toLowerCase() === selectedLevel.toLowerCase() ||
          course.level === 'All Levels';

        const matchesSearch =
          searchTerm === '' ||
          course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.instructor.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesCategory && matchesLevel && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
      });
  }, [selectedCategory, selectedLevel, searchTerm, sortBy]);

  return (
    <section id="courses" className="bg-white py-20 lg:py-28 border-b border-slate-100">
      <Container>
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-100">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold text-[#0050FF] mb-3 border border-blue-100">
              <Sparkles className="h-3.5 w-3.5 text-[#0050FF]" />
              <span>Explore The Catalog</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Handcrafted Courses for <br />
              the Next-Generation Workforce
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Learn practical, job-ready skills with project-based courses designed by creators and
              engineers from leading tech companies.
            </p>
          </div>

          {/* Quick Search inside Discovery */}
          <div className="w-full md:w-80 relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="h-4 w-4" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Filter courses by name or creator..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-slate-200 text-xs sm:text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:border-[#0050FF] focus:ring-4 focus:ring-[#0050FF]/10 transition-all"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="mt-8 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat === 'All' ? 'All Categories' : cat}
                </button>
              );
            })}
          </div>

          {/* Level & Sort Filters */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Level Selector */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-full text-xs font-semibold text-slate-700">
              {levels.map((lvl) => (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => setSelectedLevel(lvl)}
                  className={`px-3 py-1.5 rounded-full transition-colors ${
                    selectedLevel === lvl
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'hover:text-slate-900 text-slate-500'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 focus:outline-none focus:border-[#0050FF]"
            >
              <option value="featured">Featured First</option>
              <option value="rating">Highest Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Results Counter & Active Filters Tag */}
        <div className="mt-8 flex items-center justify-between text-xs text-slate-500 border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-3.5 w-3.5 text-[#0050FF]" />
            <span className="font-bold text-slate-900">
              Showing {filteredCourses.length} of {sampleCourses.length} courses
            </span>
            {(selectedCategory !== 'All' || selectedLevel !== 'All' || searchTerm) && (
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedLevel('All');
                  setSearchTerm('');
                  setSortBy('featured');
                }}
                className="text-[#0050FF] font-bold hover:underline ml-2"
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>

        {/* 3-Column Modern Grid */}
        {filteredCourses.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onPreview={(c) => setPreviewCourse(c)}
              />
            ))}
          </div>
        ) : (
          <div className="mt-16 text-center py-16 rounded-3xl bg-slate-50 border border-slate-200">
            <Filter className="h-10 w-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No courses found matching your criteria</h3>
            <p className="text-sm text-slate-500 mt-1 max-w-md mx-auto">
              Try adjusting your category, level, or search keyword to discover more courses.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSelectedLevel('All');
                setSearchTerm('');
              }}
              className="mt-5 rounded-full bg-[#0050FF] px-6 py-2.5 text-xs font-bold text-white shadow-md shadow-blue-500/20"
            >
              Reset Filters
            </button>
          </div>
        )}
      </Container>

      {/* Interactive Course Preview Modal */}
      {previewCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setPreviewCourse(null)}
              className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Header */}
            <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-[#0050FF] mb-3">
              {previewCourse.category} • {previewCourse.level}
            </div>

            <h3 className="text-2xl font-black text-slate-900 tracking-tight">
              {previewCourse.title}
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Instructor: <strong className="text-slate-900">{previewCourse.instructor}</strong> • Rating: {previewCourse.rating} ★
            </p>

            {/* Video preview simulation */}
            <div className="mt-5 relative h-56 w-full rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center">
              <Play className="h-12 w-12 text-[#C6FF00] fill-[#C6FF00]" />
              <div className="absolute bottom-3 left-4 text-xs font-bold text-white">
                Trailer: What you will build in this masterclass
              </div>
            </div>

            {/* Syllabus highlight */}
            <div className="mt-6 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                What&apos;s Included:
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>{previewCourse.lessons} of video</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>{previewCourse.duration} total duration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Interactive Exercises & Files</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Verifiable Certificate</span>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-2xl font-black text-slate-900">${previewCourse.price}</span>
                <span className="text-xs text-slate-400 ml-1">/ one-time payment</span>
              </div>
              <a
                href={`/signup?course=${previewCourse.id}`}
                className="inline-flex items-center gap-2 rounded-full bg-[#0050FF] hover:bg-[#0042D9] px-6 py-3 text-sm font-bold text-white shadow-md shadow-blue-500/20"
              >
                <span>Enroll in Course</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CourseDiscovery;
