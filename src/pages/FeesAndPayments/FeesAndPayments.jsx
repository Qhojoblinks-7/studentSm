import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Shadcn Components
import { Separator } from '@/components/ui/separator';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

import { feeData } from '@/lib/mockData';
import MakePaymentModal from '../../components/MakePaymentModal.jsx';
import FeesPayments from '../FeesPayments/FeesPayments.jsx';
import FeeSummarySection from './components/FeeSummarySection';
import FeesBreakdownTable from './components/FeesBreakdownTable';
import PaymentHistorySection from './components/PaymentHistorySection';
import { setExpandedFees, setExpandedHistory, setIsPaymentModalOpen, setShowPaymentPage } from '../../store/feesAndPaymentsSlice';


// --- Main Component: FeesAndPayments ---
const FeesAndPayments = () => {
  const { expandedFees, expandedHistory, isPaymentModalOpen, showPaymentPage } = useSelector(state => state.feesAndPayments);
  const dispatch = useDispatch();

  // Hardcoded totals from the image for visual accuracy
  const imageTotalBill = 6945.00;
  const imageTotalPayment = 6945.25;
  const imageBalance = 0.25;

  const handleMakePayment = () => {
    dispatch(setIsPaymentModalOpen(true));
  };

  const handlePrintStatement = () => {
    alert('Printing fee statement...');
    window.print();
  };

  const handleAccessReceipt = (title) => {
    alert(`Accessing receipt for: ${title}`);
    // In a real app, this would open/download the receipt
  };

  if (showPaymentPage) {
    return (
      <div className="p-0 space-y-8">
        {/* Header for Payment Page */}
        <div className="flex justify-between items-center">
          <div>
              <Breadcrumb>
                <BreadcrumbList className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/" className="text-slate-500">Student Dashboard</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="text-base text-slate-500">/</BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/fees-payments" className="text-slate-500">Fees and Payment</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="text-base text-slate-500">/</BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbPage className="font-bold text-base">Make Payment</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <p className="text-md text-slate-600 mt-1">
                  Complete your payment securely.
              </p>
          </div>
        </div>

        <Separator className="bg-slate-200" />

        <FeesPayments onCancel={() => {
          dispatch(setShowPaymentPage(false));
          dispatch(setIsPaymentModalOpen(true));
        }} />
      </div>
    );
  }

  return (
    <div className="p-0 space-y-8">

      {/* Header (Matching Dashboard image structure) */}
      <div className="flex justify-between items-center">
        <div>
            <Breadcrumb>
              <BreadcrumbList className="text-2xl font-extrabold text-slate-900 tracking-tight">
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="text-slate-500">Student Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-base text-slate-500">/</BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage className="font-bold text-base">Fees and Payment</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <p className="text-md text-slate-600 mt-1">
                Manage your fee payment and view history.
            </p>
        </div>
      </div>

      <Separator className="bg-slate-200" />
      
      {/* 1. Fee Summary KPIs and Action Buttons (Exact visual layout) */}
      <FeeSummarySection feeData={feeData} handleMakePayment={handleMakePayment} handlePrintStatement={handlePrintStatement} />
      
      {/* 2. Fees Breakdown Table */}
      <FeesBreakdownTable expandedFees={expandedFees} onExpandedFeesChange={(value) => dispatch(setExpandedFees(value))} feeData={feeData} imageTotalBill={imageTotalBill} imageTotalPayment={imageTotalPayment} imageBalance={imageBalance} />
      
      {/* 3. Payment History Section */}
      <PaymentHistorySection expandedHistory={expandedHistory} onExpandedHistoryChange={(value) => dispatch(setExpandedHistory(value))} feeData={feeData} handleAccessReceipt={handleAccessReceipt} />

      {/* Payment Modal */}
      <MakePaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => dispatch(setIsPaymentModalOpen(false))}
        onSubmit={(data) => {
          console.log("Final payment data:", data);
          // Handle final payment processing here
          dispatch(setIsPaymentModalOpen(false));
          dispatch(setShowPaymentPage(true));
        }}
      />
    </div>
  );
};

export default FeesAndPayments;