import React from 'react';
import { useCart } from '../../hooks/useCart';
import { useDiscount } from '../../hooks/useDiscount';
import { useLanguage } from '../../hooks/useLanguage';

export function OrderSummary() {
  const { items, getTotal } = useCart();
  const { discount, setDiscount } = useDiscount();
  const { t } = useLanguage();
  const subtotal = getTotal();
  const shipping = 0; // Free shipping
  const discountAmount = (subtotal * discount) / 100;
  const total = subtotal - discountAmount;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">{t('checkout.orderSummary')}</h2>
      
      <div className="space-y-4 mb-6">
        {items.map((item) => {
          const itemKey = `${item.id}-${item.storage}-${item.color}-${item.condition}`;
          
          return (
            <div key={itemKey} className="flex justify-between">
              <div>
                <div className="font-medium text-gray-900">
                  {item.name} ({item.storage})
                </div>
                <div className="text-sm text-gray-500">
                  {item.color} - {item.condition}
                </div>
                <div className="text-sm text-gray-500">Qty: {item.quantity}</div>
              </div>
              <div className="font-medium text-gray-900">€{item.price * item.quantity}</div>
            </div>
          );
        })}
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-sm font-medium text-gray-700">{t('checkout.discountCode')}</h3>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder={t('checkout.enterDiscount')}
            className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
          />
          <button className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
            {t('checkout.apply')}
          </button>
        </div>
      </div>

      <div className="border-t pt-4 space-y-2">
        <div className="flex justify-between text-gray-600">
          <span>{t('checkout.subtotal')}</span>
          <span>€{subtotal}</span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between text-emerald-600">
            <span>Discount ({discount}%)</span>
            <span>-€{discountAmount}</span>
          </div>
        )}
        <div className="flex justify-between text-gray-600">
          <span>{t('checkout.shipping')}</span>
          <span>{shipping === 0 ? t('checkout.free') : `€${shipping}`}</span>
        </div>
        <div className="flex justify-between text-lg font-semibold text-gray-900 pt-2">
          <span>{t('checkout.total')}</span>
          <span>€{total}</span>
        </div>
      </div>
    </div>
  );
}