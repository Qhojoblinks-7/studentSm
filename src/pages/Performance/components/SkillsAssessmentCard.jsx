import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveIndex } from '../../../store/performanceSlice';
import { Card, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { PieChart, Pie, Cell } from 'recharts';

const SkillsAssessmentCard = () => {
    const dispatch = useDispatch();
    const activeIndex = useSelector((state) => state.performance.activeIndex);

    const pieData = [
        { name: 'Mathematics', value: 85, fill: '#3b82f6' },
        { name: 'Science', value: 75, fill: '#93c5fd' },
        { name: 'English', value: 90, fill: '#dbeafe' },
        { name: 'Social Studies', value: 70, fill: '#1e40af' },
    ];

    const chartConfig = {
        mathematics: { label: 'Mathematics', color: '#3b82f6' },
        science: { label: 'Science', color: '#93c5fd' },
        english: { label: 'English', color: '#dbeafe' },
        socialStudies: { label: 'Social Studies', color: '#1e40af' },
    };

    const onPieEnter = (_, index) => {
        dispatch(setActiveIndex(index));
    };

    const onPieLeave = () => {
        dispatch(setActiveIndex(-1));
    };

    // Set overall performance percentage to 80%
    const overallPerformance = 80;

    return (
        <Card className="w-full shadow-lg p-2 sm:p-4 bg-gradient-to-bl from-[#CBCEFF]/70 via-[#FFE8E8]/50 to-[#B7FFF9]/70 hover:shadow-xl hover:bg-gradient-to-bl hover:from-[#CBCEFF]/80 hover:via-[#FFE8E8]/60 hover:to-[#B7FFF9]/80 transition-all duration-300 min-h-[280px] sm:min-h-[320px]">
            <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-2 text-center">Attendance Performance</CardTitle>
            <div className="flex flex-col items-center">
                <div className="w-32 h-32 sm:w-40 sm:h-40 relative flex items-center justify-center mb-4">
                    <PieChart width={160} height={160}>
                        <Pie
                            data={pieData}
                            dataKey="value"
                            nameKey="name"
                            cx={80}
                            cy={80}
                            innerRadius={50}
                            outerRadius={activeIndex === -1 ? 75 : 80}
                            strokeWidth={2}
                            onMouseEnter={onPieEnter}
                            onMouseLeave={onPieLeave}
                        >
                            {pieData.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={entry.fill}
                                    stroke={activeIndex === index ? entry.fill : 'none'}
                                    strokeWidth={activeIndex === index ? 3 : 0}
                                />
                            ))}
                        </Pie>
                    </PieChart>
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-slate-900">{overallPerformance}%</span>
                </div>

                {/* GPA Info */}
                <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-2 space-y-2 sm:space-y-0 mt-2">
                    <div className="text-center">
                        <p className="text-[10px] text-slate-500">Compared To Last Sem</p>
                    </div>
                    <Separator orientation="horizontal" className="w-8 bg-slate-200 sm:hidden" />
                    <Separator orientation="vertical" className="h-8 bg-slate-200 hidden sm:block" />
                    <div className="text-center">
                        <p className="text-[10px] font-medium text-red-600 bg-red-50 px-2 py-1 rounded">-2 from last semester</p>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default SkillsAssessmentCard;