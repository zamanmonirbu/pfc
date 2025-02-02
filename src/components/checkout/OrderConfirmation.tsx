import React from 'react';
import { Shield } from 'lucide-react';
import { Button } from '../ui/Button';

interface OrderConfirmationProps {
  onBack: () => void;
  onComplete: () => void;
}

export function OrderConfirmation({ onBack, onComplete }: OrderConfirmationProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">
        Confirm Order
      </h2>
      <div className="flex items-center gap-4 p-4 bg-emerald-50 text-emerald-700 rounded-lg">
        <Shield className="w-6 h-6 flex-shrink-0" />
        <div>
          <p className="font-medium">Secure Payment</p>
          <p className="text-sm">Your payment information is encrypted and secure</p>
        </div>
      </div>
      <div className="flex gap-4">
        <Button
          variant="outline"
          onClick={onBack}
          className="flex-1"
        >
          Back
        </Button>
        <Button
          variant="primary"
          onClick={onComplete}
          className="flex-1"
        >
          Place Order
        </Button>
      </div>
    </div>
  );
}