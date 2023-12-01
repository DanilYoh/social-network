import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ITicket, TTicketsResponse } from '@/interfaces/tickets.interfaces';
import {
  createTicket,
  fetchTickets,
  removeTicket,
  updateTicket,
} from '@/store/thunks/tickets.thunk';
import { formatTicketToSubmit } from '@utils/format-ticket-to-submit.utils';
import { TStatus } from '@interfaces/status.interfaces';

interface ITicketsState {
  error: string;
  status: TStatus;
  tickets: TTicketsResponse;
}

export const getTicketsInitialState = (items: ITicket[]): ITicketsState => ({
  error: '',
  status: 'resolved',
  tickets: {
    content: items,
    size: 0,
    numberOfElements: items.length,
    totalElements: items.length,
    totalPages: 1,
    empty: true,
    first: true,
    last: false,
    number: 0,
    sort: {
      empty: true,
      sorted: false,
      unsorted: true,
    },
    pageable: {
      sort: {
        empty: true,
        sorted: false,
        unsorted: true,
      },
      offset: 0,
      paged: false,
      unpaged: true,
      pageNumber: 1,
      pageSize: 1,
    },
  },
});

export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: getTicketsInitialState([]),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      createTicket.fulfilled.type,
      (state, action: PayloadAction<ITicket>) => {
        const ids = state.tickets.content.map((e) => e.id);
        const id = action.payload.id ? action.payload.id : Math.max(...ids) + 1;
        const formatted = formatTicketToSubmit({
          ...action.payload,
          id,
        });
        state.tickets.content.unshift(formatted);
      }
    );
    builder
      .addCase(
        updateTicket.fulfilled.type,
        (state, action: PayloadAction<ITicket>) => {
          const ticket = state.tickets.content.find(
            (e) => e.id === action.payload.id
          );
          if (!ticket) return;
          Object.assign(ticket, action.payload);
        }
      )
      .addCase(fetchTickets.pending.type, (state) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(
        fetchTickets.fulfilled.type,
        (state, action: PayloadAction<TTicketsResponse>) => {
          state.status = 'resolved';
          Object.assign(state.tickets, action.payload);
        }
      )
      .addCase(fetchTickets.rejected.type, (state) => {
        state.status = 'rejected';
        state.error = 'Something went wrong';
      })
      .addCase(
        removeTicket.fulfilled.type,
        (state, action: PayloadAction<number>) => {
          state.status = 'resolved';
          state.tickets.content = state.tickets.content.filter(
            (ticket) => ticket.id !== action.payload
          );
        }
      );
  },
});

export default ticketsSlice.reducer;
