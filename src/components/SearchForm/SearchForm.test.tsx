import { screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

import { renderWithProviders } from '@/utils/test.utils';
import { SearchForm } from '@components/SearchForm/index';

const mockedCb = vi.fn();
vi.mock('@common/SearchForm', () => ({
  InputDate: () => <div data-testid="inputDate">Input Date</div>,
  SelectDestination: () => (
    <div data-testid="selectDestination">Select Destination</div>
  ),
}));
vi.mock('@common/AppButton', () => ({
  AppButton: () => (
    <button type="button" data-testid="button">
      Button
    </button>
  ),
}));

describe('SearchForm test', () => {
  it('Check elements', () => {
    renderWithProviders(
      <BrowserRouter>
        <SearchForm onSearchSubmit={mockedCb} />
      </BrowserRouter>
    );

    expect(screen.getAllByTestId('inputDate')).toHaveLength(2);
    expect(screen.getAllByTestId('selectDestination')).toHaveLength(2);
    expect(screen.getAllByTestId('button')).toHaveLength(2);
  });
});
