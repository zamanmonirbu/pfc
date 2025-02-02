import React from 'react';
import { Shield, CheckCircle } from 'lucide-react';

export function ReturnConditions() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex items-center gap-4 mb-6">
        <Shield className="w-8 h-8 text-emerald-600" />
        <h3 className="text-xl font-semibold text-gray-900">Return Conditions</h3>
      </div>
      <ul className="space-y-3 text-gray-600">
        <li className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
          <span>Device must be in original condition</span>
        </li>
        <li className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
          <span>All original accessories included</span>
        </li>
        <li className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
          <span>Device must be factory reset</span>
        </li>
        <li className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
          <span>Return within 30 days of purchase</span>
        </li>
      </ul>
    </div>
  );
}