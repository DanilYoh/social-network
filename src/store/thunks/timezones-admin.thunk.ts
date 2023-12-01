import { createAsyncThunk } from '@reduxjs/toolkit';

import { TimeZonesServices } from '@/services/time-zones.services';

export const TimeZonesFetch = createAsyncThunk(
  'timezones',
  async (page: number | undefined, thunkAPI) => {
    try {
      const response = await TimeZonesServices.getTimeZones(page);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
