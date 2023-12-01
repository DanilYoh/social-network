import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import { renderWithProviders } from '@/utils/test.utils';

import FeedbackButton from './FeedbackButton';

describe('Feedback button tests', () => {
  it('Check button', async () => {
    const user = userEvent.setup();
    renderWithProviders(
      <BrowserRouter>
        <FeedbackButton />
      </BrowserRouter>
    );

    expect(screen.getByText(/FEEDBACK/i)).toBeEnabled();
    const button = screen.getByText(/FEEDBACK/i);
    await user.click(button);
  });
});
