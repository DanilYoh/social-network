import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Table } from '@chakra-ui/react';

import { renderWithProviders } from '@/utils/test.utils';
import { ExtraBaggageTableRow } from '@components/ExtraBaggageTableRow/';

describe('ExtraBaggageTableRow test', () => {
  it('Check elements', () => {
    renderWithProviders(
      <Table>
        <ExtraBaggageTableRow num={1} name="ivan" />
      </Table>
    );
    expect(screen.getByText(/ivan/i)).toBeDefined();
    expect(screen.getByText(/Passenger/i)).toBeInTheDocument();
  });
});
