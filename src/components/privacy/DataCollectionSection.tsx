import React from 'react';
import { Database } from 'lucide-react';

export function DataCollectionSection() {
  return (
    <section id="collection" className="bg-white rounded-xl shadow-sm p-8">
      <div className="flex items-center gap-4 mb-6">
        <Database className="w-8 h-8 text-emerald-600" />
        <h2 className="text-2xl font-bold text-gray-900">Information Collection</h2>
      </div>
      <div className="space-y-4 text-gray-600">
        <h3 className="font-semibold text-gray-900">Personal Data</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Name and contact information</li>
          <li>Shipping and billing addresses</li>
          <li>Payment information</li>
          <li>Email address and phone number</li>
        </ul>

        <h3 className="font-semibold text-gray-900 mt-6">Usage Data</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>IP address and browser information</li>
          <li>Device information</li>
          <li>Pages visited and time spent</li>
          <li>Interaction with our services</li>
        </ul>
      </div>
    </section>
  );
}