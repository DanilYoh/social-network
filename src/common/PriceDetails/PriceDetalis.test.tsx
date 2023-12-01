import { screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';

import { renderWithProviders } from '@/utils/test.utils';

import PriceDetalis from './PriceDetails';

describe('PriceDetails test', () => {
  it('should display the ticket price', () => {
    renderWithProviders(<PriceDetalis />);

    const ticketPriceElement = screen.getByText('Ticket Price');
    expect(ticketPriceElement).toBeInTheDocument();
  });
});
