import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DollarSign } from 'lucide-react';

// Shadcn Components
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

import { feeData } from '@/lib/mockData';
import MakePaymentModal from '../src/components/MakePaymentModal.jsx';
import FeesPayments from '../src/pages/FeesPayments/FeesPayments.jsx';
import { setExpandedHistory, setIsPaymentModalOpen, setShowPaymentPage } from '../src/store/feesAndPaymentsSlice';

// --- Handy Component: Fee KPI Card ---
const FeeKpiCard = ({ title, amount, icon: Icon, colorClass, dateInfo }) => (
  <Card className="shadow-lg border-none bg-gradient-to-r from-[#CDFFFB]/50 via-[#FFEDED]/10 via-[#E5FEE9]/25 to-[#D8DAFE]/50 transition-colors">
    <CardContent className="p-4">
      <div className="flex items-center justify-between mb-3">
        <CardTitle className="text-lg font-semibold text-slate-900 flex items-center">
          <Icon className={`w-4 h-4 mr-2 ${colorClass}`} />
          {title}
        </CardTitle>
      </div>

      <p className="text-xl font-extrabold text-slate-900 mb-1">
        {new Intl.NumberFormat('en-GH', { style: 'currency', currency: 'GHS', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount)}
      </p>

      <div className="flex justify-between items-center text-xs mt-3">
        <p className="text-slate-500 whitespace-nowrap">{dateInfo}</p>
      </div>
    </CardContent>
  </Card>
);

// --- Sub-Component: Mobile Fee Card ---
const MobileFeeCard = ({ fee, isLightBlue }) => (
  <div className={`p-4 rounded-lg shadow-sm border border-slate-100 mb-4 ${isLightBlue ? 'bg-blue-50' : 'bg-white'}`}>
    <div className="space-y-2 text-sm">
      <div><strong>Payment Date:</strong> {fee.date}</div>
      <div><strong>Academic Year:</strong> {fee.academicYear}</div>
      <div><strong>Term:</strong> {fee.term}</div>
      <div><strong>Payment ID:</strong> {fee.paymentId}</div>
      <div><strong>E-Receipt NO.:</strong> {fee.receiptNo}</div>
      <div><strong>Description:</strong> {fee.description}</div>
      <div><strong>Remarks:</strong> {fee.remarks}</div>
      <div><strong>Bill:</strong> GH₵{fee.bill.toFixed(2)}</div>
      <div><strong>Penalty:</strong> {fee.penalty}</div>
      <div><strong>Payment:</strong> GH₵{fee.payment.toFixed(2)}</div>
    </div>
  </div>
);

// --- Main Component: MobileFeeAndPayment ---
const MobileFeeAndPayment = () => {
  const { expandedHistory, isPaymentModalOpen, showPaymentPage } = useSelector(state => state.feesAndPayments);
  const dispatch = useDispatch();

  // Hardcoded totals from the image for visual accuracy
  const imageTotalBill = 6945.00;
  const imageTotalPayment = 6945.25;
  const imageBalance = 0.25;

  // Group fees by term
  const groupedFees = feeData.feesBreakdown.reduce((acc, fee) => {
    if (!acc[fee.term]) {
      acc[fee.term] = [];
    }
    acc[fee.term].push(fee);
    return acc;
  }, {});

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
      <div className="p-4 space-y-6 md:hidden">
        {/* Header for Payment Page */}
        <Breadcrumb>
          <BreadcrumbList className="text-xl font-extrabold text-slate-900 tracking-tight">
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="text-slate-500">Dashboard</BreadcrumbLink>
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
        <p className="text-sm text-slate-600 mt-1">
          Complete your payment securely.
        </p>

        <Separator className="bg-slate-200" />

        <FeesPayments onCancel={() => {
          dispatch(setShowPaymentPage(false));
          dispatch(setIsPaymentModalOpen(true));
        }} />
      </div>
    );
  }

  return (
    <div className="p-4 space-y-6 md:hidden">
      {/* Page Header */}
      <Breadcrumb>
        <BreadcrumbList className="text-xl font-extrabold text-slate-900 tracking-tight">
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="text-slate-500">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-base text-slate-500">/</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage className="font-bold text-base">Fees and Payment</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <p className="text-sm text-slate-600 mt-1">
        Manage your fee payment and view history.
      </p>

      <Separator className="bg-slate-200" />

      {/* Fee Summary KPIs in Carousel */}
      <Carousel className="w-full">
        <CarouselContent>
          <CarouselItem>
            <FeeKpiCard
              title="Total Paid"
              amount={feeData.summary.totalPaid}
              icon={() => <span>✓</span>} // Placeholder, use CheckCircle
              colorClass="text-green-600"
              dateInfo="This semester"
            />
          </CarouselItem>
          <CarouselItem>
            <FeeKpiCard
              title="Pending"
              amount={feeData.summary.pending}
              icon={() => <span>⏳</span>} // Placeholder
              colorClass="text-yellow-600"
              dateInfo="Due Nov 15"
            />
          </CarouselItem>
          <CarouselItem>
            <FeeKpiCard
              title="Total Due"
              amount={feeData.summary.totalDue}
              icon={() => <span>⚠</span>} // Placeholder
              colorClass="text-red-600"
              dateInfo="This semester"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      {/* Action Buttons */}
      <div className="space-y-3">
        <Button
          className="bg-blue-600 hover:bg-blue-700 text-white w-full"
          onClick={handleMakePayment}
        >
          Make Payment
        </Button>
        <Button
          variant="outline"
          className="text-slate-700 border-slate-300 hover:bg-slate-100 w-full"
          onClick={handlePrintStatement}
        >
          Print Statement
        </Button>
      </div>

      {/* Fees Breakdown */}
      <Card className="shadow-lg border-slate-100 rounded-xl overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-bold text-slate-900">Fees Breakdown</CardTitle>
        </CardHeader>
        <CardContent className="p-4 space-y-4">
          <Accordion type="single" collapsible className="w-full">
            {Object.keys(groupedFees).map((term) => (
              <AccordionItem key={term} value={term}>
                <AccordionTrigger className="text-lg font-semibold text-slate-800">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-5 h-5 text-blue-600" />
                    <span>Term {term}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    {groupedFees[term].map((fee, index) => (
                      <Card key={index} className="shadow-sm border-slate-200">
                        <CardContent className="p-4">
                          <div className="space-y-2 text-sm">
                            <div><strong>Payment Date:</strong> {fee.date}</div>
                            <div><strong>Academic Year:</strong> {fee.academicYear}</div>
                            <div><strong>Payment ID:</strong> {fee.paymentId}</div>
                            <div><strong>E-Receipt NO.:</strong> {fee.receiptNo}</div>
                            <div><strong>Description:</strong> {fee.description}</div>
                            <div><strong>Remarks:</strong> {fee.remarks}</div>
                            <div><strong>Bill:</strong> GH₵{fee.bill.toFixed(2)}</div>
                            <div><strong>Penalty:</strong> {fee.penalty}</div>
                            <div><strong>Payment:</strong> GH₵{fee.payment.toFixed(2)}</div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Totals */}
          <div className="mt-4 pt-4 border-t border-slate-100">
            <div className="text-sm font-bold">
              <div className="flex justify-between">
                <span>TOTAL (GH₵):</span>
                <span>{imageTotalBill.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mt-2">
                <span>Payment (GH₵):</span>
                <span>{imageTotalPayment.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mt-2 text-red-600">
                <span>Balance (GH₵):</span>
                <span>{imageBalance.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment History */}
      <Card className="shadow-lg border-slate-100 rounded-xl overflow-hidden">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg font-bold text-slate-900">Payment History</CardTitle>
            <Button
              variant="link"
              className="text-blue-600 p-0 h-auto text-sm"
              onClick={() => dispatch(setExpandedHistory(!expandedHistory))}
            >
              {expandedHistory ? 'See less' : 'See all'}
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-4 space-y-4">
          {feeData.paymentHistory.slice(0, expandedHistory ? feeData.paymentHistory.length : 2).map((history, index) => (
            <div key={index} className="flex justify-between items-center p-4 border border-slate-300 rounded-lg">
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

export default MobileFeeAndPayment;