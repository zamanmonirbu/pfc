import React from 'react';
import { Shield, Truck, BadgeCheck } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

export function Features() {
  const { t } = useLanguage();

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {t('features.title')}
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            {t('features.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Shield className="w-12 h-12 text-emerald-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t('features.warranty.title')}
            </h3>
            <p className="text-gray-600">{t('features.warranty.desc')}</p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Truck className="w-12 h-12 text-emerald-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t('features.shipping.title')}
            </h3>
            <p className="text-gray-600">{t('features.shipping.desc')}</p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <BadgeCheck className="w-12 h-12 text-emerald-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t('features.quality.title')}
            </h3>
            <p className="text-gray-600">{t('features.quality.desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}