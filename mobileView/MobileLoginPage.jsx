import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import {
  User, Lock, Zap, Briefcase, TrendingUp, Compass
} from 'lucide-react';

// Shadcn Components
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription } from '@/components/ui/alert';

// Auth actions
import { loginUser, registerUser, clearError } from '@/store/authSlice';

// Mock list of roles updated to match the visual
const userRoles = [
  'Headmaster', 'Teacher', 'Accountant', 'Store Keeper',
  'Bus Manager', 'Administrator', 'PTA Chairman', 'Student', 'Proprietor'
];

const MobileLoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, isAuthenticated } = useSelector(state => state.auth);

  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  React.useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      dispatch(loginUser(username, password, role));
    } else {
      dispatch(registerUser(username, password, role));
    }
  };

  const handleQuickAccess = (selectedRole) => {
    // For demo, create a user if not exists and login
    const demoUsername = `${selectedRole.toLowerCase()}demo`;
    const demoPassword = 'demo123';

    // Try to register first (if not exists), then login
    dispatch(registerUser(demoUsername, demoPassword, selectedRole));
  };

  return (
    // Main container with mobile-optimized layout
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4 md:hidden">

      {/* Top Logo */}
      <div className="flex flex-col items-center mb-6">
        <p className="text-xl font-extrabold text-slate-900 tracking-tight">AltBit Softwares</p>
      </div>

      {/* Welcome Message */}
      <h1 className="text-base text-slate-700 font-semibold mb-6 text-center px-2">
        Welcome back, Please Sign-in to continue
      </h1>

      {/* System Branding - Compact */}
      <div className="mb-6">
        <div className="flex items-center space-x-3 mb-3">
          <span className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
            <Briefcase className="w-4 h-4" />
          </span>
          <div>
            <p className="text-lg font-extrabold text-slate-900">EduManage System</p>
            <p className="text-xs text-slate-600">Basic School Management System</p>
          </div>
        </div>

        <p className="text-sm text-slate-600 mb-4">
          Comprehensive platform with AI-powered predictions for academic performance, financial forecasting, and logistics optimization.
        </p>

        {/* Feature List - Compact */}
        <ul className="space-y-1 text-xs text-slate-700 mb-4">
          <li className="flex items-center"><Zap className="w-3 h-3 mr-2 text-blue-500" /> Academic Management & AI-Powered Predictions</li>
          <li className="flex items-center"><TrendingUp className="w-3 h-3 mr-2 text-blue-500" /> Financial Planning & Smart Forecasting</li>
          <li className="flex items-center"><Lock className="w-3 h-3 mr-2 text-blue-500" /> Inventory & Supply Chain Optimization</li>
          <li className="flex items-center"><Compass className="w-3 h-3 mr-2 text-blue-500" /> Real-time Transportation & Route Planning</li>
        </ul>

        {/* Feature Badges - 2x2 Grid */}
        <div className="grid grid-cols-2 gap-2">
          <Card className="p-3 text-left bg-gradient-to-r from-[#E8ECFF] via-[#FFF5F5] via-[#F0FFF4] to-[#E0FFF8] border-none">
            <p className="text-lg font-bold text-blue-400">9+</p>
            <p className="text-xs font-bold text-slate-600">User Roles</p>
          </Card>
          <Card className="p-3 text-left bg-gradient-to-r from-[#E8ECFF] via-[#FFF5F5] via-[#F0FFF4] to-[#E0FFF8] border-none">
            <p className="text-sm font-bold text-blue-400">AI-Powered</p>
            <p className="text-xs font-bold text-slate-600">Predictions</p>
          </Card>
          <Card className="p-3 text-left bg-gradient-to-r from-[#E8ECFF] via-[#FFF5F5] via-[#F0FFF4] to-[#E0FFF8] border-none">
            <p className="text-sm font-bold text-blue-400">Real-time</p>
            <p className="text-xs font-bold text-slate-600">Analytics</p>
          </Card>
          <Card className="p-3 text-left bg-gradient-to-r from-[#E8ECFF] via-[#FFF5F5] via-[#F0FFF4] to-[#E0FFF8] border-none">
            <p className="text-sm font-bold text-blue-400">360°</p>
            <p className="text-xs font-bold text-slate-600">Management</p>
          </Card>
        </div>
      </div>

      {/* Auth Form */}
      <Card className="p-4 shadow-xl rounded-xl bg-gradient-to-r from-[#E8ECFF] via-[#FFF5F5] via-[#F0FFF4] to-[#E0FFF8] backdrop-blur-md border-slate-100">
        <CardHeader className="p-0 mb-4">
          <CardTitle className="text-2xl font-bold text-slate-900">
            Sign In
          </CardTitle>
          <p className="text-sm text-slate-500">
            Select your role and credentials to access the dashboard
          </p>
        </CardHeader>
        <CardContent className="p-0">
          {error && (
            <Alert className="mb-4 border-red-200 bg-red-50">
              <AlertDescription className="text-red-700 text-sm">{error}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Role Selection */}
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-1">Role</label>
              <Select onValueChange={setRole} value={role}>
                <SelectTrigger className="w-full h-12">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {userRoles.map(r => (
                    <SelectItem key={r} value={r}>{r}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Username Input */}
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-1">Username</label>
              <Input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="h-12"
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-1">Password</label>
              <Input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-12"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-slate-600 hover:bg-slate-700 text-base py-3 mt-4 h-12"
              disabled={loading}
            >
              {loading ? 'Please wait...' : 'Sign In'}
            </Button>
          </form>

          {/* Forgotten Password Link */}
          <div className="text-center mt-4">
            <Link to="/forgot-password" className="text-slate-600 hover:underline text-sm">Forgotten Password</Link>
          </div>

          {/* Quick Demo Access */}
          <div className="flex items-center my-4">
            <Separator className="flex-1 bg-slate-300" />
            <p className="text-center text-sm font-bold text-slate-400 mx-2">Quick Demo</p>
            <Separator className="flex-1 bg-slate-300" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Button
              variant="outline"
              onClick={() => handleQuickAccess('Headmaster')}
              className="py-3 rounded-lg bg-transparent backdrop-blur-sm border-slate-300 text-sm h-12"
              disabled={loading}
            >
              Headmaster
            </Button>
            <Button
              variant="outline"
              onClick={() => handleQuickAccess('Teacher')}
              className="py-3 rounded-lg bg-transparent backdrop-blur-sm border-slate-300 text-sm h-12"
              disabled={loading}
            >
              Teacher
            </Button>
            <Button
              variant="outline"
              onClick={() => handleQuickAccess('Accountant')}
              className="py-3 rounded-lg bg-transparent backdrop-blur-sm border-slate-300 text-sm h-12"
              disabled={loading}
            >
              Accountant
            </Button>
            <Button
              variant="outline"
              onClick={() => handleQuickAccess('Student')}
              className="py-3 rounded-lg bg-transparent backdrop-blur-sm border-slate-300 text-sm h-12"
              disabled={loading}
            >
              Student
            </Button>
          </div>

        </CardContent>
      </Card>

      {/* Footer */}
      <footer className="mt-6 py-4 text-center text-xs text-slate-500">
        <div className="flex flex-wrap justify-center gap-3 mb-2">
          <a href="#" className="hover:text-blue-600">policies</a>
          <a href="#" className="hover:text-blue-600">Supports</a>
          <a href="#" className="hover:text-blue-600">Help Center</a>
        </div>
        <p>Copyright © 2024–2025 AltBit Softwares. All rights reserved.</p>
        <p>EduManageAI School Management System V5.00 Release 1.0</p>
      </footer>
    </div>
  );
};

export default MobileLoginPage;