import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowLeft, ArrowRight, CheckCircle, X, Loader2 } from 'lucide-react';

// Shadcn Components
import { Button } from '@/components/ui/button';

// Redux
import { paymentStart, paymentSuccess, paymentFailure, resetPaymentState } from '@/store/feesPaymentsSlice';

const ActionButtons = ({
  currentStep,
  totalSteps,
  onNext,
  onPrevious,
  onCancel,
  onComplete,
  nextDisabled = false,
  previousDisabled = false,
  showCancel = true,
  showComplete = false,
  completeText = 'Complete Payment'
}) => {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector(state => state.feesPayments);

  const handleComplete = async () => {
    if (onComplete) {
      dispatch(paymentStart());
      try {
        // Simulate payment processing
        await new Promise(resolve => setTimeout(resolve, 2000));
        dispatch(paymentSuccess());
        onComplete();
      } catch (err) {
        dispatch(paymentFailure('Payment failed. Please try again.'));
      }
    }
  };

  const handleCancel = () => {
    dispatch(resetPaymentState());
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <div className="flex items-center justify-between pt-6 border-t border-slate-200">
      {/* Left side - Previous/Cancel */}
      <div className="flex items-center space-x-3">
        {currentStep > 1 && (
          <Button
            variant="outline"
            onClick={onPrevious}
            disabled={previousDisabled || loading}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous</span>
          </Button>
        )}

        {showCancel && (
          <Button
            variant="ghost"
            onClick={handleCancel}
            disabled={loading}
            className="text-slate-600 hover:text-slate-800"
          >
            <X className="w-4 h-4 mr-2" />
            Cancel
          </Button>
        )}
      </div>

      {/* Right side - Next/Complete */}
      <div className="flex items-center space-x-3">
        {/* Error State */}
        {error && (
          <div className="text-sm text-red-600 mr-4">
            {error}
          </div>
        )}

        {/* Success State */}
        {success && (
          <div className="flex items-center text-sm text-green-600 mr-4">
            <CheckCircle className="w-4 h-4 mr-2" />
            Payment successful!
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex items-center text-sm text-blue-600 mr-4">
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Processing payment...
          </div>
        )}

        {/* Next Button */}
        {!showComplete && currentStep < totalSteps && (
          <Button
            onClick={onNext}
            disabled={nextDisabled || loading}
            className="flex items-center space-x-2"
          >
            <span>Next</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        )}

        {/* Complete Button */}
        {showComplete && (
          <Button
            onClick={handleComplete}
            disabled={loading || success}
            className="flex items-center space-x-2 bg-green-600 hover:bg-green-700"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                <span>Processing...</span>
              </>
            ) : success ? (
              <>
                <CheckCircle className="w-4 h-4 mr-2" />
                <span>Completed</span>
              </>
            ) : (
              <>
                <CheckCircle className="w-4 h-4 mr-2" />
                <span>{completeText}</span>
              </>
            )}
          </Button>
        )}
      </div>

      {/* Step Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center space-x-2 text-sm text-slate-500">
          <span>Step {currentStep} of {totalSteps}</span>
          <div className="flex space-x-1">
            {Array.from({ length: totalSteps }, (_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i + 1 <= currentStep ? 'bg-blue-600' : 'bg-slate-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionButtons;