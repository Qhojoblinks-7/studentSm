import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const FeeCard = ({ fee, isLightBlue }) => (
  <Card className={`mb-1 rounded-lg shadow-sm border-none ${isLightBlue ? 'bg-blue-50' : ''}`}>
    <CardContent className="p-4">
      <div className="flex justify-between items-center gap-2 text-sm">
        <div className="flex-shrink-0 text-slate-900 font-semibold">
          {fee.date}
        </div>
        <div className="flex-1 text-center text-slate-700">
          {fee.academicYear}
        </div>
        <div className="flex-1 text-center text-slate-700">
          {fee.term}
        </div>
        <div className="flex-1 text-center text-slate-700">
          {fee.paymentId}
        </div>
        <div className="flex-1 text-center text-slate-700">
          {fee.receiptNo}
        </div>
        <div className="flex-1 text-center text-slate-700">
          {fee.description}
        </div>
        <div className="flex-1 text-center text-slate-700">
          {fee.remarks}
        </div>
        <div className="flex-1 text-right text-slate-700">
          GH₵{fee.bill.toFixed(2)}
        </div>
        <div className="flex-1 text-right text-slate-700">
          {fee.penalty}
        </div>
        <div className="flex-1 text-right font-semibold text-slate-900">
          GH₵{fee.payment.toFixed(2)}
        </div>
      </div>
    </CardContent>
  </Card>
);

export default FeeCard;