import React, { useState } from 'react';
import { Calendar, Clock, User, MoreHorizontal, Edit, Trash2, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// Mock scheduled posts data
const scheduledPostsData = [
  {
    id: 1,
    title: 'End of Term Examination Notice',
    content: 'The end of term examination will commence on Monday, December 16th, 2024. All students are required to be present.',
    scheduledDate: '2024-12-15',
    scheduledTime: '08:00 AM',
    author: 'Headmaster',
    status: 'scheduled',
    targetAudience: 'All Students'
  },
  {
    id: 2,
    title: 'School Fees Payment Reminder',
    content: 'This is a reminder that school fees for the second term are due by December 20th, 2024.',
    scheduledDate: '2024-12-18',
    scheduledTime: '09:00 AM',
    author: 'Accountant',
    status: 'scheduled',
    targetAudience: 'Parents & Students'
  },
  {
    id: 3,
    title: 'PTA Meeting Announcement',
    content: 'The Parent-Teacher Association meeting is scheduled for December 22nd, 2024 at 4:00 PM.',
    scheduledDate: '2024-12-20',
    scheduledTime: '02:00 PM',
    author: 'PTA Chairman',
    status: 'draft',
    targetAudience: 'Parents'
  },
  {
    id: 4,
    title: 'Holiday Break Notice',
    content: 'School will be closed for the Christmas holiday from December 23rd to January 5th, 2025.',
    scheduledDate: '2024-12-22',
    scheduledTime: '10:00 AM',
    author: 'Administrator',
    status: 'scheduled',
    targetAudience: 'All Students & Staff'
  }
];

const ScheduledPosts = () => {
  const [posts, setPosts] = useState(scheduledPostsData);

  const getStatusColor = (status) => {
    switch (status) {
      case 'scheduled':
        return 'bg-blue-100 text-blue-800';
      case 'draft':
        return 'bg-gray-100 text-gray-800';
      case 'sent':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleEditPost = (postId) => {
    console.log('Edit post:', postId);
    // Implement edit functionality
  };

  const handleDeletePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  const handleSendNow = (postId) => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, status: 'sent' } : post
    ));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-900">Scheduled Posts</h2>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Calendar className="w-4 h-4 mr-2" />
          Schedule New Post
        </Button>
      </div>

      <div className="grid gap-4">
        {posts.map((post) => (
          <Card key={post.id} className="shadow-sm border-slate-200 hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-lg font-semibold text-slate-900">
                      {post.title}
                    </CardTitle>
                    <Badge className={getStatusColor(post.status)}>
                      {post.status.charAt(0).toUpperCase() + post.status.slice(1)}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.scheduledDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.scheduledTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleEditPost(post.id)}>
                      <Edit className="w-4 h-4 mr-2" />
                      Edit
                    </DropdownMenuItem>
                    {post.status === 'scheduled' && (
                      <DropdownMenuItem onClick={() => handleSendNow(post.id)}>
                        <Send className="w-4 h-4 mr-2" />
                        Send Now
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuItem
                      onClick={() => handleDeletePost(post.id)}
                      className="text-red-600"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              <p className="text-slate-700 mb-3 line-clamp-2">{post.content}</p>

              <div className="flex items-center justify-between">
                <div className="text-sm text-slate-600">
                  <span className="font-medium">Target:</span> {post.targetAudience}
                </div>

                <div className="flex gap-2">
                  {post.status === 'scheduled' && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleSendNow(post.id)}
                      className="text-blue-600 border-blue-200 hover:bg-blue-50"
                    >
                      <Send className="w-3 h-3 mr-1" />
                      Send Now
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEditPost(post.id)}
                  >
                    <Edit className="w-3 h-3 mr-1" />
                    Edit
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {posts.length === 0 && (
        <Card className="p-8 text-center">
          <Calendar className="w-12 h-12 text-slate-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-slate-900 mb-2">No Scheduled Posts</h3>
          <p className="text-slate-600 mb-4">You haven't scheduled any posts yet.</p>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule Your First Post
          </Button>
        </Card>
      )}
    </div>
  );
};

export default ScheduledPosts;