import { screen, render, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';

import DropdownMenuUsers from './DropdownMenuUsers';

// const mockOnDeleteClick = vi.fn(); // необходимо дописать тест после реализации функционала удаления пассажира
const mockOnEditClick = vi.fn();
const mockOnDeleteClick = vi.fn();

describe('dropdown', () => {
  test('Dropdown button rendered', () => {
    render(
      <DropdownMenuUsers
        onEditClick={mockOnEditClick}
        onDeleteClick={mockOnDeleteClick}
      />
    );
    expect(screen.getByTestId(/menu-button/i)).toBeDefined();
  });

  test('Dropdown menu opening', () => {
    render(
      <DropdownMenuUsers
        onEditClick={mockOnEditClick}
        onDeleteClick={mockOnDeleteClick}
      />
    );
    const button = screen.getByTestId('menu-button');
    fireEvent.click(button);
    expect(screen.getByTestId('delete-btn')).toBeInTheDocument();
    expect(screen.getByTestId('edit-btn')).toBeInTheDocument();
  });

  test('Dropdown menu closing', () => {
    render(
      <DropdownMenuUsers
        onEditClick={mockOnEditClick}
        onDeleteClick={mockOnDeleteClick}
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
      <DropdownMenuUsers
        onEditClick={mockOnEditClick}
        onDeleteClick={mockOnDeleteClick}
      />
    );
    fireEvent.click(screen.getByTestId('menu-button'));
    fireEvent.click(screen.getByTestId('delete-btn'));
    // expect(mockOnDeleteClick).toHaveBeenCalled();
    expect(screen.queryByTestId('delete-btn')).toBeNull();
  });

  test('Edit function', () => {
    render(
      <DropdownMenuUsers
        onEditClick={mockOnEditClick}
        onDeleteClick={mockOnDeleteClick}
      />
    );
    fireEvent.click(screen.getByTestId('menu-button'));
    fireEvent.click(screen.getByTestId('edit-btn'));
    expect(mockOnEditClick).toHaveBeenCalled();
    expect(screen.queryByTestId('edit-btn')).toBeNull();
  });
});
