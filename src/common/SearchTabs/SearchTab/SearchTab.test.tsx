import { Tabs } from '@chakra-ui/react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { SearchTab } from '@common/SearchTabs';
import flight from '@images/flight.png';

describe('SearchTab test', () => {
  it('Title must be shown', () => {
    render(
      <Tabs>
        <SearchTab title="test" />
      </Tabs>
    );
    expect(screen.getByText(/test/i)).toBeDefined();
  });

  it('Icon must be shown', () => {
    render(
      <Tabs>
        <SearchTab title="test" icon={flight} />
      </Tabs>
    );
    expect(screen.getByAltText(/test/i)).toBeDefined();
  });
});
