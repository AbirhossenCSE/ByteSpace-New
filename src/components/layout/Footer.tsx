'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Container from './Container';
import { footerColumns } from '@/data/footerLinks';
import { SITE_CONFIG } from '@/constants/site';
import { Check, Github, Twitter, Linkedin, Youtube, Globe, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && /\S+@\S+\.\S+/.test(email)) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900">
      <Container>
        {/* Main Footer Layout: Left Newsletter & Right Columns */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12 items-start">
          {/* Left Area: Logo & Newsletter Form (5 Cols) */}
          <div className="lg:col-span-5 max-w-lg">
            {/* Brand Logo */}
            <Link
              href="/"
              className="group inline-flex items-center gap-2.5 font-bold text-white text-2xl transition-transform hover:scale-[1.01]"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#C6FF00] text-slate-900 font-black text-xl leading-none shadow-sm transition-transform duration-300 group-hover:rotate-6">
                {SITE_CONFIG.logoMark || SITE_CONFIG.name.charAt(0)}
              </div>
              <span className="font-extrabold tracking-tight text-2xl text-white">
                {SITE_CONFIG.name}
              </span>
            </Link>

            {/* Newsletter Prompt */}
            <p className="mt-4 text-sm text-slate-400 font-normal leading-relaxed">
              Stay ahead with curated course releases, free project templates, and tech career insights sent weekly.
            </p>

            {/* Form */}
            {isSubscribed ? (
              <div className="mt-6 flex items-center gap-2 rounded-2xl bg-emerald-950/40 border border-emerald-800 p-4 text-sm font-semibold text-emerald-300">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-slate-950">
                  <Check className="h-3 w-3 stroke-[3]" />
                </div>
                <span>Thank you for subscribing to {SITE_CONFIG.name}!</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-full border border-slate-800 px-6 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#0050FF] focus:ring-2 focus:ring-[#0050FF]/20 w-full sm:w-72 bg-slate-900 transition-all"
                />
                <button
                  type="submit"
                  className="rounded-full bg-[#C6FF00] hover:bg-[#b8f000] px-7 py-3 text-sm font-extrabold text-slate-900 transition-all hover:scale-[1.02] active:scale-95 shadow-md shrink-0"
                >
                  Subscribe
                </button>
              </form>
            )}

            {/* Social Media Links */}
            <div className="mt-8 flex items-center gap-3">
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-slate-400 hover:bg-[#0050FF] hover:text-white transition-colors border border-slate-800"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-slate-400 hover:bg-white hover:text-slate-950 transition-colors border border-slate-800"
              >
                <Github className="h-4 w-4" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-slate-400 hover:bg-[#0050FF] hover:text-white transition-colors border border-slate-800"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-slate-400 hover:bg-red-600 hover:text-white transition-colors border border-slate-800"
              >
                <Youtube className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right Area: 3 Link Columns (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 pt-2">
            {footerColumns.map((col) => (
              <div key={col.id} className="space-y-3.5">
                {col.links.map((link) => (
                  <div key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm font-normal text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="mt-16 border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}, Inc.</span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              All Systems Operational
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">
              Security
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
