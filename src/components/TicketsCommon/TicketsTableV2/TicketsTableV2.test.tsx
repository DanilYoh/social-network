import { describe, it, vi } from 'vitest';

import { renderWithProviders } from '@/utils/test.utils';
import { TicketsTableV2 } from '@components/TicketsCommon/TicketsTableV2';
import { TableWrapper } from '@components/TicketsCommon/TableWrapper';

vi.mock('@components/TicketsCommon/TableWrapper');

describe('TableWrapper', () => {
  it('call child component', () => {
    renderWithProviders(<TicketsTableV2 />);
    expect(TableWrapper).toBeCalledTimes(1);
  });
});
