import { vi } from 'vitest';

import { renderWithProviders } from '@/utils/test.utils';
import { TicketsInfo } from '@components/TicketsCommon/TicketsInfo/index';
import { TicketsTableV2 } from '@components/TicketsCommon/TicketsTableV2';
import { TicketsPagination } from '@components/TicketsCommon/TicketsPagination';

vi.mock('@components/TicketsCommon/TicketsTableV2');
vi.mock('@components/TicketsCommon/TicketsPagination');

describe('TicketsInfo', () => {
  it('call child components', () => {
    renderWithProviders(<TicketsInfo />);
    expect(TicketsTableV2).toBeCalledTimes(1);
    expect(TicketsPagination).toBeCalledTimes(1);
  });
});
