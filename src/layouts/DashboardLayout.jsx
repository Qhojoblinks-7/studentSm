import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Sheet } from '@/components/ui/sheet';
import Sidebar from '../components/Sidebar';
import TopNav from '../components/TopNav';
import MobileSidebar from '../components/MobileSidebar';

const DashboardLayout = () => {
  const { isAuthenticated } = useSelector(state => state.auth);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // If not authenticated, you might want to redirect to login
  // For now, we'll just render the layout

  const toggleMobileSidebar = () => setIsMobileSidebarOpen(!isMobileSidebarOpen);

  return (
    <Sheet>
      {/* Mobile Sidebar */}
      <MobileSidebar isOpen={isMobileSidebarOpen} onClose={() => setIsMobileSidebarOpen(false)} />

      <div className="min-h-screen bg-slate-50">
        {/* Main Content Area */}
        <div className="flex">
          {/* Desktop Sidebar */}
          <div className="hidden md:block">
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className="flex-1 md:ml-0 h-screen overflow-y-auto">
            {/* Top Navigation */}
            <TopNav onMenuClick={toggleMobileSidebar} />
            <main className="p-6">
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </Sheet>
  );
};

export default DashboardLayout;