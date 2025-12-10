import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, BookOpen, CheckCircle, Clock, AlertCircle, Eye, Download } from 'lucide-react';

const AssignmentCard = ({ assignment, onView, onSubmit, onDownload }) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'awaiting grade':
        return 'bg-blue-100 text-blue-800';
      case 'graded':
        return 'bg-green-100 text-green-800';
      case 'closed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return <Clock className="w-4 h-4" />;
      case 'awaiting grade':
        return <AlertCircle className="w-4 h-4" />;
      case 'graded':
        return <CheckCircle className="w-4 h-4" />;
      case 'closed':
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const getUrgencyColor = (daysLeft) => {
    if (daysLeft <= 1) return 'text-red-600';
    if (daysLeft <= 3) return 'text-orange-600';
    return 'text-green-600';
  };

  return (
    <Card className="shadow-md border-slate-100 hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">
                  {assignment.assignmentName}
                </h3>
                <p className="text-sm text-slate-600 mb-2">
                  {assignment.courseTitle} • {assignment.courseCode}
                </p>
              </div>
              <Badge className={`${getStatusColor(assignment.status)} flex items-center space-x-1`}>
                {getStatusIcon(assignment.status)}
                <span>{assignment.status}</span>
              </Badge>
            </div>

            <div className="flex items-center space-x-4 text-sm text-slate-600">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>Due in {assignment.daysLeft} days</span>
              </div>
              <div className="flex items-center space-x-1">
                <BookOpen className="w-4 h-4" />
                <span>{assignment.teacher}</span>
              </div>
              {assignment.score && (
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Score: {assignment.score}</span>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" onClick={() => onView(assignment)}>
              <Eye className="w-4 h-4 mr-2" />
              View
            </Button>
            {assignment.status === 'Pending' && (
              <Button size="sm" onClick={() => onSubmit(assignment)}>
                Submit
              </Button>
            )}
            {assignment.status === 'Graded' && (
              <Button variant="outline" size="sm" onClick={() => onDownload(assignment)}>
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            )}
          </div>
        </div>

        {/* Progress Bar for Pending Assignments */}
        {assignment.status === 'Pending' && (
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-slate-600">Progress</span>
              <span className="text-slate-900">0%</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full w-0 transition-all duration-300"></div>
            </div>
          </div>
        )}

        {/* Urgency Indicator */}
        {assignment.status === 'Pending' && assignment.daysLeft <= 3 && (
          <div className={`mt-3 text-sm font-medium ${getUrgencyColor(assignment.daysLeft)}`}>
            {assignment.daysLeft <= 1 ? '⚠️ Due Today!' : `⚠️ Due in ${assignment.daysLeft} days`}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AssignmentCard;