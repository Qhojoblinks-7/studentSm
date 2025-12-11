import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPage: 1,
};

const myCoursesSlice = createSlice({
  name: 'myCourses',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setCurrentPage } = myCoursesSlice.actions;
export default myCoursesSlice.reducer;