import { render, screen } from '@testing-library/react';

import { SeatSection } from './SeatSection';

describe('SeatSection test', () => {
  it('renders SeatSection component', () => {
    render(<SeatSection />);
    expect(screen.getByText('Economy seat')).toBeInTheDocument();
    expect(screen.getByText('Seat with extra Leg Room')).toBeInTheDocument();
    expect(screen.getByText('Emergency/Exit Seat')).toBeInTheDocument();
    expect(screen.getByText('Occupied Seat')).toBeInTheDocument();
    expect(screen.getByText('FREE')).toBeInTheDocument();
  });
});
