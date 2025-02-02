import React from 'react';
import { Shield } from 'lucide-react';

export function PrivacyHero() {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
        <Shield className="w-8 h-8 text-emerald-600" />
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Your privacy is important to us. Learn how we collect, use, and protect your personal information.
      </p>
    </div>
  );
}