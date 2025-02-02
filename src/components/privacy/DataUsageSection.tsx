import React from 'react';
import { Lock } from 'lucide-react';

export function DataUsageSection() {
  return (
    <section id="usage" className="bg-white rounded-xl shadow-sm p-8">
      <div className="flex items-center gap-4 mb-6">
        <Lock className="w-8 h-8 text-emerald-600" />
        <h2 className="text-2xl font-bold text-gray-900">How We Use Your Data</h2>
      </div>
      <div className="space-y-4 text-gray-600">
        <p>We use your information to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Process and fulfill your orders</li>
          <li>Provide customer support</li>
          <li>Send important updates about your order</li>
          <li>Improve our services and user experience</li>
          <li>Comply with legal obligations</li>
        </ul>
      </div>
    </section>
  );
}