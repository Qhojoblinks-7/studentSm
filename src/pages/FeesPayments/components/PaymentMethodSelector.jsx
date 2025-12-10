import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CreditCard, Smartphone, Banknote, DollarSign } from 'lucide-react';

// Shadcn Components
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Redux
import { setPaymentMethod } from '@/store/feesPaymentsSlice';

const PaymentMethodSelector = () => {
  const dispatch = useDispatch();
  const { paymentMethod } = useSelector(state => state.feesPayments);

  const paymentMethods = [
    {
      id: 'card',
      title: 'Credit/Debit Card',
      description: 'Pay securely with your card',
      icon: CreditCard,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      features: ['Instant payment', 'Secure encryption', 'Accepted worldwide']
    },
    {
      id: 'mobile',
      title: 'Mobile Money',
      description: 'Pay using mobile money services',
      icon: Smartphone,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      features: ['Quick & easy', 'No card required', 'Local currency support']
    },
    {
      id: 'bank',
      title: 'Bank Transfer',
      description: 'Direct bank account transfer',
      icon: Banknote,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      features: ['Low fees', 'Direct from account', 'Trackable transactions']
    },
    {
      id: 'cash',
      title: 'Cash Payment',
      description: 'Pay in person at the office',
      icon: DollarSign,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      features: ['In-person payment', 'No digital requirements', 'Immediate confirmation']
    }
  ];

  const handleMethodSelect = (methodId) => {
    dispatch(setPaymentMethod(methodId));
  };

  return (
    <Card className="shadow-lg border-slate-100">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold text-slate-900 flex items-center">
          <CreditCard className="w-6 h-6 mr-2 text-blue-600" />
          Select Payment Method
        </CardTitle>
        <p className="text-sm text-slate-600 mt-1">
          Choose your preferred payment method to complete the transaction
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {paymentMethods.map((method) => {
            const Icon = method.icon;
            const isSelected = paymentMethod === method.id;

            return (
              <Card
                key={method.id}
                className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                  isSelected
                    ? `${method.borderColor} border-2 bg-slate-50`
                    : 'border-slate-200 hover:border-slate-300'
                }`}
                onClick={() => handleMethodSelect(method.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${method.bgColor}`}>
                      <Icon className={`w-6 h-6 ${method.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-slate-900">{method.title}</h3>
                        {isSelected && (
                          <Badge className="bg-green-100 text-green-800">
                            Selected
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-slate-600 mb-3">{method.description}</p>
                      <ul className="space-y-1">
                        {method.features.map((feature, index) => (
                          <li key={index} className="text-xs text-slate-500 flex items-center">
                            <div className="w-1 h-1 bg-slate-400 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Selected Method Summary */}
        {paymentMethod && (
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-blue-100 rounded-lg">
                {React.createElement(
                  paymentMethods.find(m => m.id === paymentMethod).icon,
                  { className: 'w-5 h-5 text-blue-600' }
                )}
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">
                  {paymentMethods.find(m => m.id === paymentMethod).title} Selected
                </h4>
                <p className="text-sm text-slate-600">
                  Proceed to enter your payment details
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-200">
          <Button variant="outline">
            Back to Cart
          </Button>
          <Button disabled={!paymentMethod}>
            Continue to Payment
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PaymentMethodSelector;