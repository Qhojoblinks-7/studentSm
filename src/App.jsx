import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Our layout and page components
import DashboardShell from './layouts/DashboardShell';
import Dashboard from './pages/Dashboard/Dashboard';
import MyCourses from './pages/MyCourses/MyCourses';
import Teachers from './pages/Teachers';
import Assignments from './pages/Assignments/Assignments';
import Schedule from './pages/Schedule/Schedule';
import LoginPage from './pages/Auth/LoginPage';
import ForgotPassword from './pages/Auth/ForgotPassword';
import NotFound from './pages/NotFound';
import FeesAndPayments from './pages/FeesAndPayments/FeesAndPayments';
import Results from './pages/Results/Results';
import AILearningPath from './pages/AILearningPath/AILearningPath';
import Performance from './pages/Performance/Performance';
import Analytics from './pages/Analytics/Analytics';
import Transportation from './pages/Transportation';

// Mobile components
import MobileLoginPage from '../mobileView/MobileLoginPage';
import MobileAssignment from '../mobileView/MobileAssignment';
import MobileSchedule from '../mobileView/MobileSchedule';
import MobilePerformance from '../mobileView/MobilePerformance';
import MobileAILearningPath from '../mobileView/MobileAILearningPath';
import MobileFeesAndPayments from '../mobileView/MobileFeeAndPayment';
import MobileResults from '../mobileView/MobileResults';

// Stand-in components for other routes (matching the sidebar)
const BooksMaterials = () => <div className="p-6"><h1 className="text-2xl font-bold">Books and Materials</h1><p>Library and learning materials management.</p></div>;
const Inventory = () => <div className="p-6"><h1 className="text-2xl font-bold">Inventory</h1><p>School inventory and supplies management.</p></div>;

// Guard to protect our routes
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const App = () => {
  return (
    <Routes>

      {/* 1. Public Routes: Login and Forgot Password Pages (No Shell) */}
      <Route path="/login" element={
        <>
          <div className="hidden md:block">
            <LoginPage />
          </div>
          <div className="md:hidden">
            <MobileLoginPage />
          </div>
        </>
      } />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* 2. Protected Routes: Wrapped by Dashboard Shell */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            {/* DashboardShell acts as the layout wrapper */}
            <DashboardShell />
          </ProtectedRoute>
        }
      >
        {/* These nested routes render INSIDE DashboardShell's <Outlet /> */}
        <Route index element={<Dashboard />} />

        {/* /courses: Student MyCourses Page */}
        <Route path="courses" element={<MyCourses />} />

        {/* /teachers: All Linked Teachers Page */}
        <Route path="teachers" element={<Teachers />} />

        {/* Other routes matching the Sidebar menu */}
        <Route path="assignments" element={
          <>
            <div className="hidden md:block">
              <Assignments />
            </div>
            <div className="md:hidden">
              <MobileAssignment />
            </div>
          </>
        } />
        <Route path="schedule" element={
          <>
            <div className="hidden md:block">
              <Schedule />
            </div>
            <div className="md:hidden">
              <MobileSchedule />
            </div>
          </>
        } />
        <Route path="books-materials" element={
          
          <>
            <div className="hidden md:block">
              <BooksMaterials />
            </div>
            <div className="md:hidden">
              <NotFound />
            </div>
          </>
          } />
        <Route path="fees-payments" element={
          <>
            <div className="hidden md:block">
              <FeesAndPayments />
            </div>
            <div className="md:hidden">
              <MobileFeesAndPayments />
            </div>
          </>
        } />
        <Route path="results" element={
          
          <>
            <div className="hidden md:block">
              <Results />
            </div>
            <div className="md:hidden">
              <MobileResults />
            </div>
          </>
        } />
        <Route path="ai-path" element={
          
          <>
            <div className="hidden md:block">
              <AILearningPath />
            </div>
            <div className="md:hidden">
              <MobileAILearningPath />
            </div>
          </>
          } />
        <Route path="performance" element={
          <>
            <div className="hidden md:block">
              <Performance />
            </div>
            <div className="md:hidden">
              <MobilePerformance />
            </div>
          </>
          } />
        <Route path="analytics" element={<Analytics />} />
        <Route path="/transport" element={<Transportation />} />

      </Route>

      {/* Unimplemented routes: Show 404 as full screen */}
      <Route path="/fees" element={<NotFound />} />
      <Route path="/books" element={<NotFound />} />
      <Route path="/inventory" element={<NotFound />} />

      {/* 404 Not Found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;