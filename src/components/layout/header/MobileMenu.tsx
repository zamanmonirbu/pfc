import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../../hooks/useLanguage';

interface MobileMenuProps {
  isOpen: boolean;
}

export function MobileMenu({ isOpen }: MobileMenuProps) {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="lg:hidden py-4 border-t">
      <nav className="flex flex-col space-y-4">
        <Link to="/" className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg">
          {t('nav.home')}
        </Link>
        <Link to="/shop" className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg">
          {t('nav.shop')}
        </Link>
        <Link to="/about" className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg">
          {t('nav.about')}
        </Link>
        <Link to="/help/faq" className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg">
          {t('nav.help')}
        </Link>
        <Link to="/sell" className="px-4 py-2 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg font-medium">
          {t('nav.sellToUs')}
        </Link>
      </nav>
    </div>
  );
}