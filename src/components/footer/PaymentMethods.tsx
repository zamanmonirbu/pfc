import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

export function PaymentMethods() {
  const { language } = useLanguage();

  const paymentMethods = [
    {
      name: 'Visa',
      url: 'https://cdn.visa.com/v2/assets/images/logos/visa/blue/logo.png'
    },
    {
      name: 'Mastercard',
      url: 'https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mastercard_vrt_pos_92px_2x.png'
    },
    {
      name: 'iDEAL',
      url: 'https://www.mollie.com/images/payscreen/methods/ideal.png'
    },
    {
      name: 'Maestro',
      url: 'https://www.mastercard.com/content/dam/public/brandcenter/en/logos-maestro.png'
    }
  ];

  return (
    <div className="border-t border-gray-800 pt-8">
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-gray-300">
          {language === 'nl' ? 'Veilige Betaalmethoden' : 'Secure Payment Methods'}
        </h3>
        
        {/* Payment Methods */}
        <div className="flex items-center justify-center gap-6">
          {paymentMethods.map(method => (
            <img 
              key={method.name}
              src={method.url}
              alt={`${method.name} payment method`}
              className="h-8 object-contain"
            />
          ))}
        </div>

        {/* Security Badge */}
        <div className="flex items-center gap-3 text-sm text-gray-400 mt-4 justify-center">
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" 
            />
          </svg>
          <span>
            {language === 'nl' 
              ? 'Alle transacties zijn veilig en versleuteld'
              : 'All transactions are secure and encrypted'
            }
          </span>
        </div>
      </div>
    </div>
  );
}