import React, { useState } from 'react';
import { Bell, MoreHorizontal, Calendar, Clock, Eye, Edit, Trash2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import iconImage from '../../../assets/Festive_day.svg';

// Mock scheduled posts data for the dashboard
const scheduledPosts = [
  {
    id: 1,
    title: 'End of Term Examination Notice',
    content: 'The end of term examination will commence on Monday, December 16th, 2024.',
    scheduledDate: 'Dec 15',
    scheduledTime: '08:00 AM',
    status: 'scheduled'
  },
  {
    id: 2,
    title: 'School Fees Payment Reminder',
    content: 'School fees for the second term are due by December 20th, 2024.',
    scheduledDate: 'Dec 18',
    scheduledTime: '09:00 AM',
    status: 'scheduled'
  },
  {
    id: 3,
    title: 'PTA Meeting Announcement',
    content: 'PTA meeting scheduled for December 22nd, 2024 at 4:00 PM.',
    scheduledDate: 'Dec 20',
    scheduledTime: '02:00 PM',
    status: 'draft'
  }
];

const PostsForNotice = ({ posts }) => {
  const [activeTab, setActiveTab] = useState('latest');

  const handleViewPost = (postId) => {
    console.log('View post:', postId);
    // Implement view post functionality
  };

  const handleEditPost = (postId) => {
    console.log('Edit post:', postId);
    // Implement edit post functionality
  };

  const handleDeletePost = (postId) => {
    console.log('Delete post:', postId);
    // Implement delete post functionality
  };

  const renderLatestPosts = () => (
    <div className="space-y-4 mr-1">
      {posts.map(post => (
        <div key={post.id} className="flex items-start">
          <div className="flex items-center min-w-[40px] pt-1 transform -rotate-90">
            <span className="text-xs font-bold -ml-2 mr-2 whitespace-nowrap text-blue-600">
              {post.date}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <img src={iconImage} alt="Icon" className="w-15 h-15" />
            <div className="flex-1 border-l-2 pl-2 border-blue-100">
              <p className="text-sm font-semibold text-slate-800">{post.title}</p>
              <p className="text-xs text-slate-600 mt-1">{post.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderScheduledPosts = () => (
    <div className="space-y-4 mr-1">
      {scheduledPosts.slice(0, 3).map(post => (
        <div key={post.id} className="flex items-start">
          <div className="flex items-center min-w-[40px] pt-1 transform -rotate-90">
            <span className="text-xs font-bold -ml-2 mr-2 whitespace-nowrap text-blue-600">
              {post.scheduledDate}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <img src={iconImage} alt="Icon" className="w-15 h-15" />
            <div className="flex-1 border-l-2 pl-2 border-blue-100">
              <p className="text-sm font-semibold text-slate-800">{post.title}</p>
              <p className="text-xs text-slate-600 mt-1">{post.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <Card className="col-span-4 shadow-md border-slate-100">
      <CardHeader className="pb-2">
        <CardTitle className="text-md font-semibold text-slate-900 flex items-center">
          <Bell className="w-5 h-5 mr-2 text-blue-500" /> Posts for Notice
        </CardTitle>
        <p className="text-xs text-slate-500">Overview of published and scheduled events in school</p>
      </CardHeader>
      <CardContent className="p-3">
        {/* Tabbed Interface */}
        <div className="flex justify-between items-center border-b mb-4">
          <div className="flex space-x-4">
            <Button
              variant="link"
              className={`p-0 text-xs rounded-none h-auto font-semibold ${
                activeTab === 'latest'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-slate-500 hover:text-blue-600'
              }`}
              onClick={() => setActiveTab('latest')}
            >
              Latest posts
            </Button>
            <Button
              variant="link"
              className={`p-0 text-xs rounded-none h-auto font-semibold ${
                activeTab === 'scheduled'
                  ? 'text-orange-600 border-b-2 border-orange-600'
                  : 'text-slate-500 hover:text-orange-600'
              }`}
              onClick={() => setActiveTab('scheduled')}
            >
              Scheduled posts
            </Button>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                <MoreHorizontal className="w-4 h-4 text-slate-500" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem onClick={() => console.log('View all posts')}>
                <Eye className="w-4 h-4 mr-2" />
                View All Posts
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => console.log('Create new post')}>
                <Edit className="w-4 h-4 mr-2" />
                Create New Post
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => console.log('Manage categories')}>
                <Bell className="w-4 h-4 mr-2" />
                Manage Categories
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Content based on active tab */}
        {activeTab === 'latest' ? renderLatestPosts() : renderScheduledPosts()}
      </CardContent>
    </Card>
  );
};

export default PostsForNotice;