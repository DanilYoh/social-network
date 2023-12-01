import { screen } from '@testing-library/react';
import { vi } from 'vitest';
import React from 'react';

import { renderWithProviders } from '@/utils/test.utils';

import CreateTimeZonesForm from './CreateTimeZonesForm';

vi.mock('@common/FormInputModal', () => ({
  FormInputModal: ({ children }: React.PropsWithChildren) => (
    <div>FormInputModal Component{children}</div>
  ),
}));

vi.mock('@chakra-ui/react', async () => {
  const data: object = await vi.importActual('@chakra-ui/react');

  return {
    ...data,
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
  };
});

describe('TimeZonesForm', () => {
  const error = null;
  const load = false;
  const mockOnSubmit = vi.fn();
  const mockOnClose = vi.fn();
  it('renders form components', () => {
    renderWithProviders(
      <CreateTimeZonesForm
        onSubmit={mockOnSubmit}
        error={error}
        loading={load}
        onClose={mockOnClose}
      />
    );
    expect(screen.getAllByText('FormInputModal Component')).toHaveLength(4);
    expect(screen.getByText('Container Component')).toBeDefined();
    expect(screen.getByText('VStack Component')).toBeDefined();
    screen.getByText('Button Component');
  });
});
