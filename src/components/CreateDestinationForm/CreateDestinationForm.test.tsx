import { fireEvent, screen } from '@testing-library/react';
import { vi } from 'vitest';

import { renderWithProviders } from '@/utils/test.utils';

import CreateDestinationForm from './CreateDestinationForm';

const mockOnClose = vi.fn();
const mockOnSubmit = vi.fn();

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
    Button: () => <button type="submit">Button Component</button>,
  };
});

vi.mock('formik', async () => {
  const data: object = await vi.importActual('formik');

  return {
    ...data,
    Form: ({ children }: React.PropsWithChildren) => (
      <form action="#" data-testid="form" onSubmit={mockOnSubmit}>
        {children}
      </form>
    ),
  };
});

describe('CreateDestinationForm', () => {
  const error = null;
  const load = false;

  it('CreateDestinationForm components', () => {
    renderWithProviders(
      <CreateDestinationForm
        onSubmit={mockOnSubmit}
        error={error}
        loading={load}
        onClose={mockOnClose}
      />
    );
    expect(screen.getAllByText('FormInputModal Component')).toHaveLength(5);
    expect(screen.getByText('Container Component')).toBeDefined();
    expect(screen.getByText('VStack Component')).toBeDefined();
    const form = screen.getByTestId('form');
    fireEvent.submit(form);
    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
  });
});
