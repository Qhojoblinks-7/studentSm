import React from 'react';
import { Calendar, ChevronLeft, ChevronRight, Download } from 'lucide-react';
// Shadcn Components
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import { timeSlots, weeklyTimeTable, weekDays } from '@/lib/mockData';

// Helper function to determine cell styling
const getCellClass = (course) => {
  const baseClass = 'px-3 py-3 text-sm border-l border-slate-100 font-medium whitespace-nowrap';
  if (course === 'BREAK') {
    return `${baseClass} bg-amber-50 text-amber-700`;
  }
  if (course.includes('Assembly') || course.includes('Remedial')) {
    return `${baseClass} bg-blue-50 text-blue-700`;
  }
  return `${baseClass} text-slate-700`;
};

// --- Main Component: Schedule ---
const Schedule = () => {
  return (
    <div className="p-0 space-y-6">
      
      {/* Header and Filters */}
      <div className="flex justify-between items-center">
        <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Student Dashboard / Schedule and Time Table</h1>
            <p className="text-md text-slate-600 mt-1">
                JHS 3 Week Timetable and prepares students for the BECE (Basic Education Certificate Examination).
            </p>
        </div>
        
        {/* Navigation and Actions */}
        <div className="flex space-x-2">
            <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" className="h-8">
                    All
                </Button>
                <Button variant="default" size="sm" className="h-8 bg-blue-600 hover:bg-blue-700">
                    Schedule
                </Button>
                <Button variant="outline" size="sm" className="h-8">
                    Submitted
                </Button>
            </div>
            <Button variant="outline" className="text-slate-600 hover:bg-slate-100">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
            </Button>
        </div>
      </div>

      <Separator className="bg-slate-200" />
      
      {/* Time Table Card */}
      <Card className="shadow-lg border-slate-100 rounded-xl overflow-hidden">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              
              {/* Table Header (Days of the Week) */}
              <thead className="bg-slate-50 border-b-2 border-slate-200">
                <tr>
                  <th scope="col" className="px-3 py-3 text-left text-xs font-bold text-slate-600 uppercase tracking-wider w-32 min-w-32">
                    <Calendar className="w-4 h-4 inline mr-1" /> Time Slot
                  </th>
                  {weekDays.map(day => (
                    <th key={day} scope="col" className="px-3 py-3 text-left text-xs font-bold text-slate-600 uppercase tracking-wider border-l border-slate-200">
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              
              {/* Table Body (Time Slots and Courses) */}
              <tbody className="bg-white divide-y divide-slate-100">
                {timeSlots.map((time, rowIndex) => (
                  <tr key={rowIndex}>
                    {/* Time Slot Column */}
                    <td className="px-3 py-3 text-sm font-semibold text-slate-900 bg-slate-50/50">
                      {time} 
                      {/* Optional: Add duration if desired */}
                      {/* <span className="text-xs text-slate-400 block">(30 min)</span> */}
                    </td>
                    
                    {/* Day Columns */}
                    {weekDays.map(day => {
                      const course = weeklyTimeTable[time] ? weeklyTimeTable[time][day] : '';
                      return (
                        <td key={day} className={getCellClass(course)}>
                          {course}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Pagination (Matching the visual) */}
      <div className="flex justify-center items-center pt-4">
          <Button variant="outline" size="icon" className="rounded-full mr-2">
              <ChevronLeft className="w-5 h-5" />
          </Button>
          <span className="text-sm text-slate-600">Page 1 of 10</span>
          <Button variant="outline" size="icon" className="rounded-full ml-2">
              <ChevronRight className="w-5 h-5" />
          </Button>
      </div>

    </div>
  );
};

export default Schedule;