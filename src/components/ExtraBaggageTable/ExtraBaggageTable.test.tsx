import { screen } from '@testing-library/react';
import { Table } from '@chakra-ui/react';

import { renderWithProviders } from '@/utils/test.utils';
import { ExtraBaggageTable } from '@components/ExtraBaggageTable/';

describe('ExtraBaggageTable test', () => {
  it('Check elements', () => {
    renderWithProviders(
      <Table>
        <ExtraBaggageTable />
      </Table>
    );
    expect(screen.getByText('Your Selected Baggage Allowance')).toBeDefined();
    expect(screen.getByText(/Add Extra Checked Baggage/)).toBeDefined();
  });
});
