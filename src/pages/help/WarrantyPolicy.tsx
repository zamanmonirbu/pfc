import React from 'react';
import { Shield, Battery, Wrench, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

export function WarrantyPolicy() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 pt-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">{t('warranty.title')}</h1>
        
        <div className="space-y-8">
          <section className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-4 mb-4">
              <Shield className="w-8 h-8 text-emerald-600" />
              <h2 className="text-xl font-semibold text-gray-900">{t('warranty.coverage.title')}</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              {t('warranty.coverage.items').map((item: string, index: number) => (
                <p key={index}>• {item}</p>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-4 mb-4">
              <Battery className="w-8 h-8 text-emerald-600" />
              <h2 className="text-xl font-semibold text-gray-900">{t('warranty.covered.title')}</h2>
            </div>
            <ul className="space-y-2 text-gray-600">
              {t('warranty.covered.items').map((item: string, index: number) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-4 mb-4">
              <AlertTriangle className="w-8 h-8 text-emerald-600" />
              <h2 className="text-xl font-semibold text-gray-900">{t('warranty.notCovered.title')}</h2>
            </div>
            <ul className="space-y-2 text-gray-600">
              {t('warranty.notCovered.items').map((item: string, index: number) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-4 mb-4">
              <Wrench className="w-8 h-8 text-emerald-600" />
              <h2 className="text-xl font-semibold text-gray-900">{t('warranty.process.title')}</h2>
            </div>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
              {t('warranty.process.steps').map((step: string, index: number) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}