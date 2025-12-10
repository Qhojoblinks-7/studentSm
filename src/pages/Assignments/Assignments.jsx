import React, { useState } from 'react';
import { 
  Download, Eye, Clock, CheckCircle, Upload, ChevronLeft, ChevronRight 
} from 'lucide-react';

// Shadcn Components
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

import { studentAssignments } from '@/lib/mockData';

// --- Sub-Component: Assignment Status Badge ---
const StatusBadge = ({ status, grade }) => {
  let badgeClasses = "";
  let badgeText = status;
  let statusIcon = null;

  switch (status) {
    case "Pending":
      // Yellow/Orange
      badgeClasses = "bg-amber-100 text-amber-700 border-amber-300";
      break;
    case "Submitted":
      // Light Blue (Used for filter display, status changes to Awaiting Grade)
      badgeClasses = "bg-blue-100 text-blue-700 border-blue-300";
      break;
    case "Awaiting Grade":
      // Purple
      badgeClasses = "bg-violet-100 text-violet-700 border-violet-300";
      break;
    case "Graded":
      // Green
      badgeClasses = "bg-green-100 text-green-700 border-green-300";
      badgeText = `Grade: ${grade}`;
      break;
    case "Closed":
      // Red
      badgeClasses = "bg-red-100 text-red-700 border-red-300";
      badgeText = "Closed";
      break;
    default:
      badgeClasses = "bg-slate-100 text-slate-500 border-slate-300";
      break;
  }

  return (
    <Badge className={`py-1 px-3 text-xs font-semibold rounded-full border ${badgeClasses}`}>
      {statusIcon}
      {badgeText}
    </Badge>
  );
};

// --- Sub-Component: Individual Assignment Card ---
const AssignmentCard = ({ assignment }) => {
  const { 
    courseTitle, courseCode, teacher, assignmentName, status, daysLeft, grade, timeOver, score 
  } = assignment;

  // Determine Deadline and Status Display Text
  const deadlineText = timeOver 
    ? "Time over" 
    : `${daysLeft} day${daysLeft !== 1 ? 's' : ''} left`;
  
  // Submitted text (used on the right side of the card, next to days left)
  const submittedText = (status === 'Submitted' || status === 'Graded' || status === 'Awaiting Grade') 
    ? 'Submitted' 
    : 'Pending';

  // Determine button state and label for submission
  const SubmitButton = () => {
    const isCompleted = status === 'Closed' || status === 'Submitted' || status === 'Graded' || status === 'Awaiting Grade';
    
    return (
      <Button 
        className={`
            ${!isCompleted ? "bg-blue-600 hover:bg-blue-700" : "bg-slate-200 text-slate-500"}
        `}
        disabled={isCompleted}
      >
        {!isCompleted ? <Upload className="w-4 h-4 mr-2" /> : <CheckCircle className="w-4 h-4 mr-2" />}
        {!isCompleted ? 'Submit Work' : 'Submitted'}
      </Button>
    );
  };

  return (
    <Card className="shadow-md border-slate-100 rounded-xl overflow-hidden mb-4">
      <CardContent className="flex justify-between items-center p-4">
        
        {/* Left Section: Course Info, Assignment Title, Buttons */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-3 mb-1">
            <h3 className="text-lg font-bold text-slate-900">{courseTitle}</h3>
            <span className="text-xs text-slate-500">
                {courseCode} | {teacher}
            </span>
          </div>
          <p className="text-md font-medium text-slate-800 mb-4">{assignmentName}</p>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <Button variant="outline" className="text-slate-600 hover:bg-slate-100">
              <Eye className="w-4 h-4 mr-2" />
              View Details
            </Button>
            
            <SubmitButton />

            <Button variant="outline" className="text-slate-600 hover:bg-slate-100">
              <Download className="w-4 h-4 mr-2" />
              Download Work
            </Button>
            
          </div>
        </div>

        {/* Right Section: Score, Deadline, Status Badge */}
        <div className="flex flex-col items-end pl-6 min-w-[150px]">
            {/* Score */}
            <div className="text-2xl font-bold text-slate-900 mb-2 h-8">
                {status === 'Graded' && score !== null ? score : ''}
            </div>

            {/* Deadline Text */}
            <div className="text-sm font-medium text-slate-600 flex items-center mb-1">
                <Clock className={`w-4 h-4 mr-1 ${timeOver ? 'text-red-500' : 'text-slate-500'}`} />
                {deadlineText}
            </div>
            
            {/* Submitted/Pending Text (Right Side) */}
            <p className={`text-xs font-semibold ${submittedText === 'Submitted' ? 'text-green-600' : 'text-amber-600'} mb-2`}>
                {submittedText}
            </p>

            {/* Status Badge */}
            <StatusBadge status={status} grade={grade} />
        </div>
      </CardContent>
    </Card>
  );
};


// --- Main Component: Assignments ---
const Assignments = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filteredAssignments = studentAssignments.filter(assignment => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Submitted') {
        // Submitted includes Awaiting Grade and Graded
        return assignment.status === 'Submitted' || assignment.status === 'Graded' || assignment.status === 'Awaiting Grade';
    }
    if (activeFilter === 'Pending') {
        // Pending only includes 'Pending' (not closed)
        return assignment.status === 'Pending';
    }
    return false;
  });

  const filterButton = (label) => (
    <Button 
      key={label}
      onClick={() => setActiveFilter(label)}
      variant={activeFilter === label ? "default" : "outline"}
      className={`
        rounded-full px-4 py-1 h-8 text-sm font-medium
        ${activeFilter === label 
            ? "bg-blue-600 hover:bg-blue-700 text-white" 
            : "border-slate-300 text-slate-600 hover:bg-slate-100"
        }
      `}
    >
      {label}
    </Button>
  );

  return (
    <div className="p-0 space-y-6">
      
      {/* Header and Filters */}
      <div className="flex justify-between items-start">
        <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Student Dashboard / Assignments</h1>
            <p className="text-md text-slate-600 mt-1">
                Submit work and track grading status.
            </p>
        </div>
        
        {/* Filter Buttons (Matching the pill design) */}
        <div className="flex space-x-2 mt-2">
            {filterButton('All')}
            {filterButton('Pending')}
            {filterButton('Submitted')}
        </div>
      </div>

      <Separator className="bg-slate-200" />
      
      {/* Assignment List */}
      <div className="space-y-4">
        {filteredAssignments.map(assignment => (
          <AssignmentCard key={assignment.id} assignment={assignment} />
        ))}
        
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
    </div>
  );
};

export default Assignments;