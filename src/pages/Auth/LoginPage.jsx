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
import { loginUser, registerUser, clearError } from '../../store/authSlice';

// Mock list of roles updated to match the visual
const userRoles = [
  'Headmaster', 'Teacher', 'Accountant', 'Store Keeper', 
  'Bus Manager', 'Administrator', 'PTA Chairman', 'Student', 'Proprietor'
];

const LoginPage = () => {
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
    // Main container with the background gradient matching the visual
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6">
      
      {/* Top Logo */}
      <div className="absolute top-6 sm:top-10 flex flex-col items-center">
        <p className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">AltBit Softwares</p>
      </div>
      
      {/* Welcome Message */}
      <h1 className="text-lg sm:text-xl text-slate-700 font-semibold mb-8 sm:mb-10 mt-8 sm:mt-10 text-center px-4">
        Welcome back, Please Sign-in to continue
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 max-w-6xl w-full px-4">

        {/* === Left Side: System Features & Branding === */}
        <div className="flex flex-col justify-center space-y-6 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <span className="h-10 w-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                <Briefcase className="w-6 h-6" />
            </span>
            <div>
              <p className="text-2xl font-extrabold text-slate-900">EduManage System</p>
              <p className="text-sm text-slate-600">Basic School Management System</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-800">Intelligent School Management System</h2>
          <p className="text-sm text-slate-600 max-w-md">
            Comprehensive platform with AI-powered predictions for academic performance, financial forecasting, and logistics optimization.
          </p>

          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-center"><Zap className="w-4 h-4 mr-2 text-blue-500" /> Academic Management & AI-Powered Predictions</li>
            <li className="flex items-center"><TrendingUp className="w-4 h-4 mr-2 text-blue-500" /> Financial Planning & Smart Forecasting</li>
            <li className="flex items-center"><Lock className="w-4 h-4 mr-2 text-blue-500" /> Inventory & Supply Chain Optimization</li>
            <li className="flex items-center"><Compass className="w-4 h-4 mr-2 text-blue-500" /> Real-time Transportation & Route Planning</li>
          </ul>

          {/* Feature Badges matching the design */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <Card className="p-4 text-left bg-gradient-to-r from-[#E8ECFF] via-[#FFF5F5] via-[#F0FFF4] to-[#E0FFF8] border-none">
              <p className="text-2xl font-bold text-blue-400">9+</p>
              <p className="text-sm font-bold text-slate-600">User Roles</p>
            </Card>
            <Card className="p-4 text-left bg-gradient-to-r from-[#E8ECFF] via-[#FFF5F5] via-[#F0FFF4] to-[#E0FFF8] border-none">
              <p className="text-2xl font-bold text-blue-400">AI-Powered</p>
              <p className="text-sm font-bold text-slate-600">Predictions</p>
            </Card>
            <Card className="p-4 text-left bg-gradient-to-r from-[#E8ECFF] via-[#FFF5F5] via-[#F0FFF4] to-[#E0FFF8] border-none">
              <p className="text-2xl font-bold text-blue-400">Real-time</p>
              <p className="text-sm font-bold text-slate-600">Analytics</p>
            </Card>
            <Card className="p-4 text-left bg-gradient-to-r from-[#E8ECFF] via-[#FFF5F5] via-[#F0FFF4] to-[#E0FFF8] border-none">
              <p className="text-2xl font-bold text-blue-400">360°</p>
              <p className="text-sm font-bold text-slate-600">Management</p>
            </Card>
          </div>
        </div>

        {/* === Right Side: Auth Form === */}
        <Card className="p-6 sm:p-8 shadow-2xl rounded-xl bg-gradient-to-r from-[#E8ECFF] via-[#FFF5F5] via-[#F0FFF4] to-[#E0FFF8] backdrop-blur-md border-slate-100">
          <CardHeader className="p-0 mb-6">
            <CardTitle className="text-3xl font-bold text-slate-900">
              Sign In
            </CardTitle>
            <p className="text-sm text-slate-500">
              Select your role and credentials to access the dashboard
            </p>
          </CardHeader>
          <CardContent className="p-0">
            {error && (
              <Alert className="mb-4 border-red-200 bg-red-50">
                <AlertDescription className="text-red-700">{error}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Role Selection */}
              <div>
                <label className="text-sm font-medium text-slate-700 block mb-1">Role</label>
                <Select onValueChange={setRole} value={role}>
                  <SelectTrigger className="w-ful">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent  className="bg-white">
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
                  className="p-3"
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
                  className="p-3"
                />
              </div>


              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-slate-600 hover:bg-slate-700 text-lg py-6 mt-4"
                disabled={loading}
              >
                {loading ? 'Please wait...' : 'Sign In'}
              </Button>
            </form>

            {/* Forgotten Password Link */}
            <div className="text-center mt-4">
              <Link to="/forgot-password" className="text-slate-600 hover:underline text-sm">Forgotten Password</Link>
            </div>

            {/* Quick Demo Access Header with Dividers */}
            <div className="flex items-center my-6">
              <Separator className="flex-1 bg-slate-300" />
              <p className="text-center text-lg font-bold text-slate-400 mx-4">Quick Demo Access</p>
              <Separator className="flex-1 bg-slate-300" />
            </div>
            <div className="grid grid-cols-2 gap-3">
               <Button
                 variant="outline"
                 onClick={() => handleQuickAccess('Headmaster')}
                 className="py-5 rounded-lg bg-transparent backdrop-blur-sm border-slate-300"
                 disabled={loading}
               >
                 Headmaster
               </Button>
               <Button
                 variant="outline"
                 onClick={() => handleQuickAccess('Teacher')}
                 className="py-5 rounded-lg bg-transparent backdrop-blur-sm border-slate-300"
                 disabled={loading}
               >
                 Teacher
               </Button>
               <Button
                 variant="outline"
                 onClick={() => handleQuickAccess('Accountant')}
                 className="py-5 rounded-lg bg-transparent backdrop-blur-sm border-slate-300"
                 disabled={loading}
               >
                 Accountant
               </Button>
               <Button
                 variant="outline"
                 onClick={() => handleQuickAccess('Student')}
                 className="py-5 rounded-lg bg-transparent backdrop-blur-sm border-slate-300"
                 disabled={loading}
               >
                 Student
               </Button>
              {/* Note: The quick access buttons in the design only show four roles, matching the original implementation. */}
            </div>
            
          </CardContent>
        </Card>
      </div>
      
      {/* Footer Links and Copyright */}
      <footer className="mt-8 sm:mt-10 py-4 sm:py-6 text-center text-xs text-slate-500 px-4">
        <div className="flex flex-wrap justify-center gap-4 mb-2">
          <a href="#" className="hover:text-blue-600 text-center">policies</a>
          <a href="#" className="hover:text-blue-600 text-center">Supports</a>
          <a href="#" className="hover:text-blue-600 text-center">Help Center</a>
        </div>
        <p className="text-center">Copyright © 2024–2025 AltBit Softwares. All rights reserved.</p>
        <p className="text-center">EduManageAI School Management System V5.00 Release 1.0</p>
      </footer>
    </div>
  );
};

export default LoginPage;