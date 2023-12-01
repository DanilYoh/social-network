import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

import DropdownMenu from './DropdownMenu';

const mockOnDeleteClick = vi.fn();
const mockOnEditClick = vi.fn();

describe('dropdown', () => {
  test('Dropdown button rendered', () => {
    render(
      <BrowserRouter>
        <DropdownMenu
          onDeleteClick={mockOnDeleteClick}
          onEditClick={mockOnEditClick}
        />
      </BrowserRouter>
    );
    expect(screen.getByTestId('menu-button')).toBeDefined();
  });

  test('Dropdown menu opening', async () => {
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <DropdownMenu
          onDeleteClick={mockOnDeleteClick}
          onEditClick={mockOnEditClick}
        />
      </BrowserRouter>
    );
    const button = screen.getByTestId('menu-button');
    await user.click(button);
    await waitFor(() => {
      expect(screen.getByTestId('delete-btn')).toBeVisible();
      expect(screen.getByTestId('edit-btn')).toBeVisible();
    });
  });

  test('Dropdown menu closing', async () => {
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <DropdownMenu
          onDeleteClick={mockOnDeleteClick}
          onEditClick={mockOnEditClick}
        />
      </BrowserRouter>
    );
    const button = screen.getByTestId('menu-button');
    await user.click(button);
    await user.click(button);
    await waitFor(() => {
      expect(screen.getByTestId('delete-btn')).not.toBeVisible();
      expect(screen.getByTestId('edit-btn')).not.toBeVisible();
    });
  });

  test('Delete function calling', async () => {
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <DropdownMenu
          onDeleteClick={mockOnDeleteClick}
          onEditClick={mockOnEditClick}
        />
      </BrowserRouter>
    );
    await user.click(screen.getByTestId('menu-button'));
    await user.click(screen.getByTestId('delete-btn'));
    await waitFor(() => {
      expect(mockOnDeleteClick).toHaveBeenCalled();
      expect(screen.getByTestId('delete-btn')).not.toBeVisible();
    });
  });

  test('Edit function calling', async () => {
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <DropdownMenu
          onDeleteClick={mockOnDeleteClick}
          onEditClick={mockOnEditClick}
        />
      </BrowserRouter>
    );
    await user.click(screen.getByTestId('menu-button'));
    await user.click(screen.getByTestId('edit-btn'));
    await waitFor(() => {
      expect(mockOnEditClick).toHaveBeenCalled();
      expect(screen.getByTestId('edit-btn')).not.toBeVisible();
    });
  });
});
