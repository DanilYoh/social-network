import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { renderWithProviders } from '@/utils/test.utils';
import { ThanksPage } from '@pages/thanks-page';

describe('Test Results Page', () => {
  it('Check elements on page', () => {
    renderWithProviders(
      <BrowserRouter>
        <ThanksPage />
      </BrowserRouter>
    );
    expect(screen.getByText(/your payment is confirmed!/i)).toBeInTheDocument();
    expect(
      screen.getByText('EXPLORE NEW YORK BEFORE YOUR TRIP')
    ).toBeInTheDocument();
    expect(screen.getByText(/Thank you for choosing/i)).toBeInTheDocument();
  });
});
