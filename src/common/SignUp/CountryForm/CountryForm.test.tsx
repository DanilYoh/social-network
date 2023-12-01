import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import { renderWithProviders } from '@/utils/test.utils';
import { CountryForm } from '@common/SignUp';
import { SignUpForm } from '@components/SignUpForm';

describe('Test country', () => {
  beforeEach(() => {
    renderWithProviders(
      <BrowserRouter>
        <SignUpForm Component={CountryForm} />
      </BrowserRouter>
    );
  });
  it('Check label texts', () => {
    expect(screen.getByText(/Country of Residence/i)).toBeInTheDocument();
  });

  it('Focus tests', async () => {
    const user = userEvent.setup();
    const country = screen.getByTestId('country');
    await user.tab();
    expect(country).toHaveFocus();
  });

  it('Empty values test', async () => {
    const user = userEvent.setup();
    await user.tab();
    await user.tab();
    expect(
      await screen.findByText(/please complete field/i)
    ).toBeInTheDocument();
  });

  it('Valid data', async () => {
    const user = userEvent.setup();
    await user.selectOptions(screen.getByTestId('country'), 'Japan');
    await user.tab();
    expect(screen.queryByText(/please/i)).toBeFalsy();
    await act(async () => {
      expect(await screen.findByText('Create Account')).toBeEnabled();
    });
  });
});
