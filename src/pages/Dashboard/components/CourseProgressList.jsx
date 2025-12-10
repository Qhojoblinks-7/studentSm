import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Clock, CheckCircle } from 'lucide-react';

const CourseProgressList = ({ courses }) => {
  return (
    <Card className="shadow-lg border-slate-100">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold text-slate-900 flex items-center">
          <BookOpen className="w-6 h-6 mr-2 text-blue-600" />
          Your Courses
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {courses.map((course) => (
          <div key={course.id} className="p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-semibold text-slate-900 text-lg">{course.title}</h3>
                <p className="text-sm text-slate-600">{course.code}</p>
                <p className="text-sm text-slate-500">by {course.teacher}</p>
              </div>
              <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                {course.progressPercentage}%
              </Badge>
            </div>

            <div className="mb-3">
              <Progress value={course.progressPercentage} className="h-2" />
            </div>

            <div className="flex justify-between items-center text-sm text-slate-600">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                <span>{course.completedLessons} of {course.totalLessons} lessons</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1 text-slate-400" />
                <span>In Progress</span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default CourseProgressList;