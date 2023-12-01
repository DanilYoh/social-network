import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import { renderWithProviders } from '@/utils/test.utils';

import SignIn from './sign-in.pages';

describe('Sign-In Page test', () => {
  it('shows the children and a close button', async () => {
    const user = userEvent.setup();
    const { getByTestId } = renderWithProviders(
      <BrowserRouter>
        <SignIn />
      </BrowserRouter>
    );
    expect(getByTestId('heading')).toBeTruthy();
    await user.click(getByTestId('close'));
    expect(getByTestId('close')).toBeEnabled();
  });
});
