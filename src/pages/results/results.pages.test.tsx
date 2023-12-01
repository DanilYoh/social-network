import { screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { renderWithProviders } from '@/utils/test.utils';
import { ResultsPage } from '@/pages/results/index';

describe('Test Results Page', () => {
  it('Check elements on page', async () => {
    renderWithProviders(
      <BrowserRouter>
        <ResultsPage />
      </BrowserRouter>
    );
    await waitFor(() => {
      expect(screen.getAllByText('select departing flight')).not.toHaveLength(
        0
      );
      expect(screen.getAllByText('select return flight')).not.toHaveLength(0);
      expect(screen.getAllByText('passenger details')).not.toHaveLength(0);
      expect(screen.getAllByText('additional services')).not.toHaveLength(0);
      expect(screen.getAllByText('payment')).not.toHaveLength(0);
    });
  });
});
