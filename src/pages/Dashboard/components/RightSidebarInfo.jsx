import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ChevronDown, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const RightSidebarInfo = ({ teachers, attendance }) => {
    const navigate = useNavigate();

    const AttendanceItem = ({ day, present }) => {
        const Icon = present ? CheckCircle : CheckCircle; // Using CheckCircle for both, but color differs
        const color = present ? 'text-green-500' : 'text-red-500';
        return (
            <div className="flex justify-between items-center text-sm py-1">
                <span className="text-slate-700">{day}</span>
                <Icon className={`w-4 h-4 ${color}`} />
            </div>
        );
    };

    const handleSeeAllTeachers = () => {
        // Navigate to a teachers page or show all teachers
        navigate('/teachers');
    };

    return (
        <Card className="col-span-12 lg:col-span-4 shadow-md border-slate-100">
            <CardContent className="p-2 pt-0">

                {/* Linked Teachers */}
                <div className="pt-2">
                    <h3 className="text-lg font-bold text-slate-800 mb-3 flex justify-between items-center">
                        Linked Teachers
                        <Button
                            variant="link"
                            className="text-blue-600 h-auto p-0 text-xs"
                            onClick={handleSeeAllTeachers}
                        >
                            See all
                        </Button>
                    </h3>
                    {teachers.slice(0, 2).map(teacher => (
                        <div key={teacher.id} className="flex items-center p-3 mb-4 bg-green-50 rounded-lg border border-green-200">
                            {/* Placeholder for Teacher Avatar */}
                            <User className="w-6 h-6 text-slate-500 mr-3" />
                            <div className="flex-1">
                                <p className="text-sm font-bold text-slate-800">{teacher.name}</p>
                                <p className="text-sm text-slate-600">{teacher.subject}</p>
                            </div>
                            <ChevronDown className="w-5 h-5 text-slate-500" />
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default RightSidebarInfo;