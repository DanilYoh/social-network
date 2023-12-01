import { TabPanels, Tabs } from '@chakra-ui/react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { SearchTabPanel } from '@common/SearchTabs';

describe('SearchTabPanel test', () => {
  it('Children must be shown', () => {
    render(
      <Tabs>
        <TabPanels>
          <SearchTabPanel>test</SearchTabPanel>
        </TabPanels>
      </Tabs>
    );
    expect(screen.getByText(/test/i)).toBeDefined();
  });
});
