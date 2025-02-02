import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { ProductHeader } from '../components/product/details/ProductHeader';
import { ProductImageGallery } from '../components/product/details/ProductImageGallery';
import { ProductVariantSelector } from '../components/product/details/ProductVariantSelector';
import { ProductPurchaseSection } from '../components/product/details/ProductPurchaseSection';
import { products } from '../data/products';
import { useCart } from '../hooks/useCart';
import { useCartOverlay } from '../hooks/useCartOverlay';
import { getStorageOptions } from '../utils/productOptions';

export function ProductPage() {
  const { id } = useParams();
  const { t } = useLanguage();
  const { addItem } = useCart();
  const { open } = useCartOverlay();
  
  const product = products.find(p => p.id === id);
  
  const [selectedStorage, setSelectedStorage] = useState('');
  const [selectedCondition, setSelectedCondition] = useState('fair');
  const [selectedColor, setSelectedColor] = useState('Black');
  const [totalPrice, setTotalPrice] = useState(0);

  // Set default values when product loads
  useEffect(() => {
    if (product) {
      // Get storage options for this product
      const storageOptions = getStorageOptions(product);
      
      // Set default storage to lowest capacity
      if (storageOptions.length > 0) {
        setSelectedStorage(storageOptions[0].capacity);
      }

      // Set default color to first available color or Black
      if (product.colors && product.colors.length > 0) {
        setSelectedColor(product.colors[0]);
      }

      // Set initial price
      setTotalPrice(product.price);
    }
  }, [product]);

  // Redirect if product not found
  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">{t('product.notFound')}</h1>
          </div>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedStorage || !selectedCondition || !selectedColor) return;
    
    addItem({
      id: product.id,
      name: product.name,
      price: totalPrice,
      image: product.image,
      storage: selectedStorage,
      color: selectedColor,
      condition: selectedCondition
    });
    
    open();
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Product Images */}
            <div>
              <ProductImageGallery
                image={product.image}
                name={product.name}
                hasDiscount={product.discount}
              />
              
              {/* Product Features */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm font-medium text-gray-900 mb-1">{t('product.warranty')}</div>
                  <div className="text-sm text-gray-600">{t('product.warrantyDesc')}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm font-medium text-gray-900 mb-1">{t('product.shipping')}</div>
                  <div className="text-sm text-gray-600">{t('product.shippingDesc')}</div>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <ProductHeader
                name={product.name}
                rating={product.rating}
                reviews={product.reviews}
              />

              <ProductVariantSelector
                product={product}
                selectedStorage={selectedStorage}
                selectedCondition={selectedCondition}
                selectedColor={selectedColor}
                onStorageChange={setSelectedStorage}
                onConditionChange={setSelectedCondition}
                onColorChange={setSelectedColor}
              />

              <ProductPurchaseSection
                totalPrice={totalPrice}
                originalPrice={product.originalPrice}
                onAddToCart={handleAddToCart}
                isAddToCartDisabled={!selectedStorage || !selectedCondition || !selectedColor}
              />

              {/* Product Description */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">{t('product.description')}</h3>
                <div className="prose prose-sm text-gray-600">
                  <p>{t('product.descriptionText')}</p>
                  <ul className="mt-4 space-y-2">
                    <li>{t('product.descriptionPoint1')}</li>
                    <li>{t('product.descriptionPoint2')}</li>
                    <li>{t('product.descriptionPoint3')}</li>
                    <li>{t('product.descriptionPoint4')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}