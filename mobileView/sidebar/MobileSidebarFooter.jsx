import React from "react";
import { useDispatch } from "react-redux";
import { HelpCircle, Settings, LogOut } from "lucide-react";
import { logoutUser } from "@/store/authSlice";

const MobileSidebarFooter = ({ navigate }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/login');
  };

  return (
    <div className="px-4 pb-6">
      <div className="bg-slate-50 rounded-3xl p-2 space-y-1">
        <SidebarFooterItem icon={HelpCircle} label="Help desk" onClick={() => navigate('/help')} />
        <SidebarFooterItem icon={Settings} label="Settings" onClick={() => navigate('/settings')} />
        <SidebarFooterItem icon={LogOut} label="Logout" onClick={handleLogout} />
      </div>
    </div>
  );
};

// Little helper for the footer items to keep things tidy
const SidebarFooterItem = ({ icon: Icon, label, onClick }) => (
  <button
    className="w-full flex items-center gap-4 px-4 py-2.5 text-slate-500 hover:text-slate-800 hover:bg-white rounded-2xl transition-all text-sm font-medium"
    onClick={onClick}
  >
    <Icon className="w-5 h-5" strokeWidth={1.5} />
    {label}
  </button>
);

export default MobileSidebarFooter;
