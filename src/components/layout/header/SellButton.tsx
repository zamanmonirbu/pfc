import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../ui/Button';
import { useLanguage } from '../../../hooks/useLanguage';

export function SellButton() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="hidden md:block">
      <Button 
        variant="outline" 
        onClick={() => navigate('/sell')}
        className="bg-gradient-to-r from-emerald-500 to-emerald-700 text-white border-0 hover:opacity-90"
      >
        {t('nav.sellToUs')}
      </Button>
    </div>
  );
}