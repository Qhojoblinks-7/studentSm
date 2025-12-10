import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai'; 
import { FaCalendarAlt } from 'react-icons/fa'; 

const ConfirmPaymentModal = ({ isOpen, onClose }) => {
    // State for form fields (pre-filled with sample data based on image)
    const [studentName, setStudentName] = useState('Antwi-Boasiako Theophilus');
    const [paymentType, setPaymentType] = useState('Payment of School Fees');
    const [dob, setDob] = useState('20/01/2025');
    const [studentId, setStudentId] = useState('STUBTECH6210750');
    const [parentName, setParentName] = useState(''); // Assuming this needs to be filled
    const [isConfirmed, setIsConfirmed] = useState(false);

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
                    <AiOutlineClose className="text-xl" />
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
                        <label htmlFor="studentName" className="block text-sm font-medium text-gray-700 mb-1">Student Name</label>
                        <input
                            type="text"
                            id="studentName"
                            value={studentName}
                            onChange={(e) => setStudentName(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
                            readOnly // Often read-only for confirmation
                        />
                    </div>

                    {/* Payment Type and Date of Birth (Two Columns) */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="paymentType" className="block text-sm font-medium text-gray-700 mb-1">Payment Type</label>
                            <div className="relative">
                                <select
                                    id="paymentType"
                                    value={paymentType}
                                    onChange={(e) => setPaymentType(e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-lg bg-white appearance-none focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option value="Payment of School Fees">Payment of School Fees</option>
                                    <option value="Feeding Fee">Feeding Fee</option>
                                    {/* Add other options as needed */}
                                </select>
                                {/* Custom arrow icon for the select box */}
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">Date Of Birth</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="dob"
                                    value={dob}
                                    onChange={(e) => setDob(e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
                                    readOnly // Often read-only
                                />
                                <FaCalendarAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            </div>
                        </div>
                    </div>

                    {/* Student ID */}
                    <div>
                        <label htmlFor="studentId" className="block text-sm font-medium text-gray-700 mb-1">Student ID</label>
                        <input
                            type="text"
                            id="studentId"
                            value={studentId}
                            onChange={(e) => setStudentId(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
                            readOnly
                        />
                    </div>
                    
                    {/* Student Parent Name (New Field based on image) */}
                    <div>
                        <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-1">Student Parent Name</label>
                        <input
                            type="text"
                            id="parentName"
                            value={parentName}
                            onChange={(e) => setParentName(e.target.value)}
                            placeholder="Enter parent name here"
                            className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    {/* Confirmation Checkbox */}
                    <div className="flex items-start pt-2">
                        <input
                            type="checkbox"
                            id="confirmCheck"
                            checked={isConfirmed}
                            onChange={(e) => setIsConfirmed(e.target.checked)}
                            className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="confirmCheck" className="ml-2 text-xs text-gray-600">
                            Are you sure the details above is you and you want to make payment for the Student? If the details are correct click on the Submit button after click on cancel and type in the correct <span className="text-red-500 font-semibold">Index Number</span>.
                        </label>
                    </div>
                    
                    <p className="text-sm text-red-600 font-semibold">Money paid is non - refundable</p>

                </form>

                {/* --- Action Buttons --- */}
                <div className="flex justify-end space-x-3 pt-4">
                    <button 
                        onClick={onClose}
                        className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                    >
                        Cancel
                    </button>
                    <button 
                        onClick={handleConfirm}
                        disabled={!isConfirmed || !parentName} // Disable if not confirmed or Parent Name is missing
                        className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                            isConfirmed && parentName
                                ? 'bg-blue-600 text-white hover:bg-blue-700'
                                : 'bg-gray-400 text-white cursor-not-allowed'
                        }`}
                    >
                        Confirm
                    </button>
                </div>
                
            </div>
            
        </div>
    );
};

export default ConfirmPaymentModal;