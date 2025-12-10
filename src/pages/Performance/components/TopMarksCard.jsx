import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Award, Star } from 'lucide-react';
import { topMarksData } from '@/lib/mockData';

const TopMarksCard = () => {
  const getRankIcon = (index) => {
    switch (index) {
      case 0:
        return <Trophy className="w-5 h-5 text-yellow-500" />;
      case 1:
        return <Award className="w-5 h-5 text-slate-400" />;
      case 2:
        return <Star className="w-5 h-5 text-purple-500" />;
      default:
        return null;
    }
  };

  const getRankColor = (index) => {
    switch (index) {
      case 0:
        return 'bg-yellow-50 border-yellow-200';
      case 1:
        return 'bg-slate-50 border-slate-200';
      case 2:
        return 'bg-purple-50 border-purple-200';
      default:
        return 'bg-slate-50 border-slate-200';
    }
  };

  return (
    <Card className="shadow-lg border-slate-100">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-bold text-slate-900 flex items-center">
          <Trophy className="w-5 h-5 mr-2 text-yellow-600" />
          Top 3 Marks
        </CardTitle>
        <p className="text-sm text-slate-600 mt-1">
          Your highest performing subjects
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {topMarksData.map((subject, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg border ${getRankColor(index)} transition-all hover:shadow-md`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                {getRankIcon(index)}
                <div>
                  <h4 className="font-semibold text-slate-900">{subject.subject}</h4>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-xs">
                      #{index + 1}
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-slate-900">
                  {subject.score}
                </div>
                <div className="text-sm text-slate-500">
                  / {subject.max}
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Performance</span>
                <span className="font-medium text-slate-900">
                  {Math.round((subject.score / subject.max) * 100)}%
                </span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${
                    subject.score >= 80 ? 'bg-green-500' :
                    subject.score >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${(subject.score / subject.max) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Achievement Badge */}
            {subject.score >= 80 && (
              <div className="mt-3 flex justify-end">
                <Badge className="bg-green-100 text-green-800 text-xs">
                  Excellent Performance
                </Badge>
              </div>
            )}
          </div>
        ))}

        {/* Summary */}
        <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-100">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-slate-900 mb-1">Academic Excellence</h4>
              <p className="text-sm text-slate-600">
                Strong performance across key subjects
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-yellow-600">
                {Math.round(topMarksData.reduce((acc, subject) => acc + subject.score, 0) / topMarksData.length)}
              </div>
              <div className="text-sm text-slate-600">Average Score</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TopMarksCard;
