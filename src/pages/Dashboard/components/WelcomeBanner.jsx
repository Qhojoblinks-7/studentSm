import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, Target, TrendingUp } from 'lucide-react';

const WelcomeBanner = ({ name, completion }) => {
  return (
    <Card className="col-span-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg border-0">
      <CardContent className="p-6">
        <div className="flex justify-between items-center">
          {/* Left side - Welcome message */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-2">
              Welcome back, {name || 'Student'}! 👋
            </h1>
            <p className="text-blue-100 mb-4">
              Ready to continue your learning journey? Here's your progress overview.
            </p>
            
            {/* Homework completion */}
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-300" />
                  <span className="font-medium">Homework Completion</span>
                </div>
                <span className="text-sm font-bold">{completion}%</span>
              </div>
              <Progress value={completion} className="h-2 bg-white/20" />
              <p className="text-xs text-blue-100 mt-2">
                Keep up the great work! You're on track to complete all assignments.
              </p>
            </div>
          </div>

          {/* Right side - Achievement icons */}
          <div className="hidden md:flex flex-col items-center space-y-4 ml-6">
            <div className="bg-white/20 rounded-full p-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <div className="bg-white/20 rounded-full p-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WelcomeBanner;
