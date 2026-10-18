'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Container from './Container';
import { footerColumns } from '@/data/footerLinks';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <footer className="bg-white border-t border-slate-200 text-slate-800 pt-16 pb-12">
      <Container>
        {/* Main Footer Layout: Left Newsletter & Right 3 Columns */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start">
          {/* Left Area: Logo & Newsletter Form (5 Cols) */}
          <div className="lg:col-span-6 max-w-lg">
            {/* Brand Logo */}
            <Link href="/" className="inline-flex items-center gap-2.5 font-bold text-slate-900 text-2xl">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#C6FF00] text-slate-900 font-black text-xl leading-none shadow-sm">
                b
              </div>
              <span className="font-extrabold tracking-tight text-2xl text-slate-900">ByteSpace</span>
            </Link>

            {/* Newsletter Prompt */}
            <p className="mt-4 text-sm text-slate-600 font-normal leading-relaxed">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-full border border-slate-300 px-6 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-slate-500 w-full sm:w-72 bg-white"
              />
              <button
                type="submit"
                className="rounded-full bg-[#C6FF00] px-8 py-3 text-sm font-bold text-slate-900 transition-all hover:brightness-105 active:scale-95 shadow-sm"
              >
                Search
              </button>
            </form>

            {/* Privacy Disclaimer */}
            <p className="mt-4 text-xs text-slate-500 leading-relaxed font-normal">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Right Area: 3 Link Columns (6 Cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-8 pt-2">
            {footerColumns.map((col) => (
              <div key={col.id} className="space-y-3.5">
                {col.links.map((link) => (
                  <div key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm font-normal text-slate-700 hover:text-slate-900 transition-colors"
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
          <p>@ 2023 ByteSpace. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-slate-800 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-slate-800 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-slate-800 transition-colors">
              Cookies Settings
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
