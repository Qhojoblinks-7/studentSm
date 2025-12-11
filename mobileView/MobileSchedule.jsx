import React from 'react';
import { Calendar } from 'lucide-react';

// Shadcn Components
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

import { timeSlots, weeklyTimeTable, weekDays } from '@/lib/mockData';

// --- Main Component: Mobile Schedule ---
const MobileSchedule = () => {
  return (
    <div className="p-4 space-y-6 md:hidden">
      {/* Page Header */}
      <Breadcrumb>
        <BreadcrumbList className="text-xl font-extrabold text-slate-900 tracking-tight">
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="text-slate-500">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-base text-slate-500">/</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage className="font-bold text-base">Schedule</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <p className="text-sm text-slate-600 mt-1">
        Weekly timetable for Junior High School
      </p>

      {/* Weekly Schedule Accordion */}
      <Accordion type="single" collapsible className="w-full">
        {weekDays.map((day) => (
          <AccordionItem key={day} value={day}>
            <AccordionTrigger className="text-lg font-semibold text-slate-800">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                <span>{day}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {timeSlots.map((time) => {
                  const activity = weeklyTimeTable[time]?.[day];
                  if (!activity) return null;
                  return (
                    <Card key={time} className="shadow-sm border-slate-200">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-sm font-medium text-slate-900">{activity}</p>
                            <p className="text-xs text-slate-500">{time}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default MobileSchedule;