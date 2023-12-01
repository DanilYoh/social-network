import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from '@/store';

import { DepartingFlight } from './DepartingFlight';

describe('DepartingFlight test', () => {
  it('renders DepartingFlight component', () => {
    render(
      <Provider store={store}>
        <DepartingFlight />
      </Provider>
    );
    expect(screen.getByText('Departing Flight')).toBeInTheDocument();
    expect(screen.getByText('Zurich(ZRH)')).toBeInTheDocument();
    expect(screen.getByText('New York(JFK)')).toBeInTheDocument();
    expect(screen.getByText('Departure time:9:30')).toBeInTheDocument();
    expect(screen.getByText('1. Passenger')).toBeInTheDocument();
    expect(screen.getByText('2. Passenger')).toBeInTheDocument();
  });
});
