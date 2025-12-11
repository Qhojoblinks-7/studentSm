import React from 'react';
import {
  BarChart3, TrendingUp, TrendingDown, Users, DollarSign, Calendar, Target, Activity
} from 'lucide-react';

// Shadcn Components
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Progress } from '@/components/ui/progress';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

import { mockRevenue, academicRiskData, headmasterKPIData } from '@/lib/mockData';

// --- Handy Component: KPI Card ---
const KpiCard = ({ title, value, subtext, icon: Icon, colorClass, trend }) => (
  <Card className="shadow-lg border-l-4 border-slate-100 bg-gradient-to-r from-[#CDFFFB]/50 via-[#FFEDED]/10 via-[#E5FEE9]/25 to-[#D8DAFE]/50 hover:border-l-blue-600 transition-colors">
    <CardContent className="p-6">
      <div className="flex items-center space-x-3 mb-4">
        <div className={`p-2 rounded-full flex-shrink-0 ${colorClass.bg}`}>
          <Icon className={`w-6 h-6 ${colorClass.text}`} />
        </div>
        <CardTitle className="text-lg font-semibold text-slate-900">{title}</CardTitle>
      </div>

      <p className="text-4xl font-extrabold text-slate-900 mb-1">
        {value}
      </p>
      <p className="text-sm text-slate-500">{subtext}</p>

      {trend && (
        <div className="flex items-center mt-2">
          {trend.direction === 'up' ? (
            <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
          ) : (
            <TrendingDown className="w-4 h-4 text-red-600 mr-1" />
          )}
          <span className={`text-xs font-medium ${trend.direction === 'up' ? 'text-green-600' : 'text-red-600'}`}>
            {trend.value}
          </span>
        </div>
      )}
    </CardContent>
  </Card>
);

// --- Sub-Component: Multiple Bar Chart ---
const MultipleBarChart = () => {
  const chartData = [
    { month: "January", revenue: 45000, expenses: 35000, profit: 10000 },
    { month: "February", revenue: 52000, expenses: 38000, profit: 14000 },
    { month: "March", revenue: 48000, expenses: 36000, profit: 12000 },
    { month: "April", revenue: 61000, expenses: 42000, profit: 19000 },
    { month: "May", revenue: 55000, expenses: 40000, profit: 15000 },
    { month: "June", revenue: 67000, expenses: 45000, profit: 22000 },
  ];

  const chartConfig = {
    revenue: {
      label: "Revenue",
      color: "var(--chart-1)",
    },
    expenses: {
      label: "Expenses",
      color: "var(--chart-2)",
    },
    profit: {
      label: "Profit",
      color: "var(--chart-3)",
    },
  };

  return (
    <ChartContainer config={chartConfig} className="h-[300px] w-full">
      <BarChart data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="dashed" />}
        />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="revenue" fill="var(--color-revenue)" radius={4} />
        <Bar dataKey="expenses" fill="var(--color-expenses)" radius={4} />
        <Bar dataKey="profit" fill="var(--color-profit)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
};

// --- Sub-Component: Multiple Line Chart ---
const MultipleLineChart = () => {
  const chartData = [
    { month: "Jan", performance: 75, attendance: 85, engagement: 70 },
    { month: "Feb", performance: 78, attendance: 88, engagement: 72 },
    { month: "Mar", performance: 82, attendance: 90, engagement: 75 },
    { month: "Apr", performance: 85, attendance: 92, engagement: 78 },
    { month: "May", performance: 88, attendance: 89, engagement: 80 },
    { month: "Jun", performance: 90, attendance: 91, engagement: 82 },
  ];

  const chartConfig = {
    performance: {
      label: "Performance",
      color: "var(--chart-1)",
    },
    attendance: {
      label: "Attendance",
      color: "var(--chart-2)",
    },
    engagement: {
      label: "Engagement",
      color: "var(--chart-3)",
    },
  };

  return (
    <ChartContainer config={chartConfig} className="h-[300px] w-full">
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent />}
        />
        <ChartLegend content={<ChartLegendContent />} />
        <Line
          dataKey="performance"
          type="monotone"
          stroke="var(--color-performance)"
          strokeWidth={2}
          dot={{ fill: "var(--color-performance)", strokeWidth: 2, r: 4 }}
        />
        <Line
          dataKey="attendance"
          type="monotone"
          stroke="var(--color-attendance)"
          strokeWidth={2}
          dot={{ fill: "var(--color-attendance)", strokeWidth: 2, r: 4 }}
        />
        <Line
          dataKey="engagement"
          type="monotone"
          stroke="var(--color-engagement)"
          strokeWidth={2}
          dot={{ fill: "var(--color-engagement)", strokeWidth: 2, r: 4 }}
        />
      </LineChart>
    </ChartContainer>
  );
};

// --- Sub-Component: Donut Pie Chart ---
const DonutPieChart = () => {
  const chartData = [
    { category: "Excellent", value: 35, fill: "var(--chart-1)" },
    { category: "Good", value: 45, fill: "var(--chart-2)" },
    { category: "Average", value: 15, fill: "var(--chart-3)" },
    { category: "Needs Improvement", value: 5, fill: "var(--chart-4)" },
  ];

  const chartConfig = {
    excellent: {
      label: "Excellent",
      color: "var(--chart-1)",
    },
    good: {
      label: "Good",
      color: "var(--chart-2)",
    },
    average: {
      label: "Average",
      color: "var(--chart-3)",
    },
    needsImprovement: {
      label: "Needs Improvement",
      color: "var(--chart-4)",
    },
  };

  const totalValue = chartData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="flex flex-col items-center">
      <ChartContainer config={chartConfig} className="h-[200px] w-[200px]">
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="category"
            innerRadius={60}
            outerRadius={80}
            strokeWidth={2}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
        </PieChart>
      </ChartContainer>
      <div className="text-center mt-4">
        <p className="text-2xl font-bold text-slate-900">{totalValue}%</p>
        <p className="text-sm text-slate-500">Overall Rating</p>
      </div>
      <div className="flex flex-wrap gap-4 justify-center mt-4">
        {chartData.map((item, index) => (
          <div key={index} className="flex items-center">
            <div
              className="w-3 h-3 rounded-full mr-2"
              style={{ backgroundColor: item.fill }}
            ></div>
            <span className="text-xs text-slate-600">{item.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Main Component: Analytics ---
const Analytics = () => {
  return (
    <div className="p-0 space-y-8">

      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <Breadcrumb>
            <BreadcrumbList className="text-2xl font-extrabold text-slate-900 tracking-tight">
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-slate-500">Student Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-base text-slate-500">/</BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage className="font-bold text-base">Analytics</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <p className="text-md text-slate-600 mt-1">
            Comprehensive data analytics and insights for school management
          </p>
        </div>
      </div>

      <Separator className="bg-slate-200" />

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {headmasterKPIData.map((kpi, index) => (
          <KpiCard
            key={index}
            title={kpi.title}
            value={kpi.value}
            subtext={kpi.unit}
            icon={kpi.icon === 'Users' ? Users : kpi.icon === 'CheckCircle' ? Target : kpi.icon === 'DollarSign' ? DollarSign : Activity}
            colorClass={{
              text: index === 0 ? 'text-blue-600' : index === 1 ? 'text-green-600' : index === 2 ? 'text-red-600' : 'text-purple-600',
              bg: index === 0 ? 'bg-blue-100' : index === 1 ? 'bg-green-100' : index === 2 ? 'bg-red-100' : 'bg-purple-100'
            }}
            trend={kpi.trend ? {
              direction: kpi.trendDirection,
              value: kpi.trend
            } : null}
          />
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Multiple Bar Chart */}
        <Card className="shadow-lg border-slate-100">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-slate-900 flex items-center">
              <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
              Financial Overview
            </CardTitle>
            <p className="text-sm text-slate-500">Revenue, expenses, and profit analysis</p>
          </CardHeader>
          <CardContent>
            <MultipleBarChart />
          </CardContent>
        </Card>

        {/* Multiple Line Chart */}
        <Card className="shadow-lg border-slate-100">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-slate-900 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
              Performance Trends
            </CardTitle>
            <p className="text-sm text-slate-500">Academic performance, attendance, and engagement</p>
          </CardHeader>
          <CardContent>
            <MultipleLineChart />
          </CardContent>
        </Card>

      </div>

      {/* Donut Chart and Progress Bars */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Donut Pie Chart */}
        <Card className="shadow-lg border-slate-100">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-slate-900 flex items-center">
              <Target className="w-5 h-5 mr-2 text-purple-600" />
              Student Performance Distribution
            </CardTitle>
            <p className="text-sm text-slate-500">Overall student ratings breakdown</p>
          </CardHeader>
          <CardContent>
            <DonutPieChart />
          </CardContent>
        </Card>

        {/* Progress Bars with Legends */}
        <Card className="shadow-lg border-slate-100">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-slate-900 flex items-center">
              <Activity className="w-5 h-5 mr-2 text-indigo-600" />
              Key Metrics Progress
            </CardTitle>
            <p className="text-sm text-slate-500">Progress towards annual goals</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-slate-700">Enrollment Target</span>
                <span className="text-sm text-slate-500">85%</span>
              </div>
              <Progress value={85} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-slate-700">Academic Excellence</span>
                <span className="text-sm text-slate-500">92%</span>
              </div>
              <Progress value={92} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-slate-700">Teacher Satisfaction</span>
                <span className="text-sm text-slate-500">78%</span>
              </div>
              <Progress value={78} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-slate-700">Facility Utilization</span>
                <span className="text-sm text-slate-500">95%</span>
              </div>
              <Progress value={95} className="h-2" />
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-200">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                <span className="text-xs text-slate-600">Enrollment Target</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-600 mr-2"></div>
                <span className="text-xs text-slate-600">Academic Excellence</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-orange-600 mr-2"></div>
                <span className="text-xs text-slate-600">Teacher Satisfaction</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-purple-600 mr-2"></div>
                <span className="text-xs text-slate-600">Facility Utilization</span>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>

      {/* Additional Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <Card className="shadow-lg border-slate-100">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-slate-900 flex items-center">
              <Users className="w-5 h-5 mr-2 text-blue-600" />
              Student Enrollment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-slate-900 mb-2">2,450</div>
            <p className="text-sm text-slate-500">Total active students</p>
            <div className="flex items-center mt-2">
              <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
              <span className="text-xs font-medium text-green-600">+4.2% from last year</span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-slate-100">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-slate-900 flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-purple-600" />
              Attendance Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-slate-900 mb-2">94.5%</div>
            <p className="text-sm text-slate-500">Average attendance</p>
            <div className="flex items-center mt-2">
              <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
              <span className="text-xs font-medium text-green-600">+1.1% improvement</span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-slate-100">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-slate-900 flex items-center">
              <BarChart3 className="w-5 h-5 mr-2 text-indigo-600" />
              Performance Index
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-slate-900 mb-2">87.3</div>
            <p className="text-sm text-slate-500">Overall performance score</p>
            <div className="flex items-center mt-2">
              <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
              <span className="text-xs font-medium text-green-600">+2.1% from last term</span>
            </div>
          </CardContent>
        </Card>

      </div>

    </div>
  );
};

export default Analytics;