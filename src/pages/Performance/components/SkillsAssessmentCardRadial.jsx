import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveIndex } from '../../../store/performanceSlice';
import { Card, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { PieChart, Pie, Cell } from 'recharts';

const SkillsAssessmentCardRadial = () => {
    const dispatch = useDispatch();
    const activeIndex = useSelector((state) => state.performance.activeIndex);

    const skillsData = [
        { subject: 'Maths', score: 85, fill: '#FF928A' },
        { subject: 'Science', score: 78, fill: '#7E00D8' },
        { subject: 'English', score: 92, fill: '#3b82f6' },
        { subject: 'Computing', score: 88, fill: '#10b981' },
        { subject: 'Creative Arts', score: 75, fill: '#f59e0b' },
    ];

    const chartConfig = {
        maths: { label: 'Maths', color: '#FF928A' },
        science: { label: 'Science', color: '#7E00D8' },
        english: { label: 'English', color: '#3b82f6' },
        computing: { label: 'Computing', color: '#10b981' },
        creativeArts: { label: 'Creative Arts', color: '#f59e0b' },
    };

    const onPieEnter = (_, index) => {
        dispatch(setActiveIndex(index));
    };

    const onPieLeave = () => {
        dispatch(setActiveIndex(-1));
    };

    return (
        <Card className="w-full shadow-lg p-2 sm:p-4 bg-gradient-to-br from-[#CBCEFF]/70 via-[#FFE8E8]/50 to-[#B7FFF9]/70 hover:shadow-xl hover:bg-gradient-to-br hover:from-[#CBCEFF]/80 hover:via-[#FFE8E8]/60 hover:to-[#B7FFF9]/80 transition-all duration-300">
            <CardTitle className="text-lg sm:text-xl lg:text-xl font-bold text-slate-900 mb-1">Skills Assessment</CardTitle>
            <p className="text-xs sm:text-sm lg:text-md text-slate-500 mb-4">AI-evaluated competencies</p>

            <div className="flex flex-col items-center">
                <ChartContainer config={chartConfig} className="h-[160px] w-[160px] sm:h-[200px] sm:w-[200px]">
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={skillsData}
                            dataKey="score"
                            nameKey="subject"
                            cx="50%"
                            cy="50%"
                            innerRadius={20}
                            outerRadius={activeIndex === -1 ? 80 : 85}
                            paddingAngle={6}
                            strokeWidth={2}
                            onMouseEnter={onPieEnter}
                            onMouseLeave={onPieLeave}
                        >
                            {skillsData.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={entry.fill}
                                    stroke={activeIndex === index ? entry.fill : 'none'}
                                    strokeWidth={activeIndex === index ? 3 : 0}
                                />
                            ))}
                        </Pie>
                    </PieChart>
                </ChartContainer>
                <div className="grid grid-cols-2 gap-x-6 gap-y-2 mt-6 max-w-xs text-[10px]">
                    {skillsData.map((skill, index) => (
                        <div key={index} className="flex items-center">
                            <span className={`w-3 h-3 rounded-full mr-2 flex-shrink-0`} style={{ backgroundColor: skill.fill }}></span>
                            <span className="text-slate-700">{skill.subject}: {skill.score}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    );
};

export default SkillsAssessmentCardRadial;