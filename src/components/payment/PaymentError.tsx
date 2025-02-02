import React from 'react';

interface PaymentErrorProps {
  error: string | null;
}

export function PaymentError({ error }: PaymentErrorProps) {
  if (!error) return null;

  return (
    <div className="p-4 bg-red-50 text-red-600 rounded-lg">
      {error}
    </div>
  );
}