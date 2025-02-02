import { useState } from 'react';
import { subscribeToNewsletter } from '../services/newsletter';
import { useToast } from './useToast';
import { useLanguage } from './useLanguage';

export function useNewsletter() {
  const [isLoading, setIsLoading] = useState(false);
  const { showToast } = useToast();
  const { t } = useLanguage();

  const subscribe = async (email: string) => {
    setIsLoading(true);
    try {
      const result = await subscribeToNewsletter(email);
      
      if (result.error) {
        showToast({
          type: 'error',
          message: result.error
        });
        return false;
      }

      showToast({
        type: 'success',
        message: t('newsletter.success')
      });
      return true;
    } catch (error) {
      showToast({
        type: 'error',
        message: t('newsletter.error')
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    subscribe,
    isLoading
  };
}