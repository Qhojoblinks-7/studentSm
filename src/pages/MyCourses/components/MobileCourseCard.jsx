import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';

/**
 * Mobile version of the CourseCard component for smaller screens.
 * @param {object} course - The course data object.
 * @param {function} onViewDetails - Handler for viewing course details
 * @param {function} onViewMaterials - Handler for viewing course materials
 * @param {function} onViewAssignments - Handler for viewing assignments
 * @param {function} onViewGrades - Handler for viewing grades
 */
const MobileCourseCard = ({ course, onViewDetails, onViewMaterials, onViewAssignments, onViewGrades }) => {
  const { title, code, teacher, totalLessons, completedLessons } = course;
  const progressPercentage = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;
  const [currentProgress, setCurrentProgress] = useState(0);

  React.useEffect(() => {
    let start = 0;
    const end = progressPercentage;
    const duration = 1000; // 1 second
    const increment = end / (duration / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCurrentProgress(end);
        clearInterval(timer);
      } else {
        setCurrentProgress(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [progressPercentage]);

  // Helper component for the action buttons in mobile layout
  const ActionButton = ({ label, isActive, onClick }) => (
    <Button
      variant={isActive ? "default" : "secondary"}
      className={`
        flex-1 h-10 rounded-lg shadow-none text-xs
        ${isActive
            ? "bg-blue-500 hover:bg-blue-600 text-white" // Active styles
            : "bg-slate-100 hover:bg-slate-200 text-slate-600" // Inactive styles
        }
      `}
      onClick={onClick}
    >
      {label}
    </Button>
  );

  return (
    <Card className="shadow-md border-slate-100 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg md:hidden">
      <CardHeader className="p-4 border-b border-slate-100">
        <div className="flex justify-between items-start">
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-bold text-slate-900 truncate">{title}</h3>
            <p className="text-xs text-slate-500 mt-0.5 truncate">
              {code} • {teacher}
            </p>
          </div>
          <button
            onClick={() => onViewDetails(course)}
            className="flex items-center text-xs font-semibold text-blue-500 hover:text-blue-700 transition-colors ml-2"
          >
            Details
            <ChevronRight className="w-3 h-3 ml-1" />
          </button>
        </div>
      </CardHeader>

      <CardContent className="p-4 space-y-3">

        {/* Progress Tracker */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-slate-600">Progress</span>
            <span className="text-xs font-medium text-slate-500">
              {completedLessons}/{totalLessons}
            </span>
          </div>
          <Progress
            value={currentProgress}
            className="h-2 bg-slate-200"
            indicatorClassName="bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-1000 ease-out"
          />
        </div>

        {/* Action Buttons (Materials, Assignments, Grades) */}
        <div className="grid grid-cols-3 gap-2 pt-2">
          {/* Active: Materials */}
          <ActionButton
            label="Materials"
            isActive={true}
            onClick={() => onViewMaterials(course)}
          />

          {/* Inactive: Assignments */}
          <ActionButton
            label="Assignments"
            isActive={false}
            onClick={() => onViewAssignments(course)}
          />

          {/* Inactive: Grades */}
          <ActionButton
            label="Grades"
            isActive={false}
            onClick={() => onViewGrades(course)}
          />
        </div>

      </CardContent>
    </Card>
  );
};

export default MobileCourseCard;