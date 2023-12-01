import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { renderWithProviders } from '@/utils/test.utils';

import AircraftListPage from './aircraft-list.pages';

describe('AircraftPage', () => {
  it('renders ', () => {
    renderWithProviders(
      <BrowserRouter>
        <AircraftListPage />
      </BrowserRouter>
    );
    expect(screen.getByText(/Самолёты/i)).toBeInTheDocument();
  });
});
