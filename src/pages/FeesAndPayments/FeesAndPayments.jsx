import React from 'react';
import { useSelector } from 'react-redux';
import { DollarSign, CreditCard, Receipt, TrendingUp } from 'lucide-react';

// Shadcn Components
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Components
import FeeCard from './components/FeeCard';
import FeeSummarySection from './components/FeeSummarySection';
import FeesBreakdownTable from './components/FeesBreakdownTable';
import PaymentHistorySection from './components/PaymentHistorySection';

// Data
import { feeData, headmasterKPIData } from '@/lib/mockData';

const FeesAndPayments = () => {
  const feeKPIs = headmasterKPIData.filter(kpi =>
    ['Total Enrollment', 'Academic Success Rate', 'Budget Surplus/Deficit'].includes(kpi.title)
  );

  return (
    <div className="p-0 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Fees & Payments
          </h1>
          <p className="text-sm lg:text-md text-slate-600 mt-1">
            Manage your school fees, payments, and financial records
          </p>
        </div>

        {/* Quick Actions */}
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Receipt className="w-4 h-4 mr-2" />
            Download Statement
          </Button>
          <Button>
            <CreditCard className="w-4 h-4 mr-2" />
            Make Payment
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {feeKPIs.map((kpi) => (
          <FeeCard
            key={kpi.id}
            title={kpi.title}
            value={kpi.value}
            subtext={kpi.unit}
            trend={kpi.trend}
            trendDirection={kpi.trendDirection}
            icon={DollarSign}
          />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          <FeeSummarySection />
          <PaymentHistorySection />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <FeesBreakdownTable />

          {/* Quick Payment Options */}
          <Card className="shadow-lg border-slate-100">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-bold text-slate-900 flex items-center">
                <CreditCard className="w-5 h-5 mr-2 text-blue-600" />
                Quick Payment
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="h-16 flex flex-col items-center justify-center">
                  <CreditCard className="w-6 h-6 mb-1" />
                  <span className="text-sm">Card Payment</span>
                </Button>
                <Button variant="outline" className="h-16 flex flex-col items-center justify-center">
                  <DollarSign className="w-6 h-6 mb-1" />
                  <span className="text-sm">Bank Transfer</span>
                </Button>
                <Button variant="outline" className="h-16 flex flex-col items-center justify-center">
                  <Receipt className="w-6 h-6 mb-1" />
                  <span className="text-sm">Mobile Money</span>
                </Button>
                <Button variant="outline" className="h-16 flex flex-col items-center justify-center">
                  <TrendingUp className="w-6 h-6 mb-1" />
                  <span className="text-sm">Installments</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FeesAndPayments;