import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { products } from '../../data/products';
import { Button } from '../ui/Button';

// Get only products with discounts and sort by highest discount percentage
const specialOffers = products
  .filter(product => product.discount)
  .sort((a, b) => {
    const discountA = ((a.originalPrice - a.price) / a.originalPrice) * 100;
    const discountB = ((b.originalPrice - b.price) / b.originalPrice) * 100;
    return discountB - discountA;
  })
  .slice(0, 4);

export function SpecialOffers() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="absolute w-[500px] h-[500px] bg-emerald-100/30 rounded-full blur-3xl -top-48 -left-24" />
        <div className="absolute w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-3xl bottom-0 right-0" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            {t('offers.title')}
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('offers.title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('offers.subtitle')}
          </p>
        </div>

        {/* Special Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {specialOffers.map((product) => {
            const discountPercentage = Math.round(
              ((product.originalPrice - product.price) / product.originalPrice) * 100
            );

            return (
              <div
                key={product.id}
                className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <div className="relative aspect-[4/5] bg-gradient-to-b from-gray-50 to-white p-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <div className="bg-red-500 text-white text-xs font-bold px-2.5 py-1.5 rounded-full shadow-lg">
                      Save {discountPercentage}%
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 group-hover:text-emerald-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">{product.storage}</p>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="text-lg font-bold text-gray-900">€{product.price}</div>
                      <div className="text-sm text-gray-400 line-through">€{product.originalPrice}</div>
                    </div>
                    <div className="group-hover:translate-x-1 transition-transform">→</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button
            variant="outline"
            onClick={() => navigate('/shop')}
            className="inline-flex items-center gap-2"
          >
            {t('offers.viewAll')} →
          </Button>
        </div>
      </div>
    </section>
  );
}