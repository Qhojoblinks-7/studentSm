import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Target, TrendingUp } from 'lucide-react';
import { skillsAssessmentData } from '@/lib/mockData';

const SkillsAssessmentCardRadial = () => {
  // Calculate overall average
  const overallAverage = Math.round(
    skillsAssessmentData.reduce((acc, skill) => acc + skill.value, 0) / skillsAssessmentData.length
  );

  // Create radial progress circle
  const radius = 60;
  const strokeWidth = 8;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (overallAverage / 100) * circumference;

  return (
    <Card className="shadow-lg border-slate-100">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-bold text-slate-900 flex items-center">
          <Target className="w-5 h-5 mr-2 text-blue-600" />
          Skills Overview
        </CardTitle>
        <p className="text-sm text-slate-600 mt-1">
          Overall proficiency level
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Radial Progress Chart */}
        <div className="flex justify-center">
          <div className="relative">
            <svg width="140" height="140" className="transform -rotate-90">
              {/* Background circle */}
              <circle
                cx="70"
                cy="70"
                r={radius}
                stroke="#f1f5f9"
                strokeWidth={strokeWidth}
                fill="none"
              />
              {/* Progress circle */}
              <circle
                cx="70"
                cy="70"
                r={radius}
                stroke="#3b82f6"
                strokeWidth={strokeWidth}
                fill="none"
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            {/* Center text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">{overallAverage}%</div>
                <div className="text-sm text-slate-600">Overall</div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Skills */}
        <div className="space-y-3">
          <h4 className="font-semibold text-slate-900">Top Performing Skills</h4>
          {skillsAssessmentData
            .sort((a, b) => b.value - a.value)
            .slice(0, 3)
            .map((skill, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: skill.dot }}
                  ></div>
                  <span className="text-sm font-medium text-slate-900">{skill.skill}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-slate-900">{skill.value}%</span>
                  {skill.value >= 70 && (
                    <TrendingUp className="w-3 h-3 text-green-500" />
                  )}
                </div>
              </div>
            ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
          <div className="text-center">
            <div className="text-lg font-semibold text-green-600">
              {skillsAssessmentData.filter(skill => skill.value >= 70).length}
            </div>
            <div className="text-xs text-slate-600">Strong Skills</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-blue-600">
              {skillsAssessmentData.filter(skill => skill.value < 70).length}
            </div>
            <div className="text-xs text-slate-600">Developing</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillsAssessmentCardRadial;