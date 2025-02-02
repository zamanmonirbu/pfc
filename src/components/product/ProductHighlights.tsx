import React from 'react';
import { Truck, Shield, RotateCcw, BadgeCheck } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

export function ProductHighlights() {
  const { t } = useLanguage();
  
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-gray-600">
        <Truck className="w-5 h-5 text-emerald-600" />
        <span>{t('product.highlights.shipping')}</span>
      </div>
      <div className="flex items-center gap-2 text-gray-600">
        <Shield className="w-5 h-5 text-emerald-600" />
        <span>{t('product.highlights.warranty')}</span>
      </div>
      <div className="flex items-center gap-2 text-gray-600">
        <RotateCcw className="w-5 h-5 text-emerald-600" />
        <span>{t('product.highlights.moneyBack')}</span>
      </div>
      <div className="flex items-center gap-2 text-gray-600">
        <BadgeCheck className="w-5 h-5 text-emerald-600" />
        <span>{t('product.highlights.certified')}</span>
      </div>
    </div>
  );
}