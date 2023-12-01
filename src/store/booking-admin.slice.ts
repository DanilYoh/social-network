import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';

import { IAdminBooking } from '@interfaces/admin-booking.interfaces';
import {
  createAdminBooking,
  fetchAdminBookingList,
  fetchDestinationsForBooking,
  fetchFlightsListForBooking,
  fetchPassengersForBooking,
} from '@/store/thunks/booking-admin.thunk';
import { IEntitiesResponse } from '@interfaces/pagination-response.interfaces';
import {
  IDestinationContent,
  IFlightContent,
} from '@interfaces/search-form.interfaces';
import { IPassenger } from '@interfaces/passenger.interfaces';

interface IBookingState {
  bookingsList: IAdminBooking[];
  page: number;
  totalPages: number;
  isLoading: boolean;
  error?: Error;
  destinations: {
    page: number;
    totalPages: number;
    destinations: IDestinationContent[];
  };
  flights: {
    page: number;
    totalPages: number;
    flights: IFlightContent[];
  };
  passengers: {
    page: number;
    totalPages: number;
    passengers: IPassenger[];
  };
}

const initialState: IBookingState = {
  isLoading: false,
  page: 0,
  totalPages: 0,
  bookingsList: [],
  destinations: {
    page: -1,
    totalPages: 0,
    destinations: [],
  },
  flights: {
    page: -1,
    totalPages: 0,
    flights: [],
  },
  passengers: {
    page: -1,
    totalPages: 0,
    passengers: [],
  },
};

export const bookingAdminSlice = createSlice({
  name: 'bookingAdmin',
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setError(state, action: PayloadAction<Error>) {
      state.error = action.payload;
    },
    resetStateKey(state, action: PayloadAction<string>) {
      if (!Object.keys(initialState).find((key) => key === action.payload)) {
        state.error = {
          message: `Ключ ${action.payload} отсутствует в состоянии`,
        } as Error;
        return undefined;
      }
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      state[action.payload] = initialState[action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchAdminBookingList.fulfilled.type,
        (state, action: PayloadAction<IEntitiesResponse<IAdminBooking[]>>) => {
          state.bookingsList = action.payload.content;
          state.totalPages = action.payload.totalPages;
        }
      )
      .addCase(
        fetchDestinationsForBooking.fulfilled.type,
        (
          state,
          action: PayloadAction<IEntitiesResponse<IDestinationContent[]>>
        ) => {
          state.destinations.destinations = [
            ...state.destinations.destinations,
            ...action.payload.content,
          ];
          state.destinations.page = action.payload.pageable.pageNumber;
          state.destinations.totalPages = action.payload.totalPages;
        }
      )
      .addCase(
        fetchPassengersForBooking.fulfilled.type,
        (state, action: PayloadAction<IEntitiesResponse<IPassenger[]>>) => {
          state.passengers.passengers = [
            ...state.passengers.passengers,
            ...action.payload.content,
          ];
          state.passengers.page = action.payload.pageable.pageNumber;
          state.passengers.totalPages = action.payload.totalPages;
        }
      )
      .addCase(
        fetchFlightsListForBooking.fulfilled.type,
        (state, action: PayloadAction<IEntitiesResponse<IFlightContent[]>>) => {
          state.flights.flights = [
            ...state.flights.flights,
            ...action.payload.content,
          ];
          state.flights.page = action.payload.pageable.pageNumber;
          state.flights.totalPages = action.payload.totalPages;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchAdminBookingList.fulfilled,
          fetchDestinationsForBooking.fulfilled,
          fetchPassengersForBooking.fulfilled,
          createAdminBooking.fulfilled,
          fetchFlightsListForBooking.fulfilled
        ),
        (state) => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchAdminBookingList.pending,
          fetchDestinationsForBooking.pending,
          fetchPassengersForBooking.pending,
          createAdminBooking.pending,
          fetchFlightsListForBooking.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchAdminBookingList.rejected,
          fetchDestinationsForBooking.rejected,
          fetchPassengersForBooking.rejected,
          createAdminBooking.rejected,
          fetchFlightsListForBooking.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload as Error;
        }
      );
  },
});

export const bookingReducer = bookingAdminSlice.reducer;
