import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { ColorSelector } from './ColorSelector';
import { ConditionDescription } from './ConditionDescription';

interface ProductVariantsProps {
  storageOptions: Array<{ label: string; value: string; price?: number }>;
  conditionOptions: Array<{ label: string; value: string; price?: number }>;
  colors: Array<{ name: string; value: string }>;
  selectedStorage: string;
  selectedCondition: string;
  selectedColor: string;
  basePrice: number;
  onStorageChange: (value: string) => void;
  onConditionChange: (value: string) => void;
  onColorChange: (value: string) => void;
}

export function ProductVariants({
  storageOptions,
  conditionOptions,
  colors,
  selectedStorage,
  selectedCondition,
  selectedColor,
  basePrice,
  onStorageChange,
  onConditionChange,
  onColorChange
}: ProductVariantsProps) {
  const { t } = useLanguage();

  return (
    <div className="space-y-8">
      {/* Storage Selection */}
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-3">{t('product.storage')}:</h3>
        <div className="flex flex-wrap gap-2">
          {storageOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => onStorageChange(option.value)}
              className={`py-2 px-4 rounded-lg border-2 transition-all ${
                selectedStorage === option.value
                  ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                  : 'border-gray-200 hover:border-emerald-200'
              }`}
            >
              <span>{option.label}</span>
              {option.price && option.price > basePrice && (
                <span className="ml-1 text-sm text-emerald-600">
                  +€{(option.price - basePrice).toFixed(2)}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Condition Selection */}
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-3">{t('product.condition')}:</h3>
        <div className="flex flex-wrap gap-2">
          {conditionOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => onConditionChange(option.value)}
              className={`py-2 px-4 rounded-lg border-2 transition-all ${
                selectedCondition === option.value
                  ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                  : 'border-gray-200 hover:border-emerald-200'
              }`}
            >
              <span>{option.label}</span>
              {option.price && option.price > 0 && (
                <span className="ml-1 text-sm text-emerald-600">+€{option.price.toFixed(2)}</span>
              )}
            </button>
          ))}
        </div>
        <ConditionDescription condition={selectedCondition} />
      </div>

      {/* Color Selection */}
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-3">{t('product.color')}:</h3>
        <ColorSelector
          colors={colors}
          selectedColor={selectedColor}
          onChange={onColorChange}
        />
      </div>
    </div>
  );
}