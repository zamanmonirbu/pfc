import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Send, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { FooterLinks } from './footer/FooterLinks';
import { SocialLinks } from './footer/SocialLinks';
import { PaymentMethods } from './footer/PaymentMethods';
import { NewsletterForm } from './newsletter/NewsletterForm';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              {t('newsletter.title')}
            </h3>
            <p className="text-gray-400 mb-6">
              {t('newsletter.description')}
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 text-white">
              <Smartphone className="w-8 h-8 text-emerald-500" />
              <span className="text-2xl font-bold">PhoneFlex</span>
            </Link>
            <p className="text-gray-400">
              {t('footer.description')}
            </p>
            <SocialLinks />
          </div>

          {/* Quick Links & Help */}
          <div className="col-span-2">
            <FooterLinks />
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">{t('footer.contact.title')}</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-emerald-500" />
                <div>
                  <p className="text-white">+31 (0) 20 123 4567</p>
                  <p className="text-sm">{t('footer.contact.hours')}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-emerald-500" />
                <div>
                  <p className="text-white">support@phoneflex.com</p>
                  <p className="text-sm">{t('footer.contact.response')}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-emerald-500" />
                <div>
                  <p className="text-white">{t('footer.contact.address')}</p>
                  <p className="text-sm">1234 AB Amsterdam, NL</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Clock className="w-5 h-5 text-emerald-500" />
                <div>
                  <p className="text-white">{t('footer.contact.openHours')}</p>
                  <p className="text-sm">09:00 - 17:00 CET</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <PaymentMethods />

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} PhoneFlex. {t('footer.rights')}. By <a href="https://techazura.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:text-emerald-400 transition-colors">TechAzura</a></p>
        </div>
      </div>
    </footer>
  );
}