import { useState, useEffect } from 'react';
import { Product } from '../types/product';
import { getStorageOptions, conditionOptions } from '../utils/productOptions';
import { getIPhoneColors } from '../utils/colors';

interface UseProductReturn {
  selectedStorage: string;
  selectedCondition: string;
  selectedColor: string;
  totalPrice: number;
  storageOptions: Array<{ capacity: string; price: number }>;
  colors: Array<{ name: string; value: string }>;
  setSelectedStorage: (storage: string) => void;
  setSelectedCondition: (condition: string) => void;
  setSelectedColor: (color: string) => void;
}

export function useProduct(product: Product | undefined): UseProductReturn {
  const [selectedStorage, setSelectedStorage] = useState('');
  const [selectedCondition, setSelectedCondition] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  const storageOptions = product ? getStorageOptions(product) : [];
  const colors = getIPhoneColors(product?.name || '');

  // Initialize selections when product loads
  useEffect(() => {
    if (product && storageOptions.length > 0) {
      setSelectedStorage(storageOptions[0].capacity);
      setSelectedCondition('fair');
      setSelectedColor(colors[0].name);
    }
  }, [product, storageOptions, colors]);

  // Update price when selections change
  useEffect(() => {
    if (!product || !selectedStorage || !selectedCondition) return;

    // Get base price from selected storage option
    const storageOption = storageOptions.find(opt => opt.capacity === selectedStorage);
    if (!storageOption) return;

    // Get condition price adjustment
    const conditionOption = conditionOptions.find(opt => opt.value === selectedCondition);
    if (!conditionOption) return;

    // Calculate total price by adding condition price to storage price
    const newPrice = storageOption.price + conditionOption.price;
    setTotalPrice(newPrice);
  }, [product, selectedStorage, selectedCondition, storageOptions]);

  return {
    selectedStorage,
    selectedCondition,
    selectedColor,
    totalPrice,
    storageOptions,
    colors,
    setSelectedStorage,
    setSelectedCondition,
    setSelectedColor
  };
}