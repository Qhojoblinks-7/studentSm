import React from 'react';
import { Link } from 'react-router-dom';
import error404Image from '@/assets/Error_404.svg';

// Shadcn Components
import { Button } from '@/components/ui/button';

const MobileNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 via-cyan-200 via-teal-100 to-green-100 p-4 md:hidden">

      {/* Logo */}
      <div className="absolute top-4 left-4 text-base font-extrabold text-blue-600 tracking-tight flex items-center">
        <span className="h-4 w-4 bg-blue-600 rounded-full mr-2"></span>
        AltBit<span className="text-slate-900 ml-1">Softwares</span>
      </div>

      {/* Main Illustration */}
      <div className="mb-6 w-full max-w-xs flex items-center justify-center">
        <img src={error404Image} alt="404 Error" className="w-full h-auto object-contain" />
      </div>

      {/* Text Content */}
      <h1 className="text-2xl font-extrabold text-slate-900 mb-2 text-center">
        Page Not Found
      </h1>
      <p className="text-sm text-slate-600 text-center max-w-xs mb-6 leading-relaxed">
        Sorry, the page you're looking for does not exist or has been moved.
        Please go back to the home page!
      </p>

      {/* Go Back Home Button */}
      <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white text-base px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105 w-full max-w-xs">
        <Link to="/">Go back Home</Link>
      </Button>

      {/* Footer Links */}
      <footer className="absolute bottom-4 text-xs text-slate-500 text-center w-full px-4">
        <div className="flex flex-col items-center space-y-1 mb-2">
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-600">policies</a>
            <a href="#" className="hover:text-blue-600">Supports</a>
            <a href="#" className="hover:text-blue-600">Help Center</a>
          </div>
        </div>
        <p className="text-xs">Copyright © 2024–2025 AltBit Softwares. All rights reserved.</p>
        <p className="text-xs">EduManageAI School Management System V5.00Release 1.0</p>
      </footer>
    </div>
  );
};

export default MobileNotFound;