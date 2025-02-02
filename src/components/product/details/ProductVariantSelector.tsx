import React from 'react';
import { ProductVariants } from '../ProductVariants';
import { getIPhoneColors } from '../../../utils/colors';
import { getStorageOptions, conditionOptions } from '../../../utils/productOptions';
import type { Product } from '../../../types/product';

interface ProductVariantSelectorProps {
  product: Product;
  selectedStorage: string;
  selectedCondition: string;
  selectedColor: string;
  onStorageChange: (storage: string) => void;
  onConditionChange: (condition: string) => void;
  onColorChange: (color: string) => void;
}

export function ProductVariantSelector({
  product,
  selectedStorage,
  selectedCondition,
  selectedColor,
  onStorageChange,
  onConditionChange,
  onColorChange
}: ProductVariantSelectorProps) {
  const colors = getIPhoneColors(product.name);
  const storageOptions = getStorageOptions(product).map(opt => ({
    label: opt.capacity,
    value: opt.capacity,
    price: opt.price
  }));

  const conditionOpts = conditionOptions.map(opt => ({
    label: opt.label,
    value: opt.value,
    price: product.price + opt.price
  }));

  return (
    <ProductVariants
      storageOptions={storageOptions}
      conditionOptions={conditionOpts}
      colors={colors}
      selectedStorage={selectedStorage}
      selectedCondition={selectedCondition}
      selectedColor={selectedColor}
      basePrice={product.price}
      onStorageChange={onStorageChange}
      onConditionChange={onConditionChange}
      onColorChange={onColorChange}
    />
  );
}