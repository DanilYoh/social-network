import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { IPaymentData } from '@/interfaces/payment.interfaces';

const initialState: IPaymentData = {
  data: { first: '', last: '', number: '', date: '', csv: '' },
  isValid: false,
};

export const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    login(state, action: PayloadAction<IPaymentData>) {
      state.data.first = action.payload.data.first;
      state.data.last = action.payload.data.last;
      state.data.number = action.payload.data.number;
      state.data.date = action.payload.data.date;
      state.data.csv = action.payload.data.csv;
      state.isValid = action.payload.isValid;
    },
  },
});

export const { login } = paymentSlice.actions;

export default paymentSlice.reducer;
