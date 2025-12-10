import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DashboardLayout from './layouts/DashboardLayout'
import Dashboard from './pages/Dashboard/Dashboard'
import MyCourses from './pages/MyCourses'
import Assignments from './pages/Assignments/Assignments'
import Performance from './pages/Performance/Performance'
import Results from './pages/Results/Results'
import Schedule from './pages/Schedule/Schedule'
import FeesAndPayments from './pages/FeesAndPayments/FeesAndPayments'
import FeesPayments from './pages/FeesPayments/FeesPayments'
import AILearningPath from './pages/AILearningPath/AILearningPath'

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="courses" element={<MyCourses />} />
        <Route path="assignments" element={<Assignments />} />
        <Route path="performance" element={<Performance />} />
        <Route path="results" element={<Results />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="fees" element={<FeesPayments />} />
        <Route path="fees-and-payments" element={<FeesAndPayments />} />
        <Route path="fees-payments" element={<FeesPayments />} />
        <Route path="ai-learning-path" element={<AILearningPath />} />
      </Route>
    </Routes>
  )
}

export default App