import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import logo from '../../../assets/completed_teamwork.png';

const WelcomeBanner = ({ name, completion }) => (
  <Card className="col-span-8 shadow-md border-slate-100 p-0 relative md:col-span-8 bg-gradient-to-r from-[#CBCEFF] via-[#FFEDED] via-[#E5FEE9] to-[#B7FFF9] rounded-md hidden md:block">
    {/* Welcome Text Section */}
    <div className="p-2 flex items-center justify-between">
        <div className="flex-1 pr-36">
            <h1 className="text-lg font-extrabold text-slate-900 tracking-tight mb-1 whitespace-nowrap overflow-hidden text-ellipsis">
                Welcome back, <span className="text-blue-700">{name}</span>
            </h1>
        </div>
    </div>

    {/* Completion Message - Within Gradient Background */}
    <div className="px-4 pb-4 max-w-md">
        <p className="text-sm text-slate-700">
            You've completed <span className="font-bold">{completion}%</span> of your homework goals this month! keep going to reach and improve even more.
        </p>
    </div>

    {/* Placeholder for illustration */}
    <div className="absolute right-4 top-1/4 -translate-y-1/2 w-32 h-24 overflow-hidden opacity-80 flex items-center justify-center z-10">
        <img src={logo} alt="Logo" className="w-full h-full object-contain" />
    </div>
  </Card>
);

export default WelcomeBanner;