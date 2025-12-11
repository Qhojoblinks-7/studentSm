import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { studentCourses } from '@/lib/mockData'; // Import mock data

// Shadcn Components
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import CourseCard from './components/CourseCard';
import { setCurrentPage } from '../../store/myCoursesSlice';

// Mobile components
import MobileMyCourses from '../../../mobileView/MobileMyCourses';



/**
 * Main My Courses Page Component
 */
const MyCourses = () => {
  return (
    <>
      {/* Desktop MyCourses */}
      <div className="hidden md:block p-0 space-y-6">
        <MyCoursesContent />
      </div>

      {/* Mobile MyCourses */}
      <div className="md:hidden">
        <MobileMyCourses />
      </div>
    </>
  );
};

/**
 * Desktop My Courses Content Component (Bento Grid)
 */
const MyCoursesContent = () => {
  const navigate = useNavigate();
  const { currentPage } = useSelector(state => state.myCourses);
  const dispatch = useDispatch();

  const handleViewDetails = (course) => {
    // Navigate to course details page
    navigate(`/course/${course.id}`);
  };

  const handleViewMaterials = (course) => {
    // Navigate to course materials
    navigate(`/course/${course.id}/materials`);
  };

  const handleViewAssignments = (course) => {
    // Navigate to assignments page (already exists)
    navigate('/assignments');
  };

  const handleViewGrades = (course) => {
    // Navigate to results page (already exists)
    navigate('/results');
  };

  const handlePrevPage = () => {
    dispatch(setCurrentPage(Math.max(1, currentPage - 1)));
  };

  const handleNextPage = () => {
    dispatch(setCurrentPage(Math.min(1, currentPage + 1)));
  };

  return (
    <>
      {/* Page Header */}
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
            <BreadcrumbPage className="font-bold text-base">My Courses</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <p className="text-md text-slate-600">
        Courses are based on the current GES curriculum for all Basic Schools.
      </p>

      {/* Bento Grid Layout (2-column layout) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {studentCourses.map(course => (
          <CourseCard
            key={course.id}
            course={course}
            onViewDetails={handleViewDetails}
            onViewMaterials={handleViewMaterials}
            onViewAssignments={handleViewAssignments}
            onViewGrades={handleViewGrades}
          />
        ))}
      </div>

      {/* Pagination Placeholder (Matching the visual) */}
      <div className="flex justify-center items-center pt-4">
          <Button variant="outline" size="icon" className="rounded-full mr-2" onClick={handlePrevPage}>
              <ChevronLeft className="w-5 h-5" />
          </Button>
          <span className="text-sm text-slate-600">Page {currentPage} of 1</span>
          <Button variant="outline" size="icon" className="rounded-full ml-2" onClick={handleNextPage}>
              <ChevronRight className="w-5 h-5" />
          </Button>
      </div>
    </>
  );
};

export default MyCourses;