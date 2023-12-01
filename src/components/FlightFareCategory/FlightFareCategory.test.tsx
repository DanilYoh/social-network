import { screen } from '@testing-library/react';

import { renderWithProviders } from '@/utils/test.utils';
import App from '@/App';

import FlightFareCategory from './FlightFareCategory';

describe('FlightCard tests', () => {
  it('Ticket elements', () => {
    renderWithProviders(
      <App>
        <FlightFareCategory price={0} />
      </App>
    );
    expect(screen.getByText('UX AIR')).toBeInTheDocument();
  });
});
