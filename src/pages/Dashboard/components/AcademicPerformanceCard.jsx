import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Target } from 'lucide-react';

const AcademicPerformanceCard = ({ performance, gpa, trend }) => {
  const isPositiveTrend = trend && trend.includes('+');

  return (
    <Card className="shadow-md border-slate-100">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-bold text-slate-800 flex items-center">
          <Target className="w-5 h-5 mr-2 text-blue-600" />
          Academic Performance
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* GPA Display */}
        <div className="text-center">
          <div className="text-3xl font-bold text-slate-900 mb-1">
            {gpa}
          </div>
          <p className="text-sm text-slate-600">Current GPA</p>
        </div>

        {/* Performance Status */}
        <div className="flex justify-center">
          <Badge
            variant={performance >= 80 ? "default" : performance >= 60 ? "secondary" : "destructive"}
            className="px-3 py-1"
          >
            {performance >= 80 ? 'Excellent' : performance >= 60 ? 'Good' : 'Needs Improvement'}
          </Badge>
        </div>

        {/* Trend Indicator */}
        {trend && (
          <div className="flex items-center justify-center space-x-2 text-sm">
            {isPositiveTrend ? (
              <TrendingUp className="w-4 h-4 text-green-500" />
            ) : (
              <TrendingDown className="w-4 h-4 text-red-500" />
            )}
            <span className={isPositiveTrend ? 'text-green-600' : 'text-red-600'}>
              {trend}
            </span>
          </div>
        )}

        {/* Performance Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-slate-600">Overall Performance</span>
            <span className="font-medium text-slate-900">{performance}%</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all duration-300 ${
                performance >= 80 ? 'bg-green-500' :
                performance >= 60 ? 'bg-yellow-500' : 'bg-red-500'
              }`}
              style={{ width: `${performance}%` }}
            ></div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-100">
          <div className="text-center">
            <div className="text-lg font-semibold text-slate-900">12</div>
            <div className="text-xs text-slate-600">Credits Earned</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-slate-900">8th</div>
            <div className="text-xs text-slate-600">Class Rank</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AcademicPerformanceCard;