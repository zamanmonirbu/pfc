import React from 'react';
import { Button } from '../../ui/Button';

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
          !selectedMethod ||
          (selectedMethod === "ideal" && !selectedBank) ||
          selectedMethod === "card" ||
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