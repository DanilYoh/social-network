import { screen } from '@testing-library/react';

import { renderWithProviders } from '@/utils/test.utils';

import AdminDestinations from './destination.pages';

describe('Test Admin Destinations Page', () => {
  it('table', () => {
    renderWithProviders(<AdminDestinations />);
    expect(screen.getByText(/Место назначения/i)).toBeInTheDocument();
  });
});
