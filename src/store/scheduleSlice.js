import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeView: 'Time Table',
};

const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    setActiveView: (state, action) => {
      state.activeView = action.payload;
    },
  },
});

export const { setActiveView } = scheduleSlice.actions;
export default scheduleSlice.reducer;