import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AircraftsFetch } from '@/store/thunks/aircrafts.thunk';
import { IAircraftDataContent } from '@interfaces/aircraft-data.interfaces';

interface AircraftsState {
  aircrafts: IAircraftDataContent[];
  aircraft: null | IAircraftDataContent;
  isLoading: boolean;
  error: string;
  isClick: boolean;
  totalPages: number;
}

const initialState: AircraftsState = {
  aircrafts: [],
  aircraft: null,
  isLoading: false,
  error: '',
  isClick: false,
  totalPages: 0,
};

export const aircraftsSlice = createSlice({
  name: 'aircraft',
  initialState,
  reducers: {
    clickModalAircraftsButton(state) {
      state.isClick = !state.isClick;
    },
    aircraftData(state, action: PayloadAction<IAircraftDataContent | null>) {
      state.aircraft = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(AircraftsFetch.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      AircraftsFetch.fulfilled.type,
      (
        state,
        action: PayloadAction<{
          content: IAircraftDataContent[];
          totalPages: number;
        }>
      ) => {
        state.isLoading = false;
        state.error = '';
        state.aircrafts = [...action.payload.content];
        state.totalPages = action.payload.totalPages;
      }
    );
    builder.addCase(
      AircraftsFetch.rejected.type,
      (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      }
    );
  },
});

export const { aircraftData, clickModalAircraftsButton } =
  aircraftsSlice.actions;

export default aircraftsSlice.reducer;
