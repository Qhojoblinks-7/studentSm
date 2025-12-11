import React, { useState } from 'react';
import {
  Zap, TrendingUp, Target, Briefcase, ChevronRight, BookOpen, Diamond, Lightbulb, TrendingDown
} from 'lucide-react';

// Shadcn Components
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

import { aiLearningPathMetrics, aiRecommendations, studentCoursesProgress } from '@/lib/mockData';

// --- Handy Component: AI KPI Card ---
const AIKpiCard = ({ title, value, subtext, icon: Icon, colorClass }) => (
  <Card className="shadow-lg bg-gradient-to-r from-[#CDFFFB]/50 via-[#FFEDED]/10 via-[#E5FEE9]/25 to-[#D8DAFE]/50 transition-colors">
    <CardContent className="p-4">
      <div className="flex items-center justify-between mb-3">
        <CardTitle className="text-lg font-semibold text-slate-900 flex items-center">
          <Icon className={`w-4 h-4 mr-2 ${colorClass.text}`} />
          {title}
        </CardTitle>
      </div>

      <p className="text-xl font-extrabold text-slate-900 mb-1">
        {value}
      </p>

      <div className="flex justify-between items-center text-xs mt-3">
        <p className="text-slate-500 whitespace-nowrap">{subtext}</p>
      </div>
    </CardContent>
  </Card>
);

// --- Sub-Component: Course Progress Item ---
const CourseProgressItem = ({ title, code, teacher, completed, total }) => {
  const percentage = total > 0 ? (completed / total) * 100 : 0;
  const [currentProgress, setCurrentProgress] = useState(0);

  React.useEffect(() => {
    let start = 0;
    const end = percentage;
    const duration = 1000; // 1 second
    const increment = end / (duration / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCurrentProgress(end);
        clearInterval(timer);
      } else {
        setCurrentProgress(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [percentage]);

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm border border-slate-100 mb-4 last:mb-0">
      <div className="flex justify-between items-center mb-2">
        <div>
          <p className="font-semibold text-lg text-slate-800">{title}</p>
          <p className="text-sm text-slate-500">
            {code} | {teacher}
          </p>
        </div>
        <span className="text-sm font-medium text-slate-700">
          {completed}/{total} Lessons
        </span>
      </div>
      <Progress value={currentProgress} className="h-2 bg-slate-200" indicatorClassName="bg-blue-600 transition-all duration-1000 ease-out" />
    </div>
  );
};

// --- Sub-Component: Personalized Recommendation Item ---
const RecommendationItem = ({ type, confidence, content, progress }) => {
  let Icon;
  let colorClass = 'text-blue-600'; // Default for Learning Resource
  if (type === 'Study Suggestion') {
    Icon = Lightbulb;
    colorClass = 'text-blue-600';
  } else if (type === 'Career Path') {
    Icon = Briefcase;
    colorClass = 'text-green-600';
  } else { // Learning Resource
    Icon = BookOpen;
    colorClass = 'text-purple-600';
  }

  const [currentProgress, setCurrentProgress] = useState(0);

  React.useEffect(() => {
    let start = 0;
    const end = progress;
    const duration = 1000; // 1 second
    const increment = end / (duration / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCurrentProgress(end);
        clearInterval(timer);
      } else {
        setCurrentProgress(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [progress]);

  return (
    <div className="p-4 bg-white/70 backdrop-blur-sm rounded-lg border border-slate-100 shadow-sm space-y-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Icon className={`w-4 h-4 mr-2 ${colorClass}`} />
          <p className="font-semibold text-slate-800">{type}</p>
          <span className="ml-2 text-xs font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
            {confidence}% confidence
          </span>
        </div>
      </div>
      <p className="text-sm text-slate-600 leading-relaxed">{content}</p>
      <Progress value={currentProgress} className="h-2 bg-blue-200" indicatorClassName="bg-blue-600 transition-all duration-1000 ease-out" />
    </div>
  );
};

// --- Sub-Component: Recommended Learning Resource Item ---
const ResourceItem = ({ title, code, type, match }) => (
  <div className="p-4 bg-white/70 backdrop-blur-sm rounded-lg border border-slate-100 shadow-sm flex justify-between items-center">
    <div>
      <p className="font-semibold text-lg text-slate-800">{title}</p>
      <p className="text-sm text-slate-500">{code} • {type}</p>
      <p className="text-xs text-green-600">{match}% match</p>
    </div>
    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
      Access
    </Button>
  </div>
);

// --- Main Component: MobileAILearningPath ---
const MobileAILearningPath = () => {
  const [expandedCards, setExpandedCards] = useState({
    courses: false,
    recommendations: false,
    resources: false,
  });

  const toggleCard = (cardName) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardName]: !prev[cardName]
    }));
  };

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
            <BreadcrumbPage className="font-bold text-base">AI Learning Path</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <p className="text-sm text-slate-600 mt-1">
        Machine learning driven insights to guide your academic and career success.
      </p>

      <Separator className="bg-slate-200" />

      {/* AI Metrics KPI Cards in Carousel */}
      <Carousel className="w-full">
        <CarouselContent>
          <CarouselItem>
            <AIKpiCard
              title="AI Predictions"
              value={aiLearningPathMetrics.aiPredictions}
              subtext="Active recommendations"
              icon={Zap}
              colorClass={{ text: 'text-red-600' }}
            />
          </CarouselItem>
          <CarouselItem>
            <AIKpiCard
              title="Predicted GPA"
              value={aiLearningPathMetrics.predictedGPA}
              subtext="Next semester"
              icon={Target}
              colorClass={{ text: 'text-orange-600' }}
            />
          </CarouselItem>
          <CarouselItem>
            <AIKpiCard
              title="Success Rate"
              value={`Top ${aiLearningPathMetrics.successRate}%`}
              subtext="AI confidence"
              icon={TrendingUp}
              colorClass={{ text: 'text-green-600' }}
            />
          </CarouselItem>
          <CarouselItem>
            <AIKpiCard
              title="Possible Career Path"
              value={aiLearningPathMetrics.careerPath}
              subtext="Academic Strength"
              icon={Briefcase}
              colorClass={{ text: 'text-blue-600' }}
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      {/* Your Courses Card */}
      <Card className="shadow-lg border-slate-100 rounded-xl overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-bold text-slate-900">Your Courses</CardTitle>
          <p className="text-sm text-slate-500">
            Courses are based on the current GES curriculum for all Basic Schools
          </p>
        </CardHeader>
        <CardContent className="p-4 space-y-3">
          {studentCoursesProgress.map((course, index) => (
            <CourseProgressItem
              key={index}
              title={course.title}
              code={course.code}
              teacher={course.teacher}
              completed={course.lessonsCompleted}
              total={course.totalLessons}
            />
          ))}
        </CardContent>
      </Card>

      {/* Personalized Recommendations Card */}
      <Card className="shadow-lg border-slate-100 rounded-xl overflow-hidden bg-blue-50/50 backdrop-blur-sm border-2 border-blue-200">
        <CardHeader className="pb-2">
          <div className="flex items-center">
            <Diamond className="w-5 h-5 mr-2 text-blue-600" />
            <CardTitle className="text-lg font-bold text-slate-900">Personalized Recommendations</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-4 space-y-4">
          <p className="text-sm text-slate-500">
            Machine learning insights for your academic success and career path
          </p>
          {aiRecommendations.personalized.map((rec, index) => (
            <RecommendationItem
              key={index}
              type={rec.type}
              confidence={rec.confidence}
              content={rec.content}
              progress={rec.progress}
            />
          ))}
        </CardContent>
      </Card>

      {/* Recommended Learning Resources Card */}
      <Card className="shadow-lg border-slate-100 rounded-xl overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-bold text-slate-900">Recommended Learning Resources</CardTitle>
          <p className="text-sm text-slate-500">
            Curated materials based on your courses • Courses are based on the current GES curriculum for all Basic Schools
          </p>
        </CardHeader>
        <CardContent className="p-4 space-y-4">
          {aiRecommendations.recommendedResources.map((resource, index) => (
            <ResourceItem
              key={index}
              title={resource.title}
              code={resource.code}
              type={resource.type}
              match={resource.match}
            />
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default MobileAILearningPath;