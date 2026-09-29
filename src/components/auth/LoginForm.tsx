'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {isSubmitted && (
        <div className="rounded-lg bg-green-50 p-3 text-xs text-green-700 font-medium border border-green-200">
          Validation successful! Demo login completed.
        </div>
      )}

      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1">Email address</label>
        <Input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
        />
      </div>

      <div>
        <div className="flex justify-between items-center mb-1">
          <label className="block text-xs font-semibold text-slate-700">Password</label>
          <Link href="#" className="text-xs font-medium text-brand-blue hover:underline">
            Forgot password?
          </Link>
        </div>
        <Input
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
        />
      </div>

      <Button type="submit" variant="primary" className="w-full mt-2">
        Sign In
      </Button>

      <p className="mt-4 text-center text-xs text-slate-600">
        Don&apos;t have an account?{' '}
        <Link href="/signup" className="font-semibold text-brand-blue hover:underline">
          Sign up here
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
