import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import logo from '../src/assets/completed_teamwork.png';

const MobileDashboardBanner = ({ name, completion }) => (
  <Card className="shadow-md border-slate-100 p-0 relative bg-gradient-to-r from-[#CBCEFF] via-[#FFEDED] via-[#E5FEE9] to-[#B7FFF9] rounded-md md:hidden">
    {/* Welcome Text Section */}
    <div className="p-4 flex items-center justify-between">
        <div className="flex-1 pr-32">
            {/* Mobile Layout: Two lines */}
            <h1 className="text-lg font-extrabold text-slate-900 tracking-tight whitespace-nowrap">
                Welcome back,
            </h1>
            <h1 className="text-lg font-extrabold text-blue-700 tracking-tight whitespace-nowrap">
                {name}
            </h1>
        </div>
    </div>

    {/* Completion Message - Within Gradient Background */}
    <div className="px-4 pb-4">
        <p className="text-sm text-slate-700">
            You've completed <span className="font-bold">{completion}%</span> of your homework goals this month! keep going to reach and improve even more.
        </p>
    </div>

    {/* Placeholder for illustration */}
    <div className="absolute right-4 top-1/4 -translate-y-1/2 w-24 h-20 overflow-hidden opacity-80 flex items-center justify-center z-10">
        <img src={logo} alt="Logo" className="w-full h-full object-contain" />
    </div>
  </Card>
);

export default MobileDashboardBanner;