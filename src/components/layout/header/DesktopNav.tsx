import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../../../hooks/useLanguage';

export function DesktopNav() {
  const { t } = useLanguage();

  const navigationItems = [
    { label: t('nav.home'), href: '/' },
    { 
      label: t('nav.shop'),
      href: '/shop',
      children: [
        { label: 'iPhone 15 Series', href: '/shop?series=iPhone 15' },
        { label: 'iPhone 14 Series', href: '/shop?series=iPhone 14' },
        { label: 'iPhone 13 Series', href: '/shop?series=iPhone 13' },
        { label: 'iPhone 12 Series', href: '/shop?series=iPhone 12' }
      ]
    },
    { label: t('nav.about'), href: '/about' },
    { 
      label: t('nav.help'),
      children: [
        { label: 'FAQ', href: '/help/faq' },
        { label: t('nav.contact'), href: '/help/contact' },
        { label: t('nav.shipping'), href: '/help/shipping' },
        { label: t('nav.returns'), href: '/help/returns' }
      ]
    }
  ];

  return (
    <nav className="hidden lg:flex items-center gap-1">
      {navigationItems.map((item) => (
        <div key={item.label} className="relative group px-3">
          {item.children ? (
            <>
              <Link 
                to={item.href || '#'}
                className="flex items-center gap-1.5 text-gray-700 font-medium hover:text-emerald-600 py-2 px-3 rounded-full hover:bg-emerald-50/80 transition-all duration-200"
              >
                {item.label}
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </Link>
              <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-lg py-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 border border-gray-100">
                {item.children.map((child) => (
                  <Link
                    key={child.label}
                    to={child.href}
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <Link 
              to={item.href} 
              className="text-gray-700 font-medium hover:text-emerald-600 py-2 px-3 rounded-full hover:bg-emerald-50/80 transition-all duration-200"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}