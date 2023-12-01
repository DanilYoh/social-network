import { TabPanels, Tabs } from '@chakra-ui/react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ResultsTabPanel } from '@common/Results';

describe('SearchTabPanel test', () => {
  it('Children must be shown', () => {
    render(
      <Tabs>
        <TabPanels>
          <ResultsTabPanel>test</ResultsTabPanel>
        </TabPanels>
      </Tabs>
    );
    expect(screen.getByText(/test/i)).toBeDefined();
  });
});
