import { render, screen } from '@testing-library/react';

import ModalAdd from './ModalAdd';

describe('render form components', () => {
  it('check testId', () => {
    render(<ModalAdd text="" modalName="" modalHeader="" />);
    expect(screen.getByTestId(/add/i)).toBeInTheDocument();
  });
});
