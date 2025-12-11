import React, { useState } from 'react';
import { X, Calendar } from 'lucide-react';
import { DollarSign } from 'lucide-react'; // Icon for payment

// Shadcn Components
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

const MakePaymentModal = ({ isOpen, onClose, onSubmit }) => {
    const [studentName, setStudentName] = useState('');
    const [paymentType, setPaymentType] = useState('');
    const [dob, setDob] = useState('');
    const [studentId, setStudentId] = useState('');
    const [studentClass, setStudentClass] = useState('');
    const [selectedFees, setSelectedFees] = useState([]);
    const [paymentMethod, setPaymentMethod] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [parentName, setParentName] = useState('');
    const [isConfirmed, setIsConfirmed] = useState(false);

    if (!isOpen) return null;

    // Sample fees data (replace with actual data fetching)
    const feesOptions = [
        { id: 'tuition', name: 'Tuition Fee (Term 2)', amount: 2105.00, due: 'GH₵ 2,105.00' },
        { id: 'books', name: 'Books and Materials', amount: 300.00, due: 'GH₵ 300.00' },
        { id: 'misc', name: 'Miscellaneous', amount: 95.00, due: 'GH₵ 95.00' },
    ];

    const totalAmountDue = feesOptions.reduce((sum, fee) => sum + fee.amount, 0);

    const handleFeeSelection = (feeId) => {
        setSelectedFees(prev => 
            prev.includes(feeId) ? prev.filter(id => id !== feeId) : [...prev, feeId]
        );
    };

    const handleSubmit = () => {
        if (showConfirmation) {
            // Final confirmation
            console.log("Payment Confirmed. Ready to process.");
            onSubmit({
                studentName,
                paymentType,
                dob,
                studentId,
                studentClass,
                parentName
            });
            onClose();
        } else {
            // Proceed to confirmation
            setShowConfirmation(true);
        }
    };

    return (
        // --- 1. Full-Screen Overlay ---
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-80 p-4">
            
            {/* --- 2. Payment Dialog/Card --- */}
            <div
                className="relative w-full max-w-lg p-8 rounded-3xl shadow-2xl bg-gradient-to-bl from-[#CBCEFF] via-[#FFE8E8] to-[#B7FFF9]"
            >
                
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-2 rounded-full transition-colors"
                    aria-label="Close payment dialog"
                >
                    <X className="text-xl" />
                </button>

                {/* Header and Icon */}
                <div className="flex items-center space-x-4 mb-6 border-b pb-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">
                            {showConfirmation ? 'Confirm you want make Payment for this particular Student' : 'Make Payment'}
                        </h1>
                        <p className="text-sm text-gray-600">Enter your Student you used in creating your account</p>
                    </div>
                </div>

                {showConfirmation ? (
                    <>
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
                                    readOnly
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
                                        <SelectContent className="bg-white">
                                            <SelectItem value="school">School Fee</SelectItem>
                                            <SelectItem value="feeding">Feeding Fee</SelectItem>
                                            <SelectItem value="books">Books Fee</SelectItem>
                                            <SelectItem value="sports">Sports Fee</SelectItem>
                                            <SelectItem value="examination">Examination Fee</SelectItem>
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
                                            readOnly
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

                            {/* Student Parent Name */}
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
                                    className="mt-1 w-5 h-5 border-2 border-slate-500"
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
                                onClick={() => setShowConfirmation(false)}
                                variant="outline"
                            >
                                Cancel
                            </Button>
                            <Button
                                onClick={handleSubmit}
                                disabled={!isConfirmed || !parentName}
                            >
                                Confirm
                            </Button>
                        </div>
                    </>
                ) : (
                    <>
                        {/* --- Student Name Section --- */}
                        <div className="mb-6">
                            <h2 className="text-lg font-semibold mb-3 text-gray-700">Student Name</h2>
                            <Input
                                placeholder="Enter your student name"
                                className="border-2 border-slate-500"
                                value={studentName}
                                onChange={(e) => setStudentName(e.target.value)}
                            />
                        </div>

                        {/* --- Payment Type and Date of Birth Section --- */}
                        <div className="mb-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label className="text-sm font-medium text-gray-700">Payment Type</Label>
                                    <Select value={paymentType} onValueChange={setPaymentType}>
                                        <SelectTrigger className="border-2 border-slate-500">
                                            <SelectValue placeholder="Select type" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-white">
                                            <SelectItem value="school">School Fee</SelectItem>
                                            <SelectItem value="feeding">Feeding Fee</SelectItem>
                                            <SelectItem value="books">Books Fee</SelectItem>
                                            <SelectItem value="sports">Sports Fee</SelectItem>
                                            <SelectItem value="examination">Examination Fee</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <Label className="text-sm font-medium text-gray-700">Date Of Birth</Label>
                                    <Input
                                        type="date"
                                        className="border-2 border-slate-500"
                                        value={dob}
                                        onChange={(e) => setDob(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* --- Student ID and Class Section --- */}
                        <div className="mb-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label className="text-sm font-medium text-gray-700">Student ID</Label>
                                    <Input
                                        placeholder="Enter student ID"
                                        className="border-2 border-slate-500"
                                        value={studentId}
                                        onChange={(e) => setStudentId(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <Label className="text-sm font-medium text-gray-700">Class</Label>
                                    <Select value={studentClass} onValueChange={setStudentClass}>
                                        <SelectTrigger className="border-2 border-slate-500">
                                            <SelectValue placeholder="Select class" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-white">
                                            <SelectItem value="jhs3c">Junior High School 3C</SelectItem>
                                            <SelectItem value="jhs3b">Junior High School 3B</SelectItem>
                                            <SelectItem value="jhs3a">Junior High School 3A</SelectItem>
                                            <SelectItem value="jhs2c">Junior High School 2C</SelectItem>
                                            <SelectItem value="jhs2b">Junior High School 2B</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>

                        {/* --- Summary and Action --- */}
                        <div className="pt-4 border-t border-gray-200">
                            <Button onClick={handleSubmit} className="w-full">
                                Proceed to Pay
                            </Button>
                        </div>
                    </>
                )}
                
            </div>
            
        </div>
    );
};

export default MakePaymentModal;