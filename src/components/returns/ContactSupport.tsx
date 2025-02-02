import React from 'react';
import { Button } from '../ui/Button';

export function ContactSupport() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-8 text-center">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Need Help?</h3>
      <p className="text-gray-600 mb-6">
        Our support team is here to help you with any questions about returns.
      </p>
      <Button 
        variant="outline" 
        onClick={() => window.location.href = '/help/contact'}
      >
        Contact Support
      </Button>
    </div>
  );
}