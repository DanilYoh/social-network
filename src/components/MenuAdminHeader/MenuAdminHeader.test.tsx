import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { renderWithProviders } from '@/utils/test.utils';
import { MenuAdminHeader } from '@components/MenuAdminHeader';

describe('MenuAdminHeader', () => {
  it('renders correctly', () => {
    renderWithProviders(
      <BrowserRouter>
        <MenuAdminHeader />
      </BrowserRouter>
    );

    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Air Alien' })).toBeInTheDocument();
  });
});
