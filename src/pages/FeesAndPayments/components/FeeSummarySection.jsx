import React from 'react';
import { CheckCircle, Clock, AlertTriangle, CreditCard, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FeeKpiCard from './FeeKpiCard';

const FeeSummarySection = ({ feeData, handleMakePayment, handlePrintStatement }) => (
  <div className="flex items-start justify-between">
    <div className="grid grid-cols-3 gap-6 w-3/4">
        <FeeKpiCard
            title="Total Paid"
            amount={feeData.summary.totalPaid}
            icon={CheckCircle}
            colorClass="text-green-600"
            dateInfo="This semester"
        />
        <FeeKpiCard
            title="Pending"
            amount={feeData.summary.pending}
            icon={Clock}
            colorClass="text-yellow-600"
            dateInfo="Due Nov 15"
        />
        <FeeKpiCard
            title="Total Due"
            amount={feeData.summary.totalDue}
            icon={AlertTriangle}
            colorClass="text-red-600"
            dateInfo="This semester"
        />
    </div>
    
    {/* Action Buttons */}
    <div className="flex flex-col space-y-3 pt-2 w-1/4 items-end pl-6">
        <Button
            className="bg-blue-600 hover:bg-blue-700 text-white w-full"
            onClick={handleMakePayment}
        >
            <CreditCard className="w-4 h-4 mr-2" />
            Make Payment
        </Button>
        <Button
            variant="outline"
            className="text-slate-700 border-slate-300 hover:bg-slate-100 w-full"
            onClick={handlePrintStatement}
        >
            <Printer className="w-4 h-4 mr-2" />
            Print Statement
        </Button>
    </div>
  </div>
);

export default FeeSummarySection;