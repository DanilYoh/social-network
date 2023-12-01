import { render, screen } from '@testing-library/react';

import { LettersNumeration } from './LettersNumeration';

describe('LettersNumeration', () => {
  it('renders all letters', () => {
    render(<LettersNumeration />);

    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    letters.forEach((letter) => {
      const letterElement = screen.getByText(letter);
      expect(letterElement).toBeInTheDocument();
    });
  });
});
