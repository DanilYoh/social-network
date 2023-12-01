import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { renderWithProviders } from '@/utils/test.utils';

import CreateFlightForm from './CreateFlightForm';

vi.mock('@common/FormInputModal', () => ({
  FormInputModal: ({ children }: React.PropsWithChildren) => (
    <div>FormInputModal Component{children}</div>
  ),
}));
vi.mock('@common/FormSelectModal', () => ({
  FormSelectModal: ({ children }: React.PropsWithChildren) => (
    <div>FormSelectModal Component{children}</div>
  ),
}));

vi.mock('@chakra-ui/react', async () => {
  const data: object = await vi.importActual('@chakra-ui/react');

  return {
    ...data,

    Container: ({ children }: React.PropsWithChildren) => (
      <div>Container Component{children}</div>
    ),
    FormControl: ({ children }: React.PropsWithChildren) => (
      <div>FormControl{children}</div>
    ),
    FormLabel: () => (
      // eslint-disable-next-line jsx-a11y/label-has-associated-control
      <label htmlFor="label">FormLabel</label>
    ),
    VStack: ({ children }: React.PropsWithChildren) => (
      <div>VStack Component{children}</div>
    ),
    Button: () => <button type="submit">Button Component</button>,
  };
});

describe('CreateFlightForm', () => {
  const mockOnSubmit = vi.fn();
  const error = null;
  const load = false;
  const mockOnClose = vi.fn();
  it('CreateFlightForm componet', () => {
    renderWithProviders(
      <CreateFlightForm
        onSubmit={mockOnSubmit}
        error={error}
        loading={load}
        onClose={mockOnClose}
      />
    );
    expect(screen.getAllByText('FormInputModal Component')).toHaveLength(2);
    expect(screen.getAllByText('FormSelectModal Component')).toHaveLength(4);
    expect(screen.getByText('Container Component')).toBeDefined();
    expect(screen.getByText('VStack Component')).toBeDefined();
    const button = screen.getByText('Button Component');
    fireEvent.click(button);
  });
});
