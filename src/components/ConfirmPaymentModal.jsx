import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Calendar } from 'lucide-react';

// Shadcn Components
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

const ConfirmPaymentModal = ({ isOpen, onClose, paymentData }) => {
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
        // --- 1. Full-Screen Overlay ---
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-80 p-4">
            
            {/* --- 2. Confirmation Dialog/Card --- */}
            <div 
                className="relative w-full max-w-lg p-8 rounded-3xl shadow-2xl"
                style={{ 
                    // Styled background to match the dashboard aesthetic and image
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(200, 220, 255, 0.95) 100%)',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                }}
            >
                
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-2 rounded-full transition-colors"
                    aria-label="Close payment dialog"
                >
                    <X className="text-xl" />
                </button>

                {/* Header/Title */}
                <div className="mb-6 border-b pb-4">
                    <h1 className="text-lg font-bold text-gray-800">
                        Confirm you want make Payment for this particular Student
                    </h1>
                    <p className="text-sm text-gray-600 mt-1">Enter your Student you used in creating your account</p>
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
                            className="border-2 border-slate-500"
                            readOnly // Often read-only for confirmation
                        />
                    </div>

                    {/* Payment Type and Date of Birth (Two Columns) */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="paymentType" className="text-sm font-medium text-gray-700">Payment Type</Label>
                            <Select value={paymentType} onValueChange={setPaymentType}>
                                <SelectTrigger className="border-2 border-slate-500">
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
                                    className="border-2 border-slate-500"
                                    readOnly // Often read-only
                                />
                                <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
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
                            className="border-2 border-slate-500"
                            readOnly
                        />
                    </div>
                    
                    {/* Student Parent Name (New Field based on image) */}
                    <div>
                        <Label htmlFor="parentName" className="text-sm font-medium text-gray-700">Student Parent Name</Label>
                        <Input
                            type="text"
                            id="parentName"
                            value={parentName}
                            onChange={(e) => setParentName(e.target.value)}
                            placeholder="Enter parent name here"
                            className="border-2 border-slate-500"
                        />
                    </div>

                    {/* Confirmation Checkbox */}
                    <div className="flex items-start pt-2">
                        <Checkbox
                            id="confirmCheck"
                            checked={isConfirmed}
                            onCheckedChange={setIsConfirmed}
                            className="mt-1"
                        />
                        <Label htmlFor="confirmCheck" className="ml-2 text-xs text-gray-600">
                            Are you sure the details above is you and you want to make payment for the Student? If the details are correct click on the Submit button after click on cancel and type in the correct <span className="text-red-500 font-semibold">Index Number</span>.
                        </Label>
                    </div>
                    
                    <p className="text-sm text-red-600 font-semibold">Money paid is non - refundable</p>

                </form>

                {/* --- Action Buttons --- */}
                <div className="flex justify-end space-x-3 pt-4">
                    <Button
                        onClick={onClose}
                        variant="outline"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleConfirm}
                        disabled={!isConfirmed || !parentName} // Disable if not confirmed or Parent Name is missing
                    >
                        Confirm
                    </Button>
                </div>
                
            </div>
            
        </div>
    );
};

export default ConfirmPaymentModal;