import { screen } from '@testing-library/react';
import { describe, vi, it, expect } from 'vitest';

import { renderWithProviders } from '@/utils/test.utils';

import ModalWindowDestination from './ModalWindowDestination';

describe('render form components', () => {
  const Component = ({ children }: React.PropsWithChildren) => (
    <div>Component{children}</div>
  );
  const mockOnSubmit = vi.fn();
  const text = 'buttonText';
  const error = null;
  const load = false;

  vi.mock('@chakra-ui/react', async () => {
    const data: object = await vi.importActual('@chakra-ui/react');

    return {
      ...data,

      Modal: ({ children }: React.PropsWithChildren) => (
        <div data-testid="modal">Modal Component{children}</div>
      ),
      ModalOverlay: ({ children }: React.PropsWithChildren) => (
        <div>Modal Overlay Component{children}</div>
      ),
      ModalContent: ({ children }: React.PropsWithChildren) => (
        <div>Modal Content Component{children}</div>
      ),
      ModalHeader: ({ children }: React.PropsWithChildren) => (
        <div>Modal Header Component{children}</div>
      ),
      ModalCloseButton: ({ children }: React.PropsWithChildren) => (
        <div>Modal Close Button Component{children}</div>
      ),
      ModalBody: ({ children }: React.PropsWithChildren) => (
        <div>Modal Body Component{children}</div>
      ),
    };
  });

  it('check ModalWindow', () => {
    renderWithProviders(
      <ModalWindowDestination
        component={Component}
        onSubmit={mockOnSubmit}
        buttonText={text}
        error={error}
        loading={load}
      />
    );
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });
});
