import { createSlice } from '@reduxjs/toolkit';
import {
  performanceMetrics,
  classAverageData,
  gpaTrendData,
  skillsAssessmentData,
  topMarksData,
  linkedTeachersData,
  performanceAttendanceData,
} from '../lib/mockData';

const initialState = {
  metrics: performanceMetrics,
  classAverage: classAverageData,
  gpaTrend: gpaTrendData,
  skillsAssessment: skillsAssessmentData,
  topMarks: topMarksData,
  linkedTeachers: linkedTeachersData,
  attendance: performanceAttendanceData,
  loading: false,
  error: null,
};

const performanceSlice = createSlice({
  name: 'performance',
  initialState,
  reducers: {
    fetchPerformanceStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchPerformanceSuccess: (state, action) => {
      state.loading = false;
      state.metrics = action.payload.metrics || state.metrics;
      state.classAverage = action.payload.classAverage || state.classAverage;
      state.gpaTrend = action.payload.gpaTrend || state.gpaTrend;
      state.skillsAssessment = action.payload.skillsAssessment || state.skillsAssessment;
      state.topMarks = action.payload.topMarks || state.topMarks;
      state.linkedTeachers = action.payload.linkedTeachers || state.linkedTeachers;
      state.attendance = action.payload.attendance || state.attendance;
    },
    fetchPerformanceFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updatePerformanceMetrics: (state, action) => {
      state.metrics = { ...state.metrics, ...action.payload };
    },
  },
});

export const {
  fetchPerformanceStart,
  fetchPerformanceSuccess,
  fetchPerformanceFailure,
  updatePerformanceMetrics,
} = performanceSlice.actions;

export default performanceSlice.reducer;