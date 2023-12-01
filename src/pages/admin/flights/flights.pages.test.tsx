import { screen } from '@testing-library/react';

import { renderWithProviders } from '@/utils/test.utils';

import FlightsPage from './flights.pages';

describe('Test Admin Destinations Page', () => {
  it('renders table', () => {
    renderWithProviders(<FlightsPage />);

    const tableHeader = screen.getByText('Рейсы');
    expect(tableHeader).toBeInTheDocument();
  });
});
