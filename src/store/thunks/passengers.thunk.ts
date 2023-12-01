import { createAsyncThunk } from '@reduxjs/toolkit';

import { PassengerServices } from '@services/passenger.services';

export const UsersFetch = createAsyncThunk(
  'users',
  async (page: number | undefined, thunkApi) => {
    try {
      const response = await PassengerServices.getPassengers(page);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
