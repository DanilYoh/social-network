import { TTicketFormMocks } from '@interfaces/specific-form-mocks.interfaces';
import { ITicket } from '@interfaces/tickets.interfaces';
import { getTicketsInitialState } from '@/store/tickets.slice';

type TMocks = 'create' | 'edit';

export const ticketFormMocks: Record<TMocks, TTicketFormMocks> = {
  create: {
    type: 'create',
    meta: {
      type: 'ticket',
      action: 'create',
      title: 'Заголовок',
    },
  },
  edit: {
    type: 'edit',
    meta: {
      type: 'ticket',
      action: 'edit',
      title: 'Заголовок',
      id: '1',
    },
    ticket: {
      id: 1,
      ticketNumber: 'SD-2222',
      passengerId: 4,
      firstName: 'Пётр',
      lastName: 'Петров',
      flightId: 1,
      code: 'VKOOMS',
      from: 'VKO',
      to: 'OMS',
      departureDateTime: '2023-06-21T03:34:41.950357',
      arrivalDateTime: '2023-06-21T03:34:41.950357',
      flightSeatId: 2,
      seatNumber: '1B',
    },
  },
};

export const getInitialTicketFormState = (props: TTicketFormMocks) => {
  const tickets: ITicket[] = [];
  if (props.type === 'edit') tickets.push(props.ticket);
  return {
    tickets: getTicketsInitialState(tickets),
  };
};
