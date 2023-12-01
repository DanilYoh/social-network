import { describe, it, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { Table, Tbody } from '@chakra-ui/react';

import { renderWithProviders } from '@/utils/test.utils';
import { TicketsTableRow } from '@components/TicketsCommon/TicketsTableRow';
import { DropdownMenu } from '@components/DropdownMenu';
import { ITicket } from '@interfaces/tickets.interfaces';

vi.mock('@components/DropdownMenu');

const mockItems: ITicket = {
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
};

describe('TicketsTableRow', () => {
  it('show table row', () => {
    renderWithProviders(
      <Table>
        <Tbody>
          <TicketsTableRow item={mockItems}>
            <DropdownMenu />
          </TicketsTableRow>
        </Tbody>
      </Table>
    );
    expect(screen.getByTestId('table-row')).toBeInTheDocument();
    expect(DropdownMenu).toBeCalled();
  });
});
