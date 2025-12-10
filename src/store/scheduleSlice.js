import { createSlice } from '@reduxjs/toolkit';
import {
  weeklyTimeTable,
  timeSlots,
  weekDays,
  todayScheduleData,
  scheduleViewsData,
} from '../lib/mockData';

const initialState = {
  weeklyTimeTable: weeklyTimeTable,
  timeSlots: timeSlots,
  weekDays: weekDays,
  todaySchedule: todayScheduleData,
  scheduleViews: scheduleViewsData,
  currentView: 'timeTable', // 'timeTable', 'schedule', 'all'
  loading: false,
  error: null,
};

const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    setCurrentView: (state, action) => {
      state.currentView = action.payload;
    },
    fetchScheduleStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchScheduleSuccess: (state, action) => {
      state.loading = false;
      state.weeklyTimeTable = action.payload.weeklyTimeTable || state.weeklyTimeTable;
      state.todaySchedule = action.payload.todaySchedule || state.todaySchedule;
      state.scheduleViews = action.payload.scheduleViews || state.scheduleViews;
    },
    fetchScheduleFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateScheduleData: (state, action) => {
      const { view, data } = action.payload;
      if (view === 'weekly') {
        state.weeklyTimeTable = { ...state.weeklyTimeTable, ...data };
      } else if (view === 'today') {
        state.todaySchedule = { ...state.todaySchedule, ...data };
      }
    },
  },
});

export const {
  setCurrentView,
  fetchScheduleStart,
  fetchScheduleSuccess,
  fetchScheduleFailure,
  updateScheduleData,
} = scheduleSlice.actions;

export default scheduleSlice.reducer;
