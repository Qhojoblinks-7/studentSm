import React from 'react';
import { 
  CheckSquare, Clock, XCircle, CreditCard, Printer, TrendingUp, DollarSign
} from 'lucide-react';

// Shadcn Components
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// Mock data (assuming the updated mock data is available)
const feeData = {
  summary: {
    totalPaid: 14500,
    pending: 300,
    totalDue: 14800,
  },
  feesBreakdown: [
    { date: '23-02-2024', academicYear: '2023/2024', term: 1, paymentId: 'PrudentialBank', receiptNo: '80T55800324', description: 'Tuition', remarks: '-', bill: 2105.00, penalty: '-', payment: 2105.00 },
    { date: '23-02-2024', academicYear: '2023/2024', term: 1, paymentId: 'PrudentialBank', receiptNo: '80T55800324', description: 'Payment of Tuition', remarks: 'Bank', bill: 2105.00, penalty: '-', payment: 2105.00 },
    { date: '23-02-2024', academicYear: '2023/2024', term: 2, paymentId: 'PrudentialBank', receiptNo: '80T55800324', description: 'Books', remarks: 'Bank', bill: 2105.00, penalty: '-', payment: 2105.00 },
    { date: '23-02-2024', academicYear: '2023/2024', term: 2, paymentId: 'PrudentialBank', receiptNo: '80T55800324', description: 'Payment of Books', remarks: 'Bank', bill: 2105.00, penalty: '-', payment: 2105.00 },
    { date: '23-02-2024', academicYear: '2023/2024', term: 3, paymentId: 'PrudentialBank', receiptNo: '80T55800324', description: 'Fees', remarks: 'Bank', bill: 2105.00, penalty: '-', payment: 2105.00 },
    { date: '23-02-2024', academicYear: '2023/2024', term: 3, paymentId: 'PrudentialBank', receiptNo: '80T55800324', description: 'Payment of Fees', remarks: 'Bank', bill: 2105.00, penalty: '-', payment: 2105.00 },
    { date: '23-02-2024', academicYear: '2023/2024', term: 2, paymentId: 'PrudentialBank', receiptNo: '80T55800324', description: 'Payment of Fees', remarks: 'Bank', bill: 2105.00, penalty: '-', payment: 2105.00 },
    { date: '23-02-2024', academicYear: '2023/2024', term: 2, paymentId: 'PrudentialBank', receiptNo: '80T55800324', description: 'Fees', remarks: 'Bank', bill: 2105.00, penalty: '-', payment: 2105.00 },
  ],
  paymentHistory: [
    { title: 'Tuition Fee', status: 'Paid on 2025-09-01', match: '95% match' },
    { title: 'Library Fee', status: 'Paid on 2025-09-01', match: '95% match' },
  ],
};

// --- Sub-Component: Fee KPI Card ---
const FeeKpiCard = ({ title, amount, icon: Icon, colorClass, dateInfo, iconBgClass }) => (
    <Card className="shadow-lg border-l-4 border-slate-100 bg-white">
        <CardContent className="p-4 flex items-center space-x-3">
            <div className={`p-2 rounded-full flex-shrink-0 ${iconBgClass}`}>
                <Icon className={`w-6 h-6 ${colorClass}`} />
            </div>
            <div>
                <p className={`text-sm font-medium ${colorClass}`}>{title}</p>
                <p className="text-2xl font-bold text-slate-900">
                    {new Intl.NumberFormat('en-GH', { style: 'currency', currency: 'GHS', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount)}
                </p>
                <p className="text-xs text-slate-400">{dateInfo}</p>
            </div>
        </CardContent>
    </Card>
);

// --- Main Component: FeesAndPayments ---
const FeesAndPayments = () => {
  
  // Hardcoded totals from the image for visual accuracy
  const imageTotalBill = 6945.00;
  const imageTotalPayment = 6945.25;
  const imageBalance = 0.25;

  return (
    <div className="p-0 space-y-8">
      
      {/* Header (Matching Dashboard image structure) */}
      <div className="flex justify-between items-center">
        <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Student Dashboard / Fees and Payment</h1>
            <p className="text-md text-slate-600 mt-1">
                Manage your fee payment and view history.
            </p>
        </div>
      </div>

      <Separator className="bg-slate-200" />
      
      {/* 1. Fee Summary KPIs and Action Buttons (Exact visual layout) */}
      <div className="flex items-start justify-between">
        <div className="grid grid-cols-3 gap-6 w-3/4">
            <FeeKpiCard 
                title="Total Paid" 
                amount={feeData.summary.totalPaid} 
                icon={CheckSquare} 
                colorClass="text-green-600"
                iconBgClass="bg-green-100"
                dateInfo="This semester"
            />
            <FeeKpiCard 
                title="Pending" 
                amount={feeData.summary.pending} 
                icon={Clock} 
                colorClass="text-yellow-600"
                iconBgClass="bg-yellow-100"
                dateInfo="Due Nov 15"
            />
            <FeeKpiCard 
                title="Total Due" 
                amount={feeData.summary.totalDue} 
                icon={XCircle} 
                colorClass="text-red-600"
                iconBgClass="bg-red-100"
                dateInfo="This semester"
            />
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col space-y-3 pt-2 w-1/4 items-end pl-6">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                <CreditCard className="w-4 h-4 mr-2" />
                Make Payment
            </Button>
            <Button variant="outline" className="text-slate-700 border-slate-300 hover:bg-slate-100 w-full">
                <Printer className="w-4 h-4 mr-2" />
                Print Statement
            </Button>
        </div>
      </div>
      
      {/* 2. Fees Breakdown Table */}
      <Card className="shadow-lg border-slate-100">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-xl font-bold text-slate-900">
            Fees Breakdown
          </CardTitle>
          <Button variant="link" className="text-blue-600 p-0 h-auto">
            See all
          </Button>
        </CardHeader>
        <CardContent className="p-0 overflow-x-auto">
          <Table className="min-w-[1200px]">
            <TableHeader>
              <TableRow className="bg-blue-600 hover:bg-blue-600 text-white">
                <TableHead className="text-white text-sm">Payment Date</TableHead>
                <TableHead className="text-white text-sm">Academic Year</TableHead>
                <TableHead className="text-white text-sm">Term</TableHead>
                <TableHead className="text-white text-sm">Payment ID</TableHead>
                <TableHead className="text-white text-sm">E-Receipt NO.</TableHead>
                <TableHead className="text-white text-sm">Description</TableHead>
                <TableHead className="text-white text-sm">Remarks</TableHead>
                <TableHead className="text-white text-sm text-right">Bill (GH₵)</TableHead>
                <TableHead className="text-white text-sm text-right">Penalty</TableHead>
                <TableHead className="text-white text-sm text-right">Payment (GH₵)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {feeData.feesBreakdown.map((item, index) => (
                <TableRow key={index} className="hover:bg-slate-50">
                  <TableCell className="text-sm">{item.date}</TableCell>
                  <TableCell className="text-sm">{item.academicYear}</TableCell>
                  <TableCell className="text-center">{item.term}</TableCell>
                  <TableCell className="text-sm">{item.paymentId}</TableCell>
                  <TableCell className="text-sm">{item.receiptNo}</TableCell>
                  <TableCell className="text-sm">{item.description}</TableCell>
                  <TableCell className="text-sm">{item.remarks}</TableCell>
                  <TableCell className="text-right">{item.bill.toFixed(2)}</TableCell>
                  <TableCell className="text-right">{item.penalty}</TableCell>
                  <TableCell className="text-right">{item.payment.toFixed(2)}</TableCell>
                </TableRow>
              ))}
              
              {/* Totals Row (Matching image visual) */}
              <TableRow className="bg-slate-50">
                <TableCell colSpan={7} className="text-right font-bold text-slate-800"></TableCell>
                <TableCell className="text-right font-bold text-slate-800">TOTAL (GH₵):</TableCell>
                <TableCell className="text-right font-bold text-slate-800">{imageTotalBill.toFixed(2)}</TableCell>
                <TableCell className="text-right font-bold text-slate-800"></TableCell>
                <TableCell className="text-right font-bold text-slate-800">{imageTotalPayment.toFixed(2)}</TableCell>
              </TableRow>
              
              {/* Balance Row (Matching image visual) */}
              <TableRow>
                <TableCell colSpan={9} className="text-right text-red-600 font-bold">Balance (GH₵):</TableCell>
                <TableCell className="text-right text-red-600 font-bold">
                  {imageBalance.toFixed(2)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      {/* 3. Payment History Section */}
      <Card className="shadow-lg border-slate-100">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-xl font-bold text-slate-900">
            Payment History
          </CardTitle>
          <Button variant="link" className="text-blue-600 p-0 h-auto">
            See all
          </Button>
        </CardHeader>
        <CardContent className="space-y-4 p-6 pt-4">
            {feeData.paymentHistory.map((history, index) => (
                <div key={index} className="flex justify-between items-center p-4 border rounded-lg hover:bg-slate-50 transition-colors">
                    <div>
                        <p className="font-semibold text-slate-800">{history.title}</p>
                        <p className="text-sm text-slate-500">{history.status}</p>
                        <p className="text-xs text-green-600">{history.match}</p>
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                        Access
                    </Button>
                </div>
            ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default FeesAndPayments;