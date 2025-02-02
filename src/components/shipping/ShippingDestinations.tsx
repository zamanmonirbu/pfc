import React from 'react';
import { Globe } from 'lucide-react';

export function ShippingDestinations() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex items-center gap-4 mb-4">
        <Globe className="w-6 h-6 text-emerald-600" />
        <h3 className="text-lg font-semibold text-gray-900">Shipping Destinations</h3>
      </div>
      <p className="text-gray-600 mb-4">
        We currently ship to all EU countries. Delivery times may vary by location.
      </p>
      <div className="bg-gray-50 rounded-lg p-4">
        <p className="text-sm text-gray-500">
          Note: Additional customs fees may apply for certain countries.
        </p>
      </div>
    </div>
  );
}