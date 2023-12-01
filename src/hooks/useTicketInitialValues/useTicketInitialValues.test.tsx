import { describe, test, vi } from 'vitest';

import { TModalMeta } from '@interfaces/modal-meta.interfaces';

import { useTicketInitialValues } from './useTicketInitialValues';

const metaStubCreate: TModalMeta = {
  action: 'create',
  title: 'Добавить билет',
  type: 'ticket',
};

const metaStubEdit: TModalMeta = {
  action: 'edit',
  title: 'Редактировать билет',
  type: 'ticket',
  id: '2',
};

const ticketsStub = {
  tickets: {
    content: [
      {
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
      {
        id: 2,
        ticketNumber: 'SD-2223',
        passengerId: 5,
        firstName: 'Иван',
        lastName: 'Иванов',
        flightId: 2,
        code: 'VKOOMS',
        from: 'VKO',
        to: 'OMS',
        departureDateTime: '2023-06-21T03:34:41.950357',
        arrivalDateTime: '2023-06-21T03:34:41.950357',
        flightSeatId: 2,
        seatNumber: '1B',
      },
    ],
  },
};

vi.mock('@/hooks', () => ({
  useAppSelector: () => ticketsStub,
  useAppDispatch: () => () => true,
}));

describe('useTicketInitialValues hook', () => {
  test('correct data for ticket adding', () => {
    const properties = useTicketInitialValues(metaStubCreate);
    expect(properties).toEqual({});
  });

  test('correct data for ticket editing', () => {
    const properties = useTicketInitialValues(metaStubEdit);
    expect(properties.firstName).toEqual(
      ticketsStub.tickets.content[1].firstName
    );
  });
});
