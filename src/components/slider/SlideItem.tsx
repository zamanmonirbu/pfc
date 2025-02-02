import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import type { Product } from '../../types/product';

interface SlideItemProps {
  product: Product;
  isActive: boolean;
}

export function SlideItem({ product, isActive }: SlideItemProps) {
  const { t } = useLanguage();

  return (
    <Link
      to={`/product/${product.id}`}
      className={`flex-shrink-0 w-52 bg-white rounded-xl shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300 ${
        isActive ? 'opacity-100' : 'opacity-50'
      }`}
    >
      <div className="relative">
        <div className="aspect-[4/5] bg-gradient-to-b from-gray-50 to-white p-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        {product.discount && (
          <div className="absolute top-3 left-3">
            <div className="bg-emerald-500 text-white text-xs font-bold px-2.5 py-1.5 rounded-full shadow-lg">
              {t('product.save')}
            </div>
          </div>
        )}
        {product.warranty && (
          <div className="absolute bottom-3 right-3">
            <div className="bg-white/90 backdrop-blur-sm shadow-lg rounded-full px-2.5 py-1.5 text-xs font-medium text-emerald-600 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              {t('product.warranty')}
            </div>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-900 truncate group-hover:text-emerald-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 mb-2">{product.storage}</p>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < product.rating
                  ? 'text-yellow-400 fill-current'
                  : 'text-gray-300'
              }`}
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">
            ({product.reviews} {t('product.reviews')})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="text-lg font-bold text-gray-900">€{product.price}</div>
            {product.originalPrice && (
              <div className="text-sm text-gray-400 line-through">
                €{product.originalPrice}
              </div>
            )}
          </div>
          <div className="group-hover:translate-x-1 transition-transform">
            →
          </div>
        </div>
      </div>
    </Link>
  );
}