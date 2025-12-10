import React from 'react';
import { 
  Zap, TrendingUp, Target, Briefcase, ChevronRight, BookOpen, Diamond, Lightbulb, TrendingDown 
} from 'lucide-react'; // Added Diamond, Lightbulb, TrendingDown for recommendations

// Shadcn Components
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';

// Mock data (from mockData.js)
const aiLearningPathMetrics = {
    aiPredictions: 3,
    predictedGPA: 3.7,
    successRate: 92,
    careerPath: 'Engineering',
};

const studentCoursesProgress = [
    { title: 'Mathematics', code: 'MATH303', teacher: 'Sir Antwi Boasiako', lessonsCompleted: 7, totalLessons: 23 },
    { title: 'Integrated Science', code: 'SCS303', teacher: 'Sir Godffred Kusi', lessonsCompleted: 5, totalLessons: 21 },
    { title: 'Religious and Moral Education', code: 'RME303', teacher: 'Sir Antwi Boasiako', lessonsCompleted: 8, totalLessons: 24 },
    { title: 'Creative and Performing Art', code: 'CPA303', teacher: 'Sir Antwi Boasiako', lessonsCompleted: 9, totalLessons: 23 },
];

const aiRecommendations = {
  personalized: [
    {
      type: 'Study Suggestion',
      confidence: 87,
      content: 'Your performance in Religious and Moral Education is trending down. Consider scheduling study sessions for religious concepts.',
      progress: 87, 
    },
    {
      type: 'Career Path',
      confidence: 92,
      content: 'Based on your strong performance in Mathematics, Science and Computing, consider exploring Software Engineering roles.',
      progress: 92,
    },
    {
      type: 'Learning Resource',
      confidence: 64,
      content: 'AI suggests additional video tutorials for Database Normalization concepts.',
      progress: 64,
    },
  ],
  recommendedResources: [
    { title: 'Advanced religious and Moral Education', code: 'RME301', type: 'Video', match: 95 },
    { title: 'Tree Algorithms Practice Problems', code: 'CS202', type: 'Exercise', match: 95 },
  ],
};


// --- Sub-Component: AI KPI Card ---
const AIKpiCard = ({ title, value, subtext, icon: Icon, colorClass }) => (
    <Card className="shadow-lg border-l-4 border-slate-100 bg-white hover:border-l-blue-600 transition-colors">
        <CardContent className="p-6">
            <div className="flex items-center space-x-3 mb-4">
                <div className={`p-2 rounded-full flex-shrink-0 ${colorClass.bg}`}>
                    <Icon className={`w-6 h-6 ${colorClass.text}`} />
                </div>
                <CardTitle className="text-lg font-semibold text-slate-900">{title}</CardTitle>
            </div>
            
            <p className="text-4xl font-extrabold text-slate-900 mb-1">
                {value}
            </p>
            <p className="text-sm text-slate-500">{subtext}</p>
        </CardContent>
    </Card>
);

// --- Sub-Component: Course Progress Item ---
const CourseProgressItem = ({ title, code, teacher, completed, total }) => {
    const percentage = (completed / total) * 100;

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
            <Progress value={percentage} className="h-2 bg-slate-200" indicatorColor="bg-blue-600" />
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
            <Progress value={progress} className="h-2 bg-blue-200" indicatorColor="bg-blue-600" />
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


// --- Main Component: AILearningPath ---
const AILearningPath = () => {
  return (
    <div className="p-0 space-y-8">
      
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Student Dashboard / AI Learning Path</h1>
            <p className="text-md text-slate-600 mt-1">
                Machine learning driven insights to guide your academic and career success.
            </p>
        </div>
      </div>

      <Separator className="bg-slate-200" />
      
      {/* 1. AI Metrics KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
        <AIKpiCard
            title="AI Predictions"
            value={aiLearningPathMetrics.aiPredictions}
            subtext="Active recommendations"
            icon={Zap}
            colorClass={{ text: 'text-red-600', bg: 'bg-red-100' }}
        />

        <AIKpiCard
            title="Predicted GPA"
            value={aiLearningPathMetrics.predictedGPA}
            subtext="Next semester"
            icon={Target}
            colorClass={{ text: 'text-orange-600', bg: 'bg-orange-100' }}
        />

        <AIKpiCard
            title="Success Rate"
            value={`Top ${aiLearningPathMetrics.successRate}%`}
            subtext="AI confidence"
            icon={TrendingUp}
            colorClass={{ text: 'text-green-600', bg: 'bg-green-100' }}
        />

        <AIKpiCard
            title="Possible Career Path"
            value={aiLearningPathMetrics.careerPath}
            subtext="Academic Strength"
            icon={Briefcase}
            colorClass={{ text: 'text-blue-600', bg: 'bg-blue-100' }}
        />

      </div>
      
      {/* 2. Your Courses Card */}
      <Card className="shadow-lg border-slate-100 mt-8">
        <CardHeader className="flex flex-row justify-between items-center pb-2">
          <div>
            <CardTitle className="text-xl font-bold text-slate-900">Your Courses</CardTitle>
            <p className="text-sm text-slate-500">
                Courses are based on the current GES curriculum for all Basic Schools
            </p>
          </div>
          <Button variant="link" className="text-blue-600 p-0 h-auto text-sm">
            See all
          </Button>
        </CardHeader>
        <CardContent className="p-4 pt-2 space-y-3">
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

      {/* 3. Personalized Recommendations Card */}
      <Card className="shadow-lg border-slate-100 bg-blue-50/50 backdrop-blur-sm border-2 border-blue-200">
        <CardHeader className="flex flex-row items-center justify-between p-4">
          <div className="flex items-center">
            <Diamond className="w-5 h-5 mr-2 text-blue-600" />
            <CardTitle className="text-xl font-bold text-slate-900">Personalized Recommendations</CardTitle>
          </div>
          <Button variant="link" className="text-blue-600 p-0 h-auto">
            See all
          </Button>
        </CardHeader>
        <CardContent className="p-4 pt-0 space-y-4">
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
      
      {/* 4. Recommended Learning Resources Card */}
      <Card className="shadow-lg border-slate-100">
        <CardHeader className="flex flex-row items-center justify-between p-4">
          <div>
            <CardTitle className="text-xl font-bold text-slate-900">Recommended Learning Resources</CardTitle>
            <p className="text-sm text-slate-500">
              Curated materials based on your courses • Courses are based on the current GES curriculum for all Basic Schools
            </p>
          </div>
          <Button variant="link" className="text-blue-600 p-0 h-auto">
            See all
          </Button>
        </CardHeader>
        <CardContent className="p-4 pt-0 space-y-4">
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

export default AILearningPath;