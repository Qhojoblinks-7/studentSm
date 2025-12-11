import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const CourseProgressList = ({ courses }) => {
  const navigate = useNavigate();

  const handleSeeAllCourses = () => {
    // Navigate to the MyCourses page
    navigate('/courses');
  };

  return (
    <Card className="col-span-8 shadow-md border-slate-100">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-bold text-slate-900">Your Courses</CardTitle>
          <Button
            variant="link"
            className="text-blue-600 h-auto p-0 text-sm"
            onClick={handleSeeAllCourses}
          >
            See all
          </Button>
        </div>
        <p className="text-sm text-slate-500">Courses are based on the current GES curriculum for all Basic Schools</p>
      </CardHeader>
    <CardContent className="space-y-4">
      {courses.slice(0, 4).map(course => ( // Limiting to top 4 for the dashboard
        <div key={course.id}>
          <div className="flex justify-between items-center mb-1">
            <p className="text-sm font-bold text-slate-800">{course.title}</p>
            <span className="text-sm text-slate-600">{course.lessonsDone}/{course.totalLessons} Lessons</span>
          </div>
          <p className="text-xs text-slate-500 mb-2">{course.code} | {course.teacher}</p>
          <Progress value={course.progressPercentage} className="h-2 [&>div]:bg-blue-500 bg-slate-200" />
        </div>
      ))}
    </CardContent>
  </Card>
  );
};

export default CourseProgressList;