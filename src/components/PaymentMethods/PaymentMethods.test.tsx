import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithProviders } from '@/utils/test.utils';

import PaymentMethods from './PaymentMethods';

describe('PaymentMethods', () => {
  it('should render the radio group', () => {
    renderWithProviders(<PaymentMethods />);
    expect(screen.getByRole('radiogroup')).toBeInTheDocument();
  });

  it('should select a payment method', async () => {
    const user = userEvent.setup();
    renderWithProviders(<PaymentMethods />);
    const radioButton = screen.getByLabelText('PayPal');
    expect(radioButton).not.toBeChecked();
    await user.click(radioButton);
    expect(radioButton).toBeChecked();
  });
});
