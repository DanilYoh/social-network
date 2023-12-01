import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { BookingPage } from '@pages/admin/booking';
import { renderWithProviders } from '@utils/test.utils';

describe('Admin booking', () => {
  const user = userEvent.setup();

  beforeEach(() => {
    renderWithProviders(<BookingPage />);
  });

  it('Admin booking page', () => {
    expect(screen.getByText(/Бронирование/i)).toBeInTheDocument();
  });

  it('Admin booking open form', async () => {
    const button = screen.getByTestId('booking-modal-open');

    expect(button).toBeInTheDocument();
    await user.click(button);

    expect(screen.getByTestId('admin-modal')).toBeVisible();
  });
});
