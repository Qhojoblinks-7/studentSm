import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { gpaTrendData } from '@/lib/mockData';

const GpaTrendChart = () => {
  const data = gpaTrendData.map(item => ({
    month: item.month,
    'Current Semester': item.line1,
    'Previous Semester': item.line2,
  }));

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-slate-200 rounded-lg shadow-lg">
          <p className="font-medium text-slate-900">{`Month: ${label}`}</p>
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
        <LineChart
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
            dataKey="month"
            tick={{ fontSize: 12, fill: '#64748b' }}
            axisLine={{ stroke: '#e2e8f0' }}
          />
          <YAxis
            tick={{ fontSize: 12, fill: '#64748b' }}
            axisLine={{ stroke: '#e2e8f0' }}
            domain={[0, 100]}
            label={{ value: 'GPA Points', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ paddingTop: '20px' }}
          />
          <Line
            type="monotone"
            dataKey="Current Semester"
            stroke="#3b82f6"
            strokeWidth={3}
            dot={{ fill: '#3b82f6', strokeWidth: 2, r: 6 }}
            activeDot={{ r: 8, stroke: '#3b82f6', strokeWidth: 2, fill: '#ffffff' }}
            name="Current Semester"
          />
          <Line
            type="monotone"
            dataKey="Previous Semester"
            stroke="#94a3b8"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={{ fill: '#94a3b8', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: '#94a3b8', strokeWidth: 2, fill: '#ffffff' }}
            name="Previous Semester"
          />
        </LineChart>
      </ResponsiveContainer>

      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="text-center p-3 bg-blue-50 rounded-lg">
          <div className="text-lg font-semibold text-blue-600">
            {Math.round(data.reduce((acc, item) => acc + item['Current Semester'], 0) / data.length)}
          </div>
          <div className="text-sm text-slate-600">Current Avg</div>
        </div>
        <div className="text-center p-3 bg-slate-50 rounded-lg">
          <div className="text-lg font-semibold text-slate-600">
            {Math.round(data.reduce((acc, item) => acc + item['Previous Semester'], 0) / data.length)}
          </div>
          <div className="text-sm text-slate-600">Previous Avg</div>
        </div>
        <div className="text-center p-3 bg-green-50 rounded-lg">
          <div className="text-lg font-semibold text-green-600">
            +{Math.round(((data.reduce((acc, item) => acc + item['Current Semester'], 0) / data.length) - (data.reduce((acc, item) => acc + item['Previous Semester'], 0) / data.length)) * 10) / 10}
          </div>
          <div className="text-sm text-slate-600">Improvement</div>
        </div>
      </div>
    </div>
  );
};

export default GpaTrendChart;