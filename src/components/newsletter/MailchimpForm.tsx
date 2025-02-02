import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { useNewsletter } from '../../hooks/useNewsletter';

export function MailchimpForm() {
  const { t } = useLanguage();
  const { subscribe, isLoading } = useNewsletter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = new FormData(form).get('EMAIL') as string;
    
    if (email) {
      // Store in Supabase first
      await subscribe(email);
      
      // Submit to Mailchimp
      form.submit();
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-lg p-6">
      <form
        action="https://gmail.us16.list-manage.com/subscribe/post?u=2ebee254b55b5a2d4694dcc97&amp;id=9d3defa589&amp;f_id=00d2c2e1f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        onSubmit={handleSubmit}
      >
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">{t('newsletter.title')}</h2>
          <p className="text-gray-600 mt-2">{t('newsletter.description')}</p>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="mce-EMAIL" className="text-sm font-medium text-gray-700 mb-1">
              {t('newsletter.emailLabel')} <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="EMAIL"
              id="mce-EMAIL"
              required
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder={t('newsletter.emailPlaceholder')}
            />
          </div>

          {/* Honeypot field */}
          <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
            <input type="text" name="b_2ebee254b55b5a2d4694dcc97_9d3defa589" tabIndex={-1} />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50"
          >
            {isLoading ? t('newsletter.subscribing') : t('newsletter.subscribe')}
          </button>
        </div>

        <div id="mce-responses" className="mt-4">
          <div id="mce-error-response" className="hidden text-red-600"></div>
          <div id="mce-success-response" className="hidden text-green-600"></div>
        </div>
      </form>
    </div>
  );
}