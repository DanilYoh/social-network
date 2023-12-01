import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { AdminFooter } from '@components/AdminFooter';

describe('AdminFooter Test', () => {
  it('should render correctly', () => {
    const { getByText } = render(
      <MemoryRouter>
        <AdminFooter />
      </MemoryRouter>
    );

    expect(getByText('Air Alien')).toBeInTheDocument();
  });

  it('should have a link to home', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <AdminFooter />
      </MemoryRouter>
    );

    expect(getByRole('link')).toHaveAttribute('href', '/home');
  });
});
