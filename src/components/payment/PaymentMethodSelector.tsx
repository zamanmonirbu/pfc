import React from 'react';
import { CreditCard, Building2 } from 'lucide-react';

interface PaymentMethodSelectorProps {
  selectedMethod: 'card' | 'ideal' | '';
  onMethodSelect: (method: 'card' | 'ideal') => void;
}

export function PaymentMethodSelector({ selectedMethod, onMethodSelect }: PaymentMethodSelectorProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-gray-700">
        Select Payment Method
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => onMethodSelect('card')}
          className={`p-4 rounded-lg border-2 transition-all ${
            selectedMethod === 'card'
              ? 'border-emerald-500 bg-emerald-50'
              : 'border-gray-200 hover:border-emerald-200'
          }`}
        >
          <div className="flex items-center gap-3">
            <CreditCard className="w-6 h-6 text-gray-600" />
            <span className="font-medium">Credit Card</span>
          </div>
        </button>

        <button
          onClick={() => onMethodSelect('ideal')}
          className={`p-4 rounded-lg border-2 transition-all ${
            selectedMethod === 'ideal'
              ? 'border-emerald-500 bg-emerald-50'
              : 'border-gray-200 hover:border-emerald-200'
          }`}
        >
          <div className="flex items-center gap-3">
            <Building2 className="w-6 h-6 text-gray-600" />
            <span className="font-medium">iDEAL</span>
          </div>
        </button>
      </div>
    </div>
  );
}