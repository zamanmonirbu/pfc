import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { useShopNavigation } from '../../hooks/useShopNavigation';
import { ChevronDown } from 'lucide-react';

export function NavigationMenu() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { navigateToSeries } = useShopNavigation();

  const navigationItems = [
    { label: t('nav.home'), href: '/' },
    { 
      label: t('nav.shop'),
      onClick: () => navigate('/shop'),
      children: [
        { label: 'iPhone 15 Series', onClick: () => navigateToSeries('iPhone 15') },
        { label: 'iPhone 14 Series', onClick: () => navigateToSeries('iPhone 14') },
        { label: 'iPhone 13 Series', onClick: () => navigateToSeries('iPhone 13') },
        { label: 'iPhone 12 Series', onClick: () => navigateToSeries('iPhone 12') }
      ]
    },
    { label: t('nav.about'), href: '/about' },
    { 
      label: t('nav.help'),
      href: '#',
      children: [
        { label: 'FAQ', href: '/help/faq' },
        { label: t('nav.contact'), href: '/help/contact' },
        { label: t('nav.shipping'), href: '/help/shipping' },
        { label: t('nav.returns'), href: '/help/returns' }
      ]
    }
  ];

  return (
    <nav className="hidden md:flex items-center gap-1">
      {navigationItems.map((item) => (
        <div key={item.label} className="relative group px-3">
          {item.children ? (
            <>
              <button 
                onClick={item.onClick}
                className="flex items-center gap-1.5 text-gray-700 font-medium hover:text-emerald-600 py-2 px-3 rounded-full hover:bg-emerald-50/80 transition-all duration-200"
              >
                {item.label}
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-lg py-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 border border-gray-100">
                {item.children.map((child) => (
                  child.href ? (
                    <Link
                      key={child.label}
                      to={child.href}
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                    >
                      {child.label}
                    </Link>
                  ) : (
                    <button
                      key={child.label}
                      onClick={child.onClick}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                    >
                      {child.label}
                    </button>
                  )
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