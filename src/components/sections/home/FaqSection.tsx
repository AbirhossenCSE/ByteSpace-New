'use client';

import React, { useState } from 'react';
import Container from '@/components/layout/Container';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/constants/site';

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'How does lifetime course access work?',
      answer:
        'When you enroll in any course on SkillSphere, you receive indefinite lifetime access to all video lessons, project repositories, downloadable assets, and all future curriculum updates at no extra charge.',
    },
    {
      question: 'Are SkillSphere certificates accredited and verifiable?',
      answer:
        'Yes! Upon completing all lessons and passing the capstone project evaluation, you receive an authentic, cryptographically verifiable certificate with a unique credential ID that you can embed directly into LinkedIn and your resume.',
    },
    {
      question: 'Can I become an instructor while working a full-time job?',
      answer:
        'Absolutely! Over 70% of SkillSphere instructors are practicing software engineers, design leads, and founders who build courses asynchronously in their spare time and earn recurring royalties.',
    },
    {
      question: 'What is your 30-day refund policy?',
      answer:
        'We offer a 100% no-questions-asked money-back guarantee. If you are not completely satisfied with a course within the first 30 days of purchase, simply request a refund from your student dashboard and receive an immediate credit back.',
    },
    {
      question: 'Can my company or employer sponsor my courses?',
      answer:
        'Yes! We provide company-sponsored team seats and downloadable corporate expense invoices with tax-compliant receipts so your employer can reimburse your education budget.',
    },
  ];

  return (
    <section id="faq" className="bg-white py-20 lg:py-28 border-b border-slate-100">
      <Container className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold text-[#0050FF] mb-3 border border-blue-100">
            <HelpCircle className="h-3.5 w-3.5 text-[#0050FF]" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-normal">
            Everything you need to know about learning, certificates, and teaching on {SITE_CONFIG.name}.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#0050FF]/40 bg-blue-50/20 shadow-md shadow-blue-500/5'
                    : 'border-slate-200/90 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#0050FF] text-white rotate-180'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-slate-600 leading-relaxed font-normal animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default FaqSection;

