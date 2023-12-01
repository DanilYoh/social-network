import { createAsyncThunk } from '@reduxjs/toolkit';

import { SeatsServices } from '@services/seats.services';
import {
  SeatInterface,
  SeatInterfaceContent,
} from '@interfaces/seat-interface.interfaces';
import { CreateSeatProps } from '@interfaces/createSeatProps';
import { IDataForm } from '@/interfaces/modal-form-props.interfaces';
import { createFinalOjb } from '@utils/create-aircraft-obj.utils';

export const GetAircraftSeatsServices = createAsyncThunk(
  'aircraft/seats',
  async (_, thunkAPI) => {
    try {
      // Выводит только 10 сидений,ошибка на бэке,ожидаем фикса
      const response = await SeatsServices.getAdminSeats();
      return response.data as SeatInterface;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
export const CreateSeatServices = createAsyncThunk(
  'aircraft/seatsCreate',
  async (seat: CreateSeatProps, thunkAPI) => {
    try {
      const response = await SeatsServices.postAdminSeats({ ...seat });
      return response.data as SeatInterfaceContent;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
export const DeleteSeatServices = createAsyncThunk(
  'seats/delete',
  async (id: number, thunkAPI) => {
    try {
      // нельзя удалить первые 10 сидений,их запретили удалять :(
      await SeatsServices.deleteAdminSeats(id);
      return id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const PatchSeatServices = createAsyncThunk(
  'seat/patch',
  async (seat: IDataForm, thunkAPI) => {
    const seatIdFinal = seat.seatId ? seat.seatId : '1';
    const finalObj = createFinalOjb(seat);
    try {
      await SeatsServices.patchSeatById(seat, seatIdFinal);
      return { seatId: seat.seatId, finalObj };
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
export const GetSeatById = createAsyncThunk(
  'seat/getById',
  async (id: string, thunkAPI) => {
    try {
      const response = await SeatsServices.getSeatById(id);

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      const seatNumber: string = await response.data.seatNumber;
      return seatNumber;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
