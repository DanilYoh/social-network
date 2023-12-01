import { screen } from '@testing-library/react';

import { renderWithProviders } from '@/utils/test.utils';
import theme from '@/globalStyles';
import userReducer from '@/store/user.slice';
import { NewSignUpPage } from '@pages/new-sign-up';

describe('SignUp page', () => {
  it('renders client sign up form', () => {
    renderWithProviders(<NewSignUpPage />);

    const form = screen.getByTestId('client-sign-up-form');
    expect(form).toBeInTheDocument();
  });

  it('renders correctly with ChakraProvider', () => {
    renderWithProviders(<NewSignUpPage />);

    const page = screen.getByTestId('new-sign-up-page');
    expect(page).toBeInTheDocument();
  });

  it('renders with correct background color', () => {
    renderWithProviders(<NewSignUpPage />);

    const page = screen.getByTestId('new-sign-up-page');
    expect(page).toHaveStyle('background-color: #EFEFEF');
  });
});
