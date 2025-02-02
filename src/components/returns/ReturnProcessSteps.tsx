import React from 'react';
import { Package, CheckCircle, Truck, Clock } from 'lucide-react';

const steps = [
  {
    icon: Package,
    title: 'Pack Your Device',
    description: 'Securely package your device with all original accessories'
  },
  {
    icon: CheckCircle,
    title: 'Request Return',
    description: 'Fill out the return form and get your return label'
  },
  {
    icon: Truck,
    title: 'Ship It Back',
    description: 'Drop off at any post office using our prepaid label'
  },
  {
    icon: Clock,
    title: 'Get Refunded',
    description: 'Refund processed within 5-7 business days'
  }
];

export function ReturnProcessSteps() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-8 mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Return Process</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={step.title} className="relative">
            {index < 3 && (
              <div className="hidden md:block absolute top-8 left-1/2 w-full border-t-2 border-dashed border-gray-200" />
            )}
            <div className="relative flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <step.icon className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}