import React from 'react';
import AuthLayout from '@/components/auth/AuthLayout';
import SignupForm from '@/components/auth/SignupForm';

export const metadata = {
  title: 'Sign Up',
  description: 'Create a ByteSpace account to start learning today.',
};

export default function SignupPage() {
  return (
    <AuthLayout
      title="Create a new account"
      subtitle="Start learning with top-rated courses today."
    >
      <SignupForm />
    </AuthLayout>
  );
}
