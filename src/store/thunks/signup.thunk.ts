import { createAsyncThunk } from '@reduxjs/toolkit';

import { AuthServices } from '@services/auth.services';
import { IClientSignUpData } from '@interfaces/client-sign-up.interfaces';

export const postSignUp = createAsyncThunk(
  'login/postSignUp',
  async (data: IClientSignUpData, { rejectWithValue }) => {
    const res = await AuthServices.SignUpApi(data);
    if (!res) {
      return rejectWithValue('error');
    }
    return res;
  }
);
