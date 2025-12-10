import React from 'react';
import { 
  User, Lock, Zap, Briefcase, TrendingUp, Compass 
} from 'lucide-react';

// Shadcn Components
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';

// Mock list of roles updated to match the visual
const userRoles = [
  'Headmaster', 'Teacher', 'Accountant', 'Store Keeper', 
  'Bus Manager', 'Administrator', 'PTA Chairman', 'Student', 'Proprietor'
];

const LoginPage = () => {
  const [role, setRole] = React.useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Logic to handle actual login based on username, password, and selected role
    console.log(`Attempting login for role: ${role}`);
    // Example: Navigate to the respective dashboard
  };

  const handleQuickAccess = (selectedRole) => {
    // Logic for quick demo access (pre-fills credentials or logs in directly)
    console.log(`Quick demo access selected for: ${selectedRole}`);
    // Example: Navigate to the respective dashboard
  };

  return (
    // Main container with the background gradient matching the visual
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6">
      
      {/* Top Logo */}
      <div className="absolute top-10 flex flex-col items-center">
        <p className="text-2xl font-extrabold text-slate-900 tracking-tight">AltBit Softwares</p>
      </div>
      
      {/* Welcome Message */}
      <h1 className="text-xl text-slate-700 font-semibold mb-10 mt-10">
        Welcome back, Please Sign-in to continue
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl w-full">
        
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
            <Card className="p-4 text-center bg-white/70 border-blue-200 border">
              <p className="text-2xl font-bold text-blue-700">9+</p>
              <p className="text-sm text-slate-600">User Roles</p>
            </Card>
            <Card className="p-4 text-center bg-white/70 border-green-200 border">
              <p className="text-2xl font-bold text-green-700">AI-Powered</p>
              <p className="text-sm text-slate-600">Predictions</p>
            </Card>
            <Card className="p-4 text-center bg-white/70 border-purple-200 border">
              <p className="text-2xl font-bold text-purple-700">Real-time</p>
              <p className="text-sm text-slate-600">Analytics</p>
            </Card>
            <Card className="p-4 text-center bg-white/70 border-orange-200 border">
              <p className="text-2xl font-bold text-orange-700">360°</p>
              <p className="text-sm text-slate-600">Management</p>
            </Card>
          </div>
        </div>

        {/* === Right Side: Sign In Form === */}
        <Card className="p-8 shadow-2xl rounded-xl bg-white/80 backdrop-blur-md border-slate-100">
          <CardHeader className="p-0 mb-6">
            <CardTitle className="text-3xl font-bold text-slate-900">Sign In</CardTitle>
            <p className="text-sm text-slate-500">Select your role and credentials to access the dashboard</p>
          </CardHeader>
          <CardContent className="p-0">
            <form onSubmit={handleLogin} className="space-y-5">
              
              {/* Role Selection */}
              <div>
                <label className="text-sm font-medium text-slate-700 block mb-1">Role</label>
                <Select onValueChange={setRole}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    {userRoles.map(r => (
                      // The Select dropdown now contains the updated list of roles
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
                  required 
                  className="p-3"
                />
              </div>

              <div className="flex justify-between items-center text-sm">
                <a href="#" className="text-blue-600 hover:underline">Forgotten Password</a>
              </div>

              {/* Sign In Button */}
              <Button type="submit" className="w-full bg-slate-800 hover:bg-slate-700 text-lg py-6 mt-4">
                Sign In
              </Button>
            </form>
            
            <Separator className="my-6 bg-slate-200" />

            {/* Quick Demo Access Buttons */}
            <p className="text-center text-sm text-slate-600 mb-3">Quick Demo Access</p>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" onClick={() => handleQuickAccess('Headmaster')} className="py-5">Headmaster</Button>
              <Button variant="outline" onClick={() => handleQuickAccess('Teacher')} className="py-5">Teacher</Button>
              <Button variant="outline" onClick={() => handleQuickAccess('Accountant')} className="py-5">Accountant</Button>
              <Button variant="outline" onClick={() => handleQuickAccess('Student')} className="py-5">Student</Button>
              {/* Note: The quick access buttons in the design only show four roles, matching the original implementation. */}
            </div>
            
          </CardContent>
        </Card>
      </div>
      
      {/* Footer Links and Copyright */}
      <footer className="absolute bottom-6 text-sm text-slate-500 text-center">
        <div className="flex space-x-4 mb-1">
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

export default LoginPage;