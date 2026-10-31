'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Container from './Container';
import { footerColumns } from '@/data/footerLinks';
import { SITE_CONFIG } from '@/constants/site';
import { Check, Github, Twitter, Linkedin, Youtube } from 'lucide-react';

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
    <footer className="bg-white border-t border-slate-200 text-slate-800 pt-16 pb-12">
      <Container>
        {/* Main Footer Layout: Left Newsletter & Right Columns */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start">
          {/* Left Area: Logo & Newsletter Form (6 Cols) */}
          <div className="lg:col-span-6 max-w-lg">
            {/* Brand Logo */}
            <Link
              href="/"
              className="group inline-flex items-center gap-2.5 font-bold text-slate-900 text-2xl transition-transform hover:scale-[1.01]"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#C6FF00] text-slate-900 font-black text-xl leading-none shadow-sm transition-transform duration-300 group-hover:rotate-6">
                {SITE_CONFIG.logoMark || SITE_CONFIG.name.charAt(0)}
              </div>
              <span className="font-extrabold tracking-tight text-2xl text-slate-900">
                {SITE_CONFIG.name}
              </span>
            </Link>

            {/* Newsletter Prompt */}
            <p className="mt-4 text-sm text-slate-600 font-normal leading-relaxed">
              Stay up to date with our latest courses, expert tutorials, and feature releases by joining our weekly newsletter.
            </p>

            {/* Form */}
            {isSubscribed ? (
              <div className="mt-6 flex items-center gap-2 rounded-2xl bg-emerald-50 border border-emerald-200 p-4 text-sm font-semibold text-emerald-800">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white">
                  <Check className="h-3 w-3 stroke-[3]" />
                </div>
                <span>Thank you for subscribing to {SITE_CONFIG.name} updates!</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
              >
                <input
                  type="email"
                  placeholder="Enter your work email"
                  aria-label="Enter your work email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-full border border-slate-300 px-6 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#0050FF] focus:ring-2 focus:ring-[#0050FF]/20 w-full sm:w-72 bg-white transition-all"
                />
                <button
                  type="submit"
                  className="rounded-full bg-[#C6FF00] px-8 py-3 text-sm font-extrabold text-slate-900 transition-all hover:brightness-105 hover:scale-[1.02] active:scale-95 shadow-sm"
                >
                  Subscribe
                </button>
              </form>
            )}

            {/* Privacy Disclaimer */}
            <p className="mt-4 text-xs text-slate-500 leading-relaxed font-normal">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our team. Unsubscribe at any time.
            </p>

            {/* Social Media Links */}
            <div className="mt-6 flex items-center gap-3">
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-[#0050FF] hover:text-white transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors"
              >
                <Github className="h-4 w-4" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-[#0050FF] hover:text-white transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-red-600 hover:text-white transition-colors"
              >
                <Youtube className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right Area: 3 Link Columns (6 Cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-8 pt-2">
            {footerColumns.map((col) => (
              <div key={col.id} className="space-y-3.5">
                {col.links.map((link) => (
                  <div key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm font-normal text-slate-600 hover:text-[#0050FF] transition-colors"
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
        <div className="mt-16 border-t border-slate-200 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-slate-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-slate-900 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-slate-900 transition-colors">
              Cookies Settings
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
