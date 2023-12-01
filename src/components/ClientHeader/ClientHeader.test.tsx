import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { renderWithProviders } from '@/utils/test.utils';
import { ClientHeader } from '@components/ClientHeader';

describe('ClientHeader', () => {
  test('renders correctly', () => {
    renderWithProviders(
      <BrowserRouter>
        <ClientHeader />
      </BrowserRouter>
    );
    expect(
      screen.getByRole('button', { name: 'Регистрация' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'На главную' })
    ).toBeInTheDocument();
  });
});
