import React, { useState } from 'react';
import { Download, Search, Filter, ChevronDown, ChevronUp, Eye } from 'lucide-react';

// Shadcn Components
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Mock data - in real app this would come from props or Redux
import { feeData } from '@/lib/mockData';

const FeesBreakdownTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');

  const { feesBreakdown } = feeData;

  // Filter and sort data
  const filteredData = feesBreakdown
    .filter(item => {
      const matchesSearch = item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.date.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      let aValue, bValue;

      switch (sortBy) {
        case 'date':
          aValue = new Date(a.date);
          bValue = new Date(b.date);
          break;
        case 'amount':
          aValue = a.payment;
          bValue = b.payment;
          break;
        case 'description':
          aValue = a.description;
          bValue = b.description;
          break;
        default:
          return 0;
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

  const getStatusBadge = (status) => {
    const statusConfig = {
      paid: { variant: 'default', color: 'bg-green-100 text-green-800', label: 'Paid' },
      pending: { variant: 'secondary', color: 'bg-yellow-100 text-yellow-800', label: 'Pending' },
      overdue: { variant: 'destructive', color: 'bg-red-100 text-red-800', label: 'Overdue' },
    };

    const config = statusConfig[status] || statusConfig.pending;

    return (
      <Badge className={`${config.color} border-0`}>
        {config.label}
      </Badge>
    );
  };

  const handleDownloadReceipt = (item) => {
    // In real app, this would trigger a download
    console.log('Downloading receipt for:', item);
    // Simulate download
    const receiptData = {
      transactionId: item.receiptNo,
      date: item.date,
      amount: item.payment,
      description: item.description,
      academicYear: item.academicYear,
      term: item.term
    };

    const dataStr = JSON.stringify(receiptData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);

    const exportFileDefaultName = `receipt-${item.receiptNo}.json`;

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('desc');
    }
  };

  const SortIcon = ({ column }) => {
    if (sortBy !== column) return null;
    return sortOrder === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />;
  };

  return (
    <Card className="shadow-lg border-slate-100">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold text-slate-900 flex items-center">
          <Eye className="w-6 h-6 mr-2 text-blue-600" />
          Fee Breakdown
        </CardTitle>
        <p className="text-sm text-slate-600 mt-1">
          Detailed breakdown of all your fee transactions
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <Input
              placeholder="Search transactions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-48">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="paid">Paid</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="overdue">Overdue</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-slate-200">
                <th
                  className="text-left py-3 px-4 font-semibold text-slate-900 cursor-pointer hover:bg-slate-50"
                  onClick={() => handleSort('date')}
                >
                  <div className="flex items-center space-x-1">
                    <span>Date</span>
                    <SortIcon column="date" />
                  </div>
                </th>
                <th
                  className="text-left py-3 px-4 font-semibold text-slate-900 cursor-pointer hover:bg-slate-50"
                  onClick={() => handleSort('description')}
                >
                  <div className="flex items-center space-x-1">
                    <span>Description</span>
                    <SortIcon column="description" />
                  </div>
                </th>
                <th className="text-left py-3 px-4 font-semibold text-slate-900">
                  Academic Year
                </th>
                <th className="text-left py-3 px-4 font-semibold text-slate-900">
                  Term
                </th>
                <th className="text-left py-3 px-4 font-semibold text-slate-900">
                  Payment Method
                </th>
                <th
                  className="text-right py-3 px-4 font-semibold text-slate-900 cursor-pointer hover:bg-slate-50"
                  onClick={() => handleSort('amount')}
                >
                  <div className="flex items-center justify-end space-x-1">
                    <span>Amount</span>
                    <SortIcon column="amount" />
                  </div>
                </th>
                <th className="text-center py-3 px-4 font-semibold text-slate-900">
                  Status
                </th>
                <th className="text-center py-3 px-4 font-semibold text-slate-900">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={index} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="py-4 px-4 text-slate-900">{item.date}</td>
                  <td className="py-4 px-4 text-slate-900">{item.description}</td>
                  <td className="py-4 px-4 text-slate-600">{item.academicYear}</td>
                  <td className="py-4 px-4 text-slate-600">{item.term}</td>
                  <td className="py-4 px-4 text-slate-600">{item.paymentId}</td>
                  <td className="py-4 px-4 text-right font-medium text-slate-900">
                    ${item.payment?.toLocaleString() || item.bill?.toLocaleString() || '0'}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {getStatusBadge(item.status || 'paid')}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {(item.status === 'paid' || !item.status) && (
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {filteredData.length === 0 && (
          <div className="text-center py-12">
            <div className="text-slate-400 mb-4">
              <Search className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-slate-900 mb-2">No transactions found</h3>
            <p className="text-slate-600">
              {searchTerm || statusFilter !== 'all'
                ? 'Try adjusting your search or filter criteria'
                : 'No fee transactions available'
              }
            </p>
          </div>
        )}

        {/* Summary */}
        <div className="flex justify-between items-center pt-4 border-t border-slate-200">
          <div className="text-sm text-slate-600">
            Showing {filteredData.length} of {feesBreakdown.length} transactions
          </div>
          <div className="text-sm font-medium text-slate-900">
            Total Paid: ${feesBreakdown
              .filter(item => item.status === 'paid' || !item.status)
              .reduce((sum, item) => sum + (item.payment || item.bill || 0), 0)
              .toLocaleString()}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeesBreakdownTable;