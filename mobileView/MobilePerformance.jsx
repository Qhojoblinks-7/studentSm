import React from 'react';
import { BarChart, Target, TrendingUp, TrendingDown } from 'lucide-react';

// Shadcn Components
import { Card, CardContent, CardTitle, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

import { performanceMetrics } from '@/lib/mockData';
import PerformanceKpiCard from '../src/pages/Performance/components/PerformanceKpiCard';
import ClassAverageChart from '../src/pages/Performance/components/ClassAverageChart';
import GpaTrendChart from '../src/pages/Performance/components/GpaTrendChart';
import SkillsAssessmentCardRadial from '../src/pages/Performance/components/SkillsAssessmentCardRadial';
import TopMarksCard from '../src/pages/Performance/components/TopMarksCard';
import SkillsAssessmentCard from '../src/pages/Performance/components/SkillsAssessmentCard';

// --- Main Component: Mobile Performance ---
const MobilePerformance = () => {
  const GpaIcon = performanceMetrics.gpaChange > 0 ? TrendingUp : TrendingDown;

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
            <BreadcrumbPage className="font-bold text-base">Performance</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <p className="text-sm text-slate-600 mt-1">
        Academic performance predictions and trends
      </p>

      <Separator className="bg-slate-200" />

      {/* Performance Metrics KPI Cards */}
      <div className="space-y-4">
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
      <Card className="shadow-lg border-slate-100 rounded-xl overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-bold text-slate-900">Class Average</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <ClassAverageChart />
        </CardContent>
      </Card>

      {/* GPA Trend Chart */}
      <Card className="shadow-lg border-slate-100 rounded-xl overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-bold text-slate-900">GPA Trend</CardTitle>
          <p className="text-sm text-slate-500">Your academic performance over time</p>
        </CardHeader>
        <CardContent className="p-4">
          <GpaTrendChart />
        </CardContent>
      </Card>

      {/* Skills Assessment Card Radial */}
      <SkillsAssessmentCardRadial />

      {/* Top Marks Card */}
      <TopMarksCard />

      {/* Skills Assessment Card */}
      <SkillsAssessmentCard />
    </div>
  );
};

export default MobilePerformance;