import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

// Import teachers data
import { linkedTeachers } from '@/lib/mockData';

const Teachers = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
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
            <BreadcrumbPage className="font-bold text-base">Linked Teachers</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">All Linked Teachers</h1>
          <p className="text-slate-600 mt-1">Your complete list of subject and class teachers</p>
        </div>
        <Button
          onClick={() => navigate('/')}
          variant="outline"
          className="flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Button>
      </div>

      {/* Teachers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {linkedTeachers.map(teacher => (
          <Card key={teacher.id} className="shadow-md border-slate-100 hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-lg font-bold text-slate-900">{teacher.name.split(' (')[0]}</CardTitle>
                  <p className="text-sm text-slate-600">{teacher.subject}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Role:</span>
                  <span className="font-medium text-slate-900">
                    {teacher.name.includes('(Subject Teacher)') ? 'Subject Teacher' : 'Class Teacher'}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Subject:</span>
                  <span className="font-medium text-slate-900">{teacher.subject}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Summary */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-6">
          <div className="text-center">
            <h3 className="text-lg font-bold text-blue-900 mb-2">Teacher Support</h3>
            <p className="text-blue-700">
              You have {linkedTeachers.length} teachers assigned to support your academic journey.
              Feel free to reach out to any of them for assistance with your studies.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Teachers;