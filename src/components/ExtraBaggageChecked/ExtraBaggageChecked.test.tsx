import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Table } from '@chakra-ui/react';

import { renderWithProviders } from '@/utils/test.utils';
import { ExtraBaggageChecked } from '@components/ExtraBaggageChecked/';

describe('ExtraBaggage test', () => {
  it('Check elements', () => {
    renderWithProviders(
      <Table>
        <ExtraBaggageChecked id={0} />
      </Table>
    );
    expect(screen.getByText(/pcs/i)).toBeDefined();
    expect(screen.getByText(/CHF/i)).toBeInTheDocument();
  });
});
