import React from 'react';
import { studentAssignments } from '@/lib/mockData';

const AssignmentStats = () => {
  const pendingCount = studentAssignments.filter(a => a.status === 'Pending').length;
  const completedCount = studentAssignments.filter(a => a.status === 'Graded').length;
  const dueSoonCount = studentAssignments.filter(a => a.daysLeft <= 3 && a.status === 'Pending').length;

  return (
    <div className="flex items-center space-x-4">
      <div className="text-center">
        <div className="text-lg font-bold text-blue-600">
          {pendingCount}
        </div>
        <div className="text-xs text-slate-600">Pending</div>
      </div>
      <div className="text-center">
        <div className="text-lg font-bold text-green-600">
          {completedCount}
        </div>
        <div className="text-xs text-slate-600">Completed</div>
      </div>
      <div className="text-center">
        <div className="text-lg font-bold text-orange-600">
          {dueSoonCount}
        </div>
        <div className="text-xs text-slate-600">Due Soon</div>
      </div>
    </div>
  );
};

export default AssignmentStats;