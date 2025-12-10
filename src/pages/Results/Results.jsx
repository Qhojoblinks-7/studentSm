import React from 'react';
import { 
  Printer, TrendingUp, BookOpen, User 
} from 'lucide-react';

// Shadcn Components
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { academicResults } from '@/lib/mockData'; // Ensure you have this mock data

// --- Sub-Component: Collapsed Result Card ---
const CollapsedResultCard = ({ academicYear, academicTerm }) => (
    <Card className="shadow-md border-slate-100">
        <CardContent className="p-4">
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                        Academic Year: {academicYear}
                    </h3>
                    <p className="text-sm text-slate-600">
                        Term: {academicTerm}
                    </p>
                </div>
                <Button variant="outline" className="text-blue-600 border-blue-200 hover:bg-blue-50">
                    View Details
                </Button>
            </div>
        </CardContent>
    </Card>
);

// --- Main Component: Results ---
const Results = () => {
  return (
    <div className="p-0 space-y-8">
      
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Student Dashboard / Results</h1>
            <p className="text-md text-slate-600 mt-1">
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
      
      {/* Academic Result Card */}
      <Card className="shadow-lg border-slate-100 p-0">
        <CardHeader className="flex flex-row items-center justify-between p-4 bg-blue-50/50">
          <div className="flex items-center space-x-6">
            <CardTitle className="text-xl font-bold text-slate-900 flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
              Academic Result
            </CardTitle>
            <span className="text-sm text-slate-600">
                Academic Year : **{academicResults.academicYear}**
            </span>
            <span className="text-sm text-slate-600">
                Academic Term : **{academicResults.academicTerm}**
            </span>
          </div>
          <Button variant="outline" className="text-blue-600 border-blue-200 hover:bg-blue-50">
            <Printer className="w-4 h-4 mr-2" />
            Print Result
          </Button>
        </CardHeader>
        
        <CardContent className="p-0 overflow-x-auto">
          <Table className="min-w-[1000px]">
            <TableHeader>
              <TableRow className="bg-blue-600 hover:bg-blue-600 text-white">
                <TableHead className="text-white text-sm">Subject code</TableHead>
                <TableHead className="text-white text-sm">Subject</TableHead>
                <TableHead className="text-white text-sm text-center">Class Score (50)</TableHead>
                <TableHead className="text-white text-sm text-center">Exam Score (50)</TableHead>
                <TableHead className="text-white text-sm text-center">Total Marks (100)</TableHead>
                <TableHead className="text-white text-sm text-center">Grade</TableHead>
                <TableHead className="text-white text-sm text-center">Position</TableHead>
                <TableHead className="text-white text-sm">Remarks</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {academicResults.data.map((item, index) => (
                <TableRow key={index} className="hover:bg-slate-50">
                  <TableCell className="text-sm">{item.code}</TableCell>
                  <TableCell className="text-sm font-medium text-slate-800">{item.subject}</TableCell>
                  <TableCell className="text-center">{item.classScore}</TableCell>
                  <TableCell className="text-center">{item.examScore}</TableCell>
                  <TableCell className="text-center font-bold">{item.total}</TableCell>
                  <TableCell className={`text-center font-bold ${item.grade === 'A' ? 'text-green-600' : item.grade === 'D' ? 'text-red-600' : 'text-yellow-600'}`}>
                    {item.grade}
                  </TableCell>
                  <TableCell className="text-center font-semibold">{item.position}</TableCell>
                  <TableCell className="text-sm text-slate-600">{item.remarks}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        
        {/* Footer/Signature Section - Mimicking the layout */}
        <div className="p-6 grid grid-cols-3 gap-12 text-sm">
            {/* Row 1: Key Info */}
            <div className="space-y-4">
                <p className="font-semibold text-slate-700 border-b border-slate-300 pb-1">Attendance:</p>
                <p className="text-slate-600">
                    <span className="font-bold">{academicResults.attendance.total}</span> out of <span className="font-bold">{academicResults.attendance.outOf}</span>
                </p>
            </div>
            <div className="space-y-4">
                <p className="font-semibold text-slate-700 border-b border-slate-300 pb-1">Conduct:</p>
                <p className="text-slate-600">{academicResults.conduct}</p>
            </div>
            <div className="space-y-4">
                <p className="font-semibold text-slate-700 border-b border-slate-300 pb-1">Talent and Interest:</p>
                <p className="text-slate-600">{academicResults.talentInterest}</p>
            </div>

            {/* Row 2: Teacher Remarks */}
            <div className="col-span-3 pt-6">
                <p className="font-semibold text-slate-700">Class Teacher's Remarks:</p>
                <p className="text-slate-600 border-b border-slate-300 pb-2">{academicResults.classTeacherRemarks}</p>
            </div>

            {/* Row 3: Signature Lines */}
            <div className="pt-8 flex flex-col items-start">
                <div className="w-4/5 border-b border-dashed border-slate-400 h-6"></div>
                <p className="text-xs text-slate-500 mt-1">Head Teacher's Signature</p>
            </div>
            <div className="pt-8 flex flex-col items-center">
                <div className="w-4/5 border-b border-dashed border-slate-400 h-6"></div>
                <p className="text-xs text-slate-500 mt-1">Class Teacher's Signature</p>
            </div>
        </div>
      </Card>
      
      {/* 2. Historical Result Cards (Collapsed View) */}
      <CollapsedResultCard academicYear="2023/2024" academicTerm="1" />
      <CollapsedResultCard academicYear="2022/2023" academicTerm="3" />
      {/* Pagination placeholder */}
      <div className="flex justify-end items-center text-sm text-slate-500 pt-4">
        {/* Actual pagination component would go here */}
      </div>

    </div>
  );
};

export default Results;