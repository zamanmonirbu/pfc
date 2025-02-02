import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from '../ui/Button';
import { useLanguage } from '../../hooks/useLanguage';

interface ProductPriceProps {
  price: number;
  originalPrice?: number;
  onAddToCart: () => void;
  disabled?: boolean;
}

export function ProductPrice({
  price,
  originalPrice,
  onAddToCart,
  disabled
}: ProductPriceProps) {
  const { t } = useLanguage();

  return (
    <div className="pt-6 border-t">
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-sm text-gray-500">{t('product.price')}:</span>
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold text-gray-900">
              €{price.toFixed(2)}
            </span>
            {originalPrice && originalPrice > price && (
              <span className="text-lg text-gray-400 line-through">
                €{originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
        <div className="text-sm text-emerald-600">
          <span className="font-medium">{t('product.inStock')}</span>
        </div>
      </div>
      <Button
        variant="primary"
        className="w-full flex items-center justify-center gap-2"
        onClick={onAddToCart}
        disabled={disabled}
      >
        <ShoppingCart className="w-5 h-5" />
        {t('product.addToCart')}
      </Button>
    </div>
  );
}