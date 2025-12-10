import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CheckCircle, AlertTriangle, CreditCard, Smartphone, DollarSign, FileText, Shield } from 'lucide-react';

// Shadcn Components
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

// Redux
import { paymentStart, paymentSuccess, paymentFailure } from '@/store/feesPaymentsSlice';

const ConfirmationSection = ({ onSuccess, onCancel }) => {
  const dispatch = useDispatch();
  const { paymentMethod, cardDetails, mobileMoney } = useSelector(state => state.feesPayments);

  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // Mock payment amount - in real app this would come from props or state
  const paymentAmount = 14500;
  const paymentDescription = 'Term 2 Tuition Fees';

  const getPaymentMethodDetails = () => {
    switch (paymentMethod) {
      case 'card':
        return {
          icon: CreditCard,
          title: 'Credit/Debit Card',
          details: `**** **** **** ${cardDetails.number.slice(-4)}`,
          color: 'text-blue-600'
        };
      case 'mobile':
        return {
          icon: Smartphone,
          title: 'Mobile Money',
          details: `${mobileMoney.number}`,
          color: 'text-green-600'
        };
      case 'bank':
        return {
          icon: DollarSign,
          title: 'Bank Transfer',
          details: 'Direct bank account transfer',
          color: 'text-purple-600'
        };
      case 'cash':
        return {
          icon: DollarSign,
          title: 'Cash Payment',
          details: 'In-person payment at office',
          color: 'text-orange-600'
        };
      default:
        return {
          icon: CreditCard,
          title: 'Payment Method',
          details: 'Not selected',
          color: 'text-slate-600'
        };
    }
  };

  const paymentMethodInfo = getPaymentMethodDetails();
  const PaymentIcon = paymentMethodInfo.icon;

  const handleConfirmPayment = async () => {
    if (!acceptTerms) {
      return;
    }

    setIsProcessing(true);
    dispatch(paymentStart());

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 3000));
      dispatch(paymentSuccess());

      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      dispatch(paymentFailure('Payment failed. Please try again.'));
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Card className="shadow-lg border-slate-100">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold text-slate-900 flex items-center">
          <CheckCircle className="w-6 h-6 mr-2 text-green-600" />
          Confirm Payment
        </CardTitle>
        <p className="text-sm text-slate-600 mt-1">
          Please review your payment details before proceeding
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Payment Summary */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Payment Summary</h3>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Description</span>
              <span className="font-medium text-slate-900">{paymentDescription}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-slate-600">Amount</span>
              <span className="text-2xl font-bold text-slate-900">
                ${paymentAmount.toLocaleString()}
              </span>
            </div>

            <Separator />

            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-slate-900">Total</span>
              <span className="text-2xl font-bold text-green-600">
                ${paymentAmount.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="border border-slate-200 rounded-lg p-4">
          <h4 className="text-sm font-semibold text-slate-900 mb-3">Payment Method</h4>

          <div className="flex items-center space-x-3">
            <div className="p-2 bg-slate-100 rounded-lg">
              <PaymentIcon className={`w-5 h-5 ${paymentMethodInfo.color}`} />
            </div>
            <div>
              <p className="font-medium text-slate-900">{paymentMethodInfo.title}</p>
              <p className="text-sm text-slate-600">{paymentMethodInfo.details}</p>
            </div>
            <Badge className="ml-auto bg-green-100 text-green-800">
              Selected
            </Badge>
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-yellow-900">Important Notes</h4>
              <ul className="text-sm text-yellow-800 mt-2 space-y-1">
                <li>• This payment is non-refundable once processed</li>
                <li>• Receipt will be sent to your registered email</li>
                <li>• Processing may take 1-3 business days</li>
                <li>• Contact support if you have any questions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <Checkbox
              id="terms"
              checked={acceptTerms}
              onCheckedChange={setAcceptTerms}
              className="mt-1"
            />
            <div className="flex-1">
              <label htmlFor="terms" className="text-sm text-slate-700 cursor-pointer">
                I agree to the{' '}
                <button className="text-blue-600 hover:text-blue-800 underline">
                  Terms and Conditions
                </button>
                {' '}and{' '}
                <button className="text-blue-600 hover:text-blue-800 underline">
                  Privacy Policy
                </button>
              </label>
              <p className="text-xs text-slate-500 mt-1">
                By proceeding, you authorize this payment and acknowledge our terms.
              </p>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-blue-900">Secure Payment</h4>
              <p className="text-sm text-blue-700 mt-1">
                Your payment information is encrypted and processed securely. We use industry-standard SSL encryption and comply with PCI DSS standards.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4 pt-4">
          <Button
            variant="outline"
            onClick={onCancel}
            disabled={isProcessing}
            className="flex-1"
          >
            Cancel
          </Button>
          <Button
            onClick={handleConfirmPayment}
            disabled={!acceptTerms || isProcessing}
            className="flex-1 bg-green-600 hover:bg-green-700"
          >
            {isProcessing ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                Processing...
              </>
            ) : (
              <>
                <CheckCircle className="w-4 h-4 mr-2" />
                Confirm Payment
              </>
            )}
          </Button>
        </div>

        {/* Help Text */}
        <div className="text-center">
          <p className="text-xs text-slate-500">
            Need help? Contact our support team at{' '}
            <a href="mailto:support@sms.edu" className="text-blue-600 hover:text-blue-800">
              support@sms.edu
            </a>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ConfirmationSection;