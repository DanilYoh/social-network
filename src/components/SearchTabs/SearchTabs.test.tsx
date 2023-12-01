import { describe, expect, it, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

import { renderWithProviders } from '@/utils/test.utils';
import { SearchTabs } from '@components/SearchTabs';

vi.mock('@common/SearchTabs', () => ({
  SearchTabPanel: () => <div data-testid="tabPanel">Search Tab Panel</div>,
  SearchTab: () => (
    <button type="button" data-testid="tab">
      Search Tab
    </button>
  ),
}));

describe('SearchTabs test', () => {
  it('SearchTab and SearchTabPanel must be shown ', () => {
    const { getAllByText } = renderWithProviders(
      <BrowserRouter>
        <SearchTabs />
      </BrowserRouter>
    );

    expect(getAllByText('Search Tab')).toBeDefined();
    expect(getAllByText('Search Tab Panel')).toBeDefined();
  });
});
