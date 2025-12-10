import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import {
  LayoutGrid, 
  BookOpen, 
  ShoppingCart, 
  CalendarDays, 
  Compass, 
  LineChart, 
  Users, 
  Hexagon, 
  Radio, 
  Reply, 
  FileText, 
  Box, 
  HelpCircle, 
  Settings, 
  LogOut, 
  Menu, 
  Rocket,
  X
} from "lucide-react";

const menuItems = [
    { label: "Dashboard", icon: LayoutGrid, href: "/dashboard" },
    { label: "My Courses", icon: BookOpen, href: "/dashboard/courses" },
    { label: "Assignments", icon: ShoppingCart, href: "/dashboard/assignments" },
    { label: "Schedule", icon: CalendarDays, href: "/dashboard/schedule" },
    { label: "Performance", icon: Compass, href: "/dashboard/performance" },
    { label: "AI Learning Path", icon: LineChart, href: "/dashboard/ai-learning-path" },
    { label: "Fees and Payments", icon: Users, href: "/dashboard/fees" },
    { label: "Transportation", icon: Hexagon, href: "/dashboard/transport" },
    { label: "Analytics", icon: Radio, href: "/dashboard/analytics" },
    { label: "Books and Materials", icon: Reply, href: "/dashboard/books" },
    { label: "Results", icon: FileText, href: "/dashboard/results" },
    { label: "Inventory", icon: Box, href: "/dashboard/inventory" },
  ];


const MobileSidebar = ({ onClose }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <SheetContent side="left" className="w-[260px] p-0 bg-white">
      <SheetHeader className="p-4 border-b border-slate-300">
        <SheetTitle className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white">
            <Users className="w-5 h-5" />
          </div>
          EduManage System
        </SheetTitle>
      </SheetHeader>

      {/* Menu List */}
      <div className="flex-1 overflow-y-auto py-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = currentPath === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              to={item.href}
              onClick={onClose}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                isActive
                  ? "bg-blue-500 text-white"
                  : "text-slate-600 hover:bg-slate-100 hover:text-blue-600"
              }`}
            >
              <Icon className="w-5 h-5" strokeWidth={1.5} />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-slate-300 space-y-2 flex-shrink-0">
        <Link to="/help" className="flex items-center gap-3 text-slate-600 hover:text-blue-600">
          <HelpCircle className="w-5 h-5" /> Help desk
        </Link>
        <Link to="/settings" className="flex items-center gap-3 text-slate-600 hover:text-blue-600">
          <Settings className="w-5 h-5" /> Settings
        </Link>
        <Link to="/login" className="flex items-center gap-3 text-slate-600 hover:text-blue-600">
          <LogOut className="w-5 h-5" /> Logout
        </Link>
      </div>
    </SheetContent>
  );
};

export default MobileSidebar;
