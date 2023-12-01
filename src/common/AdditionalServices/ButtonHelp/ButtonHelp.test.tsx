import { BrowserRouter as Router } from 'react-router-dom';
import { screen } from '@testing-library/react';

import { renderWithProviders } from '@/utils/test.utils';

import ButtonHelp from './ButtonHelp';

describe('Test ButtonHelp', () => {
  it('check button, button text', () => {
    renderWithProviders(
      <Router>
        <ButtonHelp text="CHF" type="button" />
      </Router>
    );

    expect(screen.getByText(/CHF/i)).toBeInTheDocument();
    expect(screen.getByText(/HELP/i)).toBeInTheDocument();
  });
});
