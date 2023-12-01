import { screen } from '@testing-library/react';

import { renderWithProviders } from '@/utils/test.utils';

import ChooseTicket from './ChooseTicket';

describe('ChooseTicket test', () => {
  it('Check elements', () => {
    renderWithProviders(<ChooseTicket />);

    expect(screen.getByTestId('choose-ticket')).toBeDefined();
  });
});
