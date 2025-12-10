import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { classAverageData } from '@/lib/mockData';

const ClassAverageChart = () => {
  const data = classAverageData.map(item => ({
    test: item.test,
    'Class Average': item.classAvg,
    'Your Mark': item.studentMark,
  }));

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-slate-200 rounded-lg shadow-lg">
          <p className="font-medium text-slate-900">{`Test: ${label}`}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }} className="text-sm">
              {`${entry.dataKey}: ${entry.value}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis
            dataKey="test"
            tick={{ fontSize: 12, fill: '#64748b' }}
            axisLine={{ stroke: '#e2e8f0' }}
          />
          <YAxis
            tick={{ fontSize: 12, fill: '#64748b' }}
            axisLine={{ stroke: '#e2e8f0' }}
            label={{ value: 'Score', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ paddingTop: '20px' }}
          />
          <Bar
            dataKey="Class Average"
            fill="#94a3b8"
            radius={[4, 4, 0, 0]}
            name="Class Average"
          />
          <Bar
            dataKey="Your Mark"
            fill="#3b82f6"
            radius={[4, 4, 0, 0]}
            name="Your Mark"
          />
        </BarChart>
      </ResponsiveContainer>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="text-center p-3 bg-slate-50 rounded-lg">
          <div className="text-lg font-semibold text-slate-900">
            {Math.round(data.reduce((acc, item) => acc + item['Your Mark'], 0) / data.length)}
          </div>
          <div className="text-sm text-slate-600">Your Average</div>
        </div>
        <div className="text-center p-3 bg-blue-50 rounded-lg">
          <div className="text-lg font-semibold text-blue-600">
            {Math.round(data.reduce((acc, item) => acc + item['Class Average'], 0) / data.length)}
          </div>
          <div className="text-sm text-slate-600">Class Average</div>
        </div>
      </div>
    </div>
  );
};

export default ClassAverageChart;