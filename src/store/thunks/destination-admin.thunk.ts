import { createAsyncThunk } from '@reduxjs/toolkit';

import { DestinationServices } from '@services/destination.services';
import { IDestination } from '@interfaces/search-form.interfaces';

export const fetchDestinationAdmin = createAsyncThunk(
  'destinationAdmin',
  async (page: number | undefined, thunkAPI) => {
    try {
      const response = await DestinationServices.getAdminDestination(page);
      return response.data as IDestination;
    } catch (error) {
      return thunkAPI.rejectWithValue('error');
    }
  }
);
