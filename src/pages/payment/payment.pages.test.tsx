import { screen } from '@testing-library/react';

import { renderWithProviders } from '@/utils/test.utils';

import Payment from './payment.pages';

describe('Payment', () => {
  it('Check payment page texts', () => {
    renderWithProviders(<Payment />);
    expect(screen.getByText('Choose your payment method')).toBeInTheDocument();
    expect(screen.getByText('Credit Card/Debit Card')).toBeInTheDocument();
    expect(screen.getByText('Card Number')).toBeInTheDocument();
    expect(screen.getByText('Expiry Date')).toBeInTheDocument();
    expect(screen.getByText('Departure')).toBeInTheDocument();
    expect(screen.getByText('return')).toBeInTheDocument();
    expect(
      screen.getByText('Total Price for 2 Passengers')
    ).toBeInTheDocument();
  });
});
