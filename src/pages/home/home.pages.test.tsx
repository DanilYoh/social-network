import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { renderWithProviders } from '@/utils/test.utils';

import HomePage from './home.pages';

describe('Texts', () => {
  it('Check texts', () => {
    renderWithProviders(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    expect(screen.getAllByText(/flights/i)).toBeTruthy();
    expect(screen.getByText(/check-in/i)).toBeInTheDocument();
    expect(screen.getByText(/manage booking/i)).toBeInTheDocument();
  });
});
