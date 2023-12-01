import { Tabs } from '@chakra-ui/react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ResultsTab } from '@common/Results';

describe('ResultsTab test', () => {
  it('Title must be shown', () => {
    render(
      <Tabs>
        <ResultsTab title="test" />
      </Tabs>
    );
    expect(screen.getByText(/test/i)).toBeDefined();
  });
});
