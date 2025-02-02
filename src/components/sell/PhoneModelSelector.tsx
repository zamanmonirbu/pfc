import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { useLanguage } from '../../hooks/useLanguage';

interface PhoneModelSelectorProps {
  selectedModel: string;
  onSelect: (model: string) => void;
  onNext: () => void;
}

export function PhoneModelSelector({ selectedModel, onSelect, onNext }: PhoneModelSelectorProps) {
  const { t } = useLanguage();

  const handleNext = () => {
    onNext();
  };

  const phoneModels = [
    {
      series: t('sell.model.series.12'),
      models: ['iPhone 12', 'iPhone 12 Mini', 'iPhone 12 Pro', 'iPhone 12 Pro Max']
    },
    {
      series: t('sell.model.series.13'),
      models: ['iPhone 13', 'iPhone 13 Mini', 'iPhone 13 Pro', 'iPhone 13 Pro Max']
    },
    {
      series: t('sell.model.series.14'),
      models: ['iPhone 14', 'iPhone 14 Plus', 'iPhone 14 Pro', 'iPhone 14 Pro Max']
    },
    {
      series: t('sell.model.series.15'),
      models: ['iPhone 15', 'iPhone 15 Plus', 'iPhone 15 Pro', 'iPhone 15 Pro Max']
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">
        {t('sell.model.title')}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {phoneModels.map((series) => (
          <div key={series.series} className="space-y-4">
            <h3 className="text-lg font-medium text-gray-700">{series.series}</h3>
            <div className="grid grid-cols-1 gap-3">
              {series.models.map((model) => (
                <button
                  key={model}
                  onClick={() => onSelect(model)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    selectedModel === model
                      ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                      : 'border-gray-200 hover:border-emerald-200'
                  }`}
                >
                  {model}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-8">
        <Button
          variant="primary"
          onClick={handleNext}
          disabled={!selectedModel}
          className="flex items-center gap-2"
        >
          {t('sell.nav.continue')} <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}