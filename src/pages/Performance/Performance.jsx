import React, { useState } from 'react';
import { 
  BarChart, Target, TrendingUp, TrendingDown, Clock, Users, ChevronDown, CheckSquare, MinusCircle, XCircle
} from 'lucide-react';

// Shadcn Components
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, BarChart as RechartsBarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

import {
  // Ensure these imports match your actual mockData file structure
  performanceMetrics,
  classAverageData,
  gpaTrendData,
  skillsAssessmentData,
  topMarksData,
  linkedTeachersData,
  performanceAttendanceData
} from '@/lib/mockData'; 

// --- Constants for Charts ---
const RADIAN = Math.PI / 180;
const SKILL_COLORS = ['#7E00D8', '#FF928A', '#10b981', '#3b82f6', '#f59e0b']; // Purple, Red-Orange, Green, Blue, Amber

// --- Sub-Component: KPI Cards (GPA, Credits, Rank) ---
const PerformanceKpiCard = ({ title, value, subtext, max, change, icon: Icon, isRank }) => {
    const isPositive = change > 0;
    const changeColor = isPositive ? 'text-green-600' : 'text-red-600';
    const ChangeIcon = isPositive ? TrendingUp : TrendingDown;

    return (
        <Card className="shadow-lg bg-white transition-colors">
            <CardContent className="p-2 sm:p-4">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <CardTitle className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-900 flex items-center">
                        <Icon className={`w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 mr-2 text-red-600`} />
                        {title}
                    </CardTitle>
                </div>

                <p className="text-lg sm:text-xl lg:text-2xl font-extrabold text-slate-900 mb-1">
                    {value} / <span className="text-sm sm:text-lg lg:text-xl font-semibold text-slate-500">{max}</span>
                </p>

                <div className="flex justify-between items-center text-[10px] mt-3">
                    <p className="text-slate-500 whitespace-nowrap">{subtext}</p>
                    {isRank ? (
                        <p className={`font-semibold text-slate-600 whitespace-nowrap`}>in your cohort</p>
                    ) : (
                        <p className={`font-semibold ${changeColor} whitespace-nowrap`}>
                            {change > 0 && '+'}{change} from last sem
                        </p>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};

// --- Sub-Component: Class Average Multiple Bar Chart ---
const ClassAverageChart = () => {
    const chartConfig = {
        classAvg: {
            label: "Class Average",
            color: "var(--chart-1)",
        },
        studentMark: {
            label: "Your Mark",
            color: "var(--chart-2)",
        },
    };

    return (
        <ChartContainer config={chartConfig} className="h-[180px] sm:h-[220px] lg:h-[350px] w-full text-xs">
            <RechartsBarChart data={classAverageData}>
                <CartesianGrid vertical={false} />
                <XAxis
                    dataKey="test"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                />
                <YAxis
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                />
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dot" />}
                />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="classAvg" fill="#7E00D8" radius={4} />
                <Bar dataKey="studentMark" fill="#FF928A" radius={4} />
            </RechartsBarChart>
        </ChartContainer>
    );
};

// --- Sub-Component: GPA Trend Multiple Line Chart ---
const GpaTrendChart = () => {
    const chartData = [
        { month: "Jan", academic: 75, target: 80, classAvg: 72 },
        { month: "Feb", academic: 78, target: 80, classAvg: 75 },
        { month: "Mar", academic: 82, target: 80, classAvg: 78 },
        { month: "Apr", academic: 85, target: 80, classAvg: 80 },
        { month: "May", academic: 88, target: 80, classAvg: 82 },
        { month: "Jun", academic: 90, target: 80, classAvg: 85 },
        { month: "Jul", academic: 87, target: 80, classAvg: 83 },
    ];

    const chartConfig = {
        academic: {
            label: "Academic Performance",
            color: "var(--chart-1)",
        },
        target: {
            label: "Target Performance",
            color: "var(--chart-2)",
        },
        classAvg: {
            label: "Class Average",
            color: "var(--chart-3)",
        },
    };

    return (
        <ChartContainer config={chartConfig} className="h-[180px] sm:h-[220px] lg:h-[350px] w-full text-xs">
            <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(0, 3)}
                />
                <YAxis
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                />
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dot" />}
                />
                <ChartLegend content={<ChartLegendContent />} />
                <Line
                    dataKey="academic"
                    type="monotone"
                    stroke="#FF928A"
                    strokeWidth={3}
                    dot={{ fill: "#FF928A", strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6 }}
                />
                <Line
                    dataKey="target"
                    type="monotone"
                    stroke="#7E00D8"
                    strokeWidth={2}
                    dot={{ fill: "#7E00D8", strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6 }}
                />
                <Line
                    dataKey="classAvg"
                    type="monotone"
                    stroke="#93c5fd"
                    strokeWidth={2}
                    dot={{ fill: "#93c5fd", strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6 }}
                />
            </LineChart>
        </ChartContainer>
    );
};

// --- Sub-Component: Academic Performance Card (Donut Chart) ---
const AcademicPerformanceCard = ({ achievement, gpa, gpaChange }) => {
    const isPositive = gpaChange > 0;
    const changeColor = isPositive ? 'text-green-600' : 'text-red-600';
    const ChangeIcon = isPositive ? TrendingUp : TrendingDown;
    const circumference = 2 * Math.PI * 80;
    const offset = circumference - (achievement / 100) * circumference;

    return (
        <Card className="shadow-lg p-6 bg-gradient-to-br from-indigo-50 to-purple-50 hover:shadow-xl transition-all duration-300">
            <CardTitle className="text-xl font-bold text-slate-900 mb-4 text-center">Academic Performance</CardTitle>
            <div className="flex flex-col items-center justify-center p-4">
                <div className="relative w-44 h-44">
                    <svg className="w-full h-full transform -rotate-90">
                        <circle cx="50%" cy="50%" r="80" strokeWidth="15" fill="transparent" className="text-slate-200" stroke="currentColor" />
                        <circle cx="50%" cy="50%" r="80" strokeWidth="15" fill="transparent" strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={offset} className="text-indigo-600 transition-all duration-1000" stroke="currentColor"/>
                    </svg>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                        <p className="text-4xl font-extrabold text-slate-900">{achievement}%</p>
                    </div>
                </div>

                <div className="text-center mt-6">
                    <p className="text-md text-slate-500 font-medium">Current GPA</p>
                    <div className="flex items-center justify-center space-x-2 mt-1">
                        <span className="text-2xl font-bold text-slate-800">{gpa}</span>
                        <span className={`text-sm font-semibold flex items-center ${changeColor}`}>
                            <ChangeIcon className="w-3 h-3 mr-1" />
                            {gpaChange > 0 && '+'}{gpaChange} from last semester
                        </span>
                    </div>
                </div>
            </div>
        </Card>
    );
};

// --- Sub-Component: Skills Assessment Card (Pie Chart) ---
const SkillsAssessmentCard = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const onPieEnter = (_, index) => {
        setActiveIndex(index);
    };

    const onPieLeave = () => {
        setActiveIndex(-1);
    };

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        
        // Only show label for the active slice or if none are active
        if (activeIndex === index || activeIndex === -1) {
            return (
                <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" className='font-bold text-xs'>
                    {`${skillsAssessmentData[index].skill.split(' ')[0]} ${ (percent * 100).toFixed(0)}%`}
                </text>
            );
        }
        return null;
    };

    return (
        <Card className="shadow-lg p-6 bg-white hover:shadow-xl transition-all duration-300">
            <CardTitle className="text-xl font-bold text-slate-900 mb-2 text-center">Skills Assessment</CardTitle>
            <p className="text-sm text-slate-500 mb-4 text-center">AI-evaluated competencies</p>
            
            <div className="flex flex-col items-center">
                <div className="w-52 h-52 flex items-center justify-center relative">
                    <PieChart width={200} height={200}>
                        <Pie
                            data={skillsAssessmentData}
                            dataKey="value"
                            nameKey="skill"
                            cx="50%"
                            cy="50%"
                            innerRadius={50}
                            outerRadius={85}
                            paddingAngle={3}
                            onMouseEnter={onPieEnter}
                            onMouseLeave={onPieLeave}
                            label={renderCustomizedLabel}
                            labelLine={false}
                        >
                            {skillsAssessmentData.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={SKILL_COLORS[index % SKILL_COLORS.length]}
                                    stroke={activeIndex === index ? SKILL_COLORS[index % SKILL_COLORS.length] : 'none'}
                                    strokeWidth={activeIndex === index ? 4 : 0}
                                />
                            ))}
                        </Pie>
                    </PieChart>
                </div>
                {/* Legend */}
                <div className="grid grid-cols-2 gap-x-6 gap-y-2 mt-6 max-w-xs text-sm">
                    {skillsAssessmentData.map((item, index) => (
                        <div key={index} className="flex items-center">
                            <span className={`w-3 h-3 rounded-full mr-2 flex-shrink-0`} style={{ backgroundColor: SKILL_COLORS[index % SKILL_COLORS.length] }}></span>
                            <span className="text-slate-700 text-xs">{item.skill} ({item.value}%)</span>
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    );
};


// --- Sub-Component: Top Marks Card ---
const TopMarksCard = () => (
    <Card className="shadow-lg p-6 bg-white bg-gradient-to-br from-green-50/80 to-white/90 hover:shadow-xl transition-all duration-300">
        <CardTitle className="text-xl font-bold text-slate-900 mb-6">Top 3 Marks</CardTitle>
        <div>
            {topMarksData.map((item, index) => (
                <div key={index} className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-slate-800">{item.subject}</span>
                        <span className="text-sm font-semibold text-slate-700">{item.score}/{item.max}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                            className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                            style={{ width: `${(item.score / item.max) * 100}%` }}
                        ></div>
                    </div>
                </div>
            ))}
        </div>
    </Card>
);


// --- Sub-Component: Linked Teachers Module (Completed) ---
const LinkedTeachersModule = () => (
    <Card className="shadow-lg border-slate-100 p-6 bg-white hover:shadow-xl transition-all duration-300">
        <div className="flex justify-between items-center mb-4">
            <CardTitle className="text-xl font-bold text-slate-900 flex items-center">
                <Users className="w-5 h-5 mr-2 text-red-600" />
                Linked Teachers
            </CardTitle>
            <Button variant="link" className="text-blue-600 p-0 h-auto text-sm">See all</Button>
        </div>
        
        <div className="space-y-4">
            {linkedTeachersData.map((teacher, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg bg-slate-50">
                    <div className="flex items-center">
                        <Avatar className="h-9 w-9 bg-red-100">
                            <AvatarFallback className="text-red-600 font-bold text-sm">{teacher.avatar}</AvatarFallback>
                        </Avatar>
                        <div className="ml-3">
                            <p className="text-sm font-semibold text-slate-800">{teacher.name}</p>
                            <p className="text-xs text-slate-500">{teacher.role}</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm text-slate-700">{teacher.subject}</span>
                        <ChevronDown className="w-4 h-4 text-slate-500 flex-shrink-0" />
                    </div>
                </div>
            ))}
        </div>
    </Card>
);

// --- Sub-Component: Attendance Module (Completed) ---
const AttendanceModule = () => {
    const getStatusIcon = (status) => {
        switch (status) {
            case 'present':
                return <CheckSquare className="w-5 h-5 text-green-500" />; 
            case 'absent':
                return <MinusCircle className="w-5 h-5 text-red-500" />; 
            default:
                return null;
        }
    };

    return (
        <Card className="shadow-lg border-slate-100 p-6 bg-white hover:shadow-xl transition-all duration-300">
            <div className="flex justify-between items-center mb-4">
                <CardTitle className="text-xl font-bold text-slate-900">Attendance</CardTitle>
                <Button variant="link" className="text-blue-600 p-0 h-auto text-sm">See all</Button>
            </div>
            
            {Object.entries(performanceAttendanceData).map(([weekTitle, days], index) => (
                <div key={index} className={index > 0 ? "mt-4" : ""}>
                    <h3 className="text-md font-semibold text-slate-800 mb-2">{weekTitle}</h3>
                    <div className="space-y-2">
                        {days.map((day, dayIndex) => (
                            <div key={dayIndex} className="flex justify-between items-center text-sm">
                                <span className="text-slate-700">{day.day}</span>
                                {getStatusIcon(day.status)}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </Card>
    );
};


// --- Main Component: Performance ---
const Performance = () => {
  return (
    <div className="p-0 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">Student Dashboard / Performance</h1>
            <p className="text-xs sm:text-sm lg:text-md text-slate-600 mt-1">
                Academic performance predictions and trends
            </p>
        </div>
      </div>

      <Separator className="bg-slate-200" />

      {/* 1. Performance Metrics KPI Cards (Full Width) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
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

      {/* 2. Main Content Grid: Charts (Left, 3/4) and Side Modules (Right, 1/4) */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6 mt-6 lg:mt-8">
        
        {/* Left Column: Charts Stack (3/4 width) */}
        <div className="lg:col-span-3 space-y-4 lg:space-y-6">
            
            {/* Class Average Chart */}
            <Card className="shadow-lg border-slate-100 p-6 bg-white">
                <CardTitle className="text-xl font-bold text-slate-900 mb-4">Class Average</CardTitle>
                <ClassAverageChart />
            </Card>

            {/* GPA Trend Chart */}
            <Card className="shadow-lg border-slate-100 p-6 bg-white">
                <CardTitle className="text-xl font-bold text-slate-900 mb-2">Your Grade Point Assessment Point Tren</CardTitle>
                <p className="text-sm text-slate-500 mb-4">Your academic performance over time</p>
                <GpaTrendChart />
            </Card>
        </div>
        
        {/* Right Column: Side Modules Stack (1/4 width) */}
        <div className="lg:col-span-1 space-y-4 lg:space-y-6">
            
            {/* Academic Performance Card (Donut) - Corrected back from redundant SkillsAssessmentCard */}
            <AcademicPerformanceCard 
                achievement={performanceMetrics.academicAchievement}
                gpa={performanceMetrics.gpa}
                gpaChange={performanceMetrics.gpaChange}
            />

            {/* Skills Assessment Card (Pie Chart) */}
            <SkillsAssessmentCard />

            {/* Top 3 Marks Card */}
            <TopMarksCard />
            
            {/* Linked Teachers Module */}
            <LinkedTeachersModule />

            {/* Attendance Overview Module */}
            <AttendanceModule />
        </div>
      </div>
    </div>
  );
};

export default Performance;