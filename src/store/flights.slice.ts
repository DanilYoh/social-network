import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IFlight, IFlightContent } from '@interfaces/search-form.interfaces';
import { IAircraftData } from '@interfaces/aircraft-data.interfaces';
import { fetchFlightAdmin } from '@/store/thunks/flights-admin.thunk';

interface FlightsState {
  flights: IFlight;
  flight: null | IFlightContent;
  aircraftId: IAircraftData;
  isLoading: boolean;
  isClick: boolean;
  error: string;
}

const initialState: FlightsState = {
  flights: {
    content: [],
    totalPages: 0,
  },
  flight: null,
  aircraftId: {
    content: [],
  },
  isLoading: false,
  isClick: false,
  error: '',
};
export const flightsSlice = createSlice({
  name: 'flights',
  initialState,
  reducers: {
    clickModalButton(state) {
      state.isClick = !state.isClick;
    },
    flightData(state, action: PayloadAction<IFlightContent | null>) {
      state.flight = action.payload;
    },
    aircraftFetchSuccess(state, action: PayloadAction<IAircraftData>) {
      state.isLoading = false;
      state.error = '';
      state.aircraftId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFlightAdmin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchFlightAdmin.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = '';
      state.flights = payload;
    });
    builder.addCase(
      fetchFlightAdmin.rejected.type,
      (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      }
    );
  },
});

export const { aircraftFetchSuccess, clickModalButton, flightData } =
  flightsSlice.actions;
export default flightsSlice.reducer;
