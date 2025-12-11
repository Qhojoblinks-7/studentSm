import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Calendar } from 'lucide-react';

// Shadcn Components
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

const MobileConfirmPaymentModal = ({ isOpen, onClose, paymentData }) => {
    // State for form fields (pre-filled with data from MakePaymentModal)
    const [studentName, setStudentName] = useState(paymentData?.studentName || '');
    const [paymentType, setPaymentType] = useState(paymentData?.paymentType || '');
    const [dob, setDob] = useState(paymentData?.dob || '');
    const [studentId, setStudentId] = useState(paymentData?.studentId || '');
    const [parentName, setParentName] = useState(''); // Assuming this needs to be filled
    const [isConfirmed, setIsConfirmed] = useState(false);

    const paymentTypeMap = {
        school: 'School Fee',
        feeding: 'Feeding Fee',
        books: 'Books Fee',
        sports: 'Sports Fee',
        examination: 'Examination Fee'
    };

    useEffect(() => {
        if (paymentData) {
            setStudentName(paymentData.studentName || '');
            setPaymentType(paymentTypeMap[paymentData.paymentType] || paymentData.paymentType || '');
            setDob(paymentData.dob || '');
            setStudentId(paymentData.studentId || '');
        }
    }, [paymentData]);

    if (!isOpen) return null;

    const handleConfirm = () => {
        // Handle final confirmation logic here (e.g., API call, redirect)
        console.log("Payment Confirmed. Ready to process.");
        onClose();
    };

    return (
        // --- 1. Full-Screen Overlay for Mobile ---
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-80 p-2 md:hidden">

            {/* --- 2. Full-Screen Modal for Mobile --- */}
            <div
                className="relative w-full h-full max-w-full p-4 rounded-none shadow-2xl overflow-y-auto"
                style={{
                    // Styled background to match the dashboard aesthetic
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(200, 220, 255, 0.95) 100%)',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                }}
            >

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-2 rounded-full transition-colors z-10"
                    aria-label="Close payment dialog"
                >
                    <X className="text-xl" />
                </button>

                {/* Header/Title */}
                <div className="mb-4 border-b pb-3 pt-12">
                    <h1 className="text-lg font-bold text-gray-800">
                        Confirm Payment
                    </h1>
                    <p className="text-sm text-gray-600 mt-1">Verify student details before payment</p>
                </div>

                {/* --- Form Fields --- */}
                <form className="space-y-4">

                    {/* Student Name */}
                    <div>
                        <Label htmlFor="studentName" className="text-sm font-medium text-gray-700">Student Name</Label>
                        <Input
                            type="text"
                            id="studentName"
                            value={studentName}
                            onChange={(e) => setStudentName(e.target.value)}
                            className="border-2 border-slate-500 h-12"
                            readOnly // Often read-only for confirmation
                        />
                    </div>

                    {/* Payment Type and Date of Birth (Single Column for Mobile) */}
                    <div className="space-y-4">
                        <div>
                            <Label htmlFor="paymentType" className="text-sm font-medium text-gray-700">Payment Type</Label>
                            <Select value={paymentType} onValueChange={setPaymentType}>
                                <SelectTrigger className="border-2 border-slate-500 h-12">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Payment of School Fees">Payment of School Fees</SelectItem>
                                    <SelectItem value="Feeding Fee">Feeding Fee</SelectItem>
                                    {/* Add other options as needed */}
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label htmlFor="dob" className="text-sm font-medium text-gray-700">Date Of Birth</Label>
                            <div className="relative">
                                <Input
                                    type="text"
                                    id="dob"
                                    value={dob}
                                    onChange={(e) => setDob(e.target.value)}
                                    className="border-2 border-slate-500 h-12"
                                    readOnly // Often read-only
                                />
                                <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                            </div>
                        </div>
                    </div>

                    {/* Student ID */}
                    <div>
                        <Label htmlFor="studentId" className="text-sm font-medium text-gray-700">Student ID</Label>
                        <Input
                            type="text"
                            id="studentId"
                            value={studentId}
                            onChange={(e) => setStudentId(e.target.value)}
                            className="border-2 border-slate-500 h-12"
                            readOnly
                        />
                    </div>

                    {/* Student Parent Name */}
                    <div>
                        <Label htmlFor="parentName" className="text-sm font-medium text-gray-700">Student Parent Name</Label>
                        <Input
                            type="text"
                            id="parentName"
                            value={parentName}
                            onChange={(e) => setParentName(e.target.value)}
                            placeholder="Enter parent name here"
                            className="border-2 border-slate-500 h-12"
                        />
                    </div>

                    {/* Confirmation Checkbox */}
                    <div className="flex items-start pt-2">
                        <Checkbox
                            id="confirmCheck"
                            checked={isConfirmed}
                            onCheckedChange={setIsConfirmed}
                            className="mt-1 w-5 h-5"
                        />
                        <Label htmlFor="confirmCheck" className="ml-3 text-xs text-gray-600 leading-relaxed">
                            Are you sure the details above are correct and you want to make payment for this student? Money paid is non-refundable.
                        </Label>
                    </div>

                </form>

                {/* --- Action Buttons --- */}
                <div className="flex flex-col gap-3 pt-6 pb-4">
                    <Button
                        onClick={handleConfirm}
                        disabled={!isConfirmed || !parentName}
                        className="w-full h-12"
                    >
                        Confirm Payment
                    </Button>
                    <Button
                        onClick={onClose}
                        variant="outline"
                        className="w-full h-12"
                    >
                        Cancel
                    </Button>
                </div>

            </div>

        </div>
    );
};

export default MobileConfirmPaymentModal;