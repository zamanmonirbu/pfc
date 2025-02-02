import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    rating: number;
    reviews: number;
    storage: string;
    discount?: boolean;
    warranty?: boolean;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  const { t } = useLanguage();

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
        <div className="relative">
          <div className="aspect-square bg-white p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {product.discount && (
            <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-medium px-3 py-1 rounded-full">
              {t('product.specialOffer')}
            </div>
          )}

          <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium text-emerald-600">
            {t('product.warranty')}
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
          <div className="text-sm text-gray-600 mb-2">{product.storage}</div>

          <div className="flex items-center gap-1 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < product.rating
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
            <span className="text-sm text-gray-600 ml-1">
              ({product.reviews} {t('product.reviews')})
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">
              €{product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                €{product.originalPrice}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}