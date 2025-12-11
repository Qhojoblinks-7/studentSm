import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showDownloadModal: false,
};

const resultsSlice = createSlice({
  name: 'results',
  initialState,
  reducers: {
    setShowDownloadModal: (state, action) => {
      state.showDownloadModal = action.payload;
    },
  },
});

export const { setShowDownloadModal } = resultsSlice.actions;
export default resultsSlice.reducer;