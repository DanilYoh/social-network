import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import React from 'react';

import CreateSeatForm from './CreateSeatForm';

vi.mock('@common/FormInputModal', () => ({
  FormInputModal: ({ children }: React.PropsWithChildren) => (
    <div>FormInputModal Component{children}</div>
  ),
}));

vi.mock('@chakra-ui/react', () => ({
  Container: ({ children }: React.PropsWithChildren) => (
    <div>Container Component{children}</div>
  ),
  VStack: ({ children }: React.PropsWithChildren) => (
    <div>VStack Component{children}</div>
  ),
  Button: () => (
    <button type="submit" data-testid="save-btn">
      Button Component
    </button>
  ),
  FormLabel: ({ children }: React.PropsWithChildren) => (
    <div>FormLabel Component{children}</div>
  ),
  Select: ({ children }: React.PropsWithChildren) => (
    <div>Select Component{children}</div>
  ),
}));

describe('SeatForm', () => {
  const error = null;
  const load = false;
  const mockOnSubmit = vi.fn();
  const mockOnClose = vi.fn();
  it('renders form components', () => {
    render(
      <CreateSeatForm
        onSubmit={mockOnSubmit}
        error={error}
        loading={load}
        onClose={mockOnClose}
      />
    );
    expect(screen.getAllByText('FormInputModal Component')).toHaveLength(1);
    expect(screen.getAllByText('Select Component')).toHaveLength(3);
    expect(screen.getByText('Container Component')).toBeDefined();
    expect(screen.getByText('VStack Component')).toBeDefined();
    screen.getByText('Button Component');
  });
});
