import React from 'react';
import { BadgeCheck, Truck, Shield, RotateCcw } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

export function TopBanner() {
  const { language } = useLanguage();

  const benefits = {
    en: [
      {
        icon: BadgeCheck,
        text: 'Refurbished by PhoneFlex'
      },
      {
        icon: Truck,
        text: 'Free Shipping'
      },
      {
        icon: Shield,
        text: '2 Year Warranty'
      },
      {
        icon: RotateCcw,
        text: '30 Day Money Back'
      }
    ],
    nl: [
      {
        icon: BadgeCheck,
        text: 'Refurbished door PhoneFlex'
      },
      {
        icon: Truck,
        text: 'Gratis Verzending'
      },
      {
        icon: Shield,
        text: '2 Jaar Garantie'
      },
      {
        icon: RotateCcw,
        text: '30 Dagen Retourrecht'
      }
    ]
  };

  const currentBenefits = benefits[language as keyof typeof benefits];

  return (
    <div className="bg-emerald-900 text-white py-2 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex justify-center items-center text-sm gap-8">
          {currentBenefits.map((benefit) => (
            <li key={benefit.text} className="flex items-center gap-1.5">
              <benefit.icon className="w-4 h-4 text-emerald-300" />
              <span className="hidden sm:inline">{benefit.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}