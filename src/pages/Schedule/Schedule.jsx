import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveView } from '../../store/scheduleSlice';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
// Shadcn Components
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

import { timeSlots, weeklyTimeTable, weekDays, todayScheduleData } from '@/lib/mockData';
import TimetableCard from './components/TimetableCard';

// --- Main Component: Schedule ---
const Schedule = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const activeView = useSelector((state) => state.schedule.activeView);

   const handleViewChange = (view) => {
     dispatch(setActiveView(view));
   };

  const handlePrevPage = () => {
    console.log('Previous page');
  };

  const handleNextPage = () => {
    console.log('Next page');
  };

  // Use the static mock data for today's schedule
  const todaySchedule = todayScheduleData;

  return (
    <div className="p-0 space-y-6">
      
      {/* Header and Filters */}
      <div className="flex justify-between items-center">
        <div>
            <Breadcrumb>
              <BreadcrumbList className="text-2xl font-extrabold text-slate-900 tracking-tight">
                <BreadcrumbItem>
                  <BreadcrumbLink
                    className="text-slate-500 cursor-pointer hover:text-blue-600 transition-colors"
                    onClick={() => navigate('/')}
                  >
                    Student Dashboard
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-base text-slate-500">/</BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage className="font-bold text-base">Schedule and Time Table</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <p className="text-md text-slate-600 mt-1">
                Junior High School 1 B Time Table
            </p>
        </div>
        
        {/* Navigation and Actions */}
        <div className="flex space-x-2">
            <div className="flex items-center space-x-2">
                <Button
                  variant={activeView === 'All' ? "default" : "outline"}
                  size="sm"
                  className={`h-8 ${activeView === 'All' ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                  onClick={() => dispatch(setActiveView('All'))}
                >
                    All
                </Button>
                <Button
                  variant={activeView === 'Schedule' ? "default" : "outline"}
                  size="sm"
                  className={`h-8 ${activeView === 'Schedule' ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                  onClick={() => dispatch(setActiveView('Schedule'))}
                >
                    Schedule
                </Button>
                <Button
                  variant={activeView === 'Time Table' ? "default" : "outline"}
                  size="sm"
                  className={`h-8 ${activeView === 'Time Table' ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                  onClick={() => dispatch(setActiveView('Time Table'))}
                >
                    Time Table
                </Button>
            </div>
        </div>
      </div>

      <Separator className="bg-slate-200" />

      {/* Conditional Content Based on Active View */}
      {activeView === 'Time Table' && (
        <Card className="shadow-lg border-slate-100 rounded-xl overflow-hidden">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-bold text-slate-900">Junior High School - Weekly Time Table</CardTitle>
            <p className="text-sm text-slate-500">JHS is more focused and prepares students for the BECE (Basic Education Certificate Examination).</p>
          </CardHeader>
          <CardContent className="p-4">
            {/* Header Row */}
            <Card className="mb-2 rounded-lg shadow-sm border-slate-200 bg-blue-600">
              <CardContent className="p-4">
                <div className="flex justify-between items-center gap-2">
                  <div className="text-sm font-bold text-white px-3 py-2 rounded-md text-center flex-shrink-0">
                    <Calendar className="w-4 h-4 inline mr-1" /> Time Slot
                  </div>
                  <div className="flex gap-2 flex-1 justify-end">
                    {weekDays.map(day => (
                      <div key={day} className="text-sm font-bold text-white text-center flex-1">
                        {day}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Time Slot Cards */}
            <div className="space-y-1">
              {timeSlots.map((time, index) => (
                <TimetableCard
                  key={index}
                  time={time}
                  schedule={weeklyTimeTable[time] || {}}
                  isLightBlue={index % 2 === 1}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {activeView === 'Schedule' && (
        <Card className="shadow-lg border-slate-100 rounded-xl overflow-hidden">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-bold text-slate-900">Today's Schedule</CardTitle>
            <p className="text-sm text-slate-500">Your schedule for {new Date().toLocaleDateString('en-US', { weekday: 'long' })}</p>
          </CardHeader>
          <CardContent className="p-4">
            {/* Today's Schedule in List Format */}
            <div className="space-y-3">
              <div className="text-center mb-4">
                <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-lg">
                  <Calendar className="w-5 h-5 inline mr-2" />
                  {new Date().toLocaleDateString('en-US', { weekday: 'long' })}
                </div>
              </div>

              {/* Schedule Items */}
              <div className="space-y-2">
                {timeSlots.map((time, index) => {
                  const activity = todaySchedule[time] ? Object.values(todaySchedule[time])[0] : '';
                  if (!activity) return null;

                  return (
                    <div key={index} className={`flex items-center justify-between p-3 rounded-lg border ${index % 2 === 1 ? 'bg-blue-50' : 'bg-white'} border-slate-200`}>
                      <div className="flex items-center space-x-3">
                        <div className="text-sm font-semibold text-slate-900 bg-slate-100 px-3 py-1 rounded">
                          {time}
                        </div>
                        <div className={`text-sm font-medium ${activity === 'BREAK' ? 'text-blue-800' : 'text-slate-700'}`}>
                          {activity}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {activeView === 'All' && (
        <div className="space-y-6">
          {/* Today's Schedule */}
          <Card className="shadow-lg border-slate-100 rounded-xl overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold text-slate-900">Today's Schedule</CardTitle>
              <p className="text-sm text-slate-500">Your schedule for {new Date().toLocaleDateString('en-US', { weekday: 'long' })}</p>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-3">
                <div className="text-center mb-4">
                  <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-lg">
                    <Calendar className="w-5 h-5 inline mr-2" />
                    {new Date().toLocaleDateString('en-US', { weekday: 'long' })}
                  </div>
                </div>

                {/* Schedule Items */}
                <div className="space-y-2">
                  {timeSlots.map((time, index) => {
                    const activity = todaySchedule[time] ? Object.values(todaySchedule[time])[0] : '';
                    if (!activity) return null;

                    return (
                      <div key={index} className={`flex items-center justify-between p-3 rounded-lg border ${index % 2 === 1 ? 'bg-blue-50' : 'bg-white'} border-slate-200`}>
                        <div className="flex items-center space-x-3">
                          <div className="text-sm font-semibold text-slate-900 bg-slate-100 px-3 py-1 rounded">
                            {time}
                          </div>
                          <div className={`text-sm font-medium ${activity === 'BREAK' ? 'text-blue-800' : 'text-slate-700'}`}>
                            {activity}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Weekly Time Table */}
          <Card className="shadow-lg border-slate-100 rounded-xl overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold text-slate-900">Weekly Time Table</CardTitle>
              <p className="text-sm text-slate-500">Complete weekly schedule for Junior High School</p>
            </CardHeader>
            <CardContent className="p-4">
              <Card className="mb-2 rounded-lg shadow-sm border-slate-200 bg-blue-600">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center gap-2">
                    <div className="text-sm font-bold text-white px-3 py-2 rounded-md text-center flex-shrink-0">
                      <Calendar className="w-4 h-4 inline mr-1" /> Time Slot
                    </div>
                    <div className="flex gap-2 flex-1 justify-end">
                      {weekDays.map(day => (
                        <div key={day} className="text-sm font-bold text-white text-center flex-1">
                          {day}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="space-y-1">
                {timeSlots.map((time, index) => (
                  <TimetableCard
                    key={index}
                    time={time}
                    schedule={weeklyTimeTable[time] || {}}
                    isLightBlue={index % 2 === 1}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Pagination (Matching the visual) */}
      <div className="flex justify-center items-center pt-4">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full mr-2"
            onClick={handlePrevPage}
          >
              <ChevronLeft className="w-5 h-5" />
          </Button>
          <span className="text-sm text-slate-600">Page 1 of 10</span>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full ml-2"
            onClick={handleNextPage}
          >
              <ChevronRight className="w-5 h-5" />
          </Button>
      </div>

    </div>
  );
};

export default Schedule;