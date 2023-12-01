import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { renderWithProviders } from '@/utils/test.utils';

import Layout from './Layout';

describe('Layout tests', () => {
  it('Check elements', () => {
    renderWithProviders(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );
    expect(screen.getByText('UX AIR', { exact: true })).toBeInTheDocument();
    expect(screen.getByText(/SWITZERLAND - EN - CHF/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign-In/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign-Up/i)).toBeInTheDocument();
    expect(screen.getByTestId('image')).toBeInTheDocument();
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
    expect(screen.getByText(/FEEDBACK/i)).toBeDefined();
    expect(screen.getByText(/About us/i)).toBeInTheDocument();
    expect(screen.getByText(/Terms and Conditions/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact us/i)).toBeInTheDocument();
    expect(screen.getByText(/UX AIR APP/i)).toBeInTheDocument();
  });
});
