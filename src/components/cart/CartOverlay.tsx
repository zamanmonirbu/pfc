import React from 'react';
import { X, ShoppingCart, Trash2, Shield, Truck } from 'lucide-react';
import { Button } from '../ui/Button';
import { useCart } from '../../hooks/useCart';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';

interface CartOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartOverlay({ isOpen, onClose }: CartOverlayProps) {
  const navigate = useNavigate();
  const { items, getTotal, removeItem, updateQuantity } = useCart();
  const { language } = useLanguage();

  const translations = {
    en: {
      cart: 'Shopping Cart',
      close: 'Close',
      empty: 'Your cart is empty',
      timeToShop: 'Time to shop!',
      browseProducts: 'Browse Products',
      storage: 'Storage',
      color: 'Color',
      condition: 'Condition',
      removeItem: 'Remove item',
      subtotal: 'Subtotal',
      checkout: 'Checkout',
      continueShopping: 'Continue Shopping',
      freeShipping: 'Free Shipping',
      warranty: '2 Year Warranty'
    },
    nl: {
      cart: 'Winkelwagen',
      close: 'Sluiten',
      empty: 'Je winkelwagen is leeg',
      timeToShop: 'Tijd om te shoppen!',
      browseProducts: 'Bekijk onze producten',
      storage: 'Opslag',
      color: 'Kleur',
      condition: 'Conditie',
      removeItem: 'Verwijder item',
      subtotal: 'Subtotaal',
      checkout: 'Afrekenen',
      continueShopping: 'Verder winkelen',
      freeShipping: 'Gratis verzending',
      warranty: '2 jaar garantie'
    }
  };

  const t = translations[language];

  const handleCheckout = () => {
    onClose();
    navigate('/checkout');
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
          onClick={onClose}
        />
      )}

      {/* Cart Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[480px] bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <div className="flex items-center gap-3">
              <div className="relative">
                <ShoppingCart className="w-6 h-6 text-gray-900" />
                {items.length > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-emerald-500 text-white text-xs rounded-full flex items-center justify-center">
                    {items.length}
                  </span>
                )}
              </div>
              <h2 className="text-xl font-semibold text-gray-900">{t.cart}</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label={t.close}
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center p-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <ShoppingCart className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{t.empty}</h3>
                <p className="text-gray-600 mb-6">{t.timeToShop}</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    onClose();
                    navigate('/shop');
                  }}
                >
                  {t.browseProducts}
                </Button>
              </div>
            ) : (
              <div className="p-6 space-y-6">
                {items.map((item) => (
                  <div 
                    key={`${item.id}-${item.storage}-${item.color}-${item.condition}`}
                    className="flex gap-4 pb-6 border-b last:border-0 last:pb-0"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-contain bg-gray-50 rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-gray-900 truncate">{item.name}</h4>
                          <div className="mt-1 space-y-1">
                            <p className="text-sm text-gray-500">{t.storage}: {item.storage}</p>
                            <p className="text-sm text-gray-500">{t.color}: {item.color}</p>
                            <p className="text-sm text-gray-500">{t.condition}: {item.condition}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                          aria-label={t.removeItem}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 hover:border-gray-300 text-gray-600"
                          >
                            -
                          </button>
                          <span className="w-8 text-center text-gray-900">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, Math.min(10, item.quantity + 1))}
                            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 hover:border-gray-300 text-gray-600"
                          >
                            +
                          </button>
                        </div>
                        <div className="font-medium text-gray-900">
                          €{(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t bg-gray-50">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">{t.subtotal}</span>
                  <span className="text-2xl font-bold text-gray-900">€{getTotal().toFixed(2)}</span>
                </div>
                <Button
                  variant="primary"
                  className="w-full py-3 text-lg"
                  onClick={handleCheckout}
                >
                  {t.checkout}
                </Button>
                <button
                  onClick={onClose}
                  className="w-full mt-4 text-center text-gray-600 hover:text-gray-900"
                >
                  {t.continueShopping}
                </button>
              </div>
              <div className="px-6 pb-6">
                <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4" />
                    <span>{t.freeShipping}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    <span>{t.warranty}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}