import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { Globe } from 'lucide-react';
import { cn } from '../../utils/cn';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = React.useState(false);

  const languages = [
    { 
      code: 'nl', 
      name: 'Nederlands', 
      flag: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg'
    },
    { 
      code: 'en', 
      name: 'English', 
      flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/1280px-Flag_of_the_United_Kingdom_%283-5%29.svg.png'
    }
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Select language"
      >
        <Globe className="w-5 h-5 text-gray-600" />
        <span className="text-sm font-medium text-gray-700">
          {language.toUpperCase()}
        </span>
      </button>

      {isOpen && (
        <div 
          className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-100"
          onMouseLeave={() => setIsOpen(false)}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code as 'en' | 'nl');
                setIsOpen(false);
              }}
              className={cn(
                "w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3",
                language === lang.code ? "text-emerald-600 font-medium" : "text-gray-700"
              )}
            >
              <img 
                src={lang.flag} 
                alt={`${lang.name} flag`} 
                className="w-6 h-4 object-cover rounded-sm"
              />
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}