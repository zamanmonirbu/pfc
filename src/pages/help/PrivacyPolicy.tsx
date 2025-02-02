import React from 'react';
import { Shield, Database, Lock, Cookie, MessageCircle } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

export function PrivacyPolicy() {
  const { t } = useLanguage();
  
  // Helper function to safely handle array translations
  const getTranslatedArray = (key: string) => {
    const translation = t(key);
    return Array.isArray(translation) ? translation : [];
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
            <Shield className="w-8 h-8 text-emerald-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('privacy.title')}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('privacy.subtitle')}
          </p>
          <p className="text-sm text-gray-500 mt-4">
            {t('privacy.lastUpdated')}: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Data Collection Section */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <Database className="w-8 h-8 text-emerald-600" />
            <h2 className="text-2xl font-bold text-gray-900">{t('privacy.collection.title')}</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">{t('privacy.collection.personal.title')}</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                {getTranslatedArray('privacy.collection.personal.items').map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">{t('privacy.collection.usage.title')}</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                {getTranslatedArray('privacy.collection.usage.items').map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Data Usage Section */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <Lock className="w-8 h-8 text-emerald-600" />
            <h2 className="text-2xl font-bold text-gray-900">{t('privacy.usage.title')}</h2>
          </div>
          
          <p className="text-gray-600 mb-4">{t('privacy.usage.description')}</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            {getTranslatedArray('privacy.usage.items').map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* User Rights Section */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <Shield className="w-8 h-8 text-emerald-600" />
            <h2 className="text-2xl font-bold text-gray-900">{t('privacy.rights.title')}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {getTranslatedArray('privacy.rights.items').map((right: any, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{right.title}</h3>
                <p className="text-gray-600">{right.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cookie Policy Section */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <Cookie className="w-8 h-8 text-emerald-600" />
            <h2 className="text-2xl font-bold text-gray-900">{t('privacy.cookies.title')}</h2>
          </div>
          
          <p className="text-gray-600 mb-4">{t('privacy.cookies.description')}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">{t('privacy.cookies.essential.title')}</h3>
              <p className="text-gray-600">{t('privacy.cookies.essential.description')}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">{t('privacy.cookies.analytics.title')}</h3>
              <p className="text-gray-600">{t('privacy.cookies.analytics.description')}</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <MessageCircle className="w-8 h-8 text-emerald-600" />
            <h2 className="text-2xl font-bold text-gray-900">{t('privacy.contact.title')}</h2>
          </div>
          
          <p className="text-gray-600 mb-4">{t('privacy.contact.description')}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <span className="text-gray-900 font-medium">Email:</span>
              <a href={`mailto:${t('privacy.contact.email')}`} className="text-emerald-600 hover:text-emerald-700">
                {t('privacy.contact.email')}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-900 font-medium">Website:</span>
              <span className="text-gray-600">{t('privacy.contact.website')}</span>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-4">{t('privacy.contact.note')}</p>
        </section>
      </div>
    </div>
  );
}