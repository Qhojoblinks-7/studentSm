import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { studentCourses } from '@/lib/mockData'; // Import mock data

// Shadcn Components
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import MobileCourseCard from '@/pages/MyCourses/components/MobileCourseCard';
import { setCurrentPage } from '@/store/myCoursesSlice';



/**
 * Mobile My Courses Page Component
 */
const MobileMyCourses = () => {
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
    <div className="p-4 space-y-6 md:hidden">

      {/* Page Header */}
      <Breadcrumb>
        <BreadcrumbList className="text-xl font-extrabold text-slate-900 tracking-tight">
          <BreadcrumbItem>
            <BreadcrumbLink
              className="text-slate-500 cursor-pointer hover:text-blue-600 transition-colors"
              onClick={() => navigate('/')}
            >
              Dashboard
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-base text-slate-500">/</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage className="font-bold text-base">My Courses</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <p className="text-sm text-slate-600">
        Courses are based on the current GES curriculum for all Basic Schools.
      </p>

      {/* Single Column Layout for Mobile */}
      <div className="space-y-4">
        {studentCourses.map(course => (
          <MobileCourseCard
            key={course.id}
            course={course}
            onViewDetails={handleViewDetails}
            onViewMaterials={handleViewMaterials}
            onViewAssignments={handleViewAssignments}
            onViewGrades={handleViewGrades}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center pt-4">
          <Button variant="outline" size="icon" className="rounded-full mr-2" onClick={handlePrevPage}>
              <ChevronLeft className="w-5 h-5" />
          </Button>
          <span className="text-sm text-slate-600">Page {currentPage} of 1</span>
          <Button variant="outline" size="icon" className="rounded-full ml-2" onClick={handleNextPage}>
              <ChevronRight className="w-5 h-5" />
          </Button>
      </div>
    </div>
  );
};

export default MobileMyCourses;