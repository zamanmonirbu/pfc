import React from 'react';
import { Cookie } from 'lucide-react';

export function CookiePolicySection() {
  return (
    <section id="cookies" className="bg-white rounded-xl shadow-sm p-8">
      <div className="flex items-center gap-4 mb-6">
        <Cookie className="w-8 h-8 text-emerald-600" />
        <h2 className="text-2xl font-bold text-gray-900">Cookie Policy</h2>
      </div>
      <div className="space-y-4 text-gray-600">
        <p>We use cookies to enhance your browsing experience:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Essential Cookies</h3>
            <p>Required for basic website functionality</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Analytics Cookies</h3>
            <p>Help us understand how visitors use our site</p>
          </div>
        </div>
      </div>
    </section>
  );
}