import { createSlice } from '@reduxjs/toolkit';
import {
  studentCourses,
  dashboardData,
  dashboardPosts,
  linkedTeachers,
  attendanceData
} from '../lib/mockData';

const initialState = {
  studentName: dashboardData.studentName,
  homeworkCompletion: dashboardData.homeworkCompletion,
  academicPerformance: dashboardData.academicPerformance,
  currentGpa: dashboardData.currentGpa,
  gpaTrend: dashboardData.gpaTrend,
  posts: dashboardPosts,
  teachers: linkedTeachers,
  attendance: attendanceData,
  courses: studentCourses,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    // Add reducers for updating state if needed
    updateHomeworkCompletion: (state, action) => {
      state.homeworkCompletion = action.payload;
    },
    updateAcademicPerformance: (state, action) => {
      state.academicPerformance = action.payload;
    },
    // Add more reducers as needed
  },
});

export const { updateHomeworkCompletion, updateAcademicPerformance } = dashboardSlice.actions;
export default dashboardSlice.reducer;