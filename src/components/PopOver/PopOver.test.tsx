import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import PopOver from './PopOver';

describe('PopUp components', () => {
  it('should open popup by click', () => {
    render(<PopOver />);
    const btn = screen.getByRole('button');
    fireEvent.click(btn);
  });
  it('Should be in the popup', () => {
    render(<PopOver />);
    expect(screen.getByText(/Редактировать/i)).toBeInTheDocument();
    expect(screen.getByText(/Удалить/i)).toBeInTheDocument();
  });
});
