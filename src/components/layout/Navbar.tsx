'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Menu,
  X,
  ShoppingBag,
  Sparkles,
  ArrowRight,
  ChevronDown,
  Layers,
  Code2,
  PenTool,
  BarChart3,
  Search,
} from 'lucide-react';
import Container from './Container';
import { SITE_CONFIG } from '@/constants/site';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showExploreMenu, setShowExploreMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { name: 'UI/UX & Product Design', icon: PenTool, count: '85+ courses' },
    { name: 'Full-Stack Development', icon: Code2, count: '120+ courses' },
    { name: 'AI & Data Science', icon: Sparkles, count: '95+ courses' },
    { name: 'Business & Management', icon: BarChart3, count: '70+ courses' },
  ];

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2'
          : 'bg-white border-b border-slate-100 py-3'
      }`}
    >
      <Container className="flex items-center justify-between">
        {/* Left: Brand Logo & Explore Dropdown */}
        <div className="flex items-center gap-7">
          <Link
            href="/"
            className="group flex items-center gap-2.5 font-bold text-slate-900 text-2xl transition-transform hover:scale-[1.01]"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#C6FF00] text-slate-900 font-black text-xl leading-none shadow-sm transition-transform duration-300 group-hover:rotate-6">
              {SITE_CONFIG.logoMark || SITE_CONFIG.name.charAt(0)}
            </div>
            <span className="font-extrabold tracking-tight text-2xl text-slate-900">
              {SITE_CONFIG.name}
            </span>
          </Link>

          {/* Explore Courses Menu (Desktop) */}
          <div className="relative hidden lg:block">
            <button
              type="button"
              onClick={() => setShowExploreMenu(!showExploreMenu)}
              className="inline-flex items-center gap-2 rounded-full bg-slate-100/90 hover:bg-slate-200/80 px-4 py-2 text-xs font-bold text-slate-700 transition-colors"
            >
              <Layers className="h-3.5 w-3.5 text-[#0050FF]" />
              <span>Explore</span>
              <ChevronDown
                className={`h-3 w-3 text-slate-400 transition-transform duration-200 ${
                  showExploreMenu ? 'rotate-180' : ''
                }`}
              />
            </button>

            {showExploreMenu && (
              <div
                className="absolute top-full left-0 mt-2 w-72 rounded-2xl bg-white p-3 shadow-xl border border-slate-100 animate-fadeIn z-50"
                onMouseLeave={() => setShowExploreMenu(false)}
              >
                <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Popular Categories
                </div>
                <div className="space-y-1 mt-1">
                  {categories.map((cat) => {
                    const Icon = cat.icon;
                    return (
                      <Link
                        key={cat.name}
                        href="#courses"
                        onClick={() => setShowExploreMenu(false)}
                        className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-blue-50/80 hover:text-[#0050FF] transition-colors group"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 group-hover:bg-[#0050FF] text-slate-600 group-hover:text-white transition-colors">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="font-semibold text-xs leading-none text-slate-900 group-hover:text-[#0050FF]">
                            {cat.name}
                          </div>
                          <span className="text-[10px] text-slate-400">{cat.count}</span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Center: Desktop Nav Links */}
        <nav className="hidden items-center gap-6 xl:gap-8 md:flex">
          <Link
            href="#courses"
            className="text-sm font-semibold text-slate-600 transition-colors hover:text-[#0050FF]"
          >
            Courses
          </Link>
          <Link
            href="#paths"
            className="text-sm font-semibold text-slate-600 transition-colors hover:text-[#0050FF]"
          >
            Career Paths
          </Link>
          <Link
            href="#why-us"
            className="text-sm font-semibold text-slate-600 transition-colors hover:text-[#0050FF]"
          >
            Why {SITE_CONFIG.shortName}
          </Link>
          <Link
            href="#manage-courses"
            className="text-sm font-semibold text-slate-600 transition-colors hover:text-[#0050FF]"
          >
            Teach
          </Link>
          <Link
            href="#faq"
            className="text-sm font-semibold text-slate-600 transition-colors hover:text-[#0050FF]"
          >
            FAQ
          </Link>
        </nav>

        {/* Right: Actions */}
        <div className="hidden items-center gap-4 md:flex">
          {/* Quick Search Shortcut */}
          <Link
            href="#courses"
            className="flex h-9 w-9 items-center justify-center rounded-full text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Search courses"
          >
            <Search className="h-4 w-4" />
          </Link>

          {/* Cart with Indicator */}
          <Link
            href="#courses"
            aria-label="Shopping Cart"
            className="relative flex h-9 w-9 items-center justify-center rounded-full text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <ShoppingBag className="h-4 w-4 stroke-[2.2]" />
            <span className="absolute 1 top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#0050FF] text-[9px] font-black text-white">
              2
            </span>
          </Link>

          <Link
            href="/login"
            className="text-sm font-semibold text-slate-700 transition-colors hover:text-[#0050FF] px-2"
          >
            Sign In
          </Link>

          <Link
            href="/signup"
            className="group inline-flex items-center gap-2 rounded-full bg-[#0050FF] hover:bg-[#0042D9] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-95"
          >
            <span>Get Started</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="#courses"
            className="relative flex h-9 w-9 items-center justify-center rounded-full text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Shopping Cart"
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="absolute top-1 right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#0050FF] text-[8px] font-black text-white">
              2
            </span>
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-800 hover:bg-slate-50 transition-colors"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="bg-white px-6 py-6 md:hidden border-t border-slate-100 shadow-xl animate-fadeIn">
          <nav className="flex flex-col gap-4">
            <Link
              href="#courses"
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-slate-800 hover:text-[#0050FF]"
            >
              Browse All Courses
            </Link>
            <Link
              href="#paths"
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-slate-800 hover:text-[#0050FF]"
            >
              Career Roadmaps
            </Link>
            <Link
              href="#why-us"
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-slate-800 hover:text-[#0050FF]"
            >
              Why {SITE_CONFIG.shortName}
            </Link>
            <Link
              href="#manage-courses"
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-slate-800 hover:text-[#0050FF]"
            >
              Teach & Earn
            </Link>
            <Link
              href="#faq"
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-slate-800 hover:text-[#0050FF]"
            >
              Frequently Asked Questions
            </Link>

            <div className="mt-4 flex flex-col gap-2.5 pt-4 border-t border-slate-100">
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="text-center py-2.5 text-sm font-bold text-slate-700 bg-slate-100 rounded-full"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                onClick={() => setIsOpen(false)}
                className="rounded-full bg-[#0050FF] text-center py-3 text-sm font-extrabold text-white shadow-md shadow-blue-500/20"
              >
                Get Started Free
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
