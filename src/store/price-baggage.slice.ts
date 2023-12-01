/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IPassenger {
  id: number;
  name: string;
  priceBaggage: number;
}

const initialState: IPassenger[] = [
  { id: 1, name: 'Michele Müller', priceBaggage: 0 },
  { id: 2, name: 'Eli Müller', priceBaggage: 0 },
];

export const baggageSlice = createSlice({
  name: 'baggage',
  initialState,
  reducers: {
    changePriceBaggage: (
      state,
      action: PayloadAction<{ priceBaggage: number; key: number }>
    ) => {
      // eslint-disable-next-line no-return-assign
      state.map((el) =>
        el.id === action.payload.key
          ? (el.priceBaggage = action.payload.priceBaggage)
          : el.priceBaggage
      );
    },
  },
});

export const { changePriceBaggage } = baggageSlice.actions;
export default baggageSlice.reducer;
