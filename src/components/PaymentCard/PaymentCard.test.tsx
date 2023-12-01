import { screen } from '@testing-library/react';

import { renderWithProviders } from '@/utils/test.utils';

import PaymentCard from './PaymentCard';

describe('PaymentCard', () => {
  it('should render all required inputs', () => {
    renderWithProviders(<PaymentCard />);
    expect(
      screen.getByLabelText('First Name (As written on the card)')
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText('Last Name (As written on the card)')
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Card Number')).toBeInTheDocument();
    expect(screen.getByLabelText('Expiry Date')).toBeInTheDocument();
    expect(screen.getByLabelText('CVC Code')).toBeInTheDocument();
  });
});
