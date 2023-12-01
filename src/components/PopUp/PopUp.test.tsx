import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import { renderWithProviders } from '@/utils/test.utils';
import { SignInForm } from '@components/SignInForm';

import PopUp from './PopUp';

describe('Test PopUp', () => {
  it('Should be in the document', async () => {
    const user = userEvent.setup();
    renderWithProviders(
      <BrowserRouter>
        <SignInForm>
          <PopUp />
        </SignInForm>
      </BrowserRouter>
    );
    await user.click(screen.getByText(/Forgot Password?/i));
    expect(
      screen.getByText('Enter email address to request link to reset password')
    ).toBeInTheDocument();
  });
});
