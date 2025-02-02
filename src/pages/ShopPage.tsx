import React from 'react';
import { FilterSidebar } from '../components/shop/FilterSidebar';
import { ProductCard } from '../components/shop/ProductCard';
import { SortDropdown } from '../components/shop/SortDropdown';
import { useFilters, useFilterParams } from '../hooks/useFilters';
import { useLanguage } from '../hooks/useLanguage';

export function ShopPage() {
  const {
    filters,
    updateFilter,
    resetFilters,
    setSortBy,
    getFilteredProducts
  } = useFilters();
  const { t } = useLanguage();

  // Initialize filters from URL parameters
  useFilterParams();

  const filteredProducts = getFilteredProducts();

  return (
    <div className="min-h-screen bg-gray-50 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            {t('shop.title')} ({filteredProducts.length})
          </h1>
          <SortDropdown onSort={setSortBy} />
        </div>
        
        <div className="flex gap-8">
          <FilterSidebar
            filters={filters}
            onFilterChange={updateFilter}
            onReset={resetFilters}
          />
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}