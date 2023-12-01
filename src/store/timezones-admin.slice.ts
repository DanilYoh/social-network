import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ITimeZones } from '@/interfaces/admin-time-zones.interfaces';

import { TimeZonesFetch } from './thunks/timezones-admin.thunk';

interface TimeZonesState {
  timezones: ITimeZones[];
  timezone: null | ITimeZones;
  isLoading: boolean;
  error: string;
  totalPages: number;
  isClick: boolean;
}

const initialState: TimeZonesState = {
  timezones: [],
  timezone: null,
  isLoading: false,
  error: '',
  totalPages: 0,
  isClick: false,
};

export const timezonesAdminSlice = createSlice({
  name: 'timezones',
  initialState,
  reducers: {
    clickModalTimeZoneButton(state) {
      state.isClick = !state.isClick;
    },
    timeZoneData(state, action: PayloadAction<ITimeZones | null>) {
      state.timezone = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(TimeZonesFetch.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      TimeZonesFetch.fulfilled.type,
      (
        state,
        action: PayloadAction<{ content: ITimeZones[]; totalPages: number }>
      ) => {
        state.isLoading = false;
        state.error = '';
        state.timezones = [...action.payload.content];
        state.totalPages = action.payload.totalPages;
      }
    );
    builder.addCase(
      TimeZonesFetch.rejected.type,
      (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      }
    );
  },
});

export const { clickModalTimeZoneButton, timeZoneData } =
  timezonesAdminSlice.actions;

export default timezonesAdminSlice.reducer;
