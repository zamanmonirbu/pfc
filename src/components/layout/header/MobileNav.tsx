import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../../../hooks/useLanguage';
import { Link } from 'react-router-dom';
import { Button } from '../../ui/Button';

interface MobileNavProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function MobileNav({ isOpen, onToggle }: MobileNavProps) {
  const { t } = useLanguage();
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

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
    <div className="lg:hidden">
      <button
        onClick={onToggle}
        className="p-2 text-gray-600 hover:text-gray-900"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t">
          <nav className="px-4 py-6 space-y-2">
            {navigationItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <div className="flex items-center justify-between">
                      <Link
                        to={item.href || '#'}
                        className="flex-1 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                        onClick={() => {
                          if (item.href) {
                            onToggle();
                          }
                        }}
                      >
                        {item.label}
                      </Link>
                      <button
                        onClick={() => setExpandedMenu(expandedMenu === item.label ? null : item.label)}
                        className="p-2 text-gray-500 hover:text-gray-700"
                      >
                        <ChevronDown className={`w-5 h-5 transition-transform ${
                          expandedMenu === item.label ? 'rotate-180' : ''
                        }`} />
                      </button>
                    </div>
                    {expandedMenu === item.label && (
                      <div className="pl-6 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
                            onClick={onToggle}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                    onClick={onToggle}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="px-4 py-2">
              <Button
                variant="primary"
                onClick={() => {
                  onToggle();
                  window.location.href = '/sell';
                }}
                className="w-full"
              >
                {t('nav.sellToUs')}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}