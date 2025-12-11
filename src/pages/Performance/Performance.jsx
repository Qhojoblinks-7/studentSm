import React from 'react';
import { BarChart, Target, TrendingUp, TrendingDown } from 'lucide-react';

// Shadcn Components
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

import { performanceMetrics } from '@/lib/mockData';
import PerformanceKpiCard from './components/PerformanceKpiCard';
import ClassAverageChart from './components/ClassAverageChart';
import GpaTrendChart from './components/GpaTrendChart';
import SkillsAssessmentCardRadial from './components/SkillsAssessmentCardRadial';
import TopMarksCard from './components/TopMarksCard';
import SkillsAssessmentCard from './components/SkillsAssessmentCard';


// --- Main Component: Performance ---
const Performance = () => {
  const GpaIcon = performanceMetrics.gpaChange > 0 ? TrendingUp : TrendingDown;
  
  return (
    <div className="p-0 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
            <Breadcrumb>
              <BreadcrumbList className="text-lg sm:text-xl lg:text-2xl font-extrabold text-slate-900 tracking-tight">
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="text-slate-500">Student Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-base text-slate-500">/</BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage className="font-bold text-base">Performance</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <p className="text-xs sm:text-sm lg:text-md text-slate-600 mt-1">
                Academic performance predictions and trends
            </p>
        </div>
      </div>

      <Separator className="bg-slate-200" />

      {/* Main Content Grid: Performance Cards and Charts (Left, 8/12) and Side Modules (Right, 4/12) */}
      <div className="grid grid-cols-1 lg:grid-cols-10 xl:grid-cols-10 gap-2 lg:gap-3 mt-6 lg:mt-8">

        {/* Left Column: Performance Cards and Charts Stack */}
        <div className="flex-1 lg:col-span-7 xl:col-span-7 space-y-4 lg:space-y-6">

            {/* 1. Performance Metrics KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-1">

              <PerformanceKpiCard
                  title="Current GPA"
                  value={performanceMetrics.gpa}
                  max={performanceMetrics.gpaMax}
                  change={performanceMetrics.gpaChange}
                  subtext="Compared To Last Sem"
                  icon={BarChart}
              />

              <PerformanceKpiCard
                  title="Credits Earned"
                  value={performanceMetrics.creditsEarned}
                  max={performanceMetrics.creditsTotal}
                  change={performanceMetrics.creditsChange}
                  subtext="Compared To Last Sem"
                  icon={Target}
              />

              <PerformanceKpiCard
                  title="Class Rank"
                  value={performanceMetrics.classRank}
                  max={performanceMetrics.classSize}
                  change={performanceMetrics.rankPercentage}
                  subtext={`Top ${performanceMetrics.rankPercentage}%`}
                  icon={BarChart}
                  isRank={true}
              />
            </div>

            {/* Class Average Chart */}
            <Card className="shadow-lg border-none p-6 bg-white">
                <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-4">Class Average</CardTitle>
                <ClassAverageChart />
            </Card>

            {/* GPA Trend Chart */}
            <Card className="shadow-lg border-none p-6 bg-white">
                <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-2">Your Grade Point Assessment Point Tren</CardTitle>
                <p className="text-xs sm:text-sm lg:text-md text-slate-500 mb-4">Your academic performance over time</p>
                <GpaTrendChart />
            </Card>
        </div>
        
        {/* Right Column: Side Modules Stack */}
        <div className="lg:col-span-3 xl:col-span-3 space-y-6">
            
            {/* 1. Skills Assessment Card */}
            <SkillsAssessmentCardRadial />

            {/* 2. Top 3 Marks Card */}
            <TopMarksCard />

            {/* 3. Skills Assessment Card */}
            <SkillsAssessmentCard />
        </div>
      </div>

    </div>
  );
};

export default Performance;