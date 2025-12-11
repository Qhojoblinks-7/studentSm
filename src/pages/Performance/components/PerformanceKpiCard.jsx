import React from 'react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown } from 'lucide-react';

const PerformanceKpiCard = ({ title, value, subtext, max, change, icon: Icon, isRank }) => {
    const isPositive = change > 0;
    const changeColor = isPositive ? 'text-green-600' : 'text-red-600';
    const ChangeIcon = isPositive ? TrendingUp : TrendingDown;

    return (
        <Card className="shadow-lg bg-gradient-to-r from-[#CDFFFB]/50 via-[#FFEDED]/10 via-[#E5FEE9]/25 to-[#D8DAFE]/50 transition-colors">
            <CardContent className="p-2 sm:p-4">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <CardTitle className="text-md sm:text-lg lg:text-xl font-semibold text-slate-900 flex items-center">
                        <Icon className={`w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 mr-2 text-red-600`} />
                        {title}
                    </CardTitle>
                </div>

                <p className="text-lg sm:text-md lg:text-xl font-extrabold text-slate-900 mb-1">
                    {value}  <span className="text-sm sm:text-lg lg:text-md font-semibold text-slate-500"> / {max}</span>
                </p>

                <div className="flex justify-between items-center text-[10px] mt-3">
                    <p className="text-slate-500 whitespace-nowrap">{subtext}</p>
                    {isRank ? (
                        <p className={`font-semibold text-slate-600 whitespace-nowrap`}>in your cohort</p>
                    ) : (
                        <p className={`font-semibold ${changeColor} whitespace-nowrap`}>
                            {change > 0 && '+'}{change} from last sem
                        </p>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};

export default PerformanceKpiCard;