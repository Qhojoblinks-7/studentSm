import React from 'react';
import { BookOpen, FileText, BarChart2 } from 'lucide-react'; // Icons for action buttons
import { studentCourses } from '@/lib/mockData'; // Import mock data

// Shadcn Components
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';

/**
 * Renders the individual course card for the Student Dashboard.
 * @param {object} course - The course data object.
 */
const CourseCard = ({ course }) => {
  const { title, code, teacher, progressPercentage, totalLessons, completedLessons } = course;
  
  // Helper component for the Materials/Assignments/Grades buttons
  const ActionButton = ({ icon: Icon, label, isActive }) => (
    <Button 
      variant={isActive ? "default" : "secondary"}
      className={`
        flex-1 h-9 rounded-xl shadow-none 
        ${isActive 
            ? "bg-blue-500 hover:bg-blue-600 text-white" // Active styles
            : "bg-slate-100 hover:bg-slate-200 text-slate-600" // Inactive styles
        }
      `}
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
          <a href="#" className="text-xs font-semibold text-blue-500 hover:text-blue-700 transition-colors">
            See Course Details
          </a>
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
            value={progressPercentage} 
            className="h-2 bg-slate-200"
            indicatorClassName="bg-gradient-to-r from-blue-400 to-blue-600" // Custom gradient indicator
          />
        </div>

        {/* Action Buttons (Materials, Assignments, Grades) */}
        <div className="flex gap-3 pt-3">
          {/* Active: Materials */}
          <ActionButton 
            icon={BookOpen} 
            label="Materials" 
            isActive={true} 
          />
          
          {/* Inactive: Assignments */}
          <ActionButton 
            icon={FileText} 
            label="Assignments" 
            isActive={false} 
          />
          
          {/* Inactive: Grades */}
          <ActionButton 
            icon={BarChart2} 
            label="Grades" 
            isActive={false} 
          />
        </div>

      </CardContent>
    </Card>
  );
};


/**
 * Main My Courses Page Component (Bento Grid)
 */
const MyCourses = () => {
  return (
    <div className="p-0 space-y-6">
      
      {/* Page Header */}
      <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Student Dashboard / My Courses</h1>
      <p className="text-md text-slate-600">
        Courses are based on the current GES curriculum for all Basic Schools.
      </p>

      {/* Bento Grid Layout (2-column layout) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {studentCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

    </div>
  );
};

export default MyCourses;