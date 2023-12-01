import { screen } from '@testing-library/react';

import { renderWithProviders } from '@/utils/test.utils';
import App from '@/App';

import AdminLayout from './AdminLayout';

describe('AdminLayout tests', () => {
  it('Check elements', () => {
    renderWithProviders(
      <App>
        <AdminLayout />
      </App>
    );
    expect(screen.getByText('UX AIR', { exact: true })).toBeInTheDocument();
    expect(screen.getByTestId('image')).toBeInTheDocument();
  });
});
