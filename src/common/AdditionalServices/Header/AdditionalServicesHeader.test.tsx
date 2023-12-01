import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from '@store/index';
import App from '@/App';
import { AdditionalServicesHeader } from '@common/AdditionalServices/Header/AdditionalServicesHeader';

describe('Header tests', () => {
  it('Check Header texts', async () => {
    render(
      <Provider store={store}>
        <App>
          <AdditionalServicesHeader />
        </App>
      </Provider>
    );
    await waitFor(() => {
      expect(screen.getByText('UX AIR', { exact: true })).toBeInTheDocument();
      expect(screen.getByText(/SWITZERLAND - EN - CHF/i)).toBeInTheDocument();
      expect(screen.getByText(/Sign-In/i)).toBeInTheDocument();
      expect(screen.getByText(/Sign-Up/i)).toBeInTheDocument();
    });
  });

  it('Check links', () => {
    render(
      <Provider store={store}>
        <App>
          <AdditionalServicesHeader />
        </App>
      </Provider>
    );
    const signIn = screen.getByRole('link', { name: /Sign-In/i });
    const signUp = screen.getByRole('link', { name: /Sign-Up/i });
    expect(signIn).toHaveAttribute('href', '/sign-in');
    expect(signUp).toHaveAttribute('href', '/sign-up');
  });
});
