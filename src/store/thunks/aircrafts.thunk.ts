import { createAsyncThunk } from '@reduxjs/toolkit';

import { AircraftServices } from '@services/aircraft.services';

export const AircraftsFetch = createAsyncThunk(
  'aircrafts',
  async (page: number | undefined, thunkApi) => {
    try {
      return await AircraftServices.getClientAircraft(page);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
