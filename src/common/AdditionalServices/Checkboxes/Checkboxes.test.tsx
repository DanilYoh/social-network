import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { renderWithProviders } from '@/utils/test.utils';
import { Checkboxes } from '@common/AdditionalServices/Checkboxes/Checkboxes';

describe('Checkboxes tests', () => {
  it('Check Checkboxes', () => {
    renderWithProviders(
      <BrowserRouter>
        <Checkboxes />
      </BrowserRouter>
    );

    const checkbox = screen.getAllByRole('checkbox');
    expect(checkbox[0]).not.toBeChecked();
  });
});
