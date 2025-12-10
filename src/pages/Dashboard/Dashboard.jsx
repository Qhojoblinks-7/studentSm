import React from 'react';
import { 
  Zap, Bell, Trophy, CheckCircle, ChevronDown, User, BookOpen 
} from 'lucide-react';

// Shadcn Components
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

// Mock Data (Assuming studentCourses, aiRecommendations, dashboardData, etc., are imported)
import { 
  studentCourses, 
  aiRecommendations, 
  dashboardData, 
  dashboardPosts, 
  linkedTeachers, 
  attendanceData 
} from '@/lib/mockData';

// --- Sub-Component: Welcome Banner ---
const WelcomeBanner = ({ name, completion }) => (
  <Card className="col-span-12 lg:col-span-8 shadow-md border-slate-100 p-0 overflow-hidden">
    {/* Gradient Background Matching the design */}
    <div className="p-6 bg-gradient-to-r from-blue-100 to-green-50/70 relative">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            Welcome back, <span className="text-blue-700">{name}</span>
        </h1>
        <p className="text-lg text-slate-700">
            You've completed **{completion}%** of your homework goals this month! keep going to reach and improve even more.
        </p>
        {/* Placeholder for illustration */}
        <div className="absolute right-0 top-0 h-full w-40 overflow-hidden opacity-80">
            {/* 

[Image of students collaborating at a table]
 */}
        </div>
    </div>
  </Card>
);

// --- Sub-Component: Academic Performance Card ---
const AcademicPerformanceCard = ({ performance, gpa, trend }) => (
  <Card className="col-span-12 lg:col-span-4 shadow-md border-slate-100 p-4 relative overflow-hidden">
    <CardHeader className="p-0 pb-3">
        <CardTitle className="text-xl font-bold text-slate-900">Academic Performance</CardTitle>
    </CardHeader>
    <CardContent className="p-0 flex flex-col items-center">
        {/* Performance Ring (Matching the visual) */}
        <div className="w-40 h-40 relative flex items-center justify-center mb-4">
            {/* SVG Ring Placeholder */}
            <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                <path 
                    className="text-slate-200"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.8"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                    className="text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.8"
                    strokeDasharray={`${performance}, 100`}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
            </svg>
            <span className="absolute text-3xl font-bold text-slate-900">{performance}%</span>
        </div>
        
        {/* GPA Info */}
        <div className="flex justify-center items-center space-x-4 mt-2">
            <div className="text-center">
                <p className="text-sm text-slate-500">Current GPA</p>
                <p className="text-xl font-bold text-blue-600">{gpa.toFixed(1)}</p>
            </div>
            <Separator orientation="vertical" className="h-10 bg-slate-200" />
            <div className="text-center">
                <p className="text-xs font-medium text-green-600">{trend}</p>
                <p className="text-sm text-slate-500">vs. last semester</p>
            </div>
        </div>
    </CardContent>
  </Card>
);

// --- Sub-Component: Posts for Notice ---
const PostsForNotice = ({ posts }) => (
  <Card className="col-span-12 md:col-span-4 shadow-md border-slate-100">
    <CardHeader className="pb-3">
      <CardTitle className="text-xl font-bold text-slate-900 flex items-center">
        <Bell className="w-5 h-5 mr-2 text-blue-500" /> Posts for Notice
      </CardTitle>
      <p className="text-sm text-slate-500">Overview of published and scheduled events in school</p>
    </CardHeader>
    <CardContent>
      {/* Tabbed Interface Placeholder */}
      <div className="flex space-x-4 border-b mb-4">
        <Button variant="link" className="p-0 text-blue-600 border-b-2 border-blue-600 rounded-none h-auto font-semibold">
          Latest posts
        </Button>
        <Button variant="link" className="p-0 text-slate-500 hover:text-blue-600 rounded-none h-auto">
          Scheduled posts
        </Button>
      </div>

      {/* Post List */}
      <div className="space-y-4">
        {posts.map(post => (
          <div key={post.id} className="flex items-start space-x-3">
            <div className="flex flex-col items-center min-w-[40px] pt-1">
              <span className="text-xs font-bold text-blue-600">{post.date.split(' ')[0]}</span>
              <span className="text-xs text-slate-500">{post.date.split(' ')[1]}</span>
            </div>
            <div className="flex-1 border-l-2 pl-3 border-blue-100">
              <p className="text-sm font-semibold text-slate-800">{post.title}</p>
              <p className="text-xs text-slate-600 mt-1">{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

// --- Sub-Component: AI Personalized Recommendations (Short Version) ---
const AIPersonalizedRecommendations = () => (
    <Card className="col-span-12 md:col-span-4 shadow-md border-blue-200 border-2 bg-blue-50/50">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-bold text-slate-900 flex items-center">
          <Zap className="w-5 h-5 mr-2 text-blue-600" /> AI Personalized Recommendations
        </CardTitle>
        <p className="text-sm text-slate-500">Machine learning insights for your academic success and career path</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Card 1: Study Suggestion */}
        <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center text-sm font-semibold mb-1">
                <span>Study Suggestion</span>
                <span className="text-xs text-green-600">87% confidence</span>
            </div>
            <p className="text-sm text-slate-700">Your performance in Statistics is trending down. Consider scheduling study sessions for probability concepts</p>
        </div>
        
        {/* Card 2: Career Path */}
        <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center text-sm font-semibold mb-1">
                <span>Career Path</span>
                <span className="text-xs text-green-600">92% confidence</span>
            </div>
            <p className="text-sm text-slate-700">Based on your strong performance in Data Structures, consider exploring Software Engineering roles.</p>
        </div>
        
        {/* Card 3: Learning Resource */}
        <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center text-sm font-semibold mb-1">
                <span>Learning Resource</span>
                <span className="text-xs text-green-600">87% confidence</span>
            </div>
            <p className="text-sm text-slate-700">AI suggests additional video tutorials for Database Normalization concepts.</p>
        </div>
      </CardContent>
    </Card>
);

// --- Sub-Component: Course Progress List ---
const CourseProgressList = ({ courses }) => (
  <Card className="col-span-12 lg:col-span-8 shadow-md border-slate-100">
    <CardHeader className="pb-3">
      <CardTitle className="text-xl font-bold text-slate-900">Your Courses</CardTitle>
      <p className="text-sm text-slate-500">Courses are based on the current GES curriculum for all Basic Schools</p>
    </CardHeader>
    <CardContent className="space-y-4">
      {courses.slice(0, 4).map(course => ( // Limiting to top 4 for the dashboard
        <div key={course.id}>
          <div className="flex justify-between items-center mb-1">
            <p className="text-md font-semibold text-slate-800">{course.title}</p>
            <span className="text-sm text-slate-600">{course.lessonsDone}/{course.totalLessons} Lessons</span>
          </div>
          <p className="text-xs text-slate-500 mb-2">{course.code} | {course.teacher}</p>
          <div className="h-2 bg-slate-200 rounded-full">
            <div 
              className="h-full bg-blue-500 rounded-full" 
              style={{ width: `${course.progress}%` }}
            />
          </div>
        </div>
      ))}
      <Button variant="link" className="float-right text-sm text-blue-600">
        See all
      </Button>
    </CardContent>
  </Card>
);

// --- Sub-Component: Linked Teachers and Attendance (Sidebar Card) ---
const RightSidebarInfo = ({ teachers, attendance }) => {
    
    const AttendanceItem = ({ day, present }) => {
        const Icon = present ? CheckCircle : Zap; // Using Zap as a temporary icon for Absence
        const color = present ? 'text-green-500' : 'text-red-500';
        return (
            <div className="flex justify-between items-center text-sm py-1">
                <span className="text-slate-700">{day}</span>
                <Icon className={`w-4 h-4 ${color}`} />
            </div>
        );
    };

    return (
        <Card className="col-span-12 lg:col-span-4 shadow-md border-slate-100 space-y-4">
            <CardContent className="p-4 pt-0">
                
                {/* Linked Teachers */}
                <div className="pt-4 border-t border-slate-100">
                    <h3 className="text-lg font-semibold text-slate-800 mb-3 flex justify-between items-center">
                        Linked Teachers
                        <Button variant="link" className="text-blue-600 h-auto p-0 text-xs">See all</Button>
                    </h3>
                    {teachers.map(teacher => (
                        <div key={teacher.id} className="flex items-center p-3 mb-2 bg-green-50 rounded-lg border border-green-200">
                            {/* Placeholder for Teacher Avatar */}
                            <User className="w-5 h-5 text-slate-500 mr-3" />
                            <div className="flex-1">
                                <p className="text-sm font-medium text-slate-800">{teacher.name}</p>
                                <p className="text-xs text-slate-600">{teacher.subject}</p>
                            </div>
                            <ChevronDown className="w-4 h-4 text-slate-500" />
                        </div>
                    ))}
                </div>

                <Separator className="my-4 bg-slate-200" />

                {/* Attendance */}
                <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-3 flex justify-between items-center">
                        Attendance
                        <Button variant="link" className="text-blue-600 h-auto p-0 text-xs">See all</Button>
                    </h3>
                    
                    <p className="text-sm font-bold text-slate-800 mt-2 mb-1">This Week / Week 2</p>
                    {attendance.thisWeek.map((item, index) => (
                        <AttendanceItem key={`this-${index}`} day={item.day} present={item.present} />
                    ))}
                    
                    <p className="text-sm font-bold text-slate-800 mt-3 mb-1">Last Week / Week 1</p>
                    {attendance.lastWeek.map((item, index) => (
                        <AttendanceItem key={`last-${index}`} day={item.day} present={item.present} />
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};


// --- Main Component: Dashboard ---
const Dashboard = () => {
  const { studentName, homeworkCompletion, academicPerformance, currentGpa, gpaTrend } = dashboardData;
  
  return (
    <div className="p-0 space-y-6">
      
      {/* 1. Top Section (Welcome & Academic Performance) */}
      <div className="grid grid-cols-12 gap-6">
        <WelcomeBanner name={studentName} completion={homeworkCompletion} />
        <AcademicPerformanceCard 
          performance={academicPerformance} 
          gpa={currentGpa} 
          trend={gpaTrend} 
        />
      </div>

      {/* 2. Middle Section (Posts & AI Recommendations) */}
      <div className="grid grid-cols-12 gap-6">
        <PostsForNotice posts={dashboardPosts} />
        <AIPersonalizedRecommendations />
        <RightSidebarInfo teachers={linkedTeachers} attendance={attendanceData} />
      </div>

      {/* 3. Bottom Section (Course Progress) */}
      <div className="grid grid-cols-12 gap-6">
        <CourseProgressList courses={studentCourses} />
      </div>

    </div>
  );
};

export default Dashboard;