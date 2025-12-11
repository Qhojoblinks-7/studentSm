import React, { useState } from 'react';
import { BookOpen, FileText, BarChart2 } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';

/**
 * Renders the individual course card for the Student Dashboard.
 * @param {object} course - The course data object.
 * @param {function} onViewDetails - Handler for viewing course details
 * @param {function} onViewMaterials - Handler for viewing course materials
 * @param {function} onViewAssignments - Handler for viewing assignments
 * @param {function} onViewGrades - Handler for viewing grades
 */
const CourseCard = ({ course, onViewDetails, onViewMaterials, onViewAssignments, onViewGrades }) => {
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

  // Helper component for the Materials/Assignments/Grades buttons
  const ActionButton = ({ icon: Icon, label, isActive, onClick }) => (
    <Button
      variant={isActive ? "default" : "secondary"}
      className={`
        flex-1 h-9 rounded-xl shadow-none
        ${isActive
            ? "bg-blue-500 hover:bg-blue-600 text-white" // Active styles
            : "bg-slate-100 hover:bg-slate-200 text-slate-600" // Inactive styles
        }
      `}
      onClick={onClick}
    >
      <Icon className="w-4 h-4 mr-2" />
      {label}
    </Button>
  );

  return (
    <Card className="shadow-lg border-slate-100 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl">
      <CardHeader className="p-5 border-b border-slate-100">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold text-slate-900">{title}</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              {code} | {teacher}
            </p>
          </div>
          <button
            onClick={() => onViewDetails(course)}
            className="text-xs font-semibold text-blue-500 hover:text-blue-700 transition-colors"
          >
            See Course Details
          </button>
        </div>
      </CardHeader>

      <CardContent className="p-5 space-y-4">

        {/* Progress Tracker */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-slate-600">Courses Progress</span>
            <span className="text-xs font-medium text-slate-500">
              {completedLessons}/{totalLessons} Lessons
            </span>
          </div>
          <Progress
            value={currentProgress}
            className="h-2 bg-slate-200"
            indicatorClassName="bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-1000 ease-out" // Custom gradient indicator with animation
          />
        </div>

        {/* Action Buttons (Materials, Assignments, Grades) */}
        <div className="flex gap-3 pt-3">
          {/* Active: Materials */}
          <ActionButton
            icon={BookOpen}
            label="Materials"
            isActive={true}
            onClick={() => onViewMaterials(course)}
          />

          {/* Inactive: Assignments */}
          <ActionButton
            icon={FileText}
            label="Assignments"
            isActive={false}
            onClick={() => onViewAssignments(course)}
          />

          {/* Inactive: Grades */}
          <ActionButton
            icon={BarChart2}
            label="Grades"
            isActive={false}
            onClick={() => onViewGrades(course)}
          />
        </div>

      </CardContent>
    </Card>
  );
};

export default CourseCard;