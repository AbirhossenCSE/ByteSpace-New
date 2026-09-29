import React from 'react';
import Link from 'next/link';
import { BookOpen } from 'lucide-react';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle }) => {
  return (
    <div className="flex min-h-screen flex-col justify-center bg-slate-50 py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link href="/" className="flex items-center justify-center gap-2 font-bold text-slate-900">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue text-white">
            <BookOpen className="h-6 w-6" />
          </div>
          <span className="text-2xl font-extrabold tracking-tight">
            Byte<span className="text-brand-blue">Space</span>
          </span>
        </Link>
        <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-slate-900">
          {title}
        </h2>
        <p className="mt-2 text-center text-sm text-slate-600">{subtitle}</p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="border border-slate-200 bg-white px-4 py-8 shadow-sm sm:rounded-2xl sm:px-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
