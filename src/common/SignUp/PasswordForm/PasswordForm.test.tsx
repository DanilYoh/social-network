import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import { PasswordForm } from '@common/SignUp';
import { SignUpForm } from '@components/SignUpForm';
import { renderWithProviders } from '@/utils/test.utils';

describe('Test pasword form', () => {
  beforeEach(() => {
    renderWithProviders(
      <BrowserRouter>
        <SignUpForm Component={PasswordForm} />
      </BrowserRouter>
    );
  });
  it('Check label texts', () => {
    expect(screen.getByText(/Create Password/i)).toBeInTheDocument();
    expect(screen.getByText(/Confirm Password/i)).toBeInTheDocument();
  });

  it('Focus tests', async () => {
    const user = userEvent.setup();
    const password = screen.getByTestId('password');
    const confirmPassword = screen.getByTestId('confirmPassword');
    await user.tab();
    expect(password).toHaveFocus();
    await user.tab();
    expect(confirmPassword).toHaveFocus();
    await user.tab();
  });

  it('Empty values test', async () => {
    const user = userEvent.setup();
    const confirmPassword = screen.getByTestId('confirmPassword');
    await user.click(confirmPassword);
    await user.tab();
    expect(
      await screen.findByText(/please complete field/i)
    ).toBeInTheDocument();
    expect(await screen.findByText('Create Account')).toBeDisabled();
  });

  it('Wrong format test', async () => {
    const user = userEvent.setup();
    const password = screen.getByTestId('password');
    const confirmPassword = screen.getByTestId('confirmPassword');
    await user.type(password, 'wrongpass123');
    expect(await screen.findByText(/1 uppercase letter/i)).toBeInTheDocument();
    expect(await screen.findByText('1 special character')).toBeInTheDocument();
    await user.type(confirmPassword, '123wrongpass');
    await user.tab();
    expect(
      await screen.findByText('passwords need to match')
    ).toBeInTheDocument();
  });

  it('Valid data', async () => {
    const user = userEvent.setup();
    const password = screen.getByTestId('password');
    const confirmPassword = screen.getByTestId('confirmPassword');
    await user.type(password, 'CorrectPassword1$');
    await user.type(confirmPassword, 'CorrectPassword1$');
    await user.tab();
    expect(
      screen.queryByText('please enter letters and spaces only')
    ).toBeFalsy();
    await act(async () => {
      expect(await screen.findByText('Create Account')).toBeEnabled();
    });
  });

  it('Show/hide password toggle', async () => {
    const user = userEvent.setup();
    const hidePassword = screen.getByTestId('hidePW');
    const hideConfirmPassword = screen.getByTestId('hideCPW');
    await user.click(hidePassword);
    await user.click(hideConfirmPassword);
    await user.tab();
    await act(async () => {
      expect(await screen.findByTestId('showPW')).toBeVisible();
      expect(await screen.findByTestId('showCPW')).toBeVisible();
    });
  });

  it('Password inline validate', async () => {
    const user = userEvent.setup();
    const password = screen.getByTestId('password');
    await user.tab();
    await user.type(password, 'Correctpassword123$');
    await user.type(password, 'Correctpassword2123$');
    await user.tab();
    expect(screen.queryByTestId('minLength')).not.toBeInTheDocument();
    expect(screen.queryByTestId('lowerCase')).not.toBeInTheDocument();
  });
});
