import React from 'react';
import { AlertCircle } from 'lucide-react';

export function ImportantNotice() {
  return (
    <div className="bg-emerald-50 rounded-xl p-6 mb-16">
      <div className="flex items-start gap-4">
        <AlertCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Important Information</h3>
          <ul className="text-gray-600 space-y-2">
            <li>• Orders placed after 2 PM will be processed the next business day</li>
            <li>• Delivery times may be extended during peak periods</li>
            <li>• A signature may be required upon delivery</li>
            <li>• Track your order using the provided tracking number</li>
          </ul>
        </div>
      </div>
    </div>
  );
}