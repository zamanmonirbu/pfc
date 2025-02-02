import type { Product } from '../types/product';

export interface StorageOption {
  capacity: string;
  price: number;
}

export interface ConditionOption {
  value: string;
  label: string;
  price: number;
}

export function getStorageOptions(product: Product): StorageOption[] {
  const basePrice = product.price;

  // Special storage options for iPhone 15 Pro Max
  if (product.name === 'iPhone 15 Pro Max') {
    return [
      { capacity: '256GB', price: basePrice },
      { capacity: '512GB', price: basePrice + 150 },
      { capacity: '1TB', price: basePrice + 350 }
    ];
  }

  // Pro models
  if (product.name.includes('Pro')) {
    return [
      { capacity: '128GB', price: basePrice },
      { capacity: '256GB', price: basePrice + 50 },
      { capacity: '512GB', price: basePrice + 150 },
      { capacity: '1TB', price: basePrice + 350 }
    ];
  }

  // Base models
  if (product.name.includes('12')) {
    return [
      { capacity: '64GB', price: basePrice },
      { capacity: '128GB', price: basePrice + 50 },
      { capacity: '256GB', price: basePrice + 150 }
    ];
  }

  // iPhone 13/14/15 base models
  return [
    { capacity: '128GB', price: basePrice },
    { capacity: '256GB', price: basePrice + 50 },
    { capacity: '512GB', price: basePrice + 150 }
  ];
}

export const conditionOptions: ConditionOption[] = [
  { value: 'fair', label: 'Fair', price: 0 },
  { value: 'good', label: 'Good', price: 20 },
  { value: 'excellent', label: 'Excellent', price: 50 }
];