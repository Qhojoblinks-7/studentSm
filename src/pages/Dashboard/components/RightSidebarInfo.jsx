import React from 'react';
import { Users, CheckCircle } from 'lucide-react';

// Shadcn Components
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const RightSidebarInfo = ({ teachers, attendance }) => {
  return (
    <div className="space-y-6">
      {/* Linked Teachers */}
      <Card className="shadow-md border-slate-100">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-bold text-slate-800 flex items-center">
            <Users className="w-5 h-5 mr-2 text-blue-600" />
            Linked Teachers
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {teachers.map((teacher, index) => (
            <div key={index} className="flex items-center space-x-3 p-2 rounded-lg bg-slate-50">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-semibold text-blue-600">
                  {teacher.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-900">{teacher.name}</p>
                <p className="text-xs text-slate-600">{teacher.subject}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Attendance */}
      <Card className="shadow-md border-slate-100">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-bold text-slate-800 flex items-center">
            <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
            Attendance
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* This Week */}
          <div>
            <p className="text-sm font-bold text-slate-800 mb-2">This Week / Week 2</p>
            <div className="space-y-1">
              {attendance.thisWeek.map((item, index) => (
                <div key={`this-${index}`} className="flex justify-between items-center text-sm py-1">
                  <span className="text-slate-700">{item.day}</span>
                  <CheckCircle className={`w-4 h-4 ${item.present ? 'text-green-500' : 'text-red-500'}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Last Week */}
          <div>
            <p className="text-sm font-bold text-slate-800 mb-2">Last Week / Week 1</p>
            <div className="space-y-1">
              {attendance.lastWeek.map((item, index) => (
                <div key={`last-${index}`} className="flex justify-between items-center text-sm py-1">
                  <span className="text-slate-700">{item.day}</span>
                  <CheckCircle className={`w-4 h-4 ${item.present ? 'text-green-500' : 'text-red-500'}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Attendance Summary */}
          <div className="pt-3 border-t border-slate-200">
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-600">This Week:</span>
              <Badge className="bg-green-100 text-green-800">
                {attendance.thisWeek.filter(day => day.present).length}/{attendance.thisWeek.length} days
              </Badge>
            </div>
            <div className="flex justify-between items-center text-sm mt-1">
              <span className="text-slate-600">Last Week:</span>
              <Badge className="bg-blue-100 text-blue-800">
                {attendance.lastWeek.filter(day => day.present).length}/{attendance.lastWeek.length} days
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RightSidebarInfo;