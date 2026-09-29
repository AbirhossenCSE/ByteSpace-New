'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export const SignupForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { name?: string; email?: string; password?: string } = {};

    if (!name.trim()) {
      newErrors.name = 'Full name is required';
    }

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
          Account created successfully! Welcome to ByteSpace.
        </div>
      )}

      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
        <Input
          type="text"
          placeholder="Jane Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={errors.name}
        />
      </div>

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
        <label className="block text-xs font-semibold text-slate-700 mb-1">Password</label>
        <Input
          type="password"
          placeholder="At least 6 characters"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
        />
      </div>

      <Button type="submit" variant="primary" className="w-full mt-2">
        Create Account
      </Button>

      <p className="mt-4 text-center text-xs text-slate-600">
        Already have an account?{' '}
        <Link href="/login" className="font-semibold text-brand-blue hover:underline">
          Sign in here
        </Link>
      </p>
    </form>
  );
};

export default SignupForm;
