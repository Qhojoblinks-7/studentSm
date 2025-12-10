import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Award, Target } from 'lucide-react';

const ResultField = ({ result }) => {
  const getGradeColor = (grade) => {
    switch (grade) {
      case 'A':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'B':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'C':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'D':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'F':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPositionColor = (position) => {
    const pos = parseInt(position);
    if (pos === 1) return 'text-yellow-600';
    if (pos <= 3) return 'text-green-600';
    if (pos <= 10) return 'text-blue-600';
    return 'text-slate-600';
  };

  return (
    <Card className="shadow-md border-slate-100 hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Subject Info */}
          <div className="flex-1">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">
                  {result.subject}
                </h3>
                <p className="text-sm text-slate-600 mb-2">
                  Code: {result.code}
                </p>
              </div>
              <Badge className={`${getGradeColor(result.grade)} font-bold text-lg px-3 py-1`}>
                {result.grade}
              </Badge>
            </div>

            {/* Scores */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
              <div className="text-center">
                <div className="text-sm text-slate-600 mb-1">Class Score</div>
                <div className="text-lg font-bold text-slate-900">{result.classScore}</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-slate-600 mb-1">Exam Score</div>
                <div className="text-lg font-bold text-slate-900">{result.examScore}</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-slate-600 mb-1">Total</div>
                <div className="text-xl font-bold text-blue-600">{result.total}</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-slate-600 mb-1">Position</div>
                <div className={`text-lg font-bold ${getPositionColor(result.position)}`}>
                  {result.position}
                </div>
              </div>
            </div>

            {/* Remarks */}
            {result.remarks && (
              <div className="text-sm text-slate-600 italic">
                "{result.remarks}"
              </div>
            )}
          </div>

          {/* Performance Indicator */}
          <div className="lg:w-32 flex justify-center">
            <div className="relative">
              <div className="w-20 h-20 rounded-full border-4 border-slate-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg font-bold text-slate-900">{result.total}</div>
                  <div className="text-xs text-slate-500">/100</div>
                </div>
              </div>
              <div
                className="absolute inset-0 rounded-full border-4 border-blue-500"
                style={{
                  background: `conic-gradient(blue 0% ${result.total}%, transparent ${result.total}% 100%)`,
                  mask: 'radial-gradient(farthest-side, transparent calc(100% - 4px), black calc(100% - 4px))',
                  WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 4px), black calc(100% - 4px))'
                }}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResultField;