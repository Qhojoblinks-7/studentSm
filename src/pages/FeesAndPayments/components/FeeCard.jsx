import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown } from 'lucide-react';

const FeeCard = ({ title, value, subtext, trend, trendDirection, icon: Icon }) => {
  const isPositiveTrend = trendDirection === 'up';

  return (
    <Card className="shadow-md border-slate-100 hover:shadow-lg transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className={`p-2 rounded-lg ${isPositiveTrend ? 'bg-green-50' : 'bg-red-50'}`}>
            <Icon className={`w-5 h-5 ${isPositiveTrend ? 'text-green-600' : 'text-red-600'}`} />
          </div>
          {trend && (
            <div className={`flex items-center text-sm font-medium ${
              isPositiveTrend ? 'text-green-600' : 'text-red-600'
            }`}>
              {isPositiveTrend ? (
                <TrendingUp className="w-4 h-4 mr-1" />
              ) : (
                <TrendingDown className="w-4 h-4 mr-1" />
              )}
              {trend}
            </div>
          )}
        </div>

        <div className="space-y-1">
          <p className="text-sm font-medium text-slate-600">{title}</p>
          <div className="flex items-baseline space-x-1">
            <span className="text-2xl font-bold text-slate-900">{value}</span>
            {subtext && (
              <span className="text-sm text-slate-500">{subtext}</span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeeCard;