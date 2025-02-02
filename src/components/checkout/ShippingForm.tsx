import React from 'react';
import { Button } from '../ui/Button';
import { euCountries } from '../../data/countries';
import { useCheckout } from '../../hooks/useCheckout';
import { useLanguage } from '../../hooks/useLanguage';

interface ShippingFormProps {
  onNext: () => void;
}

export function ShippingForm({ onNext }: ShippingFormProps) {
  const { setShippingInfo } = useCheckout();
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    setShippingInfo({
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      address: formData.get('address') as string,
      city: formData.get('city') as string,
      postalCode: formData.get('postalCode') as string,
      country: formData.get('country') as string
    });
    
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          {t('checkout.shippingInfo')}
        </h2>

        <div className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                {t('checkout.firstName')}
              </label>
              <input
                name="firstName"
                type="text"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-colors"
                placeholder="John"
              />
            </div>
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                {t('checkout.lastName')}
              </label>
              <input
                name="lastName"
                type="text"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-colors"
                placeholder="Doe"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              {t('checkout.email')}
            </label>
            <input
              name="email"
              type="email"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-colors"
              placeholder="john.doe@example.com"
            />
          </div>

          {/* Address */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              {t('checkout.streetAddress')}
            </label>
            <input
              name="address"
              type="text"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-colors"
              placeholder="123 Main St"
            />
          </div>

          {/* City, Postal Code, Country */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                {t('checkout.city')}
              </label>
              <input
                name="city"
                type="text"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-colors"
                placeholder="Amsterdam"
              />
            </div>
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                {t('checkout.postalCode')}
              </label>
              <input
                name="postalCode"
                type="text"
                required
                pattern="[0-9A-Za-z\s-]+"
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-colors"
                placeholder="1234 AB"
              />
            </div>
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                {t('checkout.country')}
              </label>
              <select
                name="country"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-colors"
              >
                <option value="">{t('checkout.selectCountry')}</option>
                {euCountries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <Button type="submit" variant="primary" className="w-full">
        {t('checkout.continueToPayment')}
      </Button>
    </form>
  );
}