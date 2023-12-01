import { screen } from '@testing-library/react';
import { vi, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

import { renderWithProviders } from '@/utils/test.utils';
import { AdminWrapper } from '@hoc/admin-hoc/admin-hoc';

vi.mock('@components/MenuAdminHeader', () => ({
  MenuAdminHeader: vi.fn(() => (
    <div data-testid="AdminHeader">AdminHeader</div>
  )),
}));

vi.mock('@components/Footer', () => ({
  Footer: vi.fn(() => <div data-testid="AdminFooter">Footer</div>),
}));

const data = <div data-testid="ChildrenComponent">Children</div>;

it('render children', () => {
  renderWithProviders(
    <BrowserRouter>
      <AdminWrapper>{data}</AdminWrapper>
    </BrowserRouter>
  );
  expect(screen.getByTestId('AdminHeader')).toBeInTheDocument();
  expect(screen.getByTestId('ChildrenComponent')).toBeInTheDocument();
  expect(screen.getByTestId('AdminFooter')).toBeInTheDocument();
});
