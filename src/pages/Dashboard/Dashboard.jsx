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

import WelcomeBanner from './components/WelcomeBanner';
import AcademicPerformanceCard from './components/AcademicPerformanceCard';
import PostsForNotice from './components/PostsForNotice';
import AIPersonalizedRecommendations from './components/AIPersonalizedRecommendations';
import CourseProgressList from './components/CourseProgressList';
import RightSidebarInfo from './components/RightSidebarInfo';

// Mobile components
import MobileDashboard from '../../../mobileView/MobileDashboard';



// --- Main Component: Dashboard ---
const Dashboard = () => {
  return (
    <>
      {/* Desktop Dashboard */}
      <div className="hidden md:block p-0 space-y-6">
        <DashboardContent />
      </div>

      {/* Mobile Dashboard */}
      <div className="md:hidden">
        <MobileDashboard />
      </div>
    </>
  );
};

// Desktop Dashboard Content Component
const DashboardContent = () => {
  const { studentName, homeworkCompletion, academicPerformance, currentGpa, gpaTrend, posts, teachers, attendance, courses } = useSelector(state => state.dashboard);

  return (
    <>
      {/* Page Header */}
      <Breadcrumb>
        <BreadcrumbList className="text-2xl font-extrabold text-slate-900 tracking-tight">
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="text-slate-500">Student Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-base text-slate-500">/</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage className="font-bold text-base">Overview</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <p className="text-md text-slate-600 mt-1">
        Your personalized dashboard overview
      </p>

      {/* Top Section */}
      <div className="grid grid-cols-12 gap-5">
        {/* Left Side: Banner, Posts, AI */}
        <div className="col-span-8 space-y-6">
          <div className="grid grid-cols-8 gap-4">
            <WelcomeBanner name={studentName} completion={homeworkCompletion} />
            <PostsForNotice posts={posts} />
            <AIPersonalizedRecommendations />
          </div>
        </div>

        {/* Right Side: Academic Performance and Linked Teachers stacked */}
        <div className="col-span-4 flex flex-col space-y-6 h-full">
          <AcademicPerformanceCard
            performance={academicPerformance}
            gpa={currentGpa}
            trend={gpaTrend}
          />
          <RightSidebarInfo teachers={teachers} attendance={attendance} />
        </div>
      </div>

      {/* Bottom Section: Your Courses and Attendance side by side */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8">
          <CourseProgressList courses={courses} />
        </div>
        <div className="col-span-4">
          {/* Attendance Card */}
          <Card className="shadow-md border-slate-100">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-bold text-slate-800">Attendance</CardTitle>
            </CardHeader>
            <CardContent className="p-3">
              <p className="text-sm font-bold text-slate-800 mt-2 mb-1">This Week / Week 2</p>
              {attendance.thisWeek.map((item, index) => (
                <div key={`this-${index}`} className="flex justify-between items-center text-sm py-1">
                  <span className="text-slate-700">{item.day}</span>
                  <CheckCircle className={`w-4 h-4 ${item.present ? 'text-green-500' : 'text-red-500'}`} />
                </div>
              ))}
              <p className="text-sm font-bold text-slate-800 mt-3 mb-1">Last Week / Week 1</p>
              {attendance.lastWeek.map((item, index) => (
                <div key={`last-${index}`} className="flex justify-between items-center text-sm py-1">
                  <span className="text-slate-700">{item.day}</span>
                  <CheckCircle className={`w-4 h-4 ${item.present ? 'text-green-500' : 'text-red-500'}`} />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Dashboard;