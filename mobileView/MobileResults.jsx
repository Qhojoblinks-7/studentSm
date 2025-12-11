import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setShowDownloadModal } from '../src/store/resultsSlice';
import { BookOpen, Printer } from 'lucide-react';

// Shadcn Components
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

// Custom Components
import DownloadNoticeModal from '../src/components/DownloadNoticeModal';

// Mock data
import { academicResults, historicalAcademicResults } from '@/lib/mockData';

const allResults = [academicResults, ...historicalAcademicResults];

// --- Main Component: MobileResults ---
const MobileResults = () => {
  const dispatch = useDispatch();
  const showDownloadModal = useSelector((state) => state.results.showDownloadModal);

  const handleDownload = () => {
    console.log('Downloading results...');
    dispatch(setShowDownloadModal(false));
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
            <BreadcrumbPage className="font-bold text-base">Results</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <p className="text-sm text-slate-600 mt-1">
        Student Academic Performance Results
      </p>

      <Separator className="bg-slate-200" />

      {/* Academic Result Cards (Accordion View) */}
      <Accordion type="single" collapsible className="w-full">
        {allResults.map((result, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-lg font-semibold text-slate-800">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <span>Academic Year {result.academicYear} - Term {result.academicTerm}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {result.data.map((res, idx) => (
                  <Card key={idx} className="shadow-sm border-slate-200">
                    <CardContent className="p-4">
                      <div className="space-y-2 text-sm">
                        <div><strong>Subject Code:</strong> {res.code}</div>
                        <div><strong>Subject:</strong> {res.subject}</div>
                        <div><strong>Class Score:</strong> {res.classScore}/50</div>
                        <div><strong>Exam Score:</strong> {res.examScore}/50</div>
                        <div><strong>Total:</strong> {res.total}/100</div>
                        <div><strong>Grade:</strong> <span className={`font-bold ${res.grade === 'A' ? 'text-green-600' : res.grade === 'D' ? 'text-red-600' : 'text-yellow-600'}`}>{res.grade}</span></div>
                        <div><strong>Position:</strong> {res.position}</div>
                        <div><strong>Remarks:</strong> {res.remarks}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              {/* Footer Info */}
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <div className="space-y-2 text-sm">
                  <div><strong>Attendance:</strong> {result.attendance.total}/{result.attendance.outOf}</div>
                  <div><strong>Conduct:</strong> {result.conduct}</div>
                  <div><strong>Talent and Interest:</strong> {result.talentInterest}</div>
                  <div><strong>Class Teacher's Remarks:</strong> {result.classTeacherRemarks}</div>
                  <div><strong>Head Teacher's Remarks:</strong> {result.headTeacherRemarks}</div>
                </div>
              </div>
              {index === 0 && (
                <div className="mt-4 flex justify-center">
                  <Button
                    variant="outline"
                    className="text-blue-600 border-blue-200 hover:bg-blue-50"
                    onClick={() => dispatch(setShowDownloadModal(true))}
                  >
                    <Printer className="w-4 h-4 mr-2" />
                    Print Result
                  </Button>
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Download Notice Modal */}
      <DownloadNoticeModal
        isOpen={showDownloadModal}
        onClose={() => dispatch(setShowDownloadModal(false))}
        onDownload={handleDownload}
      />
    </div>
  );
};

export default MobileResults;
