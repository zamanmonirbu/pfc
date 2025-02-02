import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '../ui/Button';
import { useNewsletter } from '../../hooks/useNewsletter';
import { useLanguage } from '../../hooks/useLanguage';
import { useToast } from '../../hooks/useToast';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const { subscribe, isLoading } = useNewsletter();
  const { t } = useLanguage();
  const { showToast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const result = await subscribe(email);
      
      if (result.error) {
        showToast({
          type: 'error',
          message: result.error
        });
      } else if (result.success) {
        showToast({
          type: 'success',
          message: result.message
        });
        setEmail('');
      }
    } catch (error) {
      showToast({
        type: 'error',
        message: t('newsletter.error')
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={t('newsletter.emailPlaceholder')}
        className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        required
      />
      <Button
        type="submit"
        variant="primary"
        className="flex items-center gap-2 whitespace-nowrap"
        loading={isLoading}
      >
        {t('newsletter.subscribe')} <Send className="w-4 h-4" />
      </Button>
    </form>
  );
}