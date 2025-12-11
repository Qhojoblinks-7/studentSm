// src/layouts/DashboardShell.jsx

import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import MobileTopNav from "@/components/MobileTopNav";
import MobileSidebar from "../../mobileView/sidebar/MobileSidebar";

const DashboardShell = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7FCFF] font-sans relative border-none">

      <div className="flex ">

        {/* Fixed Sidebar - Desktop */}
        <div className="hidden md:block sticky top-0 h-screen z-40">
          <Sidebar />
        </div>

        {/* Main Layout Area */}
        <div className="flex-1 flex flex-col min-w-0">

          {/* Desktop Header */}
          <div className="hidden md:block">
            <TopNav />
          </div>

          {/* Mobile Header */}
          <div className="md:hidden">
            <MobileTopNav onMenuClick={() => setMobileSidebarOpen(true)} />
          </div>

          {/* Dynamic Page Content */}
          <main className="flex-1 p-6 pt-22 md:pt-6 overflow-y-auto mb-20">
            <Outlet />
          </main>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <MobileSidebar open={mobileSidebarOpen} onOpenChange={setMobileSidebarOpen} />

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 mt-20 bg-[#F7FCFF]  py-4 pl-6 md:pl-[304px] pr-6 text-center text-xs text-slate-500 z-30">
        <p className="text-center">Copyright © 2024-2025 AltBit Softwares. All rights reserved. EduManage System 1.0</p>
      </footer>
    </div>
  );
};

export default DashboardShell;