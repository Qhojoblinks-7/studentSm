import { createSlice } from '@reduxjs/toolkit';
import { feeData } from '../lib/mockData';

const initialState = {
  feeData: feeData,
  loading: false,
  error: null,
};

const feesAndPaymentsSlice = createSlice({
  name: 'feesAndPayments',
  initialState,
  reducers: {
    fetchFeesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchFeesSuccess: (state, action) => {
      state.loading = false;
      state.feeData = action.payload;
    },
    fetchFeesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateFeeData: (state, action) => {
      state.feeData = { ...state.feeData, ...action.payload };
    },
  },
});

export const {
  fetchFeesStart,
  fetchFeesSuccess,
  fetchFeesFailure,
  updateFeeData,
} = feesAndPaymentsSlice.actions;

export default feesAndPaymentsSlice.reducer;