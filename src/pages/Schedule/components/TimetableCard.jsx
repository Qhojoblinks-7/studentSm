import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { weekDays } from '@/lib/mockData';

// Helper function to determine cell styling
const getCellClass = (course) => {
  const baseClass = 'w-full px-3 py-2 text-sm font-medium text-left';
  if (course === 'BREAK') {
    return `${baseClass} text-blue-800`;
  }
  if (course.includes('Assembly') || course.includes('Remedial')) {
    return `${baseClass} text-blue-800`;
  }
  return `${baseClass} text-slate-700`;
};

// --- Sub-Component: TimetableCard ---
const TimetableCard = ({ time, schedule, isLightBlue, isSingleDay = false }) => (
  <Card className={`mb-1 rounded-lg shadow-sm border-slate-200 ${isLightBlue ? 'bg-blue-50' : ''}`}>
    <CardContent className="p-4">
      <div className="flex justify-between items-center gap-2">
        {/* Time Slot */}
        <div className="text-sm font-semibold text-slate-900 px-3 py-2 rounded-md text-center flex-shrink-0">
          {time}
        </div>

        {/* Day Columns */}
        <div className="flex gap-2 flex-1 justify-end">
          {isSingleDay ? (
            // For single day (today's schedule)
            <div className="text-center flex-1">
              <div className={getCellClass(Object.values(schedule)[0] || '')}>
                {Object.values(schedule)[0] || ''}
              </div>
            </div>
          ) : (
            // For weekly timetable
            weekDays.map(day => {
              const course = schedule[day] || '';
              return (
                <div key={day} className="text-center flex-1">
                  <div className={getCellClass(course)}>
                    {course}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </CardContent>
  </Card>
);

export default TimetableCard;