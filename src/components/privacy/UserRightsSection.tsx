import React from 'react';
import { UserCheck } from 'lucide-react';

const rights = [
  {
    title: 'Access',
    description: 'Request access to your personal data'
  },
  {
    title: 'Rectification',
    description: 'Request correction of inaccurate data'
  },
  {
    title: 'Erasure',
    description: 'Request deletion of your personal data'
  },
  {
    title: 'Portability',
    description: 'Receive and transfer your data'
  }
];

export function UserRightsSection() {
  return (
    <section id="rights" className="bg-white rounded-xl shadow-sm p-8">
      <div className="flex items-center gap-4 mb-6">
        <UserCheck className="w-8 h-8 text-emerald-600" />
        <h2 className="text-2xl font-bold text-gray-900">Your Rights</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {rights.map((right) => (
          <div key={right.title} className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">{right.title}</h3>
            <p className="text-gray-600">{right.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}