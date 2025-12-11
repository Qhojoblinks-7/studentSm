import React from 'react';
import { CreditCard, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PaymentMethodSelector = ({ method, setMethod }) => (
  <div className="space-y-4">
    <Button
      onClick={() => setMethod("card")}
      variant={method === "card" ? "default" : "secondary"}
      className={`flex items-center gap-2 px-4 py-2 rounded-full border mb-4 ${
        method === "card"
          ? "bg-blue-500 text-white hover:bg-blue-600"
          : "bg-blue-200 text-white hover:bg-blue-300"
      }`}
    >
      <CreditCard className="w-4 h-4" />
      Credit Card
    </Button>
    <Button
      onClick={() => setMethod("mobile")}
      variant={method === "mobile" ? "default" : "secondary"}
      className={`flex items-center gap-2 px-4 py-2 rounded-full border mb-4 ${
        method === "mobile"
          ? "bg-blue-500 text-white hover:bg-blue-600"
          : "bg-blue-200 text-white hover:bg-blue-300"
      }`}
    >
      <Smartphone className="w-4 h-4" />
      Mobile Money
    </Button>
  </div>
);

export default PaymentMethodSelector;