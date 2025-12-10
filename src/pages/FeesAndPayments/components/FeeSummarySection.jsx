import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DollarSign, TrendingUp, TrendingDown, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { feeData } from '@/lib/mockData';

const FeeSummarySection = () => {
  const { summary } = feeData;
  const totalProgress = (summary.totalPaid / summary.totalDue) * 100;

  return (
    <Card className="shadow-lg border-slate-100">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold text-slate-900 flex items-center">
          <DollarSign className="w-6 h-6 mr-2 text-green-600" />
          Fee Summary
        </CardTitle>
        <p className="text-sm text-slate-600 mt-1">
          Overview of your fee payment status
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-green-800">Paid</span>
              </div>
              <Badge className="bg-green-100 text-green-800">Completed</Badge>
            </div>
            <div className="text-2xl font-bold text-green-900">${summary.totalPaid.toLocaleString()}</div>
            <div className="text-sm text-green-700">Total amount paid</div>
          </div>

          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-yellow-600" />
                <span className="text-sm font-medium text-yellow-800">Pending</span>
              </div>
              <Badge className="bg-yellow-100 text-yellow-800">Outstanding</Badge>
            </div>
            <div className="text-2xl font-bold text-yellow-900">${summary.pending.toLocaleString()}</div>
            <div className="text-sm text-yellow-700">Amount due</div>
          </div>

          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <DollarSign className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-blue-800">Total Due</span>
              </div>
              <Badge className="bg-blue-100 text-blue-800">Required</Badge>
            </div>
            <div className="text-2xl font-bold text-blue-900">${summary.totalDue.toLocaleString()}</div>
            <div className="text-sm text-blue-700">Total fee amount</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-slate-700">Payment Progress</span>
            <span className="text-sm text-slate-600">{Math.round(totalProgress)}% Complete</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-3">
            <div
              className="bg-green-500 h-3 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${totalProgress}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-slate-500">
            <span>$0</span>
            <span>${summary.totalDue.toLocaleString()}</span>
          </div>
        </div>

        {/* Status Message */}
        <div className={`p-4 rounded-lg ${
          summary.pending === 0
            ? 'bg-green-50 border border-green-200'
            : 'bg-yellow-50 border border-yellow-200'
        }`}>
          <div className="flex items-start space-x-3">
            {summary.pending === 0 ? (
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
            )}
            <div>
              <h4 className={`font-semibold ${
                summary.pending === 0 ? 'text-green-900' : 'text-yellow-900'
              }`}>
                {summary.pending === 0 ? 'All Fees Paid' : 'Outstanding Balance'}
              </h4>
              <p className={`text-sm ${
                summary.pending === 0 ? 'text-green-700' : 'text-yellow-700'
              }`}>
                {summary.pending === 0
                  ? 'Congratulations! You have successfully paid all your fees for this term.'
                  : `You have an outstanding balance of $${summary.pending.toLocaleString()}. Please make payment to avoid penalties.`
                }
              </p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-200">
          <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Make Payment
          </button>
          <button className="flex-1 border border-slate-300 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors font-medium">
            View Payment History
          </button>
          <button className="flex-1 border border-slate-300 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors font-medium">
            Download Receipt
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeeSummarySection;