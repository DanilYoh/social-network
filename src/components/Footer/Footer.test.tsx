import { screen } from '@testing-library/react';

import { renderWithProviders } from '@/utils/test.utils';
import App from '@/App';

import Footer from './Footer';

describe('Footer tests', () => {
  it('Check Footer texts texts', () => {
    renderWithProviders(
      <App>
        <Footer />
      </App>
    );
    expect(screen.getByText(/About us/i)).toBeInTheDocument();
    expect(screen.getByText(/Terms and Conditions/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact us/i)).toBeInTheDocument();
    expect(screen.getByText(/UX AIR APP/i)).toBeInTheDocument();
  });

  it('Check if links are correct', () => {
    renderWithProviders(
      <App>
        <Footer />
      </App>
    );
    expect(screen.getByText(/About us/i)).toHaveAttribute('href', '/about');
    expect(screen.getByText(/Terms and Conditions/i)).toHaveAttribute(
      'href',
      '/terms'
    );
    expect(screen.getByText(/Contact us/i)).toHaveAttribute(
      'href',
      '/contacts'
    );
    expect(screen.getByTestId(/appstore/i)).toHaveAttribute(
      'href',
      'https://www.apple.com/ru/app-store/'
    );
    expect(screen.getByTestId(/gplay/i)).toHaveAttribute(
      'href',
      'https://play.google.com/'
    );
  });
});
