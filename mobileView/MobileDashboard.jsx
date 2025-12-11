import React from 'react';
import { useSelector } from 'react-redux';
import {
  Zap, Bell, Trophy, CheckCircle, ChevronDown, User, BookOpen, MoreHorizontal
} from 'lucide-react';

// Shadcn Components
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

// Recharts for Pie Chart
import { PieChart, Pie, Cell } from 'recharts';

import WelcomeBanner from '@/pages/Dashboard/components/WelcomeBanner';
import AcademicPerformanceCard from '@/pages/Dashboard/components/AcademicPerformanceCard';
import CourseProgressList from '@/pages/Dashboard/components/CourseProgressList';
import RightSidebarInfo from '@/pages/Dashboard/components/RightSidebarInfo';
import MobileCarousel from './MobileCarousel';



// --- Main Component: Mobile Dashboard ---
const MobileDashboard = () => {
  const { studentName, homeworkCompletion, academicPerformance, currentGpa, gpaTrend, posts, teachers, attendance, courses } = useSelector(state => state.dashboard);

  return (
    <div className="p-4 space-y-6 md:hidden">
      {/* Page Header */}
      <Breadcrumb>
        <BreadcrumbList className="text-xl font-extrabold text-slate-900 tracking-tight">
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="text-slate-500">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-base text-slate-500">/</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage className="font-bold text-base">Overview</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <p className="text-sm text-slate-600 mt-1">
        Your personalized dashboard overview
      </p>

      {/* Welcome Banner - Full Width */}
      <WelcomeBanner name={studentName} completion={homeworkCompletion} />

      {/* Academic Performance Card */}
      <AcademicPerformanceCard
        performance={academicPerformance}
        gpa={currentGpa}
        trend={gpaTrend}
      />

      {/* Posts and AI Recommendations - Carousel */}
      <MobileCarousel />

      {/* Right Sidebar Info (Teachers and Attendance) */}
      <RightSidebarInfo teachers={teachers} attendance={attendance} />

      {/* Course Progress List */}
      <CourseProgressList courses={courses} />

      {/* Attendance Card - Full Width */}
      <Card className="shadow-md border-slate-100">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-bold text-slate-800">Attendance</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <p className="text-sm font-bold text-slate-800 mb-3">This Week / Week 2</p>
          {attendance.thisWeek.map((item, index) => (
            <div key={`this-${index}`} className="flex justify-between items-center text-sm py-2">
              <span className="text-slate-700">{item.day}</span>
              <CheckCircle className={`w-5 h-5 ${item.present ? 'text-green-500' : 'text-red-500'}`} />
            </div>
          ))}
          <Separator className="my-3" />
          <p className="text-sm font-bold text-slate-800 mb-3">Last Week / Week 1</p>
          {attendance.lastWeek.map((item, index) => (
            <div key={`last-${index}`} className="flex justify-between items-center text-sm py-2">
              <span className="text-slate-700">{item.day}</span>
              <CheckCircle className={`w-5 h-5 ${item.present ? 'text-green-500' : 'text-red-500'}`} />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default MobileDashboard;