import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { renderWithProviders } from '@/utils/test.utils';
import { ClientFooter } from '@components/ClientFooter';

describe('ClientFooter', () => {
  test('renders footer links', () => {
    renderWithProviders(
      <BrowserRouter>
        <ClientFooter />
      </BrowserRouter>
    );
    expect(screen.getByRole('link', { name: 'О нас' })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Политика конфиденциальности' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Связаться с нами' })
    ).toBeInTheDocument();
  });
});
