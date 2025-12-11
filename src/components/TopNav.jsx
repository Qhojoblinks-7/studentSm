import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Bell,
  MessageSquare,
  ChevronDown
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logoutUser } from "../store/authSlice";

const TopNav = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.auth.user);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/login');
  };

  const handleNotifications = () => {
    // Head to notifications or pop up the panel
    navigate('/notifications');
  };

  const handleMessages = () => {
    // Off to the messages page
    navigate('/messages');
  };

  const handleProfile = () => {
    // Time to check out the profile
    navigate('/profile');
  };

  const handleSettings = () => {
    // Let's tweak some settings
    navigate('/settings');
  };

  return (
    <header className="h-20 border-b border-slate-100 bg-white flex items-center justify-between px-6 sticky top-0 z-30">
      
      {/* 1. Search Bar (Pill Shape) */}
      <div className="w-96 relative hidden md:block">
        <Input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="rounded-full bg-white border-slate-200 pl-6 pr-10 h-11 focus-visible:ring-blue-500"
        />
        <Search className="absolute right-4 top-3 w-5 h-5 text-slate-400" />
      </div>

      {/* 2. Right Section: Icons & Profile */}
      <div className="flex items-center gap-6 ml-auto">
        
        {/* Notification Icons */}
        <div className="flex items-center gap-4 border-r border-slate-100 pr-6">
          <button
            className="relative text-slate-500 hover:text-slate-700 transition-colors"
            onClick={handleNotifications}
          >
            <Bell className="w-6 h-6" />
            {/* Optional: Red notification dot if needed later */}
             {/* <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span> */}
          </button>

          <button
            className="text-slate-500 hover:text-slate-700 transition-colors"
            onClick={handleMessages}
          >
            <MessageSquare className="w-6 h-6" />
          </button>
        </div>

        {/* User Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <div className="flex items-center gap-3 cursor-pointer">
              
              {/* Avatar with Blue Ring */}
              <Avatar className="h-10 w-10 border-2 border-blue-100">
                <AvatarImage src="/path-to-avatar.jpg" alt="Antwi" />
                <AvatarFallback className="bg-blue-600 text-white">AB</AvatarFallback>
              </Avatar>

              {/* Name & Role Stack */}
              <div className="hidden md:flex flex-col items-start text-sm">
                <span className="font-bold text-slate-900 leading-none mb-1">
                  {user?.username || 'User'}
                </span>
                <span className="text-slate-500 text-xs font-medium">
                  {user?.role || 'Role'}
                </span>
              </div>

              <ChevronDown className="w-4 h-4 text-slate-400" />
            </div>
          </DropdownMenuTrigger>
          
          <DropdownMenuContent align="end" className="w-56 bg-white">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleProfile}>Profile</DropdownMenuItem>
            <DropdownMenuItem onClick={handleSettings}>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600" onClick={handleLogout}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

      </div>
    </header>
  );
};

export default TopNav;