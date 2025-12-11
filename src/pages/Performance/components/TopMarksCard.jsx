import React from 'react';
import { Card, CardTitle } from '@/components/ui/card';

const TopMarksCard = () => (
    <Card className="w-full shadow-lg p-2 sm:p-4 bg-gradient-to-br from-green-50/80 to-white/90 hover:shadow-xl hover:bg-gradient-to-br hover:from-green-50 hover:to-white transition-all duration-300">
        <CardTitle className="text-lg sm:text-xl lg:text-xl font-bold text-slate-900 mb-3">Top 3 Marks</CardTitle>
        <div>
            {/* Assuming topMarksData is imported or defined */}
            {[
                { subject: 'Mathematics', score: 95, max: 100 },
                { subject: 'Science', score: 92, max: 100 },
                { subject: 'English', score: 88, max: 100 },
            ].map((item, index) => (
                <div key={index} className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-slate-800">{item.subject}</span>
                        <span className="text-sm font-semibold text-slate-700">{item.score}/{item.max}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                            className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                            style={{ width: `${(item.score / item.max) * 100}%` }}
                        ></div>
                    </div>
                </div>
            ))}
        </div>
    </Card>
);

export default TopMarksCard;