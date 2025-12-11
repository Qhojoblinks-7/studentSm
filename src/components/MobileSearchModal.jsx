import React, { useState, useEffect } from 'react';
import { Search, X, BookOpen, User, FileText, Calendar } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

// Mock search data
const searchResults = {
  courses: [
    { id: 1, title: 'Mathematics', code: 'MATH303', teacher: 'Sir Antwi Boasiako', type: 'course' },
    { id: 2, title: 'Integrated Science', code: 'SCI201', teacher: 'Ms. Helena Agyeman', type: 'course' },
    { id: 3, title: 'English Language', code: 'ENG101', teacher: 'Ms Paulina K. Barnes', type: 'course' },
  ],
  assignments: [
    { id: 1, title: 'Algebra Problem Set 1', course: 'Mathematics', dueDate: 'Dec 20', type: 'assignment' },
    { id: 2, title: 'Science Lab Report', course: 'Integrated Science', dueDate: 'Dec 18', type: 'assignment' },
  ],
  teachers: [
    { id: 1, name: 'Sir Antwi Boasiako', subject: 'Mathematics', type: 'teacher' },
    { id: 2, name: 'Ms. Helena Agyeman', subject: 'Integrated Science', type: 'teacher' },
  ],
  events: [
    { id: 1, title: 'End of Term Examination', date: 'Dec 16', type: 'event' },
    { id: 2, title: 'PTA Meeting', date: 'Dec 22', type: 'event' },
  ]
};

const MobileSearchModal = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredResults, setFilteredResults] = useState({});

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredResults({});
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = {};

    // Filter courses
    results.courses = searchResults.courses.filter(item =>
      item.title.toLowerCase().includes(query) ||
      item.code.toLowerCase().includes(query) ||
      item.teacher.toLowerCase().includes(query)
    );

    // Filter assignments
    results.assignments = searchResults.assignments.filter(item =>
      item.title.toLowerCase().includes(query) ||
      item.course.toLowerCase().includes(query)
    );

    // Filter teachers
    results.teachers = searchResults.teachers.filter(item =>
      item.name.toLowerCase().includes(query) ||
      item.subject.toLowerCase().includes(query)
    );

    // Filter events
    results.events = searchResults.events.filter(item =>
      item.title.toLowerCase().includes(query)
    );

    setFilteredResults(results);
  }, [searchQuery]);

  const getIcon = (type) => {
    switch (type) {
      case 'course':
        return <BookOpen className="w-4 h-4 text-blue-500" />;
      case 'assignment':
        return <FileText className="w-4 h-4 text-orange-500" />;
      case 'teacher':
        return <User className="w-4 h-4 text-green-500" />;
      case 'event':
        return <Calendar className="w-4 h-4 text-purple-500" />;
      default:
        return <Search className="w-4 h-4 text-gray-500" />;
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'course':
        return 'Course';
      case 'assignment':
        return 'Assignment';
      case 'teacher':
        return 'Teacher';
      case 'event':
        return 'Event';
      default:
        return 'Result';
    }
  };

  const renderResults = () => {
    const allResults = [];
    const types = activeFilter === 'all' ? ['courses', 'assignments', 'teachers', 'events'] : [activeFilter];

    types.forEach(type => {
      if (filteredResults[type] && filteredResults[type].length > 0) {
        filteredResults[type].forEach(item => {
          allResults.push({ ...item, resultType: type });
        });
      }
    });

    if (allResults.length === 0 && searchQuery.trim() !== '') {
      return (
        <div className="text-center py-8">
          <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">No results found for "{searchQuery}"</p>
          <p className="text-sm text-gray-400 mt-1">Try searching for courses, assignments, teachers, or events</p>
        </div>
      );
    }

    return (
      <div className="space-y-3">
        {allResults.map((item, index) => (
          <Card key={`${item.resultType}-${item.id}`} className="shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  {getIcon(item.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-slate-900 truncate">
                      {item.title || item.name}
                    </h4>
                    <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                      {getTypeLabel(item.type)}
                    </span>
                  </div>
                  <div className="mt-1 space-y-1">
                    {item.code && (
                      <p className="text-xs text-slate-600">Code: {item.code}</p>
                    )}
                    {item.teacher && (
                      <p className="text-xs text-slate-600">Teacher: {item.teacher}</p>
                    )}
                    {item.subject && (
                      <p className="text-xs text-slate-600">Subject: {item.subject}</p>
                    )}
                    {item.course && (
                      <p className="text-xs text-slate-600">Course: {item.course}</p>
                    )}
                    {item.dueDate && (
                      <p className="text-xs text-slate-600">Due: {item.dueDate}</p>
                    )}
                    {item.date && (
                      <p className="text-xs text-slate-600">Date: {item.date}</p>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden">
      <div className="bg-white h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900">Search</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="p-2"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Search Input */}
        <div className="p-4 border-b border-slate-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search courses, assignments, teachers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-3 text-base"
              autoFocus
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex border-b border-slate-200 px-4">
          {[
            { key: 'all', label: 'All' },
            { key: 'courses', label: 'Courses' },
            { key: 'assignments', label: 'Assignments' },
            { key: 'teachers', label: 'Teachers' },
            { key: 'events', label: 'Events' }
          ].map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeFilter === filter.key
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-slate-500 hover:text-slate-700'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Results */}
        <div className="flex-1 overflow-y-auto p-4">
          {searchQuery.trim() === '' ? (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-slate-900 mb-2">Search EduManage</h3>
              <p className="text-slate-500">Find courses, assignments, teachers, and events</p>
            </div>
          ) : (
            renderResults()
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileSearchModal;