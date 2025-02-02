import { useState } from "react";
import { PaymentMethodSelector } from './methods/PaymentMethodSelector';
import { PaymentActions } from './methods/PaymentActions';
import { PaymentError } from './methods/PaymentError';
import { IdealBankSelector } from './IdealBankSelector';
import Checkout from "../../pages/payment/Checkout";
import { usePayment } from "../../hooks/usePayment";

interface PaymentMethodsProps {
  onBack: () => void;
}

export function PaymentMethods({ onBack }: PaymentMethodsProps) {
  const [selectedMethod, setSelectedMethod] = useState<"card" | "ideal" | "">("");
  const [selectedBank, setSelectedBank] = useState("");
  const { initializePayment, isLoading, error } = usePayment();

  const handleSubmit = async () => {
    if (!selectedMethod) return;
  
    try {
      await initializePayment(selectedMethod, selectedBank);
    } catch (err) {
      console.error("Payment failed:", err);
    }
  };

  return (
    <div className="space-y-8">
      <PaymentMethodSelector 
        selectedMethod={selectedMethod}
        onMethodSelect={setSelectedMethod}
      />

      {selectedMethod === "card" && (
        <div className="mt-4">
          <Checkout />
        </div>
      )}

      {selectedMethod === "ideal" && (
        <IdealBankSelector
          selectedBank={selectedBank}
          onBankSelect={setSelectedBank}
        />
      )}

      <PaymentError error={error} />

      <PaymentActions 
        onBack={onBack}
        onSubmit={handleSubmit}
        isDisabled={!selectedMethod}
        isLoading={isLoading}
        selectedMethod={selectedMethod}
        selectedBank={selectedBank}
      />
    </div>
  );
}