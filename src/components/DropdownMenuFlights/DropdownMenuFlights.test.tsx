import { screen, render, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';

import DropdownMenuFlights from './DropdownMenuFlights';

const mockOnDeleteClick = vi.fn();
const mockOnEditClick = vi.fn();

describe('dropdown', () => {
  test('Dropdown button rendered', () => {
    render(
      <DropdownMenuFlights
        onDeleteClick={mockOnDeleteClick}
        onEditClick={mockOnEditClick}
        id={0}
      />
    );
    expect(screen.getByTestId(/menu-button/i)).toBeDefined();
  });

  test('Dropdown menu opening', () => {
    render(
      <DropdownMenuFlights
        onDeleteClick={mockOnDeleteClick}
        onEditClick={mockOnEditClick}
        id={0}
      />
    );
    const button = screen.getByTestId('menu-button');
    fireEvent.click(button);
    expect(screen.getByTestId('delete-btn')).toBeInTheDocument();
    expect(screen.getByTestId('edit-btn')).toBeInTheDocument();
  });

  test('Dropdown menu closing', () => {
    render(
      <DropdownMenuFlights
        onDeleteClick={mockOnDeleteClick}
        onEditClick={mockOnEditClick}
        id={0}
      />
    );
    const button = screen.getByTestId('menu-button');
    fireEvent.click(button);
    fireEvent.click(button);
    expect(screen.queryByTestId('delete-btn')).toBeNull();
    expect(screen.queryByTestId('edit-btn')).toBeNull();
  });

  test('Delete function', () => {
    render(
      <DropdownMenuFlights
        onDeleteClick={mockOnDeleteClick}
        onEditClick={mockOnEditClick}
        id={0}
      />
    );
    fireEvent.click(screen.getByTestId('menu-button'));
    fireEvent.click(screen.getByTestId('delete-btn'));
    expect(mockOnDeleteClick).toHaveBeenCalled();
    expect(screen.queryByTestId('delete-btn')).toBeNull();
  });

  test('Edit function', () => {
    render(
      <DropdownMenuFlights
        onDeleteClick={mockOnDeleteClick}
        onEditClick={mockOnEditClick}
        id={0}
      />
    );
    fireEvent.click(screen.getByTestId('menu-button'));
    fireEvent.click(screen.getByTestId('edit-btn'));
    expect(mockOnEditClick).toHaveBeenCalled();
    expect(screen.queryByTestId('edit-btn')).toBeNull();
  });
});
