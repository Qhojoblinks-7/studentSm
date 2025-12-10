import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai'; 
import { FaMoneyBillWave } from 'react-icons/fa'; // Icon for payment

const MakePaymentModal = ({ isOpen, onClose }) => {
    const [selectedFees, setSelectedFees] = useState([]);
    const [paymentMethod, setPaymentMethod] = useState('');

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
        // Handle payment submission logic here
        console.log("Processing payment for:", selectedFees, "via", paymentMethod);
        onClose(); // Close the modal after submission
    };

    return (
        // --- 1. Full-Screen Overlay ---
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-80 p-4">
            
            {/* --- 2. Payment Dialog/Card --- */}
            <div 
                className="relative w-full max-w-lg p-8 rounded-3xl shadow-2xl"
                style={{ 
                    // Styled background to match the dashboard aesthetic
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
                    <AiOutlineClose className="text-xl" />
                </button>

                {/* Header and Icon */}
                <div className="flex items-center space-x-4 mb-6 border-b pb-4">
                    <FaMoneyBillWave className="text-4xl text-green-600 p-1 bg-white rounded-lg shadow-md" />
                    <h1 className="text-2xl font-bold text-gray-800">
                        Make Payment
                    </h1>
                </div>

                {/* --- Fee Selection Section --- */}
                <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-3 text-gray-700">1. Select Fees to Pay</h2>
                    <div className="space-y-3">
                        {feesOptions.map(fee => (
                            <div 
                                key={fee.id}
                                className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all ${
                                    selectedFees.includes(fee.id) ? 'bg-blue-100 border-blue-500 shadow-sm' : 'bg-white border-gray-200 hover:bg-gray-50'
                                }`}
                                onClick={() => handleFeeSelection(fee.id)}
                            >
                                <div className="flex items-center space-x-3">
                                    <input
                                        type="checkbox"
                                        checked={selectedFees.includes(fee.id)}
                                        readOnly
                                        className="form-checkbox h-5 w-5 text-blue-600 rounded"
                                    />
                                    <span className="font-medium text-gray-800">{fee.name}</span>
                                </div>
                                <span className="text-sm font-semibold text-gray-600">{fee.due}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- Payment Method Section --- */}
                <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-3 text-gray-700">2. Payment Method</h2>
                    <select
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="">Select a method</option>
                        <option value="card">Credit/Debit Card</option>
                        <option value="bank">Bank Transfer (e.g., Prudential Bank)</option>
                        <option value="mobile">Mobile Money</option>
                    </select>
                </div>

                {/* --- Summary and Action --- */}
                <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center text-xl font-bold mb-4 text-gray-800">
                        <span>Total Payable:</span>
                        <span className="text-red-600">GH₵ {totalAmountDue.toFixed(2)}</span>
                    </div>

                    <button 
                        onClick={handleSubmit}
                        disabled={selectedFees.length === 0 || !paymentMethod}
                        className={`w-full py-3 rounded-xl font-semibold transition-all ${
                            selectedFees.length > 0 && paymentMethod
                                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg'
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                    >
                        Proceed to Pay GH₵ {totalAmountDue.toFixed(2)}
                    </button>
                </div>
                
            </div>
            
        </div>
    );
};

export default MakePaymentModal;