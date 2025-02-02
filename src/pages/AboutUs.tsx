import React from 'react';
import { Shield, Users, Globe, Award, Smartphone, Recycle } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export function AboutUs() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 pt-32">
      {/* Hero Section */}
      <div className="relative bg-emerald-900 text-white py-24 mb-16">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&q=80')] mix-blend-overlay opacity-20 bg-cover bg-center" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('about.hero.title')}</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            {t('about.hero.subtitle')}
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('about.mission.title')}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t('about.mission.text')}
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('about.vision.title')}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t('about.vision.text')}
            </p>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="bg-white py-16 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {t('about.features.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t('about.features.quality.title')}
              </h3>
              <p className="text-gray-600">{t('about.features.quality.text')}</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t('about.features.warranty.title')}
              </h3>
              <p className="text-gray-600">{t('about.features.warranty.text')}</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t('about.features.support.title')}
              </h3>
              <p className="text-gray-600">{t('about.features.support.text')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-emerald-900 rounded-xl text-white p-12">
          <h2 className="text-3xl font-bold text-center mb-12">{t('about.impact.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Smartphone className="w-8 h-8 mx-auto mb-4 text-emerald-300" />
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-emerald-200">{t('about.impact.phones')}</div>
            </div>
            <div>
              <Recycle className="w-8 h-8 mx-auto mb-4 text-emerald-300" />
              <div className="text-4xl font-bold mb-2">500,000 kg</div>
              <div className="text-emerald-200">{t('about.impact.waste')}</div>
            </div>
            <div>
              <Globe className="w-8 h-8 mx-auto mb-4 text-emerald-300" />
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-emerald-200">{t('about.impact.countries')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}