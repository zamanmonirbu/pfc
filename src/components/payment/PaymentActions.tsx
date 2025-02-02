import React from 'react';
import { Button } from '../ui/Button';

interface PaymentActionsProps {
  onBack: () => void;
  onSubmit: () => void;
  isDisabled: boolean;
  isLoading: boolean;
  selectedMethod: 'card' | 'ideal' | '';
  selectedBank?: string;
}

export function PaymentActions({ 
  onBack, 
  onSubmit, 
  isDisabled, 
  isLoading,
  selectedMethod,
  selectedBank 
}: PaymentActionsProps) {
  return (
    <div className="flex gap-4 pt-6">
      <Button variant="outline" onClick={onBack} className="flex-1">
        Back
      </Button>
      <Button
        variant="primary"
        onClick={onSubmit}
        disabled={
          !selectedMethod || // Disable if no payment method is selected
          (selectedMethod === "ideal" && !selectedBank) || // Disable for iDEAL if no bank is selected
          selectedMethod === "card" || // Disable for Credit Card always
          isDisabled
        }
        loading={isLoading}
        className="flex-1"
      >
        Continue
      </Button>
    </div>
  );
}