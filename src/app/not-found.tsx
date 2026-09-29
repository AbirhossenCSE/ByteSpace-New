import React from 'react';
import Link from 'next/link';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4 text-center">
      <Container className="max-w-md">
        <div className="text-6xl font-extrabold text-brand-blue">404</div>
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">Page Not Found</h1>
        <p className="mt-2 text-sm text-slate-600">
          Sorry, we couldn&apos;t find the page you are looking for. It might have been removed or renamed.
        </p>
        <div className="mt-6">
          <Link href="/">
            <Button variant="primary">Return Home</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
