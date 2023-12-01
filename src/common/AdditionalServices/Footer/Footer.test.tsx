import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from '@store/index';
import App from '@/App';

import { AdditionalServicesFooter } from './AdditionalServicesFooter';

describe('Footer tests', () => {
  it('Check Footer texts texts', () => {
    render(
      <Provider store={store}>
        <App>
          <AdditionalServicesFooter />
        </App>
      </Provider>
    );
    expect(screen.getByText(/About us/i)).toBeInTheDocument();
    expect(screen.getByText(/Terms and Conditions/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact us/i)).toBeInTheDocument();
    expect(screen.getByText(/UX AIR APP/i)).toBeInTheDocument();
  });

  it('Check if links are correct', () => {
    render(
      <Provider store={store}>
        <App>
          <AdditionalServicesFooter />
        </App>
      </Provider>
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
