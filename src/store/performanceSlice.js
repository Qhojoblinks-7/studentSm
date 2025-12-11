import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedChart: 'classAverage', // 'classAverage', 'gpaTrend', 'skills'
  activeIndex: -1,
};

const performanceSlice = createSlice({
  name: 'performance',
  initialState,
  reducers: {
    setSelectedChart: (state, action) => {
      state.selectedChart = action.payload;
    },
    setActiveIndex: (state, action) => {
      state.activeIndex = action.payload;
    },
  },
});

export const { setSelectedChart, setActiveIndex } = performanceSlice.actions;
export default performanceSlice.reducer;