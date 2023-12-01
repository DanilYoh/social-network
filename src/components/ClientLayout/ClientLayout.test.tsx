import { screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { renderWithProviders } from '@/utils/test.utils';
import { ClientLayout } from '@components/ClientLayout';

describe('ClientLayout', () => {
  it('renders components and child components', async () => {
    renderWithProviders(
      <BrowserRouter>
        <ClientLayout />
      </BrowserRouter>
    );
    await waitFor(() => {
      expect(screen.getByTestId('client-header')).toBeInTheDocument();
      expect(screen.getByTestId('client-footer')).toBeInTheDocument();
    });
  });
});
