import { createSlice } from '@reduxjs/toolkit';
import { studentCourses } from '../lib/mockData';

const initialState = {
  courses: studentCourses,
  selectedCourse: null,
  loading: false,
  error: null,
};

const myCoursesSlice = createSlice({
  name: 'myCourses',
  initialState,
  reducers: {
    setSelectedCourse: (state, action) => {
      state.selectedCourse = action.payload;
    },
    updateCourseProgress: (state, action) => {
      const { courseId, progress } = action.payload;
      const course = state.courses.find(c => c.id === courseId);
      if (course) {
        course.progressPercentage = progress;
      }
    },
    markLessonComplete: (state, action) => {
      const { courseId, lessonId } = action.payload;
      const course = state.courses.find(c => c.id === courseId);
      if (course) {
        // Update completed lessons logic here
      }
    },
    fetchCoursesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchCoursesSuccess: (state, action) => {
      state.loading = false;
      state.courses = action.payload;
    },
    fetchCoursesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  setSelectedCourse,
  updateCourseProgress,
  markLessonComplete,
  fetchCoursesStart,
  fetchCoursesSuccess,
  fetchCoursesFailure,
} = myCoursesSlice.actions;

export default myCoursesSlice.reducer;