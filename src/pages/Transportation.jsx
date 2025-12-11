import React from 'react';
import {
    Bus, Clock, TrendingUp, Shield, CheckCircle, XCircle, User, MapPin, AlertTriangle
} from 'lucide-react';

// Shadcn Components
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

import {
    transportationKPIData,
    transportationWeeklyPickup,
    transportationRouteEfficiency,
    transportationBusUtilization,
    transportationDriverInfo,
    transportationRouteDetails,
    transportationSafetyMetrics
} from '@/lib/mockData';

// Mobile components
import MobileTransportation from '../../mobileView/MobileTransportation';

// --- Sub-Component: Transportation KPI Card ---
const TransportationKpiCard = ({ title, value, subtext, icon: Icon, trend }) => (
    <Card className="shadow-lg bg-gradient-to-r from-[#CDFFFB]/50 via-[#FFEDED]/10 via-[#E5FEE9]/25 to-[#D8DAFE]/50 transition-colors">
        <CardContent className="p-6">
            <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 rounded-full flex-shrink-0 bg-blue-100">
                    <Icon className="w-6 h-6 text-blue-600" />
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

// --- Sub-Component: Weekly Pickup Bar Chart ---
const WeeklyPickupChart = () => {
    const chartData = transportationWeeklyPickup.map(item => ({
        day: item.day,
        time: item.status === 'on-time' ? 0 : 10, // 0 for on-time, 10 for delayed
        status: item.status
    }));

    const chartConfig = {
        time: {
            label: "Delay (minutes)",
            color: "var(--chart-1)",
        },
    };

    return (
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <BarChart data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                    dataKey="day"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                />
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent />}
                />
                <Bar dataKey="time" fill="var(--color-time)" radius={4} />
            </BarChart>
        </ChartContainer>
    );
};

// --- Sub-Component: Route Efficiency Line Chart ---
const RouteEfficiencyChart = () => {
    const chartConfig = {
        travelTime: {
            label: "Travel Time (min)",
            color: "var(--chart-1)",
        },
        fuelEfficiency: {
            label: "Fuel Efficiency (%)",
            color: "var(--chart-2)",
        },
    };

    return (
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <LineChart data={transportationRouteEfficiency}>
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
                    content={<ChartTooltipContent />}
                />
                <ChartLegend content={<ChartLegendContent />} />
                <Line
                    dataKey="travelTime"
                    type="monotone"
                    stroke="var(--color-travelTime)"
                    strokeWidth={2}
                    dot={{ fill: "var(--color-travelTime)", strokeWidth: 2, r: 4 }}
                />
                <Line
                    dataKey="fuelEfficiency"
                    type="monotone"
                    stroke="var(--color-fuelEfficiency)"
                    strokeWidth={2}
                    dot={{ fill: "var(--color-fuelEfficiency)", strokeWidth: 2, r: 4 }}
                />
            </LineChart>
        </ChartContainer>
    );
};

// --- Sub-Component: Bus Utilization Donut Chart ---
const BusUtilizationChart = () => {
    const totalValue = transportationBusUtilization.reduce((sum, item) => sum + item.value, 0);

    return (
        <div className="flex flex-col items-center">
            <ChartContainer config={{}} className="h-[200px] w-[200px]">
                <PieChart>
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                    />
                    <Pie
                        data={transportationBusUtilization}
                        dataKey="value"
                        nameKey="category"
                        innerRadius={60}
                        outerRadius={80}
                        strokeWidth={2}
                    >
                        {transportationBusUtilization.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                    </Pie>
                </PieChart>
            </ChartContainer>
            <div className="text-center mt-4">
                <p className="text-2xl font-bold text-slate-900">{totalValue}%</p>
                <p className="text-sm text-slate-500">Capacity Utilized</p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center mt-4">
                {transportationBusUtilization.map((item, index) => (
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

// --- Sub-Component: Driver Info Card ---
const DriverInfoCard = () => (
    <Card className="shadow-lg border-slate-100">
        <CardHeader>
            <CardTitle className="text-lg font-bold text-slate-900 flex items-center">
                <User className="w-5 h-5 mr-2 text-blue-600" />
                Driver Information
            </CardTitle>
        </CardHeader>
        <CardContent>
            <div className="space-y-3">
                <div>
                    <p className="text-sm font-semibold text-slate-800">{transportationDriverInfo.name}</p>
                    <p className="text-xs text-slate-500">Experience: {transportationDriverInfo.experience}</p>
                </div>
                <div>
                    <p className="text-xs text-slate-500">Rating: {transportationDriverInfo.rating}/10</p>
                    <Progress value={transportationDriverInfo.rating * 10} className="h-2 mt-1" />
                </div>
                <div>
                    <p className="text-xs text-slate-500">Contact: {transportationDriverInfo.contact}</p>
                </div>
            </div>
        </CardContent>
    </Card>
);

// --- Sub-Component: Route Details Card ---
const RouteDetailsCard = () => (
    <Card className="shadow-lg border-slate-100">
        <CardHeader>
            <CardTitle className="text-lg font-bold text-slate-900 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-green-600" />
                Route Details
            </CardTitle>
        </CardHeader>
        <CardContent>
            <div className="space-y-3">
                <div>
                    <p className="text-sm font-semibold text-slate-800">{transportationRouteDetails.routeName}</p>
                </div>
                <div>
                    <p className="text-xs text-slate-500">Distance: {transportationRouteDetails.distance}</p>
                    <p className="text-xs text-slate-500">Est. Time: {transportationRouteDetails.estimatedTime}</p>
                </div>
                <div>
                    <p className="text-xs font-medium text-slate-700 mb-2">Stops:</p>
                    <ul className="text-xs text-slate-600 space-y-1">
                        {transportationRouteDetails.stops.map((stop, index) => (
                            <li key={index} className="flex items-center">
                                <CheckCircle className="w-3 h-3 mr-2 text-green-500" />
                                {stop}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </CardContent>
    </Card>
);

// --- Sub-Component: Safety Metrics Card ---
const SafetyMetricsCard = () => (
    <Card className="shadow-lg border-slate-100">
        <CardHeader>
            <CardTitle className="text-lg font-bold text-slate-900 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-purple-600" />
                Safety Metrics
            </CardTitle>
        </CardHeader>
        <CardContent>
            <div className="space-y-4">
                {transportationSafetyMetrics.map((metric, index) => (
                    <div key={index}>
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium text-slate-700">{metric.metric}</span>
                            <span className="text-sm text-slate-600">{metric.value}%</span>
                        </div>
                        <Progress value={metric.value} className="h-2" />
                    </div>
                ))}
            </div>
        </CardContent>
    </Card>
);

// --- Main Component: Transportation ---
const Transportation = () => {
    return (
        <>
            {/* Desktop Transportation */}
            <div className="hidden md:block p-0 space-y-8">
                <TransportationContent />
            </div>

            {/* Mobile Transportation */}
            <div className="md:hidden">
                <MobileTransportation />
            </div>
        </>
    );
};

// Desktop Transportation Content Component
const TransportationContent = () => {
    return (
        <>
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
                                <BreadcrumbPage className="font-bold text-base">Transportation</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <p className="text-md text-slate-600 mt-1">
                        Your school transportation details and performance metrics
                    </p>
                </div>
            </div>

            <Separator className="bg-slate-200" />

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {transportationKPIData.map((kpi, index) => (
                    <TransportationKpiCard
                        key={index}
                        title={kpi.title}
                        value={kpi.value}
                        subtext={kpi.subtext}
                        icon={kpi.icon === 'Bus' ? Bus : kpi.icon === 'Clock' ? Clock : kpi.icon === 'TrendingUp' ? TrendingUp : Shield}
                        trend={kpi.trend ? {
                            direction: kpi.trendDirection,
                            value: kpi.trend
                        } : null}
                    />
                ))}
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* Weekly Pickup Chart */}
                <Card className="shadow-lg border-slate-100">
                    <CardHeader>
                        <CardTitle className="text-xl font-bold text-slate-900 flex items-center">
                            <Clock className="w-5 h-5 mr-2 text-blue-600" />
                            Weekly Pickup Status
                        </CardTitle>
                        <p className="text-sm text-slate-500">Pickup times and delays this week</p>
                    </CardHeader>
                    <CardContent>
                        <WeeklyPickupChart />
                    </CardContent>
                </Card>

                {/* Route Efficiency Chart */}
                <Card className="shadow-lg border-slate-100">
                    <CardHeader>
                        <CardTitle className="text-xl font-bold text-slate-900 flex items-center">
                            <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                            Route Efficiency Trends
                        </CardTitle>
                        <p className="text-sm text-slate-500">Travel time and fuel efficiency over months</p>
                    </CardHeader>
                    <CardContent>
                        <RouteEfficiencyChart />
                    </CardContent>
                </Card>

            </div>

            {/* Donut Chart and Side Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* Bus Utilization Donut Chart */}
                <Card className="shadow-lg border-slate-100">
                    <CardHeader>
                        <CardTitle className="text-xl font-bold text-slate-900 flex items-center">
                            <Bus className="w-5 h-5 mr-2 text-purple-600" />
                            Bus Capacity Utilization
                        </CardTitle>
                        <p className="text-sm text-slate-500">Current bus occupancy status</p>
                    </CardHeader>
                    <CardContent>
                        <BusUtilizationChart />
                    </CardContent>
                </Card>

                {/* Side Cards */}
                <div className="space-y-6">
                    <DriverInfoCard />
                    <RouteDetailsCard />
                    <SafetyMetricsCard />
                </div>

            </div>
        </>
    );
};

export default Transportation;