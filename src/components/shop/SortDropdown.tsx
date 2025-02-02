import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

interface SortDropdownProps {
  onSort: (value: string) => void;
}

export function SortDropdown({ onSort }: SortDropdownProps) {
  const { t } = useLanguage();

  return (
    <div className="relative">
      <select
        onChange={(e) => onSort(e.target.value)}
        className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-8 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      >
        <option value="popular">{t('shop.sort.popular')}</option>
        <option value="price-asc">{t('shop.sort.priceLow')}</option>
        <option value="price-desc">{t('shop.sort.priceHigh')}</option>
        <option value="newest">{t('shop.sort.newest')}</option>
      </select>
      <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
    </div>
  );
}