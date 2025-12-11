import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Bell,
  MessageSquare,
  Menu,
  User
} from "lucide-react";
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
import MobileSearchModal from "./MobileSearchModal";

const MobileTopNav = ({ onMenuClick }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.auth.user);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/login');
  };

  const handleNotifications = () => {
    navigate('/notifications');
  };

  const handleMessages = () => {
    navigate('/messages');
  };

  const handleProfile = () => {
    navigate('/profile');
  };

  const handleSettings = () => {
    navigate('/settings');
  };

  const handleSearch = () => {
    setIsSearchModalOpen(true);
  };

  const handleCloseSearch = () => {
    setIsSearchModalOpen(false);
  };

  return (
    <header className="h-16 border-b border-slate-100 bg-white flex items-center justify-between px-4 fixed top-0 left-0 right-0 z-30 md:hidden">
      {/* Menu Button */}
      <button
        className="p-2 rounded-md hover:bg-gray-100 text-slate-500"
        onClick={onMenuClick}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Center - App Title or Logo */}
      <div className="flex-1 text-center">
        <h1 className="text-lg font-bold text-slate-900">EduManage</h1>
      </div>

      {/* Right Section: Icons & Profile */}
      <div className="flex items-center gap-2">
        {/* Search Button */}
        <button
          className="p-2 rounded-md hover:bg-gray-100 text-slate-500"
          onClick={handleSearch}
        >
          <Search className="w-5 h-5" />
        </button>

        {/* Notification Icons */}
        <button
          className="relative p-2 rounded-md hover:bg-gray-100 text-slate-500"
          onClick={handleNotifications}
        >
          <Bell className="w-5 h-5" />
          {/* Optional: Red notification dot */}
          {/* <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span> */}
        </button>

        <button
          className="p-2 rounded-md hover:bg-gray-100 text-slate-500"
          onClick={handleMessages}
        >
          <MessageSquare className="w-5 h-5" />
        </button>

        {/* User Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <Avatar className="h-8 w-8 border-2 border-blue-100">
              <AvatarImage src="/path-to-avatar.jpg" alt="User" />
              <AvatarFallback className="bg-blue-600 text-white text-sm">
                {user?.username ? user.username.charAt(0).toUpperCase() : 'U'}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-56 bg-white">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleProfile}>
              <User className="w-4 h-4 mr-2" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleSettings}>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600" onClick={handleLogout}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Search Modal */}
      <MobileSearchModal
        isOpen={isSearchModalOpen}
        onClose={handleCloseSearch}
      />
    </header>
  );
};

export default MobileTopNav;