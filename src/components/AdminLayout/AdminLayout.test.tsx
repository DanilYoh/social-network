import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { renderWithProviders } from '@/utils/test.utils';

import AdminLayout from './AdminLayout';

describe('AdminLayout tests', () => {
  it('Check elements', () => {
    renderWithProviders(
      <BrowserRouter>
        <AdminLayout />
      </BrowserRouter>
    );
    const subTitle = screen.getAllByText(/Air Alien/i);
    expect(subTitle[0]).toBeInTheDocument();
    expect(screen.getByTestId('admin-layout')).toBeInTheDocument();
  });
});
