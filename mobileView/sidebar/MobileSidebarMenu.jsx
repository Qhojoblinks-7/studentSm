import React from "react";
import { Link } from "react-router-dom";

const MobileSidebarMenu = ({ menuItems, currentPath }) => {
  return (
    <div className="flex-1 overflow-y-auto py-4 space-y-2 custom-scrollbar scrollbar-hide px-4">
      {menuItems.map((item) => {
        const isActive = currentPath === item.href;
        const Icon = item.icon;

        return (
          <Link
            key={item.label}
            to={item.href}
            className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group ${
              isActive
                ? "bg-blue-500 text-white shadow-md shadow-blue-200"
                : "text-slate-500 hover:bg-slate-50 hover:text-blue-500"
            }`}
          >
            <Icon
              className={`w-5 h-5 ${isActive ? "text-white" : "text-blue-400 group-hover:text-blue-500"}`}
              strokeWidth={1.5}
            />
            <span className={`text-sm font-medium ${isActive ? "font-semibold" : ""}`}>
              {item.label}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default MobileSidebarMenu;