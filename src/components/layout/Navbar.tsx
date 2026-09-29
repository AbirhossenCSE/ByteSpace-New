'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Search, BookOpen } from 'lucide-react';
import Container from './Container';
import { navLinks } from '@/data/navLinks';
import Button from '@/components/ui/Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-slate-900">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-blue text-white">
            <BookOpen className="h-5 w-5" />
          </div>
          <span className="text-xl font-extrabold tracking-tight">
            Byte<span className="text-brand-blue">Space</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-brand-blue"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA / Search */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            aria-label="Search courses"
            className="flex h-9 w-9 items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
          >
            <Search className="h-4 w-4" />
          </button>
          <Link href="/login">
            <Button variant="ghost" size="sm">
              Log in
            </Button>
          </Link>
          <Link href="/signup">
            <Button variant="primary" size="sm">
              Sign Up
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="border-b border-slate-200 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-slate-700 hover:text-brand-blue"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2 pt-4 border-t border-slate-100">
              <Link href="/login" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="w-full">
                  Log in
                </Button>
              </Link>
              <Link href="/signup" onClick={() => setIsOpen(false)}>
                <Button variant="primary" className="w-full">
                  Sign Up
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
