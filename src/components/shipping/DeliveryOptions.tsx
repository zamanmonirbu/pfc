import React from 'react';
import { Truck, Package, Clock } from 'lucide-react';

const deliveryOptions = [
  {
    icon: Truck,
    title: 'Standard Delivery',
    time: '3-5 business days',
    price: 'Free',
    description: 'Available for all orders'
  },
  {
    icon: Package,
    title: 'Express Delivery',
    time: '1-2 business days',
    price: '€9.99',
    description: 'Order before 2 PM for same-day processing'
  },
  {
    icon: Clock,
    title: 'Next Day Delivery',
    time: 'Next business day',
    price: '€14.99',
    description: 'Order before 2 PM for delivery tomorrow'
  }
];

export function DeliveryOptions() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {deliveryOptions.map((option) => (
        <div 
          key={option.title}
          className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-emerald-100 rounded-lg">
              <option.icon className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{option.title}</h3>
              <p className="text-sm text-emerald-600">{option.time}</p>
            </div>
          </div>
          <div className="mb-4">
            <span className="text-2xl font-bold text-gray-900">{option.price}</span>
          </div>
          <p className="text-gray-600 text-sm">{option.description}</p>
        </div>
      ))}
    </div>
  );
}