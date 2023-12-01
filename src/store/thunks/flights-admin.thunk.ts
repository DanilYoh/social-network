import { createAsyncThunk } from '@reduxjs/toolkit';

import { IFlight } from '@interfaces/search-form.interfaces';
import { FlightsAdminApi } from '@services/flights.services';

export const fetchFlightAdmin = createAsyncThunk(
  'getAllUsers',
  async (page: number | undefined, thunkApi) => {
    try {
      const response = await FlightsAdminApi.getAdminFlights(page);
      return response.data as IFlight;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
