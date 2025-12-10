import React from 'react';
import { BsBox } from 'react-icons/bs'; // Icon for the modal header
import { AiOutlineClose } from 'react-icons/ai'; // Close icon

// This component acts as a centralized modal/popup
const VerificationModal = ({ isOpen, onClose }) => {
    // If the modal is not open, return null (don't render anything)
    if (!isOpen) return null;

    return (
        // --- 1. Full-Screen Overlay (Dark Background) ---
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-80 p-4">
            
            {/* --- 2. Verification Dialog/Card --- */}
            <div 
                className="relative w-full max-w-md p-8 rounded-3xl shadow-2xl transition-all duration-300"
                style={{ 
                    // Use CSS to replicate the light, glassy, gradient background from the image
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(200, 220, 255, 0.9) 100%)',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 100px rgba(100, 150, 255, 0.3)', // Added subtle blue glow
                }}
            >
                
                {/* Close Button */}
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-2 rounded-full transition-colors"
                    aria-label="Close verification dialog"
                >
                    <AiOutlineClose className="text-xl" />
                </button>

                {/* Header Icon */}
                <div className="flex justify-center mb-6">
                    <BsBox className="text-4xl text-blue-600 p-1 bg-white rounded-lg shadow-md" />
                </div>

                {/* Title and Subtitle */}
                <h1 className="text-2xl font-bold text-gray-800 text-center mb-2">
                    Check your email / sms
                </h1>
                <p className="text-center text-sm text-gray-600 mb-8">
                    We sent a verification link to
                    <br />
                    <span className="text-blue-600 font-medium underline">
                        olivia@untitledui.com / 0555747931
                    </span>
                </p>

                {/* Manual Code Entry Button */}
                <div className="flex justify-center mb-6">
                    <button className="w-full max-w-xs bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors shadow-lg">
                        Enter code manually
                    </button>
                </div>

                {/* Back to Login Link */}
                <div className="text-center">
                    <a href="#" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                        &larr; Back to log in
                    </a>
                </div>
            </div>
            
            {/* --- Footer Links (outside the modal, on the dark background) --- */}
            <footer className="absolute bottom-4 text-center text-xs text-gray-400">
                <div className="space-x-4 mb-1">
                    <a href="#" className="hover:underline">policies</a>
                    <a href="#" className="hover:underline">supports</a>
                    <a href="#" className="hover:underline">help centre</a>
                </div>
                <p>Copyright © 2019-2025 AltBit Softwares. All rights reserved.</p>
                <p className="text-xs mt-1">
                    EduManageBasic School Management System BSDMVersion 1.0
                </p>
            </footer>
        </div>
    );
};

export default VerificationModal;