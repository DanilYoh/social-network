import { render, screen } from '@testing-library/react';
import { describe, vi, it, expect } from 'vitest';

import ModalWindow from './ModalWindow';

describe('render form components', () => {
  const Component = ({ children }: React.PropsWithChildren) => (
    <div>Component{children}</div>
  );
  const mockOnSubmit = vi.fn();
  const text = 'buttonText';
  const error = null;
  const load = false;

  it('check ModalWindow', () => {
    render(
      <ModalWindow
        component={Component}
        onSubmit={mockOnSubmit}
        buttonText={text}
        error={error}
        loading={load}
      />
    );
    expect(screen.getByTestId(/open/i)).toBeInTheDocument();
  });
});
