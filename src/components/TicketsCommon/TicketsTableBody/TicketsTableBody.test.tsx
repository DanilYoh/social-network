import { describe, it, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { Table } from '@chakra-ui/react';

import { renderWithProviders } from '@/utils/test.utils';
import { TicketsTableBody } from '@components/TicketsCommon/TicketsTableBody';
import { DropdownMenu } from '@components/DropdownMenu';
import { ITicket } from '@interfaces/tickets.interfaces';

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

describe('TicketsTableBody', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });
  it('show table rows', () => {
    renderWithProviders(
      <Table>
        <TicketsTableBody items={mockItems} onDelete={vi.fn} onEdit={vi.fn} />
      </Table>
    );
    expect(screen.getAllByTestId('table-row').length).toBe(mockItems.length);
    expect(DropdownMenu).toBeCalledTimes(mockItems.length);
  });
  it('no table rows', () => {
    renderWithProviders(
      <Table>
        <TicketsTableBody
          items={mockItemsEmpty}
          onDelete={vi.fn}
          onEdit={vi.fn}
        />
      </Table>
    );
    expect(screen.queryAllByTestId('table-row').length).toBe(
      mockItemsEmpty.length
    );
    expect(DropdownMenu).toBeCalledTimes(0);
  });
});
