import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { renderWithProviders } from '@/utils/test.utils';
import { store } from '@store/index';
import App from '@/App';

import Header from './Header';

describe('Header tests', () => {
  it('Check Header texts', () => {
    renderWithProviders(
      <App>
        <Header />
      </App>
    );
    expect(screen.getByText('UX AIR', { exact: true })).toBeInTheDocument();
    expect(screen.getByText(/SWITZERLAND - EN - CHF/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign-In/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign-Up/i)).toBeInTheDocument();
  });

  it('Check links', () => {
    render(
      <Provider store={store}>
        <App>
          <Header />
        </App>
      </Provider>
    );
    const signIn = screen.getByRole('link', { name: /Sign-In/i });
    const signUp = screen.getByRole('link', { name: /Sign-Up/i });
    expect(signIn).toHaveAttribute('href', '/sign-in');
    expect(signUp).toHaveAttribute('href', '/sign-up');
  });

  it('Check display of user name after login', () => {
    const user = { email: 'example@example.com', isLogin: true };
    localStorage.setItem('user', JSON.stringify(user));

    render(
      <Provider store={store}>
        <App>
          <Header />
        </App>
      </Provider>
    );

    expect(screen.getByText(user.email)).toBeInTheDocument();
  });
});
