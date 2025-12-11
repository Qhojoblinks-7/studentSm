import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { PieChart, Pie, Cell } from 'recharts';

const AcademicPerformanceCard = ({ performance, gpa, trend }) => {
  const data = [
    { name: 'Completed', value: performance },
    { name: 'Remaining', value: 100 - performance },
  ];
  const COLORS = ['#3b82f6', '#e2e8f0'];

  return (
    <Card className="col-span-12 lg:col-span-3 shadow-md border-none p-1 relative overflow-hidden bg-gradient-to-bl from-[#CBCEFF]/60 via-[#FFE8E8]/40 to-[#B7FFF9]/60">
      <CardHeader className="p-0 pb-3">
        <CardTitle className="text-lg font-bold text-slate-900">Academic Performance</CardTitle>
      </CardHeader>
      <CardContent className="p-0 flex flex-col items-center">
        {/* Pie Chart Donut */}
        <div className="w-40 h-40 relative flex items-center justify-center mb-4">
          <PieChart width={160} height={160}>
            <Pie
              data={data}
              cx={80}
              cy={80}
              innerRadius={50}
              outerRadius={75}
              fill="#8884d8"
              dataKey="value"
              startAngle={90}
              endAngle={-270}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
          <span className="absolute text-xl font-bold text-slate-900">{performance}%</span>
        </div>

        {/* GPA Info */}
        <div className="flex justify-center items-center space-x-2 mt-2 flex-nowrap">
            <div className="text-center">
                <p className="text-xs text-slate-500">Current GPA <span className="text-sm font-bold text-blue-600">{gpa.toFixed(1)}</span></p>
            </div>
            <Separator orientation="vertical" className="h-8 bg-slate-200" />
            <div className="text-center">
                <p className="text-xs font-medium text-green-600">{trend}</p>
            </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AcademicPerformanceCard;