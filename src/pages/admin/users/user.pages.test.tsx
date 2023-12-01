import { screen } from '@testing-library/react';

import { renderWithProviders } from '@/utils/test.utils';

import AdminUsers from './user.pages';

describe('Test Admin Users Page', () => {
  it('table', () => {
    renderWithProviders(<AdminUsers />);
    expect(screen.getByTestId('testId')).toBeInTheDocument();
  });
});
