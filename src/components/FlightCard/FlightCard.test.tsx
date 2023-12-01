import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { renderWithProviders } from '@/utils/test.utils';
import { flightCardData } from '@/mocks/FlightCard';

import FlightCard from './FlightCard';

describe('FlightCard tests', () => {
  it('Ticket elements', () => {
    renderWithProviders(
      <BrowserRouter>
        <FlightCard data={flightCardData[1]} />
      </BrowserRouter>
    );
    expect(screen.getByText('UA0018')).toBeDefined();
    expect(screen.getByText('UX-AIR')).toBeInTheDocument();
    expect(screen.getByText('BUSINESS')).toBeInTheDocument();
    expect(screen.getByText('ECONOM')).toBeInTheDocument();
    expect(screen.getByText('ZRH')).toBeInTheDocument();
    expect(screen.getByText('Zurich')).toBeInTheDocument();
  });
});
