import React from 'react';
import { MapPin, CreditCard, FileCheck } from 'lucide-react';

interface StepProgressProps {
  currentStep: number;
}

export function StepProgress({ currentStep }: StepProgressProps) {
  const steps = [
    { icon: MapPin, label: 'Shipping', step: 1 },
    { icon: CreditCard, label: 'Payment', step: 2 },
    { icon: FileCheck, label: 'Confirmation', step: 3 }
  ];

  return (
    <div className="max-w-4xl mx-auto mb-12">
      <div className="relative flex justify-between">
        <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-200" />
        <div 
          className="absolute top-5 left-0 h-0.5 bg-emerald-500 transition-all duration-300"
          style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
        />
        {steps.map((step, index) => (
          <div key={step.label} className="relative z-10">
            <div 
              className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${
                currentStep > index + 1
                  ? 'bg-emerald-500 border-emerald-500 text-white'
                  : currentStep === index + 1
                  ? 'border-emerald-500 bg-white text-emerald-500'
                  : 'border-gray-300 bg-white text-gray-300'
              }`}
            >
              <step.icon className="w-5 h-5" />
            </div>
            <div className="absolute -left-1/2 w-32 text-center mt-2">
              <span className={`text-sm font-medium ${
                currentStep >= index + 1 ? 'text-gray-900' : 'text-gray-400'
              }`}>
                {step.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}