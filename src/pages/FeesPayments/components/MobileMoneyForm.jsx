import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Smartphone, CheckCircle, AlertCircle, Loader2, MessageSquare } from 'lucide-react';

// Shadcn Components
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Redux
import { updateMobileMoney } from '@/store/feesPaymentsSlice';

const MobileMoneyForm = () => {
  const dispatch = useDispatch();
  const { mobileMoney } = useSelector(state => state.feesPayments);

  const [verificationCode, setVerificationCode] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1); // 1: Enter details, 2: Verify code

  const providers = [
    {
      id: 'mtn',
      name: 'MTN Mobile Money',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      logo: 'MTN'
    },
    {
      id: 'vodafone',
      name: 'Vodafone Cash',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      logo: 'Voda'
    },
    {
      id: 'airteltigo',
      name: 'AirtelTigo Money',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      logo: 'Airtel'
    }
  ];

  const handleProviderChange = (providerId) => {
    dispatch(updateMobileMoney({ provider: providerId }));
    setErrors(prev => ({ ...prev, provider: null }));
  };

  const handleNumberChange = (value) => {
    // Format Ghanaian phone numbers
    let formatted = value.replace(/\D/g, '');
    if (formatted.startsWith('233')) {
      formatted = '0' + formatted.slice(3);
    }
    if (formatted.length > 10) formatted = formatted.slice(0, 10);

    dispatch(updateMobileMoney({ number: formatted }));
    setErrors(prev => ({ ...prev, number: null }));
  };

  const validatePhoneNumber = (number) => {
    // Ghanaian phone number validation
    const ghanaRegex = /^0(2[0346789]|5[0456789]|24|54|55|59|27|57|26|56|25|23)\d{7}$/;
    return ghanaRegex.test(number);
  };

  const handleSendVerification = async () => {
    const newErrors = {};

    if (!mobileMoney.provider) {
      newErrors.provider = 'Please select a mobile money provider';
    }

    if (!mobileMoney.number) {
      newErrors.number = 'Please enter your phone number';
    } else if (!validatePhoneNumber(mobileMoney.number)) {
      newErrors.number = 'Please enter a valid Ghanaian phone number';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsVerifying(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setStep(2);
      setIsVerifying(false);
    } catch (error) {
      setErrors({ general: 'Failed to send verification code. Please try again.' });
      setIsVerifying(false);
    }
  };

  const handleVerifyCode = async () => {
    if (!verificationCode || verificationCode.length !== 4) {
      setErrors({ code: 'Please enter a valid 4-digit code' });
      return;
    }

    setIsVerifying(true);
    try {
      // Simulate verification
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsVerified(true);
      setStep(3);
    } catch (error) {
      setErrors({ code: 'Invalid verification code. Please try again.' });
    } finally {
      setIsVerifying(false);
    }
  };

  const handleCompletePayment = () => {
    // Payment completion logic would go here
    console.log('Mobile money payment completed');
  };

  const selectedProvider = providers.find(p => p.id === mobileMoney.provider);

  return (
    <Card className="shadow-lg border-slate-100">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold text-slate-900 flex items-center">
          <Smartphone className="w-6 h-6 mr-2 text-green-600" />
          Mobile Money Payment
        </CardTitle>
        <p className="text-sm text-slate-600 mt-1">
          Pay securely using your mobile money account
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {step === 1 && (
          <>
            {/* Provider Selection */}
            <div className="space-y-3">
              <Label className="text-sm font-medium text-slate-700">
                Select Mobile Money Provider
              </Label>
              <div className="grid grid-cols-1 gap-3">
                {providers.map((provider) => (
                  <div
                    key={provider.id}
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      mobileMoney.provider === provider.id
                        ? `${provider.borderColor} ${provider.bgColor}`
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                    onClick={() => handleProviderChange(provider.id)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 ${provider.bgColor} rounded-lg flex items-center justify-center`}>
                        <span className={`font-bold ${provider.color}`}>{provider.logo}</span>
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">{provider.name}</p>
                        <p className="text-sm text-slate-600">Fast and secure payments</p>
                      </div>
                      {mobileMoney.provider === provider.id && (
                        <CheckCircle className="w-5 h-5 text-green-600 ml-auto" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {errors.provider && (
                <p className="text-sm text-red-600">{errors.provider}</p>
              )}
            </div>

            {/* Phone Number Input */}
            <div className="space-y-2">
              <Label htmlFor="phoneNumber" className="text-sm font-medium text-slate-700">
                Phone Number
              </Label>
              <Input
                id="phoneNumber"
                type="tel"
                placeholder="024 123 4567"
                value={mobileMoney.number}
                onChange={(e) => handleNumberChange(e.target.value)}
                className={errors.number ? 'border-red-500' : ''}
              />
              {errors.number && (
                <p className="text-sm text-red-600">{errors.number}</p>
              )}
              <p className="text-xs text-slate-500">
                Enter your registered mobile money number
              </p>
            </div>

            {/* Send Verification Button */}
            <Button
              onClick={handleSendVerification}
              disabled={isVerifying}
              className="w-full bg-green-600 hover:bg-green-700"
            >
              {isVerifying ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Sending Code...
                </>
              ) : (
                <>
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Send Verification Code
                </>
              )}
            </Button>
          </>
        )}

        {step === 2 && (
          <>
            {/* Verification Code Input */}
            <div className="text-center space-y-4">
              <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  Verification Code Sent!
                </h3>
                <p className="text-green-700">
                  We've sent a 4-digit code to {mobileMoney.number}
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="verificationCode" className="text-sm font-medium text-slate-700">
                  Enter Verification Code
                </Label>
                <Input
                  id="verificationCode"
                  type="text"
                  placeholder="1234"
                  value={verificationCode}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '').slice(0, 4);
                    setVerificationCode(value);
                    setErrors(prev => ({ ...prev, code: null }));
                  }}
                  className={`text-center text-2xl font-bold tracking-widest ${errors.code ? 'border-red-500' : ''}`}
                  maxLength={4}
                />
                {errors.code && (
                  <p className="text-sm text-red-600">{errors.code}</p>
                )}
              </div>

              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  onClick={() => setStep(1)}
                  className="flex-1"
                >
                  Back
                </Button>
                <Button
                  onClick={handleVerifyCode}
                  disabled={isVerifying || verificationCode.length !== 4}
                  className="flex-1 bg-green-600 hover:bg-green-700"
                >
                  {isVerifying ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Verifying...
                    </>
                  ) : (
                    'Verify Code'
                  )}
                </Button>
              </div>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            {/* Payment Success */}
            <div className="text-center space-y-6">
              <div className="p-8 bg-green-50 border border-green-200 rounded-lg">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-900 mb-2">
                  Payment Verified Successfully!
                </h3>
                <p className="text-green-700 mb-4">
                  Your mobile money payment has been authorized
                </p>
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <p className="text-sm text-slate-600">
                    <strong>Provider:</strong> {selectedProvider?.name}
                  </p>
                  <p className="text-sm text-slate-600">
                    <strong>Number:</strong> {mobileMoney.number}
                  </p>
                </div>
              </div>

              <Button
                onClick={handleCompletePayment}
                className="w-full bg-green-600 hover:bg-green-700"
                size="lg"
              >
                Complete Payment
              </Button>
            </div>
          </>
        )}

        {/* Security Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-blue-900">Secure Payment</h4>
              <p className="text-sm text-blue-700 mt-1">
                Your mobile money details are encrypted and secure. We use bank-level security to protect your information.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MobileMoneyForm;