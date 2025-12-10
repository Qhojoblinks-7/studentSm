import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Target, TrendingUp } from 'lucide-react';
import { skillsAssessmentData } from '@/lib/mockData';

const SkillsAssessmentCard = () => {
  return (
    <Card className="shadow-lg border-slate-100">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-bold text-slate-900 flex items-center">
          <Target className="w-5 h-5 mr-2 text-blue-600" />
          Skills Assessment
        </CardTitle>
        <p className="text-sm text-slate-600 mt-1">
          Your proficiency across different subjects
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {skillsAssessmentData.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: skill.dot }}
                ></div>
                <span className="font-medium text-slate-900">{skill.skill}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-slate-900">
                  {skill.value}%
                </span>
                {skill.value >= 70 && (
                  <Badge variant="secondary" className="text-xs bg-green-50 text-green-700">
                    Strong
                  </Badge>
                )}
              </div>
            </div>
            <Progress value={skill.value} className="h-2" />
          </div>
        ))}

        {/* Summary */}
        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-slate-900 mb-1">Overall Performance</h4>
              <p className="text-sm text-slate-600">
                Average proficiency across all skills
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">
                {Math.round(skillsAssessmentData.reduce((acc, skill) => acc + skill.value, 0) / skillsAssessmentData.length)}%
              </div>
              <div className="flex items-center text-xs text-green-600 mt-1">
                <TrendingUp className="w-3 h-3 mr-1" />
                Improving
              </div>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="space-y-2">
          <h5 className="font-medium text-slate-900">Recommendations</h5>
          <div className="space-y-2 text-sm text-slate-600">
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <p>Focus on improving Mathematics skills through additional practice problems</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <p>Continue building on strong performance in Creative Arts</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
              <p>Consider advanced Computing projects to further develop technical skills</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillsAssessmentCard;