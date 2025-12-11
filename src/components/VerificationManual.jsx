import React from 'react';
import { MailOpen, X } from 'lucide-react'; // Icons from Lucide React

// Shadcn UI Components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

// This component renders the verification card content
const VerificationModal = ({ onClose }) => {
    const [showCodeInput, setShowCodeInput] = React.useState(false);
    const [code, setCode] = React.useState(Array(6).fill(''));

    const handleCodeChange = (e, index) => {
        const { value } = e.target;
        if (value.length <= 1) {
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);

            if (value && index < 5) {
                const nextInput = document.getElementById(`code-input-${index + 1}`);
                if (nextInput) {
                    nextInput.focus();
                }
            }
        }
    };

    const CodeInputs = () => (
        <div className="flex justify-center space-x-2 mt-4 mb-6">
            {code.map((digit, index) => (
                <Input
                    key={index}
                    id={`code-input-${index}`}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleCodeChange(e, index)}
                    className="w-10 h-10 text-center text-lg font-bold
                                bg-slate-800 text-white border-gray-300 focus:border-blue-500
                                focus:ring-1 focus:ring-blue-500 transition duration-150"
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

    return (
        <Card className="relative w-full max-w-md shadow-2xl transition-all duration-300 border-0">
            <CardContent className="p-8 rounded-[2rem]" style={{
                // Use CSS to replicate the light, glassy, gradient background from the image
                background: 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(200, 220, 255, 1) 100%)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 100px rgba(100, 150, 255, 0.3)', // Added subtle blue glow
            }}>

                {/* Close Button */}
                <Button
                    onClick={onClose}
                    variant="ghost"
                    size="sm"
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-2 rounded-full"
                    aria-label="Close verification dialog"
                >
                    <X className="text-xl" />
                </Button>

                {/* Header Icon */}
                <div className="flex justify-center mb-6">
                    <MailOpen size={80} className="text-blue-600" />
                </div>

                {/* Title and Subtitle */}
                <h1 className="text-2xl font-bold text-gray-800 text-center mb-2">
                    Check your email / sms
                </h1>
                <p className="text-center text-sm font-semibold text-gray-600 mb-8">
                    We sent a verification link to
                    <br />
                    <span className="text-slate-600 font-semibold">
                        olivia@untitledui.com
                    </span>
                </p>

                {/* Conditional Rendering: Code Input or Button */}
                {showCodeInput ? (
                    <>
                        <CodeInputs />
                        <div className="flex justify-center mb-6">
                            <Button className="w-full max-w-xs bg-gray-900 hover:bg-gray-800">
                                Verify Code
                            </Button>
                        </div>
                    </>
                ) : (
                    <div className="flex justify-center mb-6">
                        <Button
                            onClick={() => setShowCodeInput(true)}
                            className="w-full max-w-xs bg-gray-900 hover:bg-gray-800"
                        >
                            Enter code manually
                        </Button>
                    </div>
                )}

                {/* Back to Login Link */}
                <div className="text-center">
                    <a href="#" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                        &larr; Back to log in
                    </a>
                </div>
            </CardContent>
        </Card>
    );
};

export default VerificationModal;