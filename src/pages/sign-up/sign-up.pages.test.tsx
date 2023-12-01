import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { renderWithProviders } from '@/utils/test.utils';

import SignUp from './sign-up.pages';

describe('Sign-Up Page test', () => {
  // Простой тест на рендер, т.к.
  // уже все протестировано в компонентах.
  it('Simple appearance test', () => {
    const { getByText, getByTestId } = renderWithProviders(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );
    expect(screen.getByText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Date of Birth/i)).toBeInTheDocument();
    expect(screen.getByText(/Country of Residence/)).toBeInTheDocument();
    expect(screen.getByText(/E-mail address/i)).toBeInTheDocument();
    expect(screen.getByText(/Mobile Number/i)).toBeInTheDocument();
    expect(screen.getByText(/Create password/i)).toBeInTheDocument();
    expect(screen.getByText(/Confirm password/i)).toBeInTheDocument();
    expect(screen.getByText('Security Question')).toBeInTheDocument();
    expect(screen.getByText(/Answer Security/i)).toBeInTheDocument();
    expect(getByText(/Enjoy your Benefits/i)).toBeInTheDocument();
    expect(getByText(/Create Your Account/i)).toBeInTheDocument();
    expect(getByText(/Redeem Your miles/i)).toBeInTheDocument();
    expect(getByText(/For more details/i)).toBeInTheDocument();
    expect(getByTestId('create')).toBeEnabled();
  });
});
