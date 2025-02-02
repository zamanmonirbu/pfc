import React from 'react';
import { AlertCircle, ArrowRight } from 'lucide-react';

export function NonReturnableCases() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex items-center gap-4 mb-6">
        <AlertCircle className="w-8 h-8 text-emerald-600" />
        <h3 className="text-xl font-semibold text-gray-900">Non-Returnable Cases</h3>
      </div>
      <ul className="space-y-3 text-gray-600">
        <li className="flex items-center gap-2">
          <ArrowRight className="w-5 h-5 text-red-500 flex-shrink-0" />
          <span>Physical damage beyond original condition</span>
        </li>
        <li className="flex items-center gap-2">
          <ArrowRight className="w-5 h-5 text-red-500 flex-shrink-0" />
          <span>Missing accessories or packaging</span>
        </li>
        <li className="flex items-center gap-2">
          <ArrowRight className="w-5 h-5 text-red-500 flex-shrink-0" />
          <span>Device locked to iCloud account</span>
        </li>
        <li className="flex items-center gap-2">
          <ArrowRight className="w-5 h-5 text-red-500 flex-shrink-0" />
          <span>Signs of water damage or tampering</span>
        </li>
      </ul>
    </div>
  );
}