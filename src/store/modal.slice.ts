import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IModalState, TModalMeta } from '@interfaces/modal-meta.interfaces';

const initialState: IModalState = {
  isOpen: false,
  meta: null,
};
const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    setOpen(state, payload: PayloadAction<TModalMeta>) {
      Object.assign(state, { isOpen: true, meta: payload.payload });
    },
    setClose(state) {
      state.isOpen = false;
    },
  },
});

export const actionsModal = modalSlice.actions;

export default modalSlice.reducer;
