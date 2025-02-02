import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { StepProgress } from './StepProgress';
import { ShippingForm } from './ShippingForm';
import { PaymentMethods } from '../payment/PaymentMethods';
import { OrderSummary } from './OrderSummary';
import { OrderConfirmation } from './OrderConfirmation';
import { OrderSuccess } from './OrderSuccess';
import { useCart } from '../../hooks/useCart';
import { useCheckout } from '../../hooks/useCheckout';

export function CheckoutPage() {
  const navigate = useNavigate();
  const { items, clearCart } = useCart();
  const { clearCheckout } = useCheckout();
  const [currentStep, setCurrentStep] = useState(1);
  const [orderComplete, setOrderComplete] = useState(false);

  useEffect(() => {
    if (items.length === 0 && !orderComplete) {
      navigate('/cart');
    }
  }, [items, navigate, orderComplete]);

  const handleOrderComplete = () => {
    setOrderComplete(true);
    clearCart();
    clearCheckout();
  };

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-gray-50 pt-32">
        <div className="max-w-3xl mx-auto px-4">
          <OrderSuccess />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StepProgress currentStep={currentStep} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-8">
              {currentStep === 1 && (
                <ShippingForm
                  onNext={() => setCurrentStep(2)}
                />
              )}
              {currentStep === 2 && (
                <PaymentMethods
                  onBack={() => setCurrentStep(1)}
                  onNext={() => setCurrentStep(3)}
                />
              )}
              {currentStep === 3 && (
                <OrderConfirmation
                  onBack={() => setCurrentStep(2)}
                  onComplete={handleOrderComplete}
                />
              )}
            </div>
          </div>

          <div className="lg:col-span-1">
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
}