import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FeeKpiCard = ({ title, amount, icon: Icon, colorClass, dateInfo }) => (
    <Card className="shadow-lg border-none bg-gradient-to-r from-[#CDFFFB]/50 via-[#FFEDED]/10 via-[#E5FEE9]/25 to-[#D8DAFE]/50 transition-colors">
        <CardContent className="p-2 sm:p-4">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
                <CardTitle className="text-md sm:text-lg lg:text-xl font-semibold text-slate-900 flex items-center">
                    <Icon className={`w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 mr-2 ${colorClass}`} />
                    {title}
                </CardTitle>
            </div>

            <p className="text-lg sm:text-xl lg:text-2xl font-extrabold text-slate-900 mb-1">
                {new Intl.NumberFormat('en-GH', { style: 'currency', currency: 'GHS', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount)}
            </p>

            <div className="flex justify-between items-center text-[10px] mt-3">
                <p className="text-slate-500 whitespace-nowrap">{dateInfo}</p>
            </div>
        </CardContent>
    </Card>
);

export default FeeKpiCard;