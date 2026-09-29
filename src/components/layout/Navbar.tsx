'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Search, ShoppingBag, BookOpen } from 'lucide-react';
import Container from './Container';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#0B52E8] border-b border-white/10 text-white">
      <Container className="flex h-20 items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 font-bold text-white text-xl">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 border border-white/20 text-white">
            <BookOpen className="h-5 w-5" />
          </div>
          <span className="font-extrabold tracking-tight text-2xl">ByteSpace</span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-white transition-opacity hover:opacity-80"
          >
            Home
          </Link>
          <Link
            href="#courses"
            className="text-sm font-medium text-white/80 transition-opacity hover:text-white"
          >
            Courses
          </Link>
          <Link
            href="#creators"
            className="text-sm font-medium text-white/80 transition-opacity hover:text-white"
          >
            Creators
          </Link>
        </nav>

        {/* Desktop Right Actions */}
        <div className="hidden items-center gap-5 md:flex">
          <Link
            href="/login"
            className="text-sm font-medium text-white/90 transition-opacity hover:text-white"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="rounded-full border border-white/40 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-white hover:text-brand-blue"
          >
            Join Us
          </Link>
          <button
            type="button"
            aria-label="Shopping bag"
            className="flex h-9 w-9 items-center justify-center rounded-full text-white/90 hover:bg-white/10 transition-colors"
          >
            <ShoppingBag className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
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
        <div className="bg-[#0848CC] px-4 py-4 md:hidden border-t border-white/10">
          <nav className="flex flex-col gap-3">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-white"
            >
              Home
            </Link>
            <Link
              href="#courses"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-white/80"
            >
              Courses
            </Link>
            <Link
              href="#creators"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-white/80"
            >
              Creators
            </Link>
            <div className="mt-4 flex flex-col gap-2 pt-4 border-t border-white/10">
              <Link href="/login" onClick={() => setIsOpen(false)} className="text-white text-sm font-medium">
                Sign In
              </Link>
              <Link
                href="/signup"
                onClick={() => setIsOpen(false)}
                className="mt-1 rounded-full bg-brand-lime text-center py-2 text-sm font-bold text-slate-900"
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
