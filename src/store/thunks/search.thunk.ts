import { createAsyncThunk } from '@reduxjs/toolkit';

import { IFlightData } from '@interfaces/search-form.interfaces';
import { SearchServices } from '@services/search.services';

export const fetchSearchCreate = createAsyncThunk(
  'search/postSearch',
  async (data: IFlightData, thunkAPI) => {
    try {
      const response = await SearchServices.postSearchCreate(data);
      return response.data as string | number;
    } catch (error) {
      return thunkAPI.rejectWithValue('Error request');
    }
  }
);
