import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { renderWithProviders } from '@/utils/test.utils';

import Membership from './Membership';

describe('Membership tests', () => {
  it('Check  texts', () => {
    renderWithProviders(
      <BrowserRouter>
        <Membership />
      </BrowserRouter>
    );
    expect(screen.getByText(/Enjoy your Benefits/i)).toBeInTheDocument();
    expect(screen.getByText(/Create Your Account/i)).toBeInTheDocument();
    expect(screen.getByText(/Redeem Your miles/i)).toBeInTheDocument();
    expect(screen.getByText(/For more details/i)).toBeInTheDocument();
  });

  it('Check links', () => {
    renderWithProviders(
      <BrowserRouter>
        <Membership />
      </BrowserRouter>
    );
    const guide = screen.getByText(/Membership guide/i);
    expect(guide).toHaveAttribute('href', '/benefits');
    expect(screen.getByTestId('fb')).toHaveAttribute(
      'href',
      'https://www.facebook.com/'
    );
    expect(screen.getByTestId('twt')).toHaveAttribute(
      'href',
      'https://twitter.com/'
    );
    expect(screen.getByTestId('lin')).toHaveAttribute(
      'href',
      'https://ru.linkedin.com/'
    );
    expect(screen.getByTestId('inst')).toHaveAttribute(
      'href',
      'https://www.instagram.com/'
    );
    expect(screen.getByTestId('yt')).toHaveAttribute(
      'href',
      'https://www.youtube.com/'
    );
  });
});
