import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import error404Image from '../assets/Error_404.svg';

// Shadcn Components (Button for "Go back Home")
import { Button } from '@/components/ui/button';

// Mobile components
import MobileNotFound from '../../mobileView/MobileNotFound';

const NotFound = () => {
  return (
    <>
      {/* Desktop NotFound */}
      <div className="hidden md:flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 via-cyan-200 via-teal-100 to-green-100 p-6">
        <NotFoundContent />
      </div>

      {/* Mobile NotFound */}
      <div className="md:hidden">
        <MobileNotFound />
      </div>
    </>
  );
};

// Desktop NotFound Content Component
const NotFoundContent = () => {
  return (
    <>
      {/* Logo Placeholder (matching the style implied in visuals) */}
      {/* You would typically import your actual logo component or image here */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 text-lg md:text-xl font-extrabold text-blue-600 tracking-tight flex items-center">
        {/* Placeholder for a logo icon */}
        <span className="h-4 w-4 md:h-6 md:w-6 bg-blue-600 rounded-full mr-2"></span>
        AltBit<span className="text-slate-900 ml-1">Softwares</span>
      </div>

      {/* Main Illustration */}
      <div className="mb-6 relative w-full max-w-sm h-auto flex items-center justify-center">
        <img src={error404Image} alt="404 Error" className="w-full h-auto object-contain" />
      </div>

      {/* Text Content */}
      <h1 className="text-base md:text-4xl font-extrabold text-slate-900 mb-1 text-center">
        Page Not Found
      </h1>
      <p className="text-xs md:text-lg text-slate-600 text-center max-w-sm mb-3">
        Sorry, the page you're looking for does not exist or has been moved.
        Please go back to the home page!
      </p>

      {/* Go Back Home Button */}
      <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white text-xs md:text-lg px-2 py-1 md:px-8 md:py-6 rounded-full shadow-lg transition-transform transform hover:scale-105">
        <Link to="/">Go back Home</Link>
      </Button>

      {/* Footer Links and Copyright */}
      <footer className="absolute bottom-6 text-sm text-slate-500 text-center w-full px-4">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4 mb-2">
          <a href="#" className="hover:text-blue-600">policies</a>
          <a href="#" className="hover:text-blue-600">Supports</a>
          <a href="#" className="hover:text-blue-600">Help Center</a>
        </div>
        <p>Copyright © 2024–2025 AltBit Softwares. All rights reserved.</p>
        <p>EduManageAI School Management System V5.00Release 1.0</p>
      </footer>
    </>
  );
};

export default NotFound;