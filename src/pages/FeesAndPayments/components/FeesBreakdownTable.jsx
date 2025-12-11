import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import FeeCard from './FeeCard';

const FeesBreakdownTable = ({ expandedFees, onExpandedFeesChange, feeData, imageTotalBill, imageTotalPayment, imageBalance }) => (
  <Card className="shadow-lg border-slate-100 rounded-xl overflow-hidden">
    <CardHeader className="pb-2">
      <div className="flex justify-between items-center">
        <CardTitle className="text-xl font-bold text-slate-900">Fees Breakdown</CardTitle>
        <Button
            variant="link"
            className="text-blue-600 p-0 h-auto"
            onClick={() => onExpandedFeesChange(!expandedFees)}
        >
          {expandedFees ? 'See less' : 'See all'}
        </Button>
      </div>
    </CardHeader>
    <CardContent className="p-4">
      {/* Header Row */}
      <Card className="mb-2 rounded-lg shadow-sm border-slate-200 bg-blue-600">
        <CardContent className="p-4">
          <div className="flex justify-between items-center gap-2 text-sm font-bold text-white">
            <div className="flex-shrink-0">Payment Date</div>
            <div className="flex-1 text-center">Academic Year</div>
            <div className="flex-1 text-center">Term</div>
            <div className="flex-1 text-center">Payment ID</div>
            <div className="flex-1 text-center">E-Receipt NO.</div>
            <div className="flex-1 text-center">Description</div>
            <div className="flex-1 text-center">Remarks</div>
            <div className="flex-1 text-right">Bill (GH₵)</div>
            <div className="flex-1 text-right">Penalty</div>
            <div className="flex-1 text-right">Payment (GH₵)</div>
          </div>
        </CardContent>
      </Card>

      {/* Fee Cards */}
      <div className="space-y-1">
        {feeData.feesBreakdown.slice(0, expandedFees ? feeData.feesBreakdown.length : 3).map((fee, index) => (
          <FeeCard
            key={index}
            fee={fee}
            isLightBlue={index % 2 === 1}
          />
        ))}
      </div>

      {/* Totals and Balance Summary */}
      <div className="mt-4 border-slate-100 pt-4">
        <div className="grid grid-cols-10 gap-4 text-sm font-bold">
          <div className="col-span-7"></div>
          <div className="text-right">TOTAL (GH₵):</div>
          <div className="text-right">{imageTotalBill.toFixed(2)}</div>
          <div></div>
          <div className="text-right">{imageTotalPayment.toFixed(2)}</div>
        </div>
        <div className="grid grid-cols-10 gap-4 text-sm font-bold text-red-600 mt-2">
          <div className="col-span-9 text-right">Balance (GH₵):</div>
          <div className="text-right">{imageBalance.toFixed(2)}</div>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default FeesBreakdownTable;