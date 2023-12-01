import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { renderWithProviders } from '@/utils/test.utils';
import { SearchTabs } from '@components/SearchTabs';

describe('SearchTabs test', () => {
  it('Search flight buttons must be shown', () => {
    renderWithProviders(
      <BrowserRouter>
        <SearchTabs />
      </BrowserRouter>
    );

    expect(
      screen.getByRole('button', {
        name: /reset/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', {
        name: /search flights/i,
      })
    ).toBeInTheDocument();
  });
});
