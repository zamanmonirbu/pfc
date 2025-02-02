import React from 'react';
import { RotateCcw } from 'lucide-react';

export function ReturnsHero() {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
        <RotateCcw className="w-8 h-8 text-emerald-600" />
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Returns Policy</h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Simple and hassle-free returns within 30 days of purchase
      </p>
    </div>
  );
}