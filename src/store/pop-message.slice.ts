import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IPopMessageState } from '@interfaces/pop-message.interfaces';

const initialState: IPopMessageState = {
  meta: null,
};
const popMessageSlice = createSlice({
  name: 'pop-message',
  initialState,
  reducers: {
    setSuccess(state, payload: PayloadAction<string>) {
      state.meta = {
        status: 'success',
        message: payload.payload,
      };
    },
    setError(state, payload: PayloadAction<string>) {
      state.meta = {
        status: 'error',
        message: payload.payload,
      };
    },
    setWarning(state, payload: PayloadAction<string>) {
      state.meta = {
        status: 'warning',
        message: payload.payload,
      };
    },
    setNull(state) {
      state.meta = null;
    },
  },
});

export const actionsPopMessage = popMessageSlice.actions;

export default popMessageSlice.reducer;
