import { BrowserRouter } from 'react-router-dom';

import { renderWithProviders } from '@/utils/test.utils';
import { AdditionalServices } from '@pages/additional-services';

describe('Test PopUp', () => {
  it('Should be in the document', () => {
    renderWithProviders(
      <BrowserRouter>
        <AdditionalServices />
      </BrowserRouter>
    );
  });
});
