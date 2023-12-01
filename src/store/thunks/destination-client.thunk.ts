import { createAsyncThunk } from '@reduxjs/toolkit';

import { DestinationServices } from '@services/destination.services';
import { IDestination } from '@interfaces/search-form.interfaces';

export const fetchDestinationClient = createAsyncThunk(
  'search/getDestination',
  async (page: number | undefined, thunkAPI) => {
    try {
      const response = await DestinationServices.getClientDestination(page);
      return response.data as IDestination;
    } catch (error) {
      return thunkAPI.rejectWithValue('error');
    }
  }
);
