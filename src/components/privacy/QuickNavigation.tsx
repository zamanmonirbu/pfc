import React from 'react';
import { FileText } from 'lucide-react';

const navigationItems = [
  { label: 'Information Collection', href: '#collection' },
  { label: 'How We Use Your Data', href: '#usage' },
  { label: 'Your Rights', href: '#rights' },
  { label: 'Data Protection', href: '#protection' },
  { label: 'Cookie Policy', href: '#cookies' },
  { label: 'Contact Information', href: '#contact' }
];

export function QuickNavigation() {
  return (
    <nav className="bg-white rounded-xl shadow-sm p-6 mb-12">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Navigation</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {navigationItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-emerald-600 hover:text-emerald-700 flex items-center gap-2"
          >
            <FileText className="w-4 h-4" />
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}