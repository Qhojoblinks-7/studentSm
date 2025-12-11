import React from "react";
import { Users } from "lucide-react";

const MobileSidebarHeader = () => {
  return (
    <div className="h-20 flex items-center px-6 sticky top-0 bg-white z-10">
      <div className="flex items-center gap-2">
        {/* Logo Icon */}
        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white">
          <Users className="w-5 h-5" />
        </div>
        <span className="font-bold text-slate-900 text-lg tracking-tight">
          EduManage System
        </span>
      </div>
    </div>
  );
};

export default MobileSidebarHeader;
