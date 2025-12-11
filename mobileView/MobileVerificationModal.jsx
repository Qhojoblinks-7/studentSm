import React from 'react';
import { MailOpen, X } from 'lucide-react';

// Shadcn UI Components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

// This component renders the verification card content
const MobileVerificationModal = ({ onClose }) => {
    const [showCodeInput, setShowCodeInput] = React.useState(false);
    const [code, setCode] = React.useState(Array(6).fill(''));

    const handleCodeChange = (e, index) => {
        const { value } = e.target;
        if (value.length <= 1) {
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);

            if (value && index < 5) {
                const nextInput = document.getElementById(`mobile-code-input-${index + 1}`);
                if (nextInput) {
                    nextInput.focus();
                }
            }
        }
    };

    const CodeInputs = () => (
        <div className="flex justify-center space-x-3 mt-6 mb-8">
            {code.map((digit, index) => (
                <Input
                    key={index}
                    id={`mobile-code-input-${index}`}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleCodeChange(e, index)}
                    className="w-12 h-12 text-center text-xl font-bold
                                bg-slate-800 text-white border-gray-300 focus:border-blue-500
                                focus:ring-1 focus:ring-blue-500 transition duration-150"
                    onKeyDown={(e) => {
                        if (e.key === 'Backspace' && !code[index] && index > 0) {
                            const prevInput = document.getElementById(`mobile-code-input-${index - 1}`);
                            if (prevInput) {
                                prevInput.focus();
                            }
                        }
                    }}
                />
            ))}
        </div>
    );

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-2 md:hidden">
            <Card className="relative w-full h-full max-w-full shadow-2xl transition-all duration-300 border-0 rounded-none overflow-hidden">
                <CardContent className="p-6 flex flex-col h-full" style={{
                    // Use CSS to replicate the light, glassy, gradient background from the image
                    background: 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(200, 220, 255, 1) 100%)',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 100px rgba(100, 150, 255, 0.3)', // Added subtle blue glow
                }}>

                    {/* Close Button */}
                    <Button
                        onClick={onClose}
                        variant="ghost"
                        size="sm"
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-2 rounded-full z-10"
                        aria-label="Close verification dialog"
                    >
                        <X className="text-xl" />
                    </Button>

                    {/* Content Container */}
                    <div className="flex-1 flex flex-col justify-center items-center text-center pt-12">

                        {/* Header Icon */}
                        <div className="mb-8">
                            <MailOpen size={100} className="text-blue-600" />
                        </div>

                        {/* Title and Subtitle */}
                        <h1 className="text-3xl font-bold text-gray-800 mb-3">
                            Check your email / sms
                        </h1>
                        <p className="text-center text-base font-semibold text-gray-600 mb-8 px-4">
                            We sent a verification link to
                            <br />
                            <span className="text-slate-600 font-semibold text-lg">
                                olivia@untitledui.com
                            </span>
                        </p>

                        {/* Conditional Rendering: Code Input or Button */}
                        {showCodeInput ? (
                            <>
                                <CodeInputs />
                                <div className="w-full max-w-sm mb-8">
                                    <Button className="w-full h-14 bg-gray-900 hover:bg-gray-800 text-lg">
                                        Verify Code
                                    </Button>
                                </div>
                            </>
                        ) : (
                            <div className="w-full max-w-sm mb-8">
                                <Button
                                    onClick={() => setShowCodeInput(true)}
                                    className="w-full h-14 bg-gray-900 hover:bg-gray-800 text-lg"
                                >
                                    Enter code manually
                                </Button>
                            </div>
                        )}

                        {/* Back to Login Link */}
                        <div className="text-center">
                            <a href="#" className="text-base text-gray-500 hover:text-gray-700 transition-colors">
                                &larr; Back to log in
                            </a>
                        </div>
                    </div>

                </CardContent>
            </Card>
        </div>
    );
};

export default MobileVerificationModal;