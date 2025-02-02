import React, { useState } from 'react';
import { Logo } from './header/Logo';
import { DesktopNav } from './header/DesktopNav';
import { MobileNav } from './header/MobileNav';
import { SearchButton } from './header/SearchButton';
import { SellButton } from './header/SellButton';
import { LanguageSwitcher } from './LanguageSwitcher';
import { CartButton } from './CartButton';
import { SearchBar } from './SearchBar';

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-md z-50 border-b top-8 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Section */}
          <div className="flex items-center gap-4">
            <Logo />
            <MobileNav 
              isOpen={isMobileMenuOpen}
              onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>

          {/* Desktop Navigation */}
          <DesktopNav />

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <SellButton />
            </div>
            <SearchButton onClick={() => setIsSearchOpen(true)} />
            <LanguageSwitcher />
            <CartButton />
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      <SearchBar isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
}