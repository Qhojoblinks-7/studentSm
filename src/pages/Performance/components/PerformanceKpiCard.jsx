import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, TrendingDown } from 'lucide-react';

const PerformanceKpiCard = ({
  title,
  value,
  max,
  change,
  subtext,
  icon: Icon,
  isRank = false
}) => {
  const isPositiveChange = change > 0;
  const percentage = max ? Math.round((value / max) * 100) : 0;

  return (
    <Card className="shadow-md border-slate-100 hover:shadow-lg transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className={`p-2 rounded-lg ${isRank ? 'bg-purple-50' : 'bg-blue-50'}`}>
            <Icon className={`w-5 h-5 ${isRank ? 'text-purple-600' : 'text-blue-600'}`} />
          </div>
          {change !== undefined && (
            <div className={`flex items-center text-sm font-medium ${
              isPositiveChange ? 'text-green-600' : 'text-red-600'
            }`}>
              {isPositiveChange ? (
                <TrendingUp className="w-4 h-4 mr-1" />
              ) : (
                <TrendingDown className="w-4 h-4 mr-1" />
              )}
              {isPositiveChange ? '+' : ''}{change}
            </div>
          )}
        </div>

        <div className="space-y-2">
          <div>
            <p className="text-sm font-medium text-slate-600">{title}</p>
            <div className="flex items-baseline space-x-1">
              <span className="text-2xl font-bold text-slate-900">
                {isRank ? `${value}/${max}` : value}
              </span>
              {!isRank && max && (
                <span className="text-sm text-slate-500">/ {max}</span>
              )}
            </div>
          </div>

          {max && !isRank && (
            <div className="space-y-1">
              <Progress value={percentage} className="h-1.5" />
              <p className="text-xs text-slate-500">{percentage}% of maximum</p>
            </div>
          )}

          {subtext && (
            <p className="text-xs text-slate-500 mt-2">{subtext}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceKpiCard;