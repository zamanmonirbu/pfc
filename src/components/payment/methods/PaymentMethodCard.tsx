import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface PaymentMethodCardProps {
  icon: LucideIcon;
  title: string;
  isSelected: boolean;
  onClick: () => void;
}

export function PaymentMethodCard({ icon: Icon, title, isSelected, onClick }: PaymentMethodCardProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full p-4 rounded-lg border-2 transition-all ${
        isSelected
          ? 'border-emerald-500 bg-emerald-50'
          : 'border-gray-200 hover:border-emerald-200'
      }`}
    >
      <div className="flex items-center gap-3">
        <Icon className="w-6 h-6 text-gray-600" />
        <span className="font-medium">{title}</span>
      </div>
    </button>
  );
}