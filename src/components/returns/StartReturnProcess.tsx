import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export function StartReturnProcess() {
  return (
    <div className="bg-emerald-50 rounded-xl p-8 text-center mb-16">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Return?</h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Start your return process now. Make sure you have your order number and the device ready.
      </p>
      <Button variant="primary" className="inline-flex items-center gap-2">
        Start Return Process <ArrowRight className="w-5 h-5" />
      </Button>
    </div>
  );
}