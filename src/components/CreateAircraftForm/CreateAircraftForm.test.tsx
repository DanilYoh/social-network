import { screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';

import { renderWithProviders } from '@/utils/test.utils';

import CreateAircraftForm from './CreateAircraftForm';

describe('AircraftForm', () => {
  const mockOnSubmit = vi.fn();
  const error = null;
  const load = false;
  const mockOnClose = vi.fn();
  it('renders form components', async () => {
    const user = userEvent.setup();

    renderWithProviders(
      <CreateAircraftForm
        onSubmit={mockOnSubmit}
        error={error}
        loading={load}
        onClose={mockOnClose}
      />
    );
    expect(screen.getAllByTestId('input')).toHaveLength(4);
    const button = screen.getByTestId('submit-form');

    await user.type(screen.getAllByTestId('input')[0], 'abcde');
    await user.type(screen.getAllByTestId('input')[1], '258890');
    await user.type(screen.getAllByTestId('input')[2], '2018');
    await user.type(screen.getAllByTestId('input')[3], '30 000');
    await user.click(button);
    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    });
  });
});
