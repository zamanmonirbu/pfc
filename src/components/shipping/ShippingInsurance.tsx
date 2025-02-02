import React from 'react';
import { ShieldCheck } from 'lucide-react';

export function ShippingInsurance() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex items-center gap-4 mb-4">
        <ShieldCheck className="w-6 h-6 text-emerald-600" />
        <h3 className="text-lg font-semibold text-gray-900">Shipping Insurance</h3>
      </div>
      <p className="text-gray-600 mb-4">
        All shipments are fully insured and tracked. We guarantee safe delivery of your device.
      </p>
      <div className="bg-gray-50 rounded-lg p-4">
        <p className="text-sm text-gray-500">
          Contact customer service within 24 hours if there are any issues with delivery.
        </p>
      </div>
    </div>
  );
}