import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithProviders } from '@/utils/test.utils';

import AppButton from './AppButton';

describe('Test button', () => {
  it('check button, button text and onClick event', async () => {
    const user = userEvent.setup();
    renderWithProviders(
      <AppButton
        text="test"
        type="button"
        aria-label="test"
        bgColor="#FFF"
        w="6.25rem"
      >
        test
      </AppButton>
    );

    expect(screen.getByRole('button')).toBeEnabled();
    expect(screen.getByText('test')).toBeInTheDocument();
    await user.click(screen.getByRole('button'));
  });
});
