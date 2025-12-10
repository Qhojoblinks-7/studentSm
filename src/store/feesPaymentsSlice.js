import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  paymentMethod: 'card',
  cardDetails: {
    number: '',
    expiry: '',
    cvv: '',
    name: '',
  },
  mobileMoney: {
    provider: 'mtn',
    number: '',
  },
  loading: false,
  error: null,
  success: false,
};

const feesPaymentsSlice = createSlice({
  name: 'feesPayments',
  initialState,
  reducers: {
    setPaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
    updateCardDetails: (state, action) => {
      state.cardDetails = { ...state.cardDetails, ...action.payload };
    },
    updateMobileMoney: (state, action) => {
      state.mobileMoney = { ...state.mobileMoney, ...action.payload };
    },
    paymentStart: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    paymentSuccess: (state) => {
      state.loading = false;
      state.success = true;
      state.error = null;
    },
    paymentFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    },
    resetPaymentState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
});

export const {
  setPaymentMethod,
  updateCardDetails,
  updateMobileMoney,
  paymentStart,
  paymentSuccess,
  paymentFailure,
  resetPaymentState,
} = feesPaymentsSlice.actions;

export default feesPaymentsSlice.reducer;