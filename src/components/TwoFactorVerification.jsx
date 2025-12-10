import React, { useState } from 'react';

const VerificationCodeInput = () => {
    // State to toggle between the 'Check email / sms' view and the 'Code Input' view
    const [showCodeInput, setShowCodeInput] = useState(false);
    
    // State for the 6-digit code input (each digit separately for the visual effect)
    const [code, setCode] = useState(Array(6).fill(''));
    
    // Dummy values
    const email = "olivia@untitledui.com";
    const phoneNumber = "0555747931";

    // Handle input changes for the 6 boxes
    const handleCodeChange = (e, index) => {
        const { value } = e.target;
        // Only allow a single digit
        if (value.length <= 1) {
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);

            // Auto-focus the next input field
            if (value && index < 5) {
                const nextInput = document.getElementById(`code-input-${index + 1}`);
                if (nextInput) {
                    nextInput.focus();
                }
            }
        }
    };

    // Render the 6 individual input fields
    const CodeInputs = () => (
        <div className="flex justify-center space-x-2 mt-4">
            {code.map((digit, index) => (
                <input
                    key={index}
                    id={`code-input-${index}`}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleCodeChange(e, index)}
                    className="w-10 h-10 text-center text-lg font-bold rounded-lg 
                                bg-gray-100 border border-gray-300 focus:border-blue-500 
                                focus:ring-1 focus:ring-blue-500 transition duration-150"
                    // Ensures that when backspacing from a box, it moves to the previous box
                    onKeyDown={(e) => {
                        if (e.key === 'Backspace' && !code[index] && index > 0) {
                            const prevInput = document.getElementById(`code-input-${index - 1}`);
                            if (prevInput) {
                                prevInput.focus();
                            }
                        }
                    }}
                />
            ))}
        </div>
    );

    // Custom style to mimic the light, iridescent gradient background on the card
    const cardGradientStyle = {
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(200, 200, 255, 0.7) 40%, rgba(200, 255, 255, 0.7) 100%)'
    };

    return (
        // Full-screen container with dark background
        <div className="flex items-center justify-center min-h-screen bg-gray-800 p-4">
            
            {/* Logo and Copyright information */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-gray-400">
                <p className="text-xl font-semibold">Aktif Softwares</p>
            </div>
            
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-sm text-gray-500">
                <p>policies | supports | help center</p>
                <p>Copyright © 2019–2025 Aktif Softwares. All rights reserved.</p>
                <p>EktaManager-Basic School Management System BSD Version 0.2</p>
            </div>

            {/* Central Modal/Card Container */}
            <div 
                className="relative w-full max-w-md p-8 rounded-2xl shadow-2xl backdrop-blur-sm 
                           border border-white/20"
                style={cardGradientStyle}
            >
                {/* Close Button (X) */}
                <button className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 text-xl">
                    &times;
                </button>

                {/* Main Content */}
                <div className="flex flex-col items-center space-y-6 text-center">
                    
                    {/* Icon */}
                    <div className="bg-white p-3 rounded-xl shadow-md">
                        <div className="w-6 h-6 bg-blue-600 rounded-lg"></div> 
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl font-semibold text-gray-900">
                        Check your email
                    </h2>
                    
                    {/* Verification Message */}
                    <p className="text-gray-600">
                        We sent a verification link to
                    </p>
                    <p className="font-medium text-gray-800 text-lg">
                        <span className="text-blue-600">{email}</span> 
                        {/* Note: The second image only shows the email, not the SMS */}
                    </p>
                    
                    {/* Conditional Rendering based on state */}
                    {showCodeInput ? (
                        <>
                            {/* CODE INPUT VIEW */}
                            <CodeInputs />

                            {/* Verification Button (Send Code) */}
                            <button className="w-full mt-4 py-3 px-6 rounded-lg bg-black text-white text-base font-medium shadow-lg hover:bg-gray-800 transition duration-150">
                                send code
                            </button>
                        </>
                    ) : (
                        <>
                            {/* INITIAL VIEW (From first image) */}
                            <p className="font-medium text-gray-800 text-lg">
                                {/* Only show SMS number if we are in the initial view */}
                                / <span className="text-blue-600">{phoneNumber}</span>
                            </p>
                            
                            {/* Button to switch to the code input view */}
                            <button 
                                onClick={() => setShowCodeInput(true)}
                                className="w-full mt-4 py-3 px-6 rounded-lg bg-black text-white text-base font-medium shadow-lg hover:bg-gray-800 transition duration-150"
                            >
                                Enter code manually
                            </button>
                        </>
                    )}

                    {/* Back to Log in Link */}
                    <a 
                        href="#" 
                        className="flex items-center text-sm text-gray-600 hover:text-gray-800 transition duration-150 mt-4"
                        onClick={(e) => { 
                            e.preventDefault(); 
                            // If user is on code input screen, go back to the first screen, otherwise proceed to log in.
                            if (showCodeInput) {
                                setShowCodeInput(false);
                            } else {
                                console.log('Going back to log in screen');
                            }
                        }}
                    >
                        &larr; Back to log in
                    </a>
                </div>
            </div>
        </div>
    );
};

export default VerificationCodeInput;