import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

// Shadcn Components (Button for "Go back Home")
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    // The main container matches the gradient background seen in the image.
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6">
      
      {/* Logo Placeholder (matching the style implied in visuals) */}
      {/* You would typically import your actual logo component or image here */}
      <div className="absolute top-8 left-8 text-xl font-extrabold text-blue-600 tracking-tight flex items-center">
        {/* Placeholder for a logo icon */}
        <span className="h-6 w-6 bg-blue-600 rounded-full mr-2"></span> 
        AltBit<span className="text-slate-900 ml-1">Softwares</span>
      </div>

      {/* Main Illustration */}
      <div className="mb-8 relative w-[400px] h-[300px] flex items-center justify-center">
        {/* 
 */}
      </div>

      {/* Text Content */}
      <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
        Page Not Found
      </h1>
      <p className="text-lg text-slate-600 text-center max-w-md mb-8">
        Sorry, the page you're looking for does not exist or has been moved.
        Please go back to the home page!
      </p>

      {/* Go Back Home Button */}
      <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-8 py-6 rounded-full shadow-lg transition-transform transform hover:scale-105">
        <Link to="/">Go back Home</Link>
      </Button>

      {/* Footer Links and Copyright */}
      <footer className="absolute bottom-6 text-sm text-slate-500 text-center">
        <div className="flex space-x-4 mb-2">
          <a href="#" className="hover:text-blue-600">policies</a>
          <a href="#" className="hover:text-blue-600">Supports</a>
          <a href="#" className="hover:text-blue-600">Help Center</a>
        </div>
        <p>Copyright © 2024–2025 AltBit Softwares. All rights reserved.</p>
        <p>EduManageAI School Management System V5.00Release 1.0</p>
      </footer>
    </div>
  );
};

export default NotFound;