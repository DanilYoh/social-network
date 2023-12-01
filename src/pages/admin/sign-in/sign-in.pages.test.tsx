import { screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

import { renderWithProviders } from '@/utils/test.utils';

import AdminSignIn from './sign-in.pages';

describe('Sign-in test', () => {
  it('should be a flex', () => {
    renderWithProviders(
      <BrowserRouter>
        <AdminSignIn />
      </BrowserRouter>
    );

    const Component = screen.getByText('Sign in as admin');
    expect(Component).toBeInTheDocument();
  });
});
