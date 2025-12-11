import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setShowDownloadModal } from '../../store/resultsSlice';
import {
  Printer, BookOpen, ChevronDown, List, ChevronLeft, ChevronRight
} from 'lucide-react';

// Shadcn Components
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

// Custom Components
import DownloadNoticeModal from '@/components/DownloadNoticeModal';
import ResultField from './components/ResultField';

// Mock data (assuming the updated mock data is available)
import { academicResults, historicalAcademicResults } from '@/lib/mockData';

const allResults = [academicResults, ...historicalAcademicResults];


// --- Main Component: Results ---
const Results = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const showDownloadModal = useSelector((state) => state.results.showDownloadModal);

  const handleDownload = () => {
    // Handle the actual download logic here
    console.log('Downloading results...');
    // You can add actual download functionality here
    // For example: window.open('/api/download-results', '_blank');
    dispatch(setShowDownloadModal(false));
  };

  return (
    <div className="p-0 space-y-8">
      
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
            <Breadcrumb>
              <BreadcrumbList className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
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
                  <BreadcrumbPage className="font-bold text-base">Results</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <p className="text-sm sm:text-md lg:text-lg text-slate-600 mt-1">
              Student Academic Performance Results
            </p>
        </div>
        <div className="flex space-x-2">
            <Tabs defaultValue="current-term">
              <TabsList className="grid grid-cols-3">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="current-term">Current Term</TabsTrigger>
                <TabsTrigger value="current-year">Current Year</TabsTrigger>
              </TabsList>
            </Tabs>
        </div>
      </div>

      <Separator className="bg-slate-200" />

      {/* Academic Result Cards (Accordion View) */}
      <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
        {allResults.map((result, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center justify-between w-full p-3 sm:p-4 lg:p-6 shadow-sm border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6">
                  <div className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 flex items-center">
                    <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-blue-600" />
                    Academic Result
                  </div>
                  <span className="text-xs sm:text-sm lg:text-base text-slate-500">
                    Academic Year : {result.academicYear} | Academic Term : {result.academicTerm}
                  </span>
                </div>
                {index === 0 && (
                  <Button
                    variant="outline"
                    className="text-blue-600 border-blue-200 hover:bg-blue-50 text-xs sm:text-sm lg:text-base"
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(setShowDownloadModal(true));
                    }}
                  >
                    <Printer className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    Print Result
                  </Button>
                )}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <Card className="mt-2 shadow-lg border-slate-100 p-0">
                <CardContent className="p-4">
                  {/* Header Row */}
                  <Card className="mb-2 rounded-lg shadow-sm border-slate-200 bg-blue-600">
                    <CardContent className="p-2 sm:p-4">
                      <div className="flex justify-between items-center gap-1 sm:gap-2">
                        <div className="text-xs sm:text-sm lg:text-base font-bold text-white px-2 sm:px-3 py-1 sm:py-2 rounded-md text-center flex-shrink-0">
                          Subject Code
                        </div>
                        <div className="flex gap-1 sm:gap-2 flex-1 justify-end">
                          <div className="text-xs sm:text-sm lg:text-base font-bold text-white text-center flex-1">
                            Subject
                          </div>
                          <div className="text-xs sm:text-sm lg:text-base font-bold text-white text-center flex-1">
                            Class Score (50)
                          </div>
                          <div className="text-xs sm:text-sm lg:text-base font-bold text-white text-center flex-1">
                            Exam Score (50)
                          </div>
                          <div className="text-xs sm:text-sm lg:text-base font-bold text-white text-center flex-1">
                            Total Marks (100)
                          </div>
                          <div className="text-xs sm:text-sm lg:text-base font-bold text-white text-center flex-1">
                            Grade
                          </div>
                          <div className="text-xs sm:text-sm lg:text-base font-bold text-white text-center flex-1">
                            Position
                          </div>
                          <div className="text-xs sm:text-sm lg:text-base font-bold text-white text-center flex-1">
                            Remarks
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Result Row Cards */}
                  <div className="space-y-1">
                    {result.data.map((res, idx) => (
                      <Card key={idx} className={`mb-1 rounded-lg shadow-sm border-slate-200 ${idx % 2 === 1 ? 'bg-blue-50' : ''}`}>
                        <CardContent className="p-2 sm:p-4">
                          <div className="flex justify-between items-center gap-1 sm:gap-2">
                            {/* Subject Code */}
                            <div className="text-xs sm:text-sm lg:text-base font-semibold text-slate-900 px-2 sm:px-3 py-1 sm:py-2 rounded-md text-center flex-shrink-0">
                              {res.code}
                            </div>

                            {/* Data Columns */}
                            <div className="flex gap-1 sm:gap-2 flex-1 justify-end">
                              <div className="text-center flex-1">
                                <div className="w-full px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm lg:text-base font-medium text-center text-slate-700">
                                  {res.subject}
                                </div>
                              </div>
                              <div className="text-center flex-1">
                                <div className="w-full px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm lg:text-base font-medium text-center text-slate-700">
                                  {res.classScore}
                                </div>
                              </div>
                              <div className="text-center flex-1">
                                <div className="w-full px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm lg:text-base font-medium text-center text-slate-700">
                                  {res.examScore}
                                </div>
                              </div>
                              <div className="text-center flex-1">
                                <div className="w-full px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm lg:text-base font-bold text-center text-slate-700">
                                  {res.total}
                                </div>
                              </div>
                              <div className="text-center flex-1">
                                <div className={`w-full px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm lg:text-base font-bold text-center ${res.grade === 'A' ? 'text-green-600' : res.grade === 'D' ? 'text-red-600' : 'text-yellow-600'}`}>
                                  {res.grade}
                                </div>
                              </div>
                              <div className="text-center flex-1">
                                <div className="w-full px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm lg:text-base font-semibold text-center text-slate-700">
                                  {res.position}
                                </div>
                              </div>
                              <div className="text-center flex-1">
                                <div className="w-full px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm lg:text-base font-medium text-center text-slate-700">
                                  {res.remarks}
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>

                {/* Footer/Signature Section */}
                <div className="p-3 sm:p-4 lg:p-6 bg-blue-50/50 rounded-b-lg">
                  <div className="grid grid-cols-6 gap-x-3 sm:gap-x-4 lg:gap-x-6 gap-y-2 sm:gap-y-3 lg:gap-y-4 text-xs sm:text-sm lg:text-base">
                    <ResultField label="Attendance" value={`${result.attendance.total}/${result.attendance.outOf}`} />
                    <ResultField label="Out of Total Of" value={result.attendance.outOf} />
                    <div className="col-span-2"></div>
                    <ResultField label="Talent and Interest" value={result.talentInterest} large={true} />
                    <ResultField label="Conduct" value={result.conduct} />
                    <div className="col-span-2"></div>
                    <ResultField label="Class Teacher's Remarks" value={result.classTeacherRemarks} large={true} />
                    <div className="col-span-2"></div>
                    <div className="col-span-2">
                      <ResultField label="Head Teacher's Remarks" value={result.headTeacherRemarks} />
                    </div>
                    <div className="col-span-2">
                      <ResultField label="Head Teacher's Signature" value={''} />
                    </div>
                    <div className="col-span-2">
                      <ResultField label="Class Teacher's Signature" value={''} />
                    </div>
                  </div>
                </div>
              </Card>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      
      {/* Pagination (Matching Schedule.jsx) */}
      <div className="flex justify-center items-center pt-4">
        <Button variant="outline" size="icon" className="rounded-full mr-2">
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <span className="text-sm text-slate-600">Page 1 of 10</span>
        <Button variant="outline" size="icon" className="rounded-full ml-2">
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Download Notice Modal */}
      <DownloadNoticeModal
        isOpen={showDownloadModal}
        onClose={() => dispatch(setShowDownloadModal(false))}
        onDownload={handleDownload}
      />

    </div>
  );
};

export default Results;