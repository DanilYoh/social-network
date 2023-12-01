import { createAsyncThunk } from '@reduxjs/toolkit';

import { BookingService } from '@services/booking.service';
import { IEntitiesResponse } from '@interfaces/pagination-response.interfaces';
import {
  IAdminBooking,
  TAdminBookingForm,
} from '@interfaces/admin-booking.interfaces';
import {
  IDestinationContent,
  IFlightContent,
} from '@interfaces/search-form.interfaces';
import { IPassenger } from '@interfaces/passenger.interfaces';

export const fetchAdminBookingList = createAsyncThunk(
  'bookingAdmin/fetchAll',
  async (page: number, thunkAPI) => {
    try {
      const result = await BookingService.fetchAdminBookingList(page);
      return result.data as IEntitiesResponse<IAdminBooking>;
    } catch (e) {
      return thunkAPI.rejectWithValue(e as Error);
    }
  }
);

export const deleteAdminBookingItemById = createAsyncThunk(
  'bookingAdmin/deleteItem',
  async (id: number, thunkAPI) => {
    try {
      await BookingService.deleteAdminBookingById(id);
      return thunkAPI.fulfillWithValue(true);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const fetchFlightsListForBooking = createAsyncThunk(
  'bookingAdmin/fetchFlights',
  async (
    data: { cityFrom: string; cityTo: string; page: number },
    thunkAPI
  ) => {
    try {
      const result = await BookingService.fetchFlights(
        data.cityFrom,
        data.cityTo,
        data.page
      );
      if (result.status === 204) {
        return thunkAPI.rejectWithValue({
          message: 'Ни найдено ни одного рейса',
        });
      }
      return result.data as IEntitiesResponse<IFlightContent[]>;
    } catch (e) {
      return thunkAPI.rejectWithValue(e as Error);
    }
  }
);

export const fetchDestinationsForBooking = createAsyncThunk(
  'adminBooking/fetchDestinations',
  async (page: number, thunkAPI) => {
    try {
      const result = await BookingService.fetchBookingDestinationsByPage(page);
      return result.data as IEntitiesResponse<IDestinationContent[]>;
    } catch (e) {
      return thunkAPI.rejectWithValue(e as Error);
    }
  }
);

export const fetchPassengersForBooking = createAsyncThunk(
  'adminBooking/fetchPassengers',
  async (page: number, thunkAPI) => {
    try {
      const result = await BookingService.fetchPassengersByPage(page);
      return result.data as IEntitiesResponse<IPassenger[]>;
    } catch (e) {
      return thunkAPI.rejectWithValue(e as Error);
    }
  }
);

export const createAdminBooking = createAsyncThunk(
  'adminBooking/createBooking',
  async (data: TAdminBookingForm, thunkAPI) => {
    try {
      const result = await BookingService.create(data);
      if (result.status !== 201) {
        return thunkAPI.rejectWithValue({
          message: (result as unknown as Error).message,
        });
      }
    } catch (e) {
      return thunkAPI.rejectWithValue({ message: (e as Error).message });
    }
  }
);

export const editAdminBooking = createAsyncThunk(
  'adminBooking/editBooking',
  async (data: TAdminBookingForm & { id: number }, thunkAPI) => {
    try {
      const result = await BookingService.edit(
        data as TAdminBookingForm,
        data.id
      );
      if (result.status !== 201) {
        return thunkAPI.rejectWithValue({
          message: (result as unknown as Error).message,
        });
      }
    } catch (e) {
      return thunkAPI.rejectWithValue({ message: (e as Error).message });
    }
  }
);
