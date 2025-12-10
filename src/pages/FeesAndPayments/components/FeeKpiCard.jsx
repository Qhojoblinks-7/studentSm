import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, DollarSign, Users, CreditCard, Target } from 'lucide-react';

const FeeKpiCard = ({
  title,
  value,
  subtext,
  trend,
  trendDirection,
  icon: Icon,
  color = 'blue',
  isCurrency = false
}) => {
  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-600',
        icon: 'text-blue-600'
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        text: 'text-green-600',
        icon: 'text-green-600'
      },
      orange: {
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        text: 'text-orange-600',
        icon: 'text-orange-600'
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        text: 'text-purple-600',
        icon: 'text-purple-600'
      },
      red: {
        bg: 'bg-red-50',
        border: 'border-red-200',
        text: 'text-red-600',
        icon: 'text-red-600'
      }
    };
    return colors[color] || colors.blue;
  };

  const colorClasses = getColorClasses(color);
  const isPositiveTrend = trendDirection === 'up';

  const formatValue = (val) => {
    if (isCurrency && typeof val === 'number') {
      return `$${val.toLocaleString()}`;
    }
    return val;
  };

  return (
    <Card className={`shadow-md border-slate-100 hover:shadow-lg transition-shadow ${colorClasses.border}`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-lg ${colorClasses.bg}`}>
            <Icon className={`w-6 h-6 ${colorClasses.icon}`} />
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

        <div className="space-y-2">
          <p className="text-sm font-medium text-slate-600">{title}</p>
          <div className="flex items-baseline space-x-1">
            <span className="text-3xl font-bold text-slate-900">
              {formatValue(value)}
            </span>
            {subtext && (
              <span className="text-sm text-slate-500">{subtext}</span>
            )}
          </div>
        </div>

        {/* Additional visual indicator */}
        <div className="mt-4">
          <div className={`h-1 rounded-full ${colorClasses.bg} relative overflow-hidden`}>
            <div
              className={`h-full ${colorClasses.bg} transition-all duration-1000 ease-out`}
              style={{
                width: trend ? `${Math.min(Math.abs(parseFloat(trend)) * 10, 100)}%` : '60%',
                backgroundColor: isPositiveTrend ? '#10b981' : '#ef4444'
              }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeeKpiCard;