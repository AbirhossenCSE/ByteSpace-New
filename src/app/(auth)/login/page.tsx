import React from 'react';
import AuthLayout from '@/components/auth/AuthLayout';
import LoginForm from '@/components/auth/LoginForm';
import { SITE_CONFIG } from '@/constants/site';

export const metadata = {
  title: 'Sign In',
  description: `Sign in to your ${SITE_CONFIG.name} account to access your courses.`,
};

export default function LoginPage() {
  return (
    <AuthLayout
      title="Sign in to your account"
      subtitle="Welcome back! Please enter your details."
    >
      <LoginForm />
    </AuthLayout>
  );
}
