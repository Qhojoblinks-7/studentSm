import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PaymentHistorySection = ({ expandedHistory, onExpandedHistoryChange, feeData, handleAccessReceipt }) => (
  <Card className="shadow-lg border-slate-100">
    <CardHeader className="flex flex-row items-center justify-between">
      <CardTitle className="text-xl font-bold text-slate-900">
        Payment History
      </CardTitle>
      <Button
        variant="link"
        className="text-blue-600 p-0 h-auto"
        onClick={() => onExpandedHistoryChange(!expandedHistory)}
      >
        {expandedHistory ? 'See less' : 'See all'}
      </Button>
    </CardHeader>
    <CardContent className="space-y-4 p-6 pt-4">
        {feeData.paymentHistory.slice(0, expandedHistory ? feeData.paymentHistory.length : 2).map((history, index) => (
            <div key={index} className="flex justify-between items-center p-4 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
                <div>
                    <p className="font-semibold text-slate-800">{history.title}</p>
                    <p className="text-sm text-slate-500">{history.status}</p>
                    <p className="text-xs text-green-600">{history.match}</p>
                </div>
                <Button
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => handleAccessReceipt(history.title)}
                >
                    Access
                </Button>
            </div>
        ))}
    </CardContent>
  </Card>
);

export default PaymentHistorySection;