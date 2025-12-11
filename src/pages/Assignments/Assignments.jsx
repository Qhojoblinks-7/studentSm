import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Download, Eye, Clock, CheckCircle, Upload, ChevronLeft, ChevronRight
} from 'lucide-react';

// Shadcn Components
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

// Custom Components
import DownloadNoticeModal from '@/components/DownloadNoticeModal';

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
const AssignmentCard = ({ assignment, onSubmitWork, onDownloadWork }) => {
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
        onClick={!isCompleted ? onSubmitWork : undefined}
      >
        {!isCompleted ? <Upload className="w-4 h-4 mr-2" /> : <CheckCircle className="w-4 h-4 mr-2" />}
        {!isCompleted ? 'Submit Work' : 'Submitted'}
      </Button>
    );
  };

  return (
    <Card className="shadow-md border-slate-100 rounded-[2rem] overflow-hidden mb-4">
      <CardContent className="p-4">
        {/* Title Section with Badge at far right */}
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center space-x-3">
            <h3 className="text-lg font-bold text-slate-900">{courseTitle}</h3>
            <span className="text-xs text-slate-500">
                {courseCode} | {teacher}
            </span>
          </div>
          <StatusBadge status={status} grade={grade} />
        </div>

        <p className="text-md font-medium text-slate-800 mb-4">{assignmentName}</p>

        {/* Bottom Section: Buttons and Right Info */}
        <div className="flex justify-between items-start">
          {/* Action Buttons */}
          <div className="flex space-x-3">
            <Button variant="outline" className="text-slate-600 hover:bg-slate-100">
              <Eye className="w-4 h-4 mr-2" />
              View Details
            </Button>

            <SubmitButton />

            <Button variant="outline" className="text-slate-600 hover:bg-slate-100" onClick={onDownloadWork}>
              <Download className="w-4 h-4 mr-2" />
              Download Work
            </Button>
          </div>

          {/* Right Section: Score */}
          <div className="flex flex-col items-end min-w-[150px]">
            {/* Score */}
            <div className="text-2xl font-bold text-slate-900 mb-2 h-8">
                {status === 'Graded' && score !== null ? score : ''}
            </div>

            {/* Deadline and Submitted Status on same line with separator */}
            <div className="flex items-center">
              <div className="text-sm font-medium text-slate-600 flex items-center">
                <Clock className={`w-4 h-4 mr-1 ${timeOver ? 'text-red-500' : 'text-slate-500'}`} />
                {deadlineText}
              </div>
              <span className={`mx-2 text-xl font-bold ${submittedText === 'Submitted' ? 'text-green-600' : 'text-amber-600'}`}>•</span>
              <p className={`text-xs font-semibold ${submittedText === 'Submitted' ? 'text-green-600' : 'text-amber-600'}`}>
                {submittedText}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};


// --- Main Component: Assignments ---
const Assignments = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleSubmitWork = () => {
    setModalMessage('Please ensure your work meets all submission requirements. Contact help center for any assistance with submission guidelines.');
    setShowDownloadModal(true);
  };

  const handleDownloadWork = () => {
    setModalMessage('Kindly read and take note. Contact help center for any help or assistance.');
    setShowDownloadModal(true);
  };

  const handleDownload = () => {
    // Handle the actual download logic here
    console.log('Processing assignment action...');
    // You can add actual download/submit functionality here
    setShowDownloadModal(false);
  };
  
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
            <Breadcrumb>
              <BreadcrumbList className="text-2xl font-extrabold text-slate-900 tracking-tight">
                <BreadcrumbItem>
                  <BreadcrumbLink
                    className="text-slate-500 cursor-pointer hover:text-blue-600 transition-colors"
                    onClick={() => navigate('/')}
                  >
                    Student Dashboard
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-base text-slate-500">/</BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage className="font-bold text-base">Assignments</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
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
          <AssignmentCard
            key={assignment.id}
            assignment={assignment}
            onSubmitWork={handleSubmitWork}
            onDownloadWork={handleDownloadWork}
          />
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

      {/* Download Notice Modal */}
      <DownloadNoticeModal
        isOpen={showDownloadModal}
        onClose={() => setShowDownloadModal(false)}
        onDownload={handleDownload}
        message={modalMessage}
      />
    </div>
  );
};

export default Assignments;