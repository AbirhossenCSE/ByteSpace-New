'use client';

import React from 'react';
import Link from 'next/link';
import Container from './Container';
import { footerLinkGroups } from '@/data/footerLinks';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { BookOpen } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand & Newsletter Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-white">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-blue text-white">
                <BookOpen className="h-4 w-4" />
              </div>
              <span className="text-xl font-extrabold tracking-tight">ByteSpace</span>
            </Link>
            <p className="mt-3 text-sm text-slate-400 max-w-sm">
              Discover your passion, build job-ready skills, and learn from industry experts with our top-rated online courses.
            </p>

            <form className="mt-6 flex max-w-md gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address for newsletter"
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
              />
              <Button type="submit" variant="primary">
                Subscribe
              </Button>
            </form>
          </div>

          {/* Dynamic Link Columns */}
          {footerLinkGroups.map((group) => (
            <div key={group.id}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ByteSpace Inc. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-slate-400">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-slate-400">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-slate-400">
              Cookies
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
