import React, { useState } from 'react';
import { History, Download, Calendar, DollarSign, CheckCircle, Clock, AlertCircle } from 'lucide-react';

// Shadcn Components
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Mock data - in real app this would come from props or Redux
import { feeData } from '@/lib/mockData';

const PaymentHistorySection = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('all');

  const { paymentHistory } = feeData;

  // Filter data based on selected period
  const filteredHistory = paymentHistory.filter(item => {
    if (selectedPeriod === 'all') return true;

    const itemDate = new Date(item.status.split(' ')[1]);
    const now = new Date();
    const diffTime = Math.abs(now - itemDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    switch (selectedPeriod) {
      case '30days':
        return diffDays <= 30;
      case '90days':
        return diffDays <= 90;
      case '6months':
        return diffDays <= 180;
      case '1year':
        return diffDays <= 365;
      default:
        return true;
    }
  });

  const getStatusIcon = (status) => {
    if (status.includes('Paid')) {
      return <CheckCircle className="w-5 h-5 text-green-600" />;
    } else if (status.includes('Pending')) {
      return <Clock className="w-5 h-5 text-yellow-600" />;
    } else {
      return <AlertCircle className="w-5 h-5 text-red-600" />;
    }
  };

  const getStatusBadge = (status) => {
    if (status.includes('Paid')) {
      return <Badge className="bg-green-100 text-green-800">Paid</Badge>;
    } else if (status.includes('Pending')) {
      return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
    } else {
      return <Badge className="bg-red-100 text-red-800">Overdue</Badge>;
    }
  };

  const getMatchBadge = (match) => {
    const matchValue = parseInt(match);
    if (matchValue >= 95) {
      return <Badge className="bg-green-100 text-green-800">Excellent Match</Badge>;
    } else if (matchValue >= 85) {
      return <Badge className="bg-blue-100 text-blue-800">Good Match</Badge>;
    } else {
      return <Badge className="bg-yellow-100 text-yellow-800">Fair Match</Badge>;
    }
  };

  const handleDownloadReceipt = (item) => {
    // In real app, this would trigger a download
    console.log('Downloading receipt for:', item);
    // Simulate download
    const receiptData = {
      title: item.title,
      status: item.status,
      match: item.match,
      downloadDate: new Date().toISOString()
    };

    const dataStr = JSON.stringify(receiptData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);

    const exportFileDefaultName = `receipt-${item.title.replace(/\s+/g, '-').toLowerCase()}.json`;

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  return (
    <Card className="shadow-lg border-slate-100">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold text-slate-900 flex items-center">
          <History className="w-6 h-6 mr-2 text-purple-600" />
          Payment History
        </CardTitle>
        <p className="text-sm text-slate-600 mt-1">
          Track your payment history and download receipts
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Period Filter */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-slate-500" />
            <span className="text-sm font-medium text-slate-700">Filter by period:</span>
          </div>
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Time</SelectItem>
              <SelectItem value="30days">Last 30 Days</SelectItem>
              <SelectItem value="90days">Last 90 Days</SelectItem>
              <SelectItem value="6months">Last 6 Months</SelectItem>
              <SelectItem value="1year">Last Year</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Payment History List */}
        <div className="space-y-4">
          {filteredHistory.map((item, index) => (
            <div
              key={index}
              className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  {/* Status Icon */}
                  <div className="mt-1">
                    {getStatusIcon(item.status)}
                  </div>

                  {/* Payment Details */}
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-slate-900">{item.title}</h4>
                      <div className="flex items-center space-x-2">
                        {getStatusBadge(item.status)}
                        {getMatchBadge(item.match)}
                      </div>
                    </div>

                    <p className="text-sm text-slate-600">{item.status}</p>

                    <div className="flex items-center space-x-4 text-sm text-slate-500">
                      <div className="flex items-center space-x-1">
                        <DollarSign className="w-4 h-4" />
                        <span>AI Match: {item.match}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="ml-4">
                  {item.status.includes('Paid') && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDownloadReceipt(item)}
                      className="flex items-center space-x-1"
                    >
                      <Download className="w-3 h-3" />
                      <span>Receipt</span>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredHistory.length === 0 && (
          <div className="text-center py-12">
            <div className="text-slate-400 mb-4">
              <History className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-slate-900 mb-2">No payment history found</h3>
            <p className="text-slate-600">
              {selectedPeriod !== 'all'
                ? `No payments found for the selected period. Try selecting a different time range.`
                : 'Your payment history will appear here once you make payments.'
              }
            </p>
          </div>
        )}

        {/* Summary Stats */}
        {filteredHistory.length > 0 && (
          <div className="pt-4 border-t border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {filteredHistory.filter(item => item.status.includes('Paid')).length}
                </div>
                <div className="text-sm text-slate-600">Payments Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">
                  {filteredHistory.filter(item => item.status.includes('Pending')).length}
                </div>
                <div className="text-sm text-slate-600">Pending Payments</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {Math.round(filteredHistory.reduce((sum, item) => sum + parseInt(item.match), 0) / filteredHistory.length)}%
                </div>
                <div className="text-sm text-slate-600">Average AI Match</div>
              </div>
            </div>
          </div>
        )}

        {/* Help Text */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-blue-900">Need Help?</h4>
              <p className="text-sm text-blue-700 mt-1">
                If you have questions about your payment history or need assistance with receipts,
                contact our support team at{' '}
                <a href="mailto:support@sms.edu" className="text-blue-600 hover:text-blue-800 underline">
                  support@sms.edu
                </a>
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PaymentHistorySection;