import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bell, Calendar, User } from 'lucide-react';

const PostsForNotice = ({ posts }) => {
  return (
    <Card className="col-span-8 shadow-lg border-slate-100">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold text-slate-900 flex items-center">
          <Bell className="w-6 h-6 mr-2 text-blue-600" />
          Notice Board
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge variant="outline" className="text-xs">
                      {post.title}
                    </Badge>
                    <div className="flex items-center text-xs text-slate-500">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    {post.content}
                  </p>
                </div>
              </div>

              {/* Post metadata */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                <div className="flex items-center text-xs text-slate-500">
                  <User className="w-3 h-3 mr-1" />
                  Posted by {post.title.split('@')[1] || 'Admin'}
                </div>
                <div className="text-xs text-slate-400">
                  Important
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-slate-500">
            <Bell className="w-12 h-12 mx-auto mb-4 text-slate-300" />
            <p>No notices at this time</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PostsForNotice;