import { screen } from '@testing-library/react';

import { renderWithProviders } from '@/utils/test.utils';

import TicketsPage from './tickets-v2.pages';

describe('Test for TicketsPage component', () => {
  it('table', () => {
    renderWithProviders(<TicketsPage />);
    expect(screen.getByText('Билеты')).toBeInTheDocument();
  });
});
