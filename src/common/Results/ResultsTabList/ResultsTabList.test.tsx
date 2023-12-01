import { Tabs } from '@chakra-ui/react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ResultsTabList } from '@common/Results';

describe('ResultsTabList test', () => {
  it('Children must be shown', () => {
    render(
      <Tabs>
        <ResultsTabList>Test</ResultsTabList>
      </Tabs>
    );
    expect(screen.getByText(/test/i)).toBeDefined();
  });
});
