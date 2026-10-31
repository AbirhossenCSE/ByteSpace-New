import React from 'react';
import AuthLayout from '@/components/auth/AuthLayout';
import SignupForm from '@/components/auth/SignupForm';
import { SITE_CONFIG } from '@/constants/site';

export const metadata = {
  title: 'Sign Up',
  description: `Create a ${SITE_CONFIG.name} account to start learning today.`,
};

export default function SignupPage() {
  return (
    <AuthLayout
      title="Create an account"
      subtitle="Start your learning journey today with thousands of courses."
    >
      <SignupForm />
    </AuthLayout>
  );
}
