import { createAsyncThunk } from '@reduxjs/toolkit';

import { TicketsServices } from '@services/tickets.services';
import { IDataForm } from '@interfaces/modal-form-props.interfaces';
import { ITicket } from '@interfaces/tickets.interfaces';
import { IPopMessage } from '@interfaces/pop-message.interfaces';

export const fetchTickets = createAsyncThunk(
  'tickets/fetchTickets',
  async (page: number, thunkAPI) => {
    try {
      const response = await TicketsServices.getTickets(page);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createTicket = createAsyncThunk<
  ITicket,
  IDataForm,
  {
    fulfilledMeta: IPopMessage;
    rejectedMeta: IPopMessage;
  }
>('tickets/createTicket', async (data, thunkAPI) => {
  try {
    const response = await TicketsServices.postNewTicket(data);
    const meta = {
      message: 'Ticket was created',
    };
    return thunkAPI.fulfillWithValue(response.data, meta);
  } catch (error) {
    const meta = {
      message: 'Something went wrong',
    };
    return thunkAPI.rejectWithValue(error, meta);
  }
});

export const updateTicket = createAsyncThunk<
  ITicket,
  ITicket,
  {
    fulfilledMeta: IPopMessage;
    rejectedMeta: IPopMessage;
  }
>('tickets/editTicket', async (data: ITicket, thunkAPI) => {
  try {
    const response = await TicketsServices.editTicket(data);
    const meta = {
      message: 'Ticket was edited',
    };
    return thunkAPI.fulfillWithValue(response.data, meta);
  } catch (error) {
    const meta = {
      message: 'Something went wrong',
    };
    return thunkAPI.rejectWithValue(error, meta);
  }
});

export const removeTicket = createAsyncThunk<number, number>(
  'tickets/removeTicket',
  async (id, thunkAPI) => {
    try {
      await TicketsServices.deleteTicket(id);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
