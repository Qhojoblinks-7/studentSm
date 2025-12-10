import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CreditCard, Eye, EyeOff, Lock, Shield } from 'lucide-react';

// Shadcn Components
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

// Redux
import { updateCardDetails } from '@/store/feesPaymentsSlice';

const CardDetailsForm = () => {
  const dispatch = useDispatch();
  const { cardDetails } = useSelector(state => state.feesPayments);

  const [showCvv, setShowCvv] = useState(false);
  const [errors, setErrors] = useState({});
  const [saveCard, setSaveCard] = useState(false);

  const handleInputChange = (field, value) => {
    let formattedValue = value;

    // Format card number with spaces
    if (field === 'number') {
      formattedValue = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
      if (formattedValue.length > 19) formattedValue = formattedValue.slice(0, 19);
    }

    // Format expiry date
    if (field === 'expiry') {
      formattedValue = value.replace(/\D/g, '').replace(/(\d{2})(\d{2})/, '$1/$2');
      if (formattedValue.length > 5) formattedValue = formattedValue.slice(0, 5);
    }

    // Limit CVV length
    if (field === 'cvv') {
      formattedValue = value.replace(/\D/g, '').slice(0, 4);
    }

    dispatch(updateCardDetails({ [field]: formattedValue }));

    // Clear error for this field
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Card number validation
    const cardNumber = cardDetails.number.replace(/\s/g, '');
    if (!cardNumber || cardNumber.length < 13 || cardNumber.length > 19) {
      newErrors.number = 'Please enter a valid card number';
    }

    // Expiry validation
    const [month, year] = cardDetails.expiry.split('/');
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100;
    const currentMonth = currentDate.getMonth() + 1;

    if (!cardDetails.expiry || cardDetails.expiry.length !== 5) {
      newErrors.expiry = 'Please enter a valid expiry date';
    } else if (parseInt(year) < currentYear || (parseInt(year) === currentYear && parseInt(month) < currentMonth)) {
      newErrors.expiry = 'Card has expired';
    }

    // CVV validation
    if (!cardDetails.cvv || cardDetails.cvv.length < 3) {
      newErrors.cvv = 'Please enter a valid CVV';
    }

    // Card name validation
    if (!cardDetails.name || cardDetails.name.trim().length < 2) {
      newErrors.name = 'Please enter the cardholder name';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, proceed with payment
      console.log('Card details are valid:', cardDetails);
    }
  };

  return (
    <Card className="shadow-lg border-slate-100">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold text-slate-900 flex items-center">
          <CreditCard className="w-6 h-6 mr-2 text-blue-600" />
          Card Details
        </CardTitle>
        <p className="text-sm text-slate-600 mt-1">
          Enter your card information securely
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Card Number */}
          <div className="space-y-2">
            <Label htmlFor="cardNumber" className="text-sm font-medium text-slate-700">
              Card Number
            </Label>
            <div className="relative">
              <Input
                id="cardNumber"
                type="text"
                placeholder="1234 5678 9012 3456"
                value={cardDetails.number}
                onChange={(e) => handleInputChange('number', e.target.value)}
                className={`pl-4 pr-4 ${errors.number ? 'border-red-500' : ''}`}
              />
              <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
            </div>
            {errors.number && (
              <p className="text-sm text-red-600">{errors.number}</p>
            )}
          </div>

          {/* Expiry and CVV */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expiry" className="text-sm font-medium text-slate-700">
                Expiry Date
              </Label>
              <Input
                id="expiry"
                type="text"
                placeholder="MM/YY"
                value={cardDetails.expiry}
                onChange={(e) => handleInputChange('expiry', e.target.value)}
                className={errors.expiry ? 'border-red-500' : ''}
              />
              {errors.expiry && (
                <p className="text-sm text-red-600">{errors.expiry}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="cvv" className="text-sm font-medium text-slate-700">
                CVV
              </Label>
              <div className="relative">
                <Input
                  id="cvv"
                  type={showCvv ? 'text' : 'password'}
                  placeholder="123"
                  value={cardDetails.cvv}
                  onChange={(e) => handleInputChange('cvv', e.target.value)}
                  className={`pr-10 ${errors.cvv ? 'border-red-500' : ''}`}
                />
                <button
                  type="button"
                  onClick={() => setShowCvv(!showCvv)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showCvv ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.cvv && (
                <p className="text-sm text-red-600">{errors.cvv}</p>
              )}
            </div>
          </div>

          {/* Cardholder Name */}
          <div className="space-y-2">
            <Label htmlFor="cardName" className="text-sm font-medium text-slate-700">
              Cardholder Name
            </Label>
            <Input
              id="cardName"
              type="text"
              placeholder="John Doe"
              value={cardDetails.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className={errors.name ? 'border-red-500' : ''}
            />
            {errors.name && (
              <p className="text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          {/* Save Card Option */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="saveCard"
              checked={saveCard}
              onCheckedChange={setSaveCard}
            />
            <Label htmlFor="saveCard" className="text-sm text-slate-600">
              Save card for future payments
            </Label>
          </div>

          {/* Security Notice */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-blue-900">Secure Payment</h4>
                <p className="text-sm text-blue-700 mt-1">
                  Your card information is encrypted and secure. We use industry-standard SSL encryption to protect your data.
                </p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700"
            size="lg"
          >
            <Lock className="w-4 h-4 mr-2" />
            Complete Payment
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CardDetailsForm;