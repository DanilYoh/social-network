import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { renderWithProviders } from '@/utils/test.utils';
import { AdditionalServicesTitle } from '@common/AdditionalServices/AdditionalServicesTitle';

describe('Test AdditionalServicesTitle', () => {
  it('Should be in the document', () => {
    renderWithProviders(
      <BrowserRouter>
        <AdditionalServicesTitle label="extra baggage" />
      </BrowserRouter>
    );
    expect(screen.getByText(/extra baggage/i)).toBeDefined();
  });
});
