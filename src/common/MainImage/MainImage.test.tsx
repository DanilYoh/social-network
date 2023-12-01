import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { render } from '@/test-utils';
import MainImage from '@common/MainImage/MainImage';

describe('image', () => {
  it('The image must be shown ', () => {
    render(
      <main>
        <MainImage />
      </main>
    );

    expect(screen.getByTestId('image')).toBeDefined();
  });
});
