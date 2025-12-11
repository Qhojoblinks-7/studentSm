import React from 'react';
import { AlertTriangle, Download, X } from 'lucide-react';

// Shadcn UI Components
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const MobileDownloadNoticeModal = ({ isOpen, onClose, onDownload, message = "Kindly read and take note. Contact help center for any help or assistance." }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-2 md:hidden">
            <Card className="relative w-full h-full max-w-full shadow-2xl border-0 rounded-none overflow-hidden">
                <CardContent className="p-6 flex flex-col h-full" style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(200, 220, 255, 1) 100%)',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 100px rgba(100, 150, 255, 0.3)',
                }}>

                    {/* Close Button */}
                    <Button
                        onClick={onClose}
                        variant="ghost"
                        size="sm"
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-2 rounded-full z-10"
                        aria-label="Close notice modal"
                    >
                        <X className="text-xl" />
                    </Button>

                    {/* Content Container */}
                    <div className="flex-1 flex flex-col justify-center items-center text-center">

                        {/* Warning Icon */}
                        <div className="mb-6">
                            <AlertTriangle size={100} className="text-orange-500" />
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">
                            Important Notice
                        </h1>

                        {/* Message */}
                        <p className="text-gray-700 mb-8 leading-relaxed text-lg px-4">
                            {message}
                        </p>

                        {/* Download Button */}
                        <Button
                            onClick={onDownload}
                            className="w-full max-w-sm bg-blue-600 hover:bg-blue-700 h-14 text-lg"
                        >
                            <Download className="w-5 h-5 mr-2" />
                            Download
                        </Button>
                    </div>

                </CardContent>
            </Card>
        </div>
    );
};

export default MobileDownloadNoticeModal;