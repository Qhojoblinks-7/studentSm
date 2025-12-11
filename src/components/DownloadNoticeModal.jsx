import React from 'react';
import { AlertTriangle, Download, X } from 'lucide-react';

// Shadcn UI Components
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const DownloadNoticeModal = ({ isOpen, onClose, onDownload, message = "Kindly read and take note. Contact help center for any help or assistance." }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
            <Card className="relative w-full max-w-md shadow-2xl border-0 rounded-[2rem]">
                <CardContent className="p-8" style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(200, 220, 255, 1) 100%)',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 100px rgba(100, 150, 255, 0.3)',
                }}>

                    {/* Close Button */}
                    <Button
                        onClick={onClose}
                        variant="ghost"
                        size="sm"
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-2 rounded-full"
                        aria-label="Close notice modal"
                    >
                        <X className="text-xl" />
                    </Button>

                    {/* Warning Icon */}
                    <div className="flex justify-center mb-6">
                        <AlertTriangle size={80} className="text-orange-500" />
                    </div>

                    {/* Title */}
                    <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
                        Important Notice
                    </h1>

                    {/* Message */}
                    <p className="text-center text-gray-700 mb-8 leading-relaxed">
                        {message}
                    </p>

                    {/* Download Button */}
                    <div className="flex justify-center">
                        <Button
                            onClick={onDownload}
                            className="w-full max-w-xs bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2"
                        >
                            <Download className="w-4 h-4" />
                            Download
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default DownloadNoticeModal;