import { describe, it, vi } from 'vitest';
import { screen } from '@testing-library/react';

import { renderWithProviders } from '@/utils/test.utils';
import { DropdownMenu } from '@components/DropdownMenu';
import { ITicket } from '@interfaces/tickets.interfaces';
import { TicketsTableContainer } from '@components/TicketsCommon/TicketsTableContainer';

vi.mock('@components/DropdownMenu');

const mockItems: ITicket[] = [
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
];
const mockItemsEmpty: ITicket[] = [];

describe('TicketsTableContainer', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });
  it('show table rows', () => {
    renderWithProviders(
      <TicketsTableContainer
        items={mockItems}
        onDeleteClick={vi.fn}
        onEditClick={vi.fn}
      />
    );
    expect(screen.getAllByTestId('table-row').length).toBe(mockItems.length);
    expect(DropdownMenu).toBeCalledTimes(mockItems.length);
  });
  it('no table rows', () => {
    renderWithProviders(
      <TicketsTableContainer
        items={mockItemsEmpty}
        onDeleteClick={vi.fn}
        onEditClick={vi.fn}
      />
    );
    expect(screen.queryAllByTestId('table-row').length).toBe(
      mockItemsEmpty.length
    );
    expect(DropdownMenu).toBeCalledTimes(0);
  });
});
