import React from 'react';
import { ProductPrice } from '../ProductPrice';
import { ProductHighlights } from '../ProductHighlights';
import { PaymentMethods } from '../PaymentMethods';

interface ProductPurchaseSectionProps {
  totalPrice: number;
  originalPrice?: number;
  onAddToCart: () => void;
  isAddToCartDisabled: boolean;
}

export function ProductPurchaseSection({
  totalPrice,
  originalPrice,
  onAddToCart,
  isAddToCartDisabled
}: ProductPurchaseSectionProps) {
  return (
    <div className="space-y-6">
      <ProductHighlights />
      
      <ProductPrice
        price={totalPrice}
        originalPrice={originalPrice}
        onAddToCart={onAddToCart}
        disabled={isAddToCartDisabled}
      />

      <PaymentMethods />
    </div>
  );
}