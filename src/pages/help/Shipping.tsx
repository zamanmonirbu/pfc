import React from 'react';
import { Truck, Package, Clock, MapPin } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

export function Shipping() {
  const { t } = useLanguage();

  const deliveryOptions = [
    {
      icon: Truck,
      title: t('shipping.standard.title'),
      time: t('shipping.standard.time'),
      price: t('shipping.standard.price'),
      description: t('shipping.standard.desc')
    },
    {
      icon: Package,
      title: t('shipping.express.title'),
      time: t('shipping.express.time'),
      price: t('shipping.express.price'),
      description: t('shipping.express.desc')
    },
    {
      icon: Clock,
      title: t('shipping.nextDay.title'),
      time: t('shipping.nextDay.time'),
      price: t('shipping.nextDay.price'),
      description: t('shipping.nextDay.desc')
    }
  ];

  const processSteps = [
    {
      icon: Package,
      title: t('shipping.process.step1'),
      description: t('shipping.process.step1Desc')
    },
    {
      icon: Clock,
      title: t('shipping.process.step2'),
      description: t('shipping.process.step2Desc')
    },
    {
      icon: Truck,
      title: t('shipping.process.step3'),
      description: t('shipping.process.step3Desc')
    },
    {
      icon: MapPin,
      title: t('shipping.process.step4'),
      description: t('shipping.process.step4Desc')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('shipping.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('shipping.subtitle')}
          </p>
        </div>

        {/* Delivery Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {deliveryOptions.map((option) => (
            <div key={option.title} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-emerald-100 rounded-lg">
                  <option.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{option.title}</h3>
                  <p className="text-sm text-emerald-600">{option.time}</p>
                </div>
              </div>
              <div className="mb-4">
                <span className="text-2xl font-bold text-gray-900">{option.price}</span>
              </div>
              <p className="text-gray-600 text-sm">{option.description}</p>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {t('shipping.process.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.title} className="relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full border-t-2 border-dashed border-gray-200" />
                )}
                <div className="relative flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                    <step.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-emerald-50 rounded-xl p-6 mb-16">
          <div className="flex items-center gap-4 mb-4">
            <Clock className="w-6 h-6 text-emerald-600 flex-shrink-0" />
            <h3 className="font-semibold text-gray-900">{t('shipping.notice.title')}</h3>
          </div>
          <ul className="text-gray-600 space-y-2">
            <li>• {t('shipping.notice.processing')}</li>
            <li>• {t('shipping.notice.peak')}</li>
            <li>• {t('shipping.notice.signature')}</li>
            <li>• {t('shipping.notice.tracking')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}