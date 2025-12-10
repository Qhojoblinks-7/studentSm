import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);

  // Mocking the current path for demonstration if you aren't using router yet
  const currentPath = location.pathname === "/" ? "/dashboard" : location.pathname;

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

  return (
    <div className="relative h-screen">
      <aside className={`${isOpen ? 'w-[280px]' : 'w-16'} h-screen bg-white flex flex-col border-r border-slate-100 font-sans overflow-hidden sticky top-0 z-40 transition-all duration-300`}>
        
        {/* 1. Header Section */}
        <div className={`h-20 flex items-center justify-between ${isOpen ? 'px-6' : 'px-2'}`}>
          <div className="flex items-center gap-2">
            {/* Logo Icon */}
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white">
              <Users className="w-5 h-5" />
            </div>
            {isOpen && (
              <span className="font-bold text-slate-900 text-lg tracking-tight">
                EduManage System
              </span>
            )}
          </div>
        </div>

        {/* 2. Scrollable Menu List */}
        <div className={`flex-1 overflow-y-auto py-2 space-y-1 custom-scrollbar ${isOpen ? 'px-4' : 'px-2'}`}>
          {menuItems.map((item) => {
            const isActive = currentPath === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                to={item.href}
                className={`flex items-center ${isOpen ? 'gap-4 px-4' : 'justify-center px-2'} py-3 rounded-xl transition-all duration-200 group ${
                  isActive
                    ? "bg-blue-500 text-white shadow-md shadow-blue-200"
                    : "text-slate-500 hover:bg-slate-50 hover:text-blue-500"
                }`}
              >
                <Icon 
                  className={`w-5 h-5 ${isActive ? "text-white" : "text-blue-400 group-hover:text-blue-500"}`} 
                  strokeWidth={1.5}
                />
                {isOpen && (
                  <span className={`text-sm font-medium ${isActive ? "font-semibold" : ""}`}>
                    {item.label}
                  </span>
                )}
              </Link>
            );
          })}

          {/* Spacer */}
          <div className="h-8"></div>

          {/* 3. "Unlock Pro" Gradient Card */}
          {isOpen && (
            <div className="relative rounded-3xl p-5 mt-4 mb-6 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-50 to-cyan-100 opacity-80"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <button className="absolute -top-2 -right-2 text-slate-400 hover:text-slate-600">
                  <X className="w-4 h-4" />
                </button>
                <div className="mb-3 transform -rotate-12">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full flex items-center justify-center shadow-lg shadow-blue-200">
                    <Rocket className="w-6 h-6 text-white fill-white" />
                  </div>
                </div>
                <h3 className="font-bold text-slate-800 text-sm mb-1">Unlock Pro</h3>
                <p className="text-[10px] text-slate-500 leading-tight mb-3 px-2">
                  Get deeper analytics, unlimited features and system support upgrade
                </p>
                <button className="w-full py-2 bg-white/60 backdrop-blur-sm border border-white/50 rounded-full text-xs font-bold text-blue-600 shadow-sm hover:bg-white transition-colors">
                  Upgrade plan
                </button>
              </div>
            </div>
          )}
        </div>

        {/* 4. Footer Actions */}
        <div className={`${isOpen ? 'px-4' : 'px-2'} pb-6`}>
          <div className="bg-slate-50 rounded-3xl p-2 space-y-1">
            <SidebarFooterItem icon={HelpCircle} label="Help desk" isOpen={isOpen} />
            <SidebarFooterItem icon={Settings} label="Settings" isOpen={isOpen} />
            <SidebarFooterItem icon={LogOut} label="Logout" isOpen={isOpen} />
          </div>
        </div>
      </aside>

      {/* Floating Toggle Button */}
      <button
        className={`hidden md:block absolute top-[80px] ${isOpen ? 'left-[280px]' : 'left-16'}
                    -translate-x-1/2 rounded-full border p-2 bg-white shadow z-50 transition-all duration-300`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle sidebar"
      >
        {isOpen ? (
          <ChevronLeft className="w-4 h-4 text-slate-600" />
        ) : (
          <ChevronRight className="w-4 h-4 text-slate-600" />
        )}
      </button>
    </div>
  );
};

// Footer Item Helper
const SidebarFooterItem = ({ icon: Icon, label, isOpen }) => (
  <button className={`w-full flex items-center ${isOpen ? 'gap-4 px-4' : 'justify-center px-2'} py-2.5 text-slate-500 hover:text-slate-800 hover:bg-white rounded-2xl transition-all text-sm font-medium`}>
    <Icon className="w-5 h-5" strokeWidth={1.5} />
    {isOpen && label}
  </button>
);

export default Sidebar;
