import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { renderWithProviders } from '@/utils/test.utils';
import { NewSignInPage } from '@pages/new-sign-in';

describe('NewSignInPage', () => {
  test('renders sign up page', () => {
    renderWithProviders(
      <BrowserRouter>
        <NewSignInPage />
      </BrowserRouter>
    );
    const signUpPage = screen.getByTestId('new-sign-up-page');
    expect(signUpPage).toBeInTheDocument();
  });

  test('renders ClientSignInForm component', () => {
    renderWithProviders(
      <BrowserRouter>
        <NewSignInPage />
      </BrowserRouter>
    );
    const signInForm = screen.getByTestId('client-sign-in-form');
    expect(signInForm).toBeInTheDocument();
  });
});
