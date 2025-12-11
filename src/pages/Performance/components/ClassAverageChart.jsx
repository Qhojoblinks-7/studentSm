import React from 'react';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from '@/components/ui/chart';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

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

    // Assuming classAverageData is imported or passed as prop
    const classAverageData = [
        { test: 'Test 1', classAvg: 75, studentMark: 80 },
        { test: 'Test 2', classAvg: 78, studentMark: 85 },
        { test: 'Test 3', classAvg: 82, studentMark: 88 },
        { test: 'Test 4', classAvg: 85, studentMark: 90 },
        { test: 'Test 5', classAvg: 88, studentMark: 92 },
    ];

    return (
        <ChartContainer config={chartConfig} className="h-[180px] sm:h-[230px] lg:h-[295px] w-full text-xs">
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

export default ClassAverageChart;