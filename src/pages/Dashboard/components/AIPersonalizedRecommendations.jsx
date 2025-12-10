import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Brain, Target, BookOpen, TrendingUp } from 'lucide-react';

const AIPersonalizedRecommendations = () => {
  const recommendations = [
    {
      type: 'Study Suggestion',
      confidence: 87,
      content: 'Your performance in Religious and Moral Education is trending down. Consider scheduling study sessions for religious concepts.',
      progress: 87,
      icon: BookOpen,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      type: 'Career Path',
      confidence: 92,
      content: 'Based on your strong performance in Mathematics, Science and Computing, consider exploring Software Engineering roles.',
      progress: 92,
      icon: Target,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      type: 'Learning Resource',
      confidence: 64,
      content: 'AI suggests additional video tutorials for Database Normalization concepts.',
      progress: 64,
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
  ];

  return (
    <Card className="col-span-8 shadow-lg border-slate-100">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold text-slate-900 flex items-center">
          <Brain className="w-6 h-6 mr-2 text-purple-600" />
          AI Personalized Recommendations
        </CardTitle>
        <p className="text-sm text-slate-600 mt-1">
          Smart insights to help you excel in your studies
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {recommendations.map((rec, index) => (
          <div key={index} className={`p-4 rounded-lg border ${rec.bgColor} border-slate-200`}>
            <div className="flex items-start space-x-4">
              <div className={`p-2 rounded-lg ${rec.bgColor} ${rec.color}`}>
                <rec.icon className="w-5 h-5" />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs font-medium">
                    {rec.type}
                  </Badge>
                  <div className="flex items-center text-xs text-slate-500">
                    <span className="font-medium mr-1">{rec.confidence}%</span>
                    confidence
                  </div>
                </div>

                <p className="text-slate-700 mb-3 leading-relaxed">
                  {rec.content}
                </p>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-600">AI Confidence Level</span>
                    <span className="font-medium text-slate-900">{rec.confidence}%</span>
                  </div>
                  <Progress value={rec.confidence} className="h-1.5" />
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* AI Stats */}
        <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-100">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-slate-900 mb-1">AI Learning Insights</h4>
              <p className="text-sm text-slate-600">
                Based on your learning patterns and performance data
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-purple-600">3</div>
              <div className="text-xs text-slate-500">Active Recommendations</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIPersonalizedRecommendations;