import React from 'react';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

const GpaTrendChart = () => {
    const chartData = [
        { month: "Jan", academic: 75, target: 80 },
        { month: "Feb", academic: 78, target: 80 },
        { month: "Mar", academic: 82, target: 80 },
        { month: "Apr", academic: 85, target: 80 },
        { month: "May", academic: 88, target: 80 },
        { month: "Jun", academic: 90, target: 80 },
        { month: "Jul", academic: 87, target: 80 },
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
    };

    return (
        <ChartContainer config={chartConfig} className="h-[180px] sm:h-[230px] lg:h-[295px] w-full text-xs">
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
            </LineChart>
        </ChartContainer>
    );
};

export default GpaTrendChart;