import { screen } from '@testing-library/react';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

import { renderWithProviders } from '@/utils/test.utils';
import { LoginForm } from '@components/LoginForm/index';

vi.mock('AppButton', () => ({
  SubmitButton: () => <button type="submit">Sign In</button>,
}));

describe('Test login form', () => {
  it('Check label texts', () => {
    renderWithProviders(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );
    expect(
      screen.getByText(/E-mail address/i, { selector: 'label' })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Password/i, { selector: 'label' })
    ).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('Check button and checkbox', async () => {
    const user = userEvent.setup();
    const { getByText, getByRole } = renderWithProviders(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );
    const checkbox = getByRole('checkbox');
    expect(getByText(/Sign In/)).toBeEnabled();
    await user.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it('Empty values test', async () => {
    const user = userEvent.setup();
    const { getByText } = renderWithProviders(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );
    await user.click(getByText(/Sign In/));
    act(() => {
      expect(getByText(/Sign In/)).toBeEnabled();
    });
    expect(await screen.findAllByText(/please complete field/i)).toHaveLength(
      2
    );
  });

  it('Correct data test', async () => {
    const user = userEvent.setup();
    renderWithProviders(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );
    const email = screen.getByTestId('email');
    const password = screen.getByTestId('password');
    await user.type(email, 'admin@mail.ru');
    await user.type(password, 'admin');
    await user.tab();
    act(() => {
      expect(screen.getByText(/Sign In/)).toBeEnabled();
    });
  });

  it('Wrong email test', async () => {
    const user = userEvent.setup();
    renderWithProviders(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );
    const email = screen.getByTestId('email');
    await user.type(email, 'email');
    expect(
      await screen.findByText(/your email address has to contain: @/i)
    ).toBeInTheDocument();
  });
});
