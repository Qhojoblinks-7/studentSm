import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  Box
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import MobileSidebarHeader from "./MobileSidebarHeader";
import MobileSidebarMenu from "./MobileSidebarMenu";
import MobileSidebarFooter from "./MobileSidebarFooter";

const MobileSidebar = ({ open, onOpenChange }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const menuItems = [
    { label: "Dashboard", icon: LayoutGrid, href: "/" },
    { label: "My Courses", icon: BookOpen, href: "/courses" },
    { label: "Assignments", icon: ShoppingCart, href: "/assignments" },
    { label: "Schedule", icon: CalendarDays, href: "/schedule" },
    { label: "Performance", icon: Compass, href: "/performance" },
    { label: "AI Learning Path", icon: LineChart, href: "/ai-path" },
    { label: "Fees and Payments", icon: Users, href: "/fees-payments" },
    { label: "Transportation", icon: Hexagon, href: "/transport" },
    { label: "Analytics", icon: Radio, href: "/analytics" },
    { label: "Books and Materials", icon: Reply, href: "/books" },
    { label: "Results", icon: FileText, href: "/results" },
    { label: "Inventory", icon: Box, href: "/inventory" },
  ];

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-80 p-0 bg-white overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <SheetDescription className="sr-only">Navigate through different sections of the EduManage application</SheetDescription>
        <MobileSidebarHeader />
        <MobileSidebarMenu menuItems={menuItems} currentPath={currentPath} />
        <MobileSidebarFooter navigate={navigate} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
