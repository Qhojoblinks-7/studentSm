import React from 'react';
import { Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AIPersonalizedRecommendations = () => (
    <Card className="col-span-4 shadow-md border-slate-100 ">
      <CardHeader className="pb-2">
        <CardTitle className="text-md font-semibold text-slate-900 flex items-center">
          <Zap className="w-5 h-5 mr-2 text-blue-600" /> AI Personalized Recommendations
        </CardTitle>
        <p className="text-xs text-slate-500">Machine learning insights for your academic success and career path</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Card 1: Study Suggestion */}
        <div className="bg-blue-50/50 p-3 rounded-lg border border-blue-200 border-2 shadow-sm">
            <div className="flex justify-between items-center text-sm font-bold mb-1">
                <span className='font-semibold'>Study Suggestion</span>
                <span className="text-xs text-green-600">87% confidence</span>
            </div>
            <p className="text-xs text-slate-700">Your performance in Statistics is trending down. Consider scheduling study sessions for probability concepts</p>
        </div>
        
        {/* Card 2: Career Path */}
        <div className="bg-blue-50/50 border-blue-200 p-3 rounded-lg border  shadow-sm">
            <div className="flex justify-between items-center text-sm font-semibold mb-1">
                <span>Career Path</span>
                <span className="text-xs text-green-600">92% confidence</span>
            </div>
            <p className="text-xs text-slate-700">Based on your strong performance in Data Structures, consider exploring Software Engineering roles.</p>
        </div>
        
        {/* Card 3: Learning Resource */}
        <div className="bg-blue-50/50 p-3 border-blue-200 rounded-lg border  shadow-sm">
            <div className="flex justify-between items-center text-sm font-semibold mb-1">
                <span>Learning Resource</span>
                <span className="text-xs text-green-600">87% confidence</span>
            </div>
            <p className="text-xs text-slate-700">AI suggests additional video tutorials for Database Normalization concepts.</p>
        </div>
      </CardContent>
    </Card>
);

export default AIPersonalizedRecommendations;