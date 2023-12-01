import { screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { vitest } from 'vitest';

import { BookingTable } from '@components/BookingTable';
import { store } from '@/mocks/admin-booking.mocks';
import { renderWithProviders } from '@utils/test.utils';

const onDeleteItem = vitest.fn();
describe('Admin booking', () => {
  beforeEach(() => {
    renderWithProviders(
      <BrowserRouter>
        <BookingTable onDeleteItem={onDeleteItem} />
      </BrowserRouter>,
      { store }
    );
  });

  it('table', () => {
    expect(screen.getByTestId('booking-table').children).toHaveLength(3);
  });
  it('dropdown menu actions', async () => {
    const user = userEvent.setup();

    expect(screen.getByTestId('booking-table').children).toHaveLength(3);
    expect(screen.getAllByTestId('menu-button')[0]).toBeVisible();
    await user.click(screen.getAllByTestId('menu-button')[0]);
    await waitFor(() => {
      expect(screen.getAllByTestId('delete-btn')[0]).toBeVisible();
    });
    await user.click(screen.getAllByTestId('delete-btn')[0]);
    expect(onDeleteItem).toHaveBeenCalled();
  });
});
