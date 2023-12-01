import { screen, render } from '@testing-library/react';

import Logo from './Logo';

describe('Logo text', () => {
  it('Check Logo texts', () => {
    render(<Logo />);

    expect(screen.getByText(/UX AIR/i)).toBeInTheDocument();
  });
});
