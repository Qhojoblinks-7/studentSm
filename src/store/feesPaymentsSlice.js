import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  method: "card",
  confirmed: false,
};

const feesPaymentsSlice = createSlice({
  name: 'feesPayments',
  initialState,
  reducers: {
    setMethod: (state, action) => {
      state.method = action.payload;
    },
    setConfirmed: (state, action) => {
      state.confirmed = action.payload;
    },
  },
});

export const { setMethod, setConfirmed } = feesPaymentsSlice.actions;
export default feesPaymentsSlice.reducer;