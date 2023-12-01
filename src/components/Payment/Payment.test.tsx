import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { renderWithProviders } from '@/utils/test.utils';

import Payment from './Payment';

describe('Payment', () => {
  it('Check label texts', () => {
    renderWithProviders(
      <BrowserRouter>
        <Payment />
      </BrowserRouter>
    );
    expect(screen.getByText('Choose your payment method')).toBeInTheDocument();
  });
});
