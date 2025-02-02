import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '../ui/Button';
import { useNavigate } from 'react-router-dom';

export function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
        <Check className="w-8 h-8 text-emerald-600" />
      </div>
      <h1 className="text-2xl font-bold text-gray-900 mb-4">
        Order Confirmed!
      </h1>
      <p className="text-gray-600 mb-8">
        Thank you for your order. We'll send you a confirmation email shortly.
      </p>
      <Button
        variant="primary"
        onClick={() => navigate('/')}
      >
        Continue Shopping
      </Button>
    </div>
  );
}