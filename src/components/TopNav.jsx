import React from "react";
import {
  Search,
  Bell,
  MessageSquare,
  ChevronDown,
  Menu
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
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import MobileSidebar from "./MobileSidebar";

const TopNav = ({ onMenuClick }) => {
  return (
    <header className="h-20 border-b border-slate-100 bg-white flex items-center justify-between px-6">
      
      {/* 1. Search Bar (Pill Shape) */}
      <div className="w-96 relative hidden md:block">
        <Input 
          type="text" 
          placeholder="Search" 
          className="rounded-full bg-white border-slate-200 pl-6 pr-10 h-11 focus-visible:ring-blue-500"
        />
        <Search className="absolute right-4 top-3 w-5 h-5 text-slate-400" />
      </div>

      {/* Mobile Menu Button */}
      <Sheet>
        <SheetTrigger asChild>
          <button
            className="md:hidden text-slate-500 hover:text-slate-700 transition-colors mr-4"
          >
            <Menu className="w-6 h-6" />
          </button>
        </SheetTrigger>
        <MobileSidebar />
      </Sheet>

      {/* 2. Right Section: Icons & Profile */}
      <div className="flex items-center gap-6 ml-auto">

        {/* Notification Icons */}
        <div className="flex items-center gap-4 border-r border-slate-100 pr-6">
          <button className="relative text-slate-500 hover:text-slate-700 transition-colors">
            <Bell className="w-6 h-6" />
            {/* Optional: Red notification dot if needed later */}
             {/* <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span> */}
          </button>
          
          <button className="text-slate-500 hover:text-slate-700 transition-colors">
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
                  Antwi Boasiako
                </span>
                <span className="text-slate-500 text-xs font-medium">
                  Student
                </span>
              </div>

              <ChevronDown className="w-4 h-4 text-slate-400" />
            </div>
          </DropdownMenuTrigger>
          
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

      </div>
    </header>
  );
};

export default TopNav;