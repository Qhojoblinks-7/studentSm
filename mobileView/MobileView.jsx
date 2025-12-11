import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import MobileSidebar from "./sidebar/MobileSidebar";
import MobileTopNav from "../components/MobileTopNav";

const MobileView = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Mobile Top Nav */}
      <MobileTopNav onMenuClick={() => setSidebarOpen(true)} />

      {/* Mobile Sidebar */}
      <MobileSidebar open={sidebarOpen} onOpenChange={setSidebarOpen} />

      {/* Main Content */}
      <div className="lg:hidden">
        {/* Page Content */}
        <main className="flex-1 p-6 pt-22">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MobileView;
