import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

import { renderWithProviders } from '@/utils/test.utils';
import { ExtraBaggage } from '@pages/extra-baggage/index';

describe('ExtraBaggage test', () => {
  it('Check elements', () => {
    renderWithProviders(
      <BrowserRouter>
        <ExtraBaggage />
      </BrowserRouter>
    );
    expect(screen.findByLabelText('extra baggage')).toBeDefined();
    expect(screen.getByText('Departing Flight')).toBeDefined();
    expect(screen.getByText('Return Flight')).toBeDefined();
  });
});
