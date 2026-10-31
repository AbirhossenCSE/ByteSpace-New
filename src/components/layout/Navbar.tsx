'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingBag, ArrowRight } from 'lucide-react';
import Container from './Container';
import { SITE_CONFIG } from '@/constants/site';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0048E5]/95 backdrop-blur-md shadow-lg shadow-blue-950/20 border-b border-white/15 py-1'
          : 'bg-[#0050FF] bg-hero-grid border-b border-white/10'
      } text-white`}
    >
      <Container className="flex h-20 items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-bold text-white text-2xl transition-transform hover:scale-[1.02]"
        >
          {/* Custom Stylized Lime Logo Mark */}
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#C6FF00] text-slate-900 font-black text-xl leading-none shadow-sm transition-transform duration-300 group-hover:rotate-6">
            {SITE_CONFIG.logoMark || SITE_CONFIG.name.charAt(0)}
          </div>
          <span className="font-extrabold tracking-tight text-2xl text-white">
            {SITE_CONFIG.name}
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden items-center gap-7 lg:gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-semibold text-white transition-colors hover:text-[#C6FF00]"
          >
            Home
          </Link>
          <Link
            href="#courses"
            className="text-sm font-semibold text-white/85 transition-colors hover:text-white"
          >
            Courses
          </Link>
          <Link
            href="#paths"
            className="text-sm font-semibold text-white/85 transition-colors hover:text-white"
          >
            Learning Paths
          </Link>
          <Link
            href="#manage-courses"
            className="text-sm font-semibold text-white/85 transition-colors hover:text-white"
          >
            Teach
          </Link>
          <Link
            href="#creators"
            className="text-sm font-semibold text-white/85 transition-colors hover:text-white"
          >
            Creators
          </Link>
        </nav>

        {/* Desktop Right Actions */}
        <div className="hidden items-center gap-5 md:flex">
          <Link
            href="/login"
            className="text-sm font-semibold text-white/90 transition-opacity hover:opacity-100 hover:text-[#C6FF00]"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="group inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/30 px-5 py-2 text-sm font-bold text-white transition-all duration-200 hover:bg-[#C6FF00] hover:border-[#C6FF00] hover:text-slate-900 active:scale-95"
          >
            <span>Join Us</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <button
            type="button"
            aria-label="Shopping bag"
            className="relative flex h-9 w-9 items-center justify-center rounded-full text-white hover:bg-white/10 transition-colors"
          >
            <ShoppingBag className="h-5 w-5 stroke-[2.2]" />
            <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#C6FF00] text-[10px] font-extrabold text-slate-900">
              2
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            aria-label="Shopping bag"
            className="relative flex h-9 w-9 items-center justify-center rounded-full text-white hover:bg-white/10 transition-colors mr-1"
          >
            <ShoppingBag className="h-5 w-5 stroke-[2.2]" />
            <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#C6FF00] text-[10px] font-extrabold text-slate-900">
              2
            </span>
          </button>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white hover:bg-white/10"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="bg-[#0042D9] px-6 py-5 md:hidden border-t border-white/15 animate-fadeIn">
          <nav className="flex flex-col gap-3.5">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-white hover:text-[#C6FF00]"
            >
              Home
            </Link>
            <Link
              href="#courses"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-white/85 hover:text-white"
            >
              Courses
            </Link>
            <Link
              href="#paths"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-white/85 hover:text-white"
            >
              Learning Paths
            </Link>
            <Link
              href="#manage-courses"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-white/85 hover:text-white"
            >
              Teach
            </Link>
            <Link
              href="#creators"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-white/85 hover:text-white"
            >
              Creators
            </Link>
            <div className="mt-4 flex flex-col gap-2.5 pt-4 border-t border-white/15">
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="text-white text-center py-2 text-sm font-semibold"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                onClick={() => setIsOpen(false)}
                className="rounded-full bg-[#C6FF00] text-center py-2.5 text-sm font-extrabold text-slate-900 shadow-md"
              >
                Join Us
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
