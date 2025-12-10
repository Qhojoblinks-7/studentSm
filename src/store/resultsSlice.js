import { createSlice } from '@reduxjs/toolkit';
import { academicResults, historicalAcademicResults } from '../lib/mockData';

const initialState = {
  currentResults: academicResults,
  historicalResults: historicalAcademicResults,
  selectedTerm: null,
  loading: false,
  error: null,
};

const resultsSlice = createSlice({
  name: 'results',
  initialState,
  reducers: {
    setSelectedTerm: (state, action) => {
      state.selectedTerm = action.payload;
    },
    fetchResultsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchResultsSuccess: (state, action) => {
      state.loading = false;
      state.currentResults = action.payload.current || state.currentResults;
      state.historicalResults = action.payload.historical || state.historicalResults;
    },
    fetchResultsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateCurrentResults: (state, action) => {
      state.currentResults = { ...state.currentResults, ...action.payload };
    },
  },
});

export const {
  setSelectedTerm,
  fetchResultsStart,
  fetchResultsSuccess,
  fetchResultsFailure,
  updateCurrentResults,
} = resultsSlice.actions;

export default resultsSlice.reducer;