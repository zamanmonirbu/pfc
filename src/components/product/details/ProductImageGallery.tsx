import React from 'react';
import { ProductImage } from '../ProductImage';

interface ProductImageGalleryProps {
  image: string;
  name: string;
  hasDiscount: boolean;
}

export function ProductImageGallery({ image, name, hasDiscount }: ProductImageGalleryProps) {
  return (
    <div className="space-y-4">
      <ProductImage 
        src={image}
        alt={name}
        hasDiscount={hasDiscount}
        hasWarranty={true}
      />
    </div>
  );
}