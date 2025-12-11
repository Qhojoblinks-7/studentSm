import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  expandedFees: false,
  expandedHistory: false,
  isPaymentModalOpen: false,
  showPaymentPage: false,
};

const feesAndPaymentsSlice = createSlice({
  name: 'feesAndPayments',
  initialState,
  reducers: {
    setExpandedFees: (state, action) => {
      state.expandedFees = action.payload;
    },
    setExpandedHistory: (state, action) => {
      state.expandedHistory = action.payload;
    },
    setIsPaymentModalOpen: (state, action) => {
      state.isPaymentModalOpen = action.payload;
    },
    setShowPaymentPage: (state, action) => {
      state.showPaymentPage = action.payload;
    },
  },
});

export const { setExpandedFees, setExpandedHistory, setIsPaymentModalOpen, setShowPaymentPage } = feesAndPaymentsSlice.actions;
export default feesAndPaymentsSlice.reducer;