import { describe, it, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { Table } from '@chakra-ui/react';

import { renderWithProviders } from '@/utils/test.utils';
import { TicketsTableHead } from '@components/TicketsCommon/TicketsTableHead';

vi.mock('@components/DropdownMenu');

const tableHead = [
  'ID',
  'ФИО',
  'Номер билета',
  'Код',
  'Отлет',
  'Прилет',
  'Номер посадки',
  '',
];

describe('TicketsTableHead', () => {
  it('show table heads', () => {
    renderWithProviders(
      <Table>
        <TicketsTableHead />
      </Table>
    );
    expect(screen.getAllByTestId('table-h').length).toBe(tableHead.length);
  });
});
