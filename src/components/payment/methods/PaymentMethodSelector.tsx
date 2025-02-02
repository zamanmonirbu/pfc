import React from 'react';
import { CreditCard, Building2 } from 'lucide-react';
import { PaymentMethodCard } from './PaymentMethodCard';

interface PaymentMethodSelectorProps {
  selectedMethod: "card" | "ideal" | "";
  onMethodSelect: (method: "card" | "ideal") => void;
}

export function PaymentMethodSelector({ selectedMethod, onMethodSelect }: PaymentMethodSelectorProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-gray-700">
        Select Payment Method
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <PaymentMethodCard
          icon={CreditCard}
          title="Credit Card"
          isSelected={selectedMethod === 'card'}
          onClick={() => onMethodSelect('card')}
        />

        <PaymentMethodCard
          icon={Building2}
          title="iDEAL"
          isSelected={selectedMethod === 'ideal'}
          onClick={() => onMethodSelect('ideal')}
        />
      </div>
    </div>
  );
}