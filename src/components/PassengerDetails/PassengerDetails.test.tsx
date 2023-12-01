import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

import { renderWithProviders } from '@/utils/test.utils';
import { PassengerDetails } from '@components/PassengerDetails/index';

describe('PassengerDetails test', () => {
  it('Check elements', () => {
    renderWithProviders(
      <BrowserRouter>
        <PassengerDetails />
      </BrowserRouter>
    );
    expect(screen.getByText('Please enter passenger details')).toBeDefined();
    expect(screen.getByText('passengers')).toBeDefined();
    expect(screen.getByText('contact details')).toBeDefined();
    expect(screen.getByTestId('signInLink')).toHaveAttribute(
      'href',
      '/sign-in'
    );
  });
});
