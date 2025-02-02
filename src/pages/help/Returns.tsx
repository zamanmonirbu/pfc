import React from 'react';
import { RotateCcw, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { Button } from '../../components/ui/Button';

export function Returns() {
  const { t } = useLanguage();

  const processSteps = [
    {
      title: t('returns.process.step1'),
      description: t('returns.process.step1Desc')
    },
    {
      title: t('returns.process.step2'),
      description: t('returns.process.step2Desc')
    },
    {
      title: t('returns.process.step3'),
      description: t('returns.process.step3Desc')
    },
    {
      title: t('returns.process.step4'),
      description: t('returns.process.step4Desc')
    }
  ];

  const conditions = [
    t('returns.conditions.original'),
    t('returns.conditions.accessories'),
    t('returns.conditions.reset'),
    t('returns.conditions.days')
  ];

  const nonReturnableCases = [
    t('returns.nonReturnable.damage'),
    t('returns.nonReturnable.missing'),
    t('returns.nonReturnable.locked'),
    t('returns.nonReturnable.water')
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
            <RotateCcw className="w-8 h-8 text-emerald-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('returns.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('returns.subtitle')}
          </p>
        </div>

        {/* Process Steps */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {t('returns.process.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.title} className="relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full border-t-2 border-dashed border-gray-200" />
                )}
                <div className="relative flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-emerald-600">{index + 1}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conditions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Return Conditions */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              {t('returns.conditions.title')}
            </h3>
            <ul className="space-y-3 text-gray-600">
              {conditions.map((condition, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                  <span>{condition}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Non-Returnable Cases */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              {t('returns.nonReturnable.title')}
            </h3>
            <ul className="space-y-3 text-gray-600">
              {nonReturnableCases.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Start Return Process */}
        <div className="bg-emerald-50 rounded-xl p-8 text-center mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {t('returns.start.title')}
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            {t('returns.start.subtitle')}
          </p>
          <Button variant="primary" className="inline-flex items-center gap-2">
            {t('returns.start.button')} <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Need Help */}
        <div className="bg-white rounded-xl shadow-sm p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {t('returns.support.title')}
          </h3>
          <p className="text-gray-600 mb-6">
            {t('returns.support.text')}
          </p>
          <Button 
            variant="outline" 
            onClick={() => window.location.href = '/help/contact'}
          >
            {t('returns.support.button')}
          </Button>
        </div>
      </div>
    </div>
  );
}