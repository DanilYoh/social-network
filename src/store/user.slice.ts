import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { SignInData, UserData } from '@interfaces/signin-form.interfaces';

const initialState = {
  isLogin: false,
  email: '',
} as UserData;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action: PayloadAction<SignInData>) {
      state.email = action.payload.email;
      state.isLogin = true;
    },
    logout(state) {
      state.email = '';
      state.isLogin = false;
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
