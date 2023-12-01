import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { NewLogo } from '@common/NewLogo';

describe('NewLogo component', () => {
  it('should render correctly', () => {
    const { getByText } = render(
      <BrowserRouter>
        <NewLogo />
      </BrowserRouter>
    );

    expect(getByText('Air Alien')).toBeInTheDocument();
  });

  it('should have a link to home', () => {
    const { getByRole } = render(
      <BrowserRouter>
        <NewLogo />
      </BrowserRouter>
    );

    expect(getByRole('link')).toHaveAttribute('href', '/');
  });
});
