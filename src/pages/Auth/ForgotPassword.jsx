import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming React Router for navigation
import { ArrowLeft } from 'lucide-react';

// Shadcn Components
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Custom Components
import VerificationManual from '@/components/VerificationManual';

const ForgotPassword = () => {
  const [resetMethod, setResetMethod] = useState(''); // 'email' or 'phone'
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [showVerificationModal, setShowVerificationModal] = useState(false);

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Logic to send reset instructions based on selected method and input
    console.log(`Sending reset instructions via ${resetMethod} to: ${emailOrPhone}`);
    // Show verification modal instead of alert
    setShowVerificationModal(true);
  };

  return (
    // Main container with the background gradient matching the visual
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6">
      
      {/* Top Logo */}
      <div className="absolute top-10 flex flex-col items-center">
        <p className="text-2xl font-extrabold text-slate-900 tracking-tight">AltBit Softwares</p>
      </div>
      
      {/* Main Title and Instructions */}
      <div className="text-center mb-8 mt-10">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">
          Forgot Password?
        </h1>
        <p className="text-md text-slate-600">
          No worries, we'll send you reset instructions.
        </p>
      </div>

      {/* Reset Password Form Card */}
      <Card className="p-8 shadow-2xl rounded-xl bg-gradient-to-r from-[#E8ECFF] via-[#FFF5F5] via-[#F0FFF4] to-[#E0FFF8] backdrop-blur-md border-slate-100 w-full max-w-md">
        <CardHeader className="p-0 mb-6">
          <CardTitle className="text-2xl font-bold text-slate-900">Reset password</CardTitle>
          <p className="text-sm text-slate-500">
            Enter your email you used in creating your account
          </p>
        </CardHeader>
        <CardContent className="p-0">
          <form onSubmit={handleResetPassword} className="space-y-6">
            
            {/* Select Reset Method */}
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-1">Select reset method</label>
              <Select onValueChange={setResetMethod}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select email or phone number" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="phone">Phone number</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Input field based on selected method */}
            {resetMethod === 'email' && (
              <div>
                <label className="text-sm font-medium text-slate-700 block mb-1">Email</label>
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={emailOrPhone}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                  required
                  className="p-3" 
                />
              </div>
            )}

            {resetMethod === 'phone' && (
              <div>
                <label className="text-sm font-medium text-slate-700 block mb-1">Phone number</label>
                <Input 
                  type="tel" 
                  placeholder="Enter phone number" 
                  value={emailOrPhone}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                  required
                  className="p-3" 
                />
              </div>
            )}

            {/* Reset Password Button */}
            <Button type="submit" className="w-full bg-slate-800 hover:bg-slate-700 text-lg py-6 mt-4">
              Reset Password
            </Button>
          </form>
          
          {/* Back to Login Link */}
          <div className="text-center mt-6">
            <Link to="/login" className="text-slate-600 hover:underline flex items-center justify-center text-sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to login
            </Link>
          </div>
          
        </CardContent>
      </Card>
      
      {/* Footer Links and Copyright */}
      <footer className="absolute bottom-6 text-sm text-slate-500 text-center w-full">
        <div className="flex justify-center space-x-4 mb-1">
          <a href="#" className="hover:text-blue-600 text-center">policies</a>
          <a href="#" className="hover:text-blue-600 text-center">Supports</a>
          <a href="#" className="hover:text-blue-600 text-center">Help Center</a>
        </div>
        <p className="text-center">Copyright © 2024–2025 AltBit Softwares. All rights reserved.</p>
        <p className="text-center">EduManageAI School Management System V5.00 Release 1.0</p>
      </footer>

      {/* Verification Modal */}
      {showVerificationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <VerificationManual onClose={() => setShowVerificationModal(false)} />
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;